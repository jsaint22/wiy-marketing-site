import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";
import { randomUUID } from "node:crypto";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { appendSubscriber } from "@/lib/subscribers";
import {
  emitLeadMagnetWebhook,
  type LeadMagnetSlug,
} from "@/lib/lead-magnet-webhook";

export const dynamic = "force-dynamic";

// Per-IP rate limit for lead-magnet abuse defense. Backed by Upstash KV
// (shared with ops-portal + client-portal). If KV env vars are missing
// (local dev without KV provisioned), the limiter is a no-op and the
// honeypot + email regex are the only defenses. 5 submissions per IP per
// 15 minutes is well above any legitimate use pattern.
const ratelimit =
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? new Ratelimit({
        redis: new Redis({
          url: process.env.KV_REST_API_URL,
          token: process.env.KV_REST_API_TOKEN,
        }),
        limiter: Ratelimit.slidingWindow(5, "15 m"),
        analytics: false,
        prefix: "lead-magnet",
      })
    : null;

function getClientIp(request: NextRequest): string {
  // Vercel sets x-forwarded-for; first value is the client.
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

/**
 * Privacy Policy consent version stamped onto every webhook emit.
 *
 * Mirrors the "Effective" / "Last updated" date displayed on the published
 * Privacy Policy page (src/app/privacy-policy/page.tsx). Bump in lockstep
 * with any Privacy Policy amendment so the receiver-side audit row records
 * which policy version the prospect consented to.
 *
 * Bumped 2026-06-08 for SMS/A2P clause addition (Section 13.2 Text Messaging).
 * Prior lock 2026-05-20 per the Privacy Policy §14 amendment + booking-gate
 * supersession (op-debt AI-CONSENT-BOOKING-GATE-ENFORCEMENT-1).
 */
const PRIVACY_POLICY_CONSENT_VERSION = "2026-06-08";

const LEAD_MAGNETS: Record<
  string,
  {
    subject: string;
    tag: string;
    description: string;
    filename: string;
  }
> = {
  "re-investor-checklist": {
    subject: "Your Real Estate Investor's Tax Strategy Checklist",
    tag: "re-investor-checklist-download",
    description:
      "The Real Estate Investor's Tax Strategy Checklist — 16 questions your advisory team should be answering about 1031 exchanges, cost segregation, entity structure, depreciation recapture, QBI, and more.",
    filename: "RE-Investor-Tax-Strategy-Checklist-WIY.pdf",
  },
  "business-owner-roadmap": {
    subject: "Your Entrepreneur's Wealth Extraction Roadmap",
    tag: "business-owner-roadmap-download",
    description:
      "The Entrepreneur's Wealth Extraction Roadmap — covering valuation, entity structure, QSBS, cash flow modeling, succession planning, and the full advisory team you need before you exit.",
    filename: "Entrepreneurs-Wealth-Extraction-Roadmap-WIY.pdf",
  },
  "w2-escape-plan": {
    subject: "Your W-2 Escape Plan Checklist",
    tag: "w2-escape-plan-download",
    description:
      "The W-2 Escape Plan — a financial readiness checklist covering runway math, health insurance, entity setup, retirement accounts, income replacement, and the timeline to go independent.",
    filename: "W2-Escape-Plan-Financial-Checklist-WIY.pdf",
  },
  "five-questions": {
    subject:
      "The 5 Questions a $3M–$30M Household Should Be Asking Their Advisor",
    tag: "five-questions-download",
    description:
      "Five substantive questions any household at $3M–$30M of net worth should be able to put to any advisor — including us. A single-page diagnostic to use before your next review meeting.",
    filename: "5-Questions-Your-Advisor-Should-Answer-WIY.pdf",
  },
};

// RFC 5322 conformant-enough regex for catching the common abuse patterns
// (`"@"`, leading/trailing dots, missing TLD). Not perfect — the real check
// happens when the email actually receives the magnet link.
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

export async function POST(request: NextRequest) {
  try {
    // Rate limit by IP before any body parsing. Failure-mode: if Upstash
    // itself errors, fall through and let downstream checks run — we'd
    // rather let through some abuse than block real prospects during a
    // KV outage. (Different from the magic-link verify path on the client
    // portal, where the analogous failure must be fail-closed because
    // the protected resource is a financial portal.)
    if (ratelimit) {
      const ip = getClientIp(request);
      try {
        const { success } = await ratelimit.limit(ip);
        if (!success) {
          return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
      } catch (e) {
        console.error("[lead-magnet] rate-limit check failed:", e);
        // Fall through to honeypot + email regex.
      }
    }

    const body = await request.json();
    const { email: rawEmail, firstName, lastName, magnet, website } = body;

    // Honeypot: legitimate form has a hidden `website` field that humans
    // never fill. Bots fill every field. If non-empty, return 200 OK without
    // doing any work — don't reveal that we caught them.
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const email =
      typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";

    if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!firstName || typeof firstName !== "string") {
      return NextResponse.json(
        { error: "First name is required." },
        { status: 400 }
      );
    }

    // Privacy Policy consent: implicit at form submission via the one-line
    // notice under the submit button ("By submitting this form, you agree
    // to our Privacy Policy"). Compliance Officer attestation 2026-05-22
    // confirmed lead-magnet capture is OUT of scope of the 2026-05-20
    // booking-gate LOCK (which is scoped to GHL / Vercel intake / cal.com
    // booking surfaces only). SMS consent remains scoped to booking
    // surfaces; lead-magnet contacts get email-only nurture. The
    // privacy_policy_consent_version + _timestamp fields below stamp the
    // implicit-consent event for Books-and-Records discipline (Rule 204-2)
    // even though no checkbox gate is enforced.

    const config = LEAD_MAGNETS[magnet];
    if (!config) {
      return NextResponse.json(
        { error: "Unknown lead magnet." },
        { status: 400 }
      );
    }

    // Load pre-generated static PDF (verified by test suite, not generated at runtime)
    const pdfPath = join(process.cwd(), "public", "pdfs", config.filename);
    const pdfBuffer = readFileSync(pdfPath);

    // Send email with PDF attached. If RESEND_API_KEY is not provisioned in
    // the current Vercel environment (typical for preview deployments where
    // production-only sensitive vars don't propagate), log + skip the send
    // and return success to the form. The downstream paths (subscriber log,
    // GHL contact creation, Inngest webhook fire) still run so the rest of
    // the flow can be exercised on preview. Production has the key set, so
    // this guard never fires there.
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error(
        "[LeadMagnet] RESEND_API_KEY not set in this environment — skipping email send (PDF not delivered). Form returning success for downstream-path validation. Set RESEND_API_KEY to enable real email delivery."
      );
    } else {
      const resend = new Resend(resendKey);
      const { error: emailError } = await resend.emails.send({
        from: process.env.LEAD_MAGNET_FROM ?? "Josh at WIY <josh@wealthinyourself.com>",
        to: email,
        subject: config.subject,
        text: `Hey ${firstName},

Thanks for requesting ${config.description}

The checklist is attached to this email. Take your time with it — these aren't quick wins, they're the conversations that separate good planning from great planning.

If you want to talk about how any of these apply to your specific situation, here's my calendar: https://cal.com/jsaint/intro-call

Josh
Wealth In Yourself
josh@wealthinyourself.com

---
This is educational content and is not tax, legal, or investment advice. Discuss all items with your qualified advisory team before taking action.`,
        attachments: [
          {
            filename: config.filename,
            content: pdfBuffer,
          },
        ],
      });

      if (emailError) {
        console.error("[LeadMagnet] Resend error:", emailError);
        return NextResponse.json(
          { error: "Failed to send email. Please try again." },
          { status: 500 }
        );
      }
    }

    // Log subscriber
    await appendSubscriber(email, magnet);

    // Create GHL contact with tag (fire-and-forget — don't block response).
    // GHL is WIY's CRM-of-record until the locked Wave 2 GHL exit completes
    // (~early August 2026 per ARCH-4 + STATE.md "GHL Scope Split"). The tag
    // is applied as metadata so Josh can see which lead magnet the prospect
    // downloaded in the GHL contact UI. Any GHL-side workflow triggered by
    // these tags MUST be paused (Josh action 2026-05-22 Option A) — Inngest
    // is the sole email-nurture path. See ops-portal/src/inngest/
    // lead-magnet-nurture-fire.ts for the Day 3/7/14 auto-send sequence.
    createGhlContact(email, firstName, config.tag).catch((err) =>
      console.error("[LeadMagnet] GHL contact creation failed:", err)
    );

    // Fire-and-forget HMAC-signed POST to ops-portal webhook receiver.
    // Powers Spec 1 (lead-magnet Inngest nurture). The receiver dedupes on
    // external_request_id; emitter is fire-and-forget per spec §1 so a
    // receiver outage does NOT block the user's PDF download (which already
    // succeeded above).
    const sourceIp = extractSourceIp(request);
    const sourceUserAgent = request.headers.get("user-agent") ?? "";
    const consentTimestamp = new Date().toISOString();
    const externalRequestId = randomUUID();

    emitLeadMagnetWebhook({
      email,
      first_name: typeof firstName === "string" ? firstName : undefined,
      last_name: typeof lastName === "string" && lastName ? lastName : undefined,
      magnet_slug: magnet as LeadMagnetSlug,
      download_source: "wiy-marketing-site",
      privacy_policy_consent_version: PRIVACY_POLICY_CONSENT_VERSION,
      privacy_policy_consent_timestamp: consentTimestamp,
      source_ip: sourceIp,
      source_user_agent: sourceUserAgent,
      external_request_id: externalRequestId,
    }).catch((err) =>
      // Belt-and-suspenders — emitLeadMagnetWebhook already catches internally,
      // but a defensive .catch ensures any unexpected sync-thrown error never
      // bubbles to block the user's response.
      console.error("[LeadMagnet] ops-portal emit threw unexpectedly:", err)
    );

    return NextResponse.json({
      success: true,
      message: "Sent! Check your inbox.",
    });
  } catch (err) {
    console.error("[LeadMagnet] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

/**
 * Best-effort source IP extraction. Vercel sets `x-forwarded-for`; fall back
 * to `x-real-ip` then "unknown". The receiver records this in the
 * lead_magnet_downloaded audit row for Books-and-Records (ARCH-6).
 */
function extractSourceIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    // x-forwarded-for can be a comma-separated chain; first entry is the client.
    return xff.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Create or update a GHL contact and add a lead magnet tag.
 * Uses the WIY PIT token. Fire-and-forget — failures are logged, not thrown.
 *
 * GHL is WIY's CRM-of-record until Wave 2 GHL exit completes. The tag is
 * applied as metadata only — any GHL-side workflow triggered by these tags
 * must be paused per Josh 2026-05-22 Option A; Inngest is the sole
 * email-nurture path.
 */
async function createGhlContact(
  email: string,
  firstName: string,
  tag: string
) {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.warn("[GHL] GHL_API_TOKEN or GHL_LOCATION_ID not set — skipping contact creation");
    return;
  }

  const res = await fetch(
    "https://services.leadconnectorhq.com/contacts/upsert",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        firstName,
        email,
        locationId,
        tags: [tag],
        source: "Website Lead Magnet",
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error(`[GHL] Contact upsert failed (${res.status}):`, text);
  }
}
