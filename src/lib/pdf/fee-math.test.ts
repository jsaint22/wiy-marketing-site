/**
 * Fee Math Verification Suite
 *
 * These tests verify every number that appears in the AUM Math PDF,
 * the pricing page, and the fee calculator. If any test fails, the
 * build should NOT deploy — wrong math in marketing materials is a
 * regulatory risk for an RIA.
 *
 * Verified against Python audit (April 2026) and MATH-METHODOLOGY.md.
 * Any change to fee-math.ts MUST pass this suite.
 */

import { describe, test, expect } from "vitest";
import { calculateWiyAnnualFee, projectFees, formatUSD } from "./fee-math";

// Helper: allow $1 rounding tolerance
function expectWithinDollar(actual: number, expected: number) {
  expect(Math.abs(actual - expected)).toBeLessThanOrEqual(1);
}

describe("WIY Fee Formula", () => {
  test("below $500K returns the $15K minimum, never $0 (Option 3, 2026-06-30 /compliance-cleared)", () => {
    // The fee function honors canon at every net worth ($15k minimum applies to
    // everyone). The sub-$500k "below our minimum — let's talk" treatment is a
    // display-layer MESSAGE in FeeCalculator.tsx, not a $0 fee.
    expect(calculateWiyAnnualFee(499_999)).toBe(15_000);
    expect(calculateWiyAnnualFee(1)).toBe(15_000);
  });

  test("$500K returns $15,000 (annual minimum applies)", () => {
    expect(calculateWiyAnnualFee(500_000)).toBe(15_000);
  });

  test("$1M = $15,000/year (annual minimum bites — raw 1% calc $10K, $15K floor applies)", () => {
    expect(calculateWiyAnnualFee(1_000_000)).toBe(15_000);
  });

  test("$3M = $17,000/year", () => {
    // First $1M × 1% = $10,000 + next $2M × 0.35% = $7,000
    expect(calculateWiyAnnualFee(3_000_000)).toBe(17_000);
  });

  test("$5M = $21,000/year", () => {
    // $10,000 + $7,000 + $2M × 0.20% = $4,000
    expect(calculateWiyAnnualFee(5_000_000)).toBe(21_000);
  });

  test("$10M = $31,000/year", () => {
    // $10,000 + $7,000 + $7M × 0.20% = $14,000
    expect(calculateWiyAnnualFee(10_000_000)).toBe(31_000);
  });

  test("$20M = $41,000/year", () => {
    // $31,000 + $10M × 0.10% = $10,000
    expect(calculateWiyAnnualFee(20_000_000)).toBe(41_000);
  });

  test("$25M = $46,000/year", () => {
    expect(calculateWiyAnnualFee(25_000_000)).toBe(46_000);
  });

  test("$30M = $51,000/year", () => {
    expect(calculateWiyAnnualFee(30_000_000)).toBe(51_000);
  });
});

describe("Monthly Fee (Pricing Page Verification)", () => {
  const cases: [number, string, string][] = [
    [1_000_000, "$1,250", "1.50%"],
    [3_000_000, "$1,417", "0.57%"],
    [5_000_000, "$1,750", "0.42%"],
    [10_000_000, "$2,583", "0.31%"],
    [20_000_000, "$3,417", "0.21%"],
    [30_000_000, "$4,250", "0.17%"],
  ];

  test.each(cases)("$%d NW → %s/mo (%s effective)", (nw, expectedMonthly, expectedRate) => {
    const annual = calculateWiyAnnualFee(nw);
    const monthly = Math.round(annual / 12);
    const monthlyFormatted = formatUSD(monthly);
    const effectiveRate = ((annual / nw) * 100).toFixed(2) + "%";
    expect(monthlyFormatted).toBe(expectedMonthly);
    expect(effectiveRate).toBe(expectedRate);
  });
});

describe("Year 1 Fee Comparison (AUM Math PDF Page 4)", () => {
  test("$1M: AUM=$10,000, WIY=$15,000 (floor bites — WIY costs MORE here; advantage flips as portfolio grows)", () => {
    expect(1_000_000 * 0.01).toBe(10_000);
    expect(calculateWiyAnnualFee(1_000_000)).toBe(15_000);
  });

  test("$5M: AUM=$50,000, WIY=$21,000, Save=$29,000", () => {
    expect(5_000_000 * 0.01).toBe(50_000);
    expect(calculateWiyAnnualFee(5_000_000)).toBe(21_000);
  });

  test("$10M: AUM=$100,000, WIY=$31,000, Save=$69,000", () => {
    expect(10_000_000 * 0.01).toBe(100_000);
    expect(calculateWiyAnnualFee(10_000_000)).toBe(31_000);
  });

  test("$25M: AUM=$250,000, WIY=$46,000, Save=$204,000", () => {
    expect(25_000_000 * 0.01).toBe(250_000);
    expect(calculateWiyAnnualFee(25_000_000)).toBe(46_000);
  });
});

