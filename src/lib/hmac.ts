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
 *   - Secret env var: `LEAD_MAGNET_WEBHOOK_SECRET`
 *
 * (Intake webhook uses `x-intake-signature` + `INTAKE_WEBHOOK_SECRET` — keep
 * the secrets isolated per Op-debt LM-INNGEST-LEAD-MAGNET-WEBHOOK-SECRET
 * decision: per-surface secret rotation isolation.)
 */
export function signWebhookBody(rawBody: string, secret: string): string {
  const digest = createHmac("sha256", secret).update(rawBody).digest("hex");
  return `sha256=${digest}`;
}
