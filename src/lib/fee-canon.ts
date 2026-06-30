/**
 * WIY FEE CANON — single source of truth for the published fee math on the
 * marketing site (calculator, pricing page, vs-AUM page, lead-magnet PDFs).
 *
 * SOURCE OF TRUTH: wiy-client-portal/lib/fees.ts
 * That module owns the canonical declining-tier model + `MINIMUM_ANNUAL` and
 * carries an explicit rule: never hardcode 15_000 in a page or component
 * (2026-06-10 portal audit P1 #21). This file mirrors it for the marketing
 * repo so the firm's PUBLISHED fee cannot silently drift from canon. If a tier
 * rate or the minimum changes in the portal, change it HERE too — the guard
 * test (fee-canon.test.ts) fails loudly on drift.
 *
 * CANON (per wiy-client-portal/lib/fees.ts + CLAUDE.md):
 *   1.00% on the first $1M
 *   0.35% on $1M – $3M
 *   0.20% on $3M – $10M
 *   0.10% above $10M
 *   $15,000 / year minimum (applies at every net worth)
 *
 * NOTE: Canon has NO "below $X → $0" floor — the $15k minimum applies to
 * everyone, and the marketing fee function honors that: calculateWiyAnnualFee
 * in src/lib/pdf/fee-math.ts always returns >= the $15k minimum and never $0.
 * (The prior "< $500k → $0" floor was REMOVED 2026-06-30 — Option 3,
 * /compliance-cleared — because $0 contradicts the published "minimum applies
 * at all net worth levels" canon.) DISPLAY_FLOOR_NET_WORTH there is now only a
 * UI threshold for showing a "below our minimum — let's talk" message, not a
 * fee floor.
 */

/**
 * Single source of truth for the annual minimum fee. Import this everywhere a
 * minimum is displayed or compared — never hardcode 15_000 in a page or
 * component. Mirrors MINIMUM_ANNUAL in wiy-client-portal/lib/fees.ts.
 */
export const MINIMUM_ANNUAL = 15_000;

/**
 * Declining tier rates, expressed as bracket WIDTHS ($0–1M, $1M–3M, $3M–10M,
 * >$10M) so the running calc can subtract each bracket as it goes. Equivalent
 * to canon's cumulative thresholds (1M / 3M / 10M / ∞) in wiy-client-portal.
 */
export const FEE_TIERS = [
  { limit: 1_000_000, rate: 0.01 },
  { limit: 2_000_000, rate: 0.0035 },
  { limit: 7_000_000, rate: 0.002 },
  { limit: Infinity, rate: 0.001 },
] as const;

/**
 * Canonical WIY annual fee: the declining-tier formula with the $15k minimum
 * applied. No "below $X → $0" floor — that is a separate marketing display
 * decision applied by callers, not part of canon.
 */
export function tieredAnnualFee(netWorth: number): number {
  let annualFee = 0;
  let remaining = Math.max(0, netWorth);

  for (const tier of FEE_TIERS) {
    if (remaining <= 0) break;
    const taxable = Math.min(remaining, tier.limit);
    annualFee += taxable * tier.rate;
    remaining -= taxable;
  }

  return Math.max(annualFee, MINIMUM_ANNUAL);
}