describe("20-Year Projections (AUM Math PDF Page 5)", () => {
  const r = projectFees(5_000_000, 20);

  test("$5M cumulative AUM fees = $1,953,284", () => {
    expectWithinDollar(r.cumulativeAumFees, 1_953_284);
  });

  test("$5M cumulative WIY fees = $603,447", () => {
    expectWithinDollar(r.cumulativeWiyFees, 603_447);
  });

  test("$5M fee delta = $1,349,836", () => {
    expectWithinDollar(r.feeDelta, 1_349_836);
  });

  test("$5M AUM ending portfolio = $15,825,209", () => {
    expectWithinDollar(r.aumEndPortfolio, 15_825_209);
  });

  test("$5M WIY ending portfolio = $18,194,419", () => {
    expectWithinDollar(r.wiyEndPortfolio, 18_194_419);
  });

  test("$5M portfolio benefit = $2,369,210", () => {
    expectWithinDollar(r.portfolioBenefit, 2_369_210);
  });
});

describe("30-Year Projections (AUM Math PDF Page 6)", () => {
  const r = projectFees(5_000_000, 30);

  test("$5M cumulative AUM fees = $4,177,861", () => {
    expectWithinDollar(r.cumulativeAumFees, 4_177_861);
  });

  test("$5M cumulative WIY fees = $1,079,849", () => {
    expectWithinDollar(r.cumulativeWiyFees, 1_079_849);
  });

  test("$5M fee delta = $3,098,011", () => {
    expectWithinDollar(r.feeDelta, 3_098_011);
  });

  test("$5M AUM ending portfolio = $28,153,939", () => {
    expectWithinDollar(r.aumEndPortfolio, 28_153_939);
  });

  test("$5M WIY ending portfolio = $35,146,187", () => {
    expectWithinDollar(r.wiyEndPortfolio, 35_146_187);
  });

  test("$5M portfolio benefit = $6,992,247", () => {
    expectWithinDollar(r.portfolioBenefit, 6_992_247);
  });
});

describe("All Wealth Levels — Portfolio Benefit (Cross-reference)", () => {
  // These numbers are from MATH-METHODOLOGY.md, verified by Python
  const expected: Record<string, { yr20: number; yr30: number }> = {
    "1M": { yr20: 81_314, yr30: 478_253 },
    "5M": { yr20: 2_369_210, yr30: 6_992_247 },
    "10M": { yr20: 5_428_885, yr30: 15_617_906 },
    "25M": { yr20: 14_848_583, yr30: 41_963_608 },
  };

  const levels = [
    [1_000_000, "1M"],
    [5_000_000, "5M"],
    [10_000_000, "10M"],
    [25_000_000, "25M"],
  ] as const;

  test.each(levels)("$%d 20-year portfolio benefit", (nw, label) => {
    const r = projectFees(nw, 20);
    expectWithinDollar(r.portfolioBenefit, expected[label].yr20);
  });

  test.each(levels)("$%d 30-year portfolio benefit", (nw, label) => {
    const r = projectFees(nw, 30);
    expectWithinDollar(r.portfolioBenefit, expected[label].yr30);
  });
});

describe("Email Body Hardcoded Numbers (subscribe/route.ts)", () => {
  // The AUM Math delivery email references specific numbers
  // These must match what projectFees actually produces
  const r20 = projectFees(5_000_000, 20);
  const r30 = projectFees(5_000_000, 30);

  test("Email says $2.37M for 20yr — verify $2,369,210 rounds to $2.37M", () => {
    const millions = r20.portfolioBenefit / 1_000_000;
    expect(millions).toBeGreaterThan(2.36);
    expect(millions).toBeLessThan(2.38);
  });

  test("Email says $6.99M for 30yr — verify $6,992,247 rounds to $6.99M", () => {
    const millions = r30.portfolioBenefit / 1_000_000;
    expect(millions).toBeGreaterThan(6.98);
    expect(millions).toBeLessThan(7.00);
  });
});

describe("Sanity Checks", () => {
  test("WIY fee never exceeds AUM fee at $1.5M+ ($15K floor binds below that)", () => {
    for (let nw = 1_500_000; nw <= 50_000_000; nw += 500_000) {
      const aumFee = nw * 0.01;
      const wiyFee = calculateWiyAnnualFee(nw);
      expect(wiyFee).toBeLessThanOrEqual(aumFee);
    }
  });

  test("Portfolio benefit is always positive (WIY always cheaper)", () => {
    for (const nw of [1_000_000, 3_000_000, 5_000_000, 10_000_000, 25_000_000]) {
      const r = projectFees(nw, 20);
      expect(r.portfolioBenefit).toBeGreaterThanOrEqual(0);
    }
  });

  test("Fee is monotonically increasing with net worth", () => {
    let prevFee = 0;
    for (let nw = 500_000; nw <= 50_000_000; nw += 500_000) {
      const fee = calculateWiyAnnualFee(nw);
      expect(fee).toBeGreaterThanOrEqual(prevFee);
      prevFee = fee;
    }
  });

  test("Effective rate is monotonically decreasing above $1M", () => {
    let prevRate = 1;
    for (let nw = 1_000_000; nw <= 50_000_000; nw += 1_000_000) {
      const fee = calculateWiyAnnualFee(nw);
      const rate = fee / nw;
      expect(rate).toBeLessThanOrEqual(prevRate);
      prevRate = rate;
    }
  });
});
