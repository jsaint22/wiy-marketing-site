import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import {
  emitIntakeWebhook,
  type IntakeFormData,
  type IntakeWebhookEnvelope,
} from "@/lib/intake-webhook";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Privacy Policy consent version stamped onto the intake webhook emit.
 * Mirrors the "Effective" / "Last updated" date displayed on the published
 * Privacy Policy page (src/app/privacy-policy/page.tsx). Bump in lockstep
 * with any Privacy Policy amendment so the receiver-side audit row records
 * which policy version the prospect consented to.
 *
 * Locked 2026-05-20 per the Privacy Policy §14 amendment + booking-gate
 * supersession (wiy-os op-debt AI-CONSENT-BOOKING-GATE-ENFORCEMENT-1).
 * Kept in sync with src/app/api/lead-magnet/route.ts.
 */
const PRIVACY_POLICY_CONSENT_VERSION = "2026-05-20";

const FORM_VERSION = "vercel-intake-v1-2026-06-04";

// Per-IP rate limit for intake abuse defense. Backed by Upstash KV (shared
// with the lead-magnet limiter + ops-portal + client-portal). Pattern
// mirrors src/app/api/lead-magnet/route.ts. If KV env vars are missing
// (local dev without KV provisioned), the limiter is a no-op and the
// honeypot + email regex are the only defenses. 5 submissions per IP per
// 15 minutes is well above any legitimate use pattern — the intake form
// is even less likely than the lead magnet to be re-submitted by a real
// human (you fill it once).
const ratelimit =
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? new Ratelimit({
        redis: new Redis({
          url: process.env.KV_REST_API_URL,
          token: process.env.KV_REST_API_TOKEN,
        }),
        limiter: Ratelimit.slidingWindow(5, "15 m"),
        analytics: false,
        prefix: "intake",
      })
    : null;

// RFC 5322 conformant-enough regex. Mirrors lead-magnet/route.ts —
// catches `"@"`, leading/trailing dots, missing TLD. Length cap at 254
// per RFC 5321 §4.5.3.1.3.
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

interface IncomingBody {
  brand: "wiy" | "tspw";
  first_name: string;
  last_name?: string;
  email: string;
  phone?: string;
  sms_consent: boolean;

  // Honeypot field — legitimate form leaves it blank. Bots fill every field.
  // If non-empty, route returns 200 OK silently without doing any work.
  website?: string;

  est_net_worth_usd?: number;
  est_investable_assets_usd?: number;
  est_annual_income_usd?: number;
  income_stability_flag?: "stable" | "variable" | "unclear";
  prospect_segment?: "re_investor" | "business_owner" | "portfolio_post_exit";

  planning_context?: {
    presenting_issue?: string;
    success_definition?: string;
    current_obstacle?: string;
    story_seed?: string;
    five_year_aspiration?: string;
  };

  is_couple?: boolean;
  partner_name?: string;
  partner_email?: string;
  partner_participation?:
    | "both_attending_all_meetings"
    | "primary_contact_only"
    | "uncertain";

  prior_planning_experience?: string;

  lead_source?: string;
  lead_source_detail?: string;
}

function extractSourceIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    return xff.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest): Promise<Response> {
  // Rate limit by IP before any body parsing. Fail-open on Upstash outage
  // (preferable to blocking real prospects during a KV blip). Mirrors the
  // posture of /api/lead-magnet/route.ts.
  if (ratelimit) {
    const ip = extractSourceIp(request);
    try {
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          { status: 429 },
        );
      }
    } catch (e) {
      console.error("[intake] rate-limit check failed:", e);
      // Fall through to honeypot + email regex.
    }
  }

  let body: IncomingBody;
  try {
    body = (await request.json()) as IncomingBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: legitimate form has a hidden `website` field that humans
  // never fill. Bots fill every field. If non-empty, return 200 OK without
  // doing any work — don't reveal we caught them. Mirror of the
  // /api/lead-magnet/route.ts pattern.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json(
      { ok: true, message: "Intake received." },
      { status: 200 },
    );
  }

  // Minimum-required fields. Server-side validation; client form mirrors
  // this. The ops-portal receiver runs a full Zod validation; this is a
  // pre-filter so malformed bodies never traverse the network.
  // Strict RFC-5322-conformant-enough regex + length cap 254 per RFC 5321.
  const normalizedEmail =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (
    !normalizedEmail ||
    !EMAIL_REGEX.test(normalizedEmail) ||
    normalizedEmail.length > 254
  ) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 },
    );
  }
  body.email = normalizedEmail;
  if (!body.first_name || body.first_name.trim().length === 0) {
    return NextResponse.json(
      { error: "First name is required." },
      { status: 400 },
    );
  }
  if (body.brand !== "wiy" && body.brand !== "tspw") {
    return NextResponse.json(
      { error: "Invalid brand." },
      { status: 400 },
    );
  }

  // SERVER-SIDE consent gate. The client form blocks submission without
  // the checkbox, but DOM bypass is trivial; re-verify here.
  // Per LOCK-AI-CONSENT-BOOKING-GATE-v2 + Standing Rule 8.
  if (body.sms_consent !== true) {
    return NextResponse.json(
      {
        error:
          "Privacy Policy and SMS consent acceptance is required to submit.",
      },
      { status: 400 },
    );
  }

  const submittedAt = new Date().toISOString();
  const sourceIp = extractSourceIp(request);
  const sourceUserAgent = request.headers.get("user-agent") ?? "";
  const referer = request.headers.get("referer") ?? null;

  // Compose the canonical ProspectIntakeRaw-shaped payload (mirrors
  // ops-portal/src/inngest/events.ts ProspectIntakeRaw).
  const intake: IntakeFormData = {
    email: body.email.trim().toLowerCase(),
    first_name: body.first_name.trim(),
    last_name: body.last_name?.trim() || undefined,
    phone: body.phone?.trim() || undefined,

    privacy_policy_consent_version: PRIVACY_POLICY_CONSENT_VERSION,
    privacy_policy_consent_timestamp: submittedAt,
    sms_consent: true,

    est_net_worth_usd: body.est_net_worth_usd,
    est_investable_assets_usd: body.est_investable_assets_usd,
    est_annual_income_usd: body.est_annual_income_usd,
    income_stability_flag: body.income_stability_flag,

    planning_context: body.planning_context && {
      presenting_issue: body.planning_context.presenting_issue,
      success_definition: body.planning_context.success_definition,
      current_obstacle: body.planning_context.current_obstacle,
      story_seed: body.planning_context.story_seed,
      five_year_aspiration: body.planning_context.five_year_aspiration,
    },

    is_couple: body.is_couple ?? false,
    partner_name: body.partner_name,
    partner_email: body.partner_email?.toLowerCase(),
    partner_participation: body.partner_participation,

    prior_planning_experience: body.prior_planning_experience,

    prospect_segment: body.prospect_segment,

    lead_source: body.lead_source ?? "wiy-marketing-site",
    lead_source_detail: body.lead_source_detail,

    raw: {
      form_version: FORM_VERSION,
      submitted_via: "wiy-marketing-site",
      source_ip: sourceIp,
      source_user_agent: sourceUserAgent,
      referer,
    },
  };

  const envelope: IntakeWebhookEnvelope = {
    brand: body.brand,
    intake_source: "vercel_form",
    intake_submitted_at: submittedAt,
    form_version: FORM_VERSION,
    form_data: intake,
  };

  const result = await emitIntakeWebhook(envelope);

  if (!result.ok) {
    // Per spec §P2: do NOT block the user-facing success path on receiver
    // failure. The form already collected consent; degrade gracefully with
    // a console error and a 502 so the front-end can surface a recoverable
    // message. The audit_log signal at the receiver side is the canonical
    // recovery path (Josh checks ops-portal for missing intakes).
    console.error(
      "[Intake API] emit to ops-portal failed; user submitted but downstream pipeline did not fire",
      { status: result.status, error: result.error?.slice(0, 200) },
    );
    return NextResponse.json(
      {
        error:
          "Your intake submitted, but we hit a sync issue with our planning system. We'll reach out by email — or text josh@wealthinyourself.com to confirm.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json(
    { ok: true, message: "Intake received. Ready to book your call." },
    { status: 200 },
  );
}
