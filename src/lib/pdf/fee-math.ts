/**
 * Fee calculation logic shared between the website calculator (FeeCalculator.tsx
 * imports from here), the pricing/vs-AUM pages, and the lead-magnet PDFs.
 *
 * The tier rates + $15k minimum are NOT defined here — they come from the
 * single source of truth `src/lib/fee-canon.ts` (which mirrors the canonical
 * wiy-client-portal/lib/fees.ts). This file only adds the marketing-specific
 * display floor + the multi-year projection model on top of canon.
 *
 * METHODOLOGY (see MATH-METHODOLOGY.md for full documentation):
 * - Portfolio grows at 7% annually (configurable)
 * - AUM fee: 1% of portfolio value, charged end-of-year
 * - WIY fee: tiered formula recalculated on current portfolio each year
 * - Fees are paid FROM the portfolio each year (reducing the base for future growth)
 * - Two separate portfolio tracks are maintained: one for AUM, one for WIY
 */

import { tieredAnnualFee } from "../fee-canon";

/**
 * NEEDS-JOSH (display decision, NOT canon): the marketing calculator shows $0
 * for a net worth below this threshold, instead of the canonical $15k minimum.
 * The canonical portal logic (wiy-client-portal/lib/fees.ts) has NO such floor —
 * the $15k minimum applies to everyone. This constant single-sources that
 * marketing-only floor so the fee function + the calculator's "Below our
 * minimum" card cannot drift apart. Behavior is intentionally left unchanged
 * pending Josh's call on whether sub-$500k should show $0 or the $15k minimum.
 */
export const DISPLAY_FLOOR_NET_WORTH = 500_000;

export function calculateWiyAnnualFee(netWorth: number): number {
  // Marketing display floor (see DISPLAY_FLOOR_NET_WORTH — NEEDS-JOSH).
  if (netWorth < DISPLAY_FLOOR_NET_WORTH) return 0;

  // Tiers + $15k minimum come from canon (src/lib/fee-canon.ts).
  return tieredAnnualFee(netWorth);
}

export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export interface DualProjection {
  year: number;
  aumPortfolio: number;
  wiyPortfolio: number;
  aumFee: number;
  wiyFee: number;
  cumulativeAumFees: number;
  cumulativeWiyFees: number;
}

export interface ProjectionSummary {
  years: DualProjection[];
  cumulativeAumFees: number;
  cumulativeWiyFees: number;
  feeDelta: number;
  aumEndPortfolio: number;
  wiyEndPortfolio: number;
  portfolioBenefit: number;
}

/**
 * Project fees over time with two separate portfolio paths.
 * Fees are deducted from the portfolio each year.
 *
 * AUM fee: 1% of current portfolio value (grows with portfolio).
 * WIY fee: tiered formula REASSESSED ANNUALLY on current portfolio value.
 *   Per firm policy (FAQ, pricing page): "We reassess your fee on your
 *   anniversary date each year based on your current net worth."
 *   The advantage of WIY's declining-tier model is that the effective rate
 *   drops as wealth grows — so fees scale more slowly than a flat 1% AUM.
 */
export function projectFees(
  startingValue: number,
  years: number,
  growthRate = 0.07
): ProjectionSummary {
  const projections: DualProjection[] = [];
  let aumPortfolio = startingValue;
  let wiyPortfolio = startingValue;
  let cumulativeAumFees = 0;
  let cumulativeWiyFees = 0;

  for (let y = 1; y <= years; y++) {
    // Grow both portfolios
    aumPortfolio *= 1 + growthRate;
    wiyPortfolio *= 1 + growthRate;

    // AUM fee: flat 1% of current value
    const aumFee = aumPortfolio * 0.01;
    // WIY fee: reassessed annually using declining tiered rates
    const wiyFee = calculateWiyAnnualFee(wiyPortfolio);

    cumulativeAumFees += aumFee;
    cumulativeWiyFees += wiyFee;

    // Deduct fees from portfolio
    aumPortfolio -= aumFee;
    wiyPortfolio -= wiyFee;

    projections.push({
      year: y,
      aumPortfolio,
      wiyPortfolio,
      aumFee,
      wiyFee,
      cumulativeAumFees,
      cumulativeWiyFees,
    });
  }

  return {
    years: projections,
    cumulativeAumFees,
    cumulativeWiyFees,
    feeDelta: cumulativeAumFees - cumulativeWiyFees,
    aumEndPortfolio: aumPortfolio,
    wiyEndPortfolio: wiyPortfolio,
    portfolioBenefit: wiyPortfolio - aumPortfolio,
  };
}
