/**
 * GUARD TEST — fails loudly if the marketing site's fee canon drifts from the
 * canonical source of truth: wiy-client-portal/lib/fees.ts (the MINIMUM_ANNUAL
 * constant + the declining tier rates).
 *
 * The literals asserted below are a deliberate, hand-maintained snapshot of
 * canon as of 2026-06-28. We do NOT import the portal module (it's a separate
 * repo, unresolvable in this repo's build) — the whole point is that this copy
 * is checked against fee-canon.ts, so a silent change to the published fee in
 * EITHER place breaks the build. If canon legitimately changes in the portal,
 * update wiy-client-portal/lib/fees.ts, src/lib/fee-canon.ts, AND this snapshot
 * together — that is the intended, deliberate path.
 */

import { describe, test, expect } from "vitest";
import { MINIMUM_ANNUAL, FEE_TIERS, tieredAnnualFee } from "./fee-canon";

// Canon snapshot (mirrors wiy-client-portal/lib/fees.ts as of 2026-06-28).
const CANON_MINIMUM_ANNUAL = 15_000;
const CANON_TIER_RATES = [0.01, 0.0035, 0.002, 0.001]; // 1.00% / 0.35% / 0.20% / 0.10%
const CANON_TIER_LIMITS = [1_000_000, 2_000_000, 7_000_000, Infinity]; // bracket widths

describe("fee canon drift guard (mirrors wiy-client-portal/lib/fees.ts)", () => {
  test("annual minimum is exactly $15,000 — no drift", () => {
    expect(MINIMUM_ANNUAL).toBe(CANON_MINIMUM_ANNUAL);
  });

  test("tier rates match canon (1.00% / 0.35% / 0.20% / 0.10%) — no drift", () => {
    expect(FEE_TIERS.map((t) => t.rate)).toEqual(CANON_TIER_RATES);
  });

  test("tier bracket widths match canon thresholds ($1M / $1–3M / $3–10M / >$10M)", () => {
    expect(FEE_TIERS.map((t) => t.limit)).toEqual(CANON_TIER_LIMITS);
  });

  test("canon has NO sub-threshold $0 floor — the $15k minimum applies to everyone", () => {
    // The marketing `< $500k → $0` DISPLAY floor lives in fee-math.ts, NOT in
    // canon (NEEDS-JOSH). Canon itself returns the minimum at every net worth.
    expect(tieredAnnualFee(0)).toBe(CANON_MINIMUM_ANNUAL);
    expect(tieredAnnualFee(250_000)).toBe(CANON_MINIMUM_ANNUAL);
    expect(tieredAnnualFee(499_999)).toBe(CANON_MINIMUM_ANNUAL);
  });

  test("tiered amounts match canon worked examples", () => {
    expect(tieredAnnualFee(1_000_000)).toBe(15_000); // raw 1% = $10k → $15k minimum binds
    expect(tieredAnnualFee(3_000_000)).toBe(17_000); // $10k + $2M×0.35%
    expect(tieredAnnualFee(10_000_000)).toBe(31_000); // $10k + $7k + $7M×0.20%
    expect(tieredAnnualFee(20_000_000)).toBe(41_000); // $31k + $10M×0.10%
  });
});
