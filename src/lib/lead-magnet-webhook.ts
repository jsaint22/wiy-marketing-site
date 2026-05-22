import { signWebhookBody } from "@/lib/hmac";

/**
 * Fire-and-forget HMAC-signed POST to the ops-portal lead-magnet webhook
 * receiver. Powers Spec 1 (lead-magnet Inngest nurture) — the receiver
 * dedupes on `external_request_id`, writes the `lead_magnet_downloaded`
 * audit row, and enqueues the `wiy/lead_magnet.downloaded` Inngest event.
 *
 * Sister Agent: ops-portal `/api/webhooks/lead-magnet` receiver. The HMAC
 * contract here MUST match the receiver byte-for-byte:
 *   - Header:  `x-wiy-signature: sha256=<hex>`
 *   - Algo:    HMAC-SHA256 over the raw body string
 *   - Secret:  INTAKE_WEBHOOK_SECRET (reused per Josh 2026-05-20 PM10 —
 *     accepting per-surface secret rotation tradeoff for operational
 *     simplicity; must be byte-identical on both sides)
 *   - Endpoint: LEAD_MAGNET_WEBHOOK_URL (env-driven; e.g.
 *     https://ops.wealthinyourself.com/api/webhooks/lead-magnet in prod)
 *
 * Spec: references/lead-magnet-nurture-inngest-impl-spec-2026-05-19.md §1, §2
 * HMAC discipline: references/intake-webhook-hmac-contract.md (sister contract)
 *
 * Fire-and-forget — failure logs to console but does NOT throw; the
 * user-facing PDF delivery (Resend send) is the load-bearing path and must
 * never be blocked by an outage on the ops-portal receiver side.
 */

export const LEAD_MAGNET_SLUGS = [
  "re-investor-checklist",
  "business-owner-roadmap",
  "w2-escape-plan",
  "five-questions",
] as const;

export type LeadMagnetSlug = (typeof LEAD_MAGNET_SLUGS)[number];

export interface LeadMagnetWebhookPayload {
  email: string;
  first_name?: string;
  last_name?: string;
  magnet_slug: LeadMagnetSlug;
  download_source: "wiy-marketing-site";
  privacy_policy_consent_version: string;
  privacy_policy_consent_timestamp: string;
  source_ip: string;
  source_user_agent: string;
  external_request_id: string;
}

export interface EmitResult {
  ok: boolean;
  status?: number;
  error?: string;
}

/**
 * Emit the HMAC-signed POST to ops-portal. Returns a result rather than
 * throwing so the caller (the lead-magnet route handler) can log failures
 * without disrupting the user-facing PDF delivery path.
 */
export async function emitLeadMagnetWebhook(
  payload: LeadMagnetWebhookPayload
): Promise<EmitResult> {
  const url = process.env.LEAD_MAGNET_WEBHOOK_URL;
  const secret = process.env.INTAKE_WEBHOOK_SECRET;

  if (!url || !secret) {
    console.warn(
      "[LeadMagnetWebhook] LEAD_MAGNET_WEBHOOK_URL or INTAKE_WEBHOOK_SECRET not set — skipping emit (Inngest event will NOT fire)"
    );
    return { ok: false, error: "missing env" };
  }

  // CRITICAL: sign the EXACT byte string sent in the request body. Do not
  // re-serialize between sign + send (would produce a different SHA and
  // break receiver verification — same class as the 2026-05-13 intake-webhook
  // header-name drift incident).
  const body = JSON.stringify(payload);
  const signature = signWebhookBody(body, secret);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-wiy-signature": signature,
      },
      body,
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "<unreadable body>");
      console.error(
        `[LeadMagnetWebhook] receiver returned ${res.status}: ${text.slice(0, 500)} | external_request_id=${payload.external_request_id}`
      );
      return { ok: false, status: res.status, error: text.slice(0, 500) };
    }

    return { ok: true, status: res.status };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error(
      `[LeadMagnetWebhook] POST failed: ${msg} | external_request_id=${payload.external_request_id}`
    );
    return { ok: false, error: msg };
  }
}
