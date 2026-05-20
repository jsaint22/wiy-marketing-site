import { createHmac } from "node:crypto";

/**
 * HMAC-SHA256 signature helper for outbound webhook posts.
 *
 * Canonical contract (sister to `references/intake-webhook-hmac-contract.md`
 * in the wiy-operating-system repo):
 *
 *   - Sign the EXACT byte string sent in the request body (no re-serialization).
 *   - Hex-encode the digest.
 *   - Prefix with `sha256=` for explicit algorithm versioning.
 *   - Receiver strips the prefix, recomputes over the raw body, constant-time
 *     compares.
 *
 * The lead-magnet webhook contract sister to this helper uses:
 *   - Header: `x-wiy-signature`
 *   - Secret env var: `INTAKE_WEBHOOK_SECRET` (reused per Josh 2026-05-20
 *     PM10 — accepting per-surface secret rotation tradeoff for operational
 *     simplicity; previously a dedicated LEAD_MAGNET_WEBHOOK_SECRET)
 *
 * (The intake webhook also uses `INTAKE_WEBHOOK_SECRET`; both surfaces now
 * share the same secret. Header names still differ per receiver to keep the
 * route contracts explicit.)
 */
export function signWebhookBody(rawBody: string, secret: string): string {
  const digest = createHmac("sha256", secret).update(rawBody).digest("hex");
  return `sha256=${digest}`;
}
