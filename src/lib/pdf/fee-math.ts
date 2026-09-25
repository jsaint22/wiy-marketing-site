/**
 * Fee calculation logic shared between the website calculator (FeeCalculator.tsx
 * imports from here), the pricing/vs-AUM pages, and the lead-magnet PDFs.
 *
 * The tier rates + $15k minimum are NOT defined here — they come from the
 * single source of truth `src/lib/fee-canon.ts` (which mirrors the canonical
 * wiy-client-portal/lib/fees.ts). This file only adds the marketing-specific
 * display-message threshold + the multi-year projection model on top of canon.
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
 * Net-worth threshold below which the public calculator shows a "Below our
 * minimum — let's talk" MESSAGE instead of a fee figure (FeeCalculator.tsx).
 * The published FAQ no longer names a sub-$1M dollar threshold: as of
 * 2026-09-24 the site says the firm is built for households with roughly
 * $3M to $30M in net worth with a $15,000 minimum annual fee. The slider's
 * floor is $1.5M, so this branch is a safety net, not a stated policy. This
 * is a DISPLAY/messaging threshold ONLY — it is NOT a fee floor. The fee function below always returns
 * the canonical fee (>= the $15k minimum, which per canon applies at every net
 * worth); it never returns $0.
 *
 * Decided 2026-06-30 (Option 3, /compliance-cleared): the prior
 * "< $500k -> return $0" branch was REMOVED. A $0 fee contradicts the published
 * "$15,000 minimum applies at all net worth levels" canon and is a
 * misleading-price exposure; the function now honors canon at every input, and
 * the sub-minimum case is handled in the display layer as a message, not a $0.
 */
export const DISPLAY_FLOOR_NET_WORTH = 500_000;

export function calculateWiyAnnualFee(netWorth: number): number {
  // Always the canonical declining-tier fee with the $15k minimum applied
  // (src/lib/fee-canon.ts). NEVER returns $0 — the $15k minimum applies at every
  // net worth per the published schedule. The "below our minimum" MESSAGE (not a
  // $0 fee) is a display-layer concern in FeeCalculator.tsx, gated on
  // DISPLAY_FLOOR_NET_WORTH above.
  return tieredAnnualFee(netWorth);
}

/**
 * Net worths used for the published fee illustrations (home-page ladder,
 * pricing milestones, llms.txt examples). Josh, 2026-09-24: every illustration
 * starts inside the $3M–$30M target range; no row shows the $15k minimum
 * binding at $1M. Pinned in fee-math.test.ts.
 */
export const ILLUSTRATION_NET_WORTHS = [
  3_000_000, 5_000_000, 10_000_000, 20_000_000, 30_000_000,
] as const;

/** "$3M", "$30M", "$3.6M" — short net-worth label for illustration rows. */
export function formatNetWorthM(value: number): string {
  const m = value / 1_000_000;
  if (Number.isInteger(m)) return `$${m}M`;
  return `$${m.toFixed(2).replace(/0+$/, "").replace(/\.$/, "")}M`;
}

/**
 * One fee-illustration row, entirely from canon: annual fee, rounded monthly
 * figure, effective rate. The home page and pricing page render their example
 * ladders from this so no illustrated figure is ever typed by hand.
 */
export function feeIllustration(netWorth: number) {
  const annual = calculateWiyAnnualFee(netWorth);
  const monthly = Math.round(annual / 12);
  return {
    netWorth,
    label: formatNetWorthM(netWorth),
    annual,
    monthly,
    monthlyLabel: `${formatUSD(monthly)}/mo`,
    effectiveRate: `${((annual / netWorth) * 100).toFixed(2)}%`,
  };
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
