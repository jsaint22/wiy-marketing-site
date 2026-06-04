import { signWebhookBody } from "@/lib/hmac";

/**
 * Fire-and-forget HMAC-signed POST to the ops-portal intake webhook
 * receiver. Mirrors the lead-magnet emitter; powers the LOCK-A5 step 7
 * "Vercel-hosted prospect intake form" path that supersedes the legacy
 * GHL survey at links.wealthinyourself.com/widget/survey/oeCwZwhjBpEuGzJHkmsL.
 *
 * Sister Agent: ops-portal `/api/webhooks/intake` receiver
 * (src/app/api/webhooks/intake/route.ts). The HMAC contract here MUST
 * match the receiver byte-for-byte:
 *   - Header:  `x-intake-signature: sha256=<hex>`
 *   - Algo:    HMAC-SHA256 over the raw body string
 *   - Secret:  INTAKE_WEBHOOK_SECRET (env-driven; reused per Josh
 *              2026-05-20 PM10 per-surface-rotation tradeoff)
 *   - Endpoint: OPS_PORTAL_INTAKE_WEBHOOK_URL (env-driven; e.g.
 *              https://ops.wealthinyourself.com/api/webhooks/intake)
 *
 * Receiver shape — uses the `form_data` wrapper shape per the receiver's
 * normalizePayload contract: { brand, intake_source, intake_submitted_at,
 * form_version, form_data: {...full ProspectIntakeRaw without brand...} }.
 *
 * Spec: wiy-operating-system/references/migration-phase-2-4-5-wireframe-brief-2026-06-04.md §P2
 * HMAC discipline: wiy-operating-system/references/intake-webhook-hmac-contract.md
 *
 * Fire-and-forget — failure logs to console but does NOT throw; the
 * user-facing success page is the load-bearing path and must never be
 * blocked by an outage on the ops-portal receiver side. The user has
 * already submitted; we'll surface ops-portal sync failures via the
 * `intake_webhook_emit_failed` audit row pattern.
 */

export type IntakeBrand = "wiy" | "tspw";

export type IncomeStability = "stable" | "variable" | "unclear";

export type PartnerParticipation =
  | "both_attending_all_meetings"
  | "primary_contact_only"
  | "uncertain";

export type ProspectSegment =
  | "re_investor"
  | "business_owner"
  | "portfolio_post_exit";

/**
 * Mirrors ProspectIntakeRaw in ops-portal/src/inngest/events.ts.
 * Keep in lockstep with that interface — any field added there should land
 * here, and the receiver's Zod schema is the canonical validator.
 */
export interface IntakeFormData {
  email: string;
  first_name: string;
  last_name?: string;
  phone?: string;

  // Consent (LOCK-AI-CONSENT-BOOKING-GATE-v2)
  privacy_policy_consent_version: string;
  privacy_policy_consent_timestamp: string;
  sms_consent: boolean;

  // Financial gestalt (numeric; the receiver parses + validates)
  est_net_worth_usd?: number;
  est_investable_assets_usd?: number;
  est_home_equity_usd?: number;
  est_annual_income_usd?: number;
  est_total_debt_usd?: number;
  income_stability_flag?: IncomeStability;

  // Planning context (LOCK-S4 five-field shape)
  planning_context?: {
    presenting_issue?: string;
    success_definition?: string;
    current_obstacle?: string;
    story_seed?: string;
    five_year_aspiration?: string;
  };

  // Couples (LOCK-S5)
  is_couple?: boolean;
  partner_name?: string;
  partner_email?: string;
  partner_participation?: PartnerParticipation;
  household_decision_structure?: string;

  // Advisor history (LOCK-M1)
  prior_planning_experience?: string;
  prior_planning_outcome?: string;

  // Segment (LOCK-SG3)
  prospect_segment?: ProspectSegment;

  // Source attribution (LOCK-O3)
  lead_source?: string;
  lead_source_detail?: string;

  // Full raw bag — anything else worth preserving verbatim
  raw?: Record<string, unknown>;
}

export interface IntakeWebhookEnvelope {
  brand: IntakeBrand;
  intake_source: "vercel_form";
  intake_submitted_at: string;
  form_version: string;
  form_data: IntakeFormData;
}

export interface EmitResult {
  ok: boolean;
  status?: number;
  error?: string;
}

/**
 * Emit the HMAC-signed intake POST. Returns a result rather than throwing
 * so the API route can log + degrade gracefully (the user-facing thank-you
 * page should still render; ops-portal sync is recoverable from the
 * audit_log signal).
 */
export async function emitIntakeWebhook(
  envelope: IntakeWebhookEnvelope,
): Promise<EmitResult> {
  const url = process.env.OPS_PORTAL_INTAKE_WEBHOOK_URL;
  const secret = process.env.INTAKE_WEBHOOK_SECRET;

  if (!url || !secret) {
    console.warn(
      "[IntakeWebhook] OPS_PORTAL_INTAKE_WEBHOOK_URL or INTAKE_WEBHOOK_SECRET not set — skipping emit (Inngest event will NOT fire)",
    );
    return { ok: false, error: "missing env" };
  }

  // CRITICAL: sign the EXACT byte string sent in the request body. Do not
  // re-serialize between sign + send — would produce a different SHA and
  // break receiver verification (same class as the 2026-05-13 intake-webhook
  // header-name drift incident referenced in hmac.ts).
  const body = JSON.stringify(envelope);
  const signature = signWebhookBody(body, secret);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-intake-signature": signature,
      },
      body,
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error(
        `[IntakeWebhook] receiver returned ${res.status}: ${text.slice(0, 200)}`,
      );
      return { ok: false, status: res.status, error: text };
    }

    return { ok: true, status: res.status };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[IntakeWebhook] emit failed:", msg);
    return { ok: false, error: msg };
  }
}
