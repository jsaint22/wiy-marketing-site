/**
 * Fee calculation logic shared between the website calculator and the PDF.
 * Mirrors src/components/FeeCalculator.tsx — keep in sync.
 *
 * METHODOLOGY (see MATH-METHODOLOGY.md for full documentation):
 * - Portfolio grows at 7% annually (configurable)
 * - AUM fee: 1% of portfolio value, charged end-of-year
 * - WIY fee: tiered formula recalculated on current portfolio each year
 * - Fees are paid FROM the portfolio each year (reducing the base for future growth)
 * - Two separate portfolio tracks are maintained: one for AUM, one for WIY
 */

export function calculateWiyAnnualFee(netWorth: number): number {
  if (netWorth < 500_000) return 0;

  let annualFee = 0;
  let remaining = netWorth;

  const tiers = [
    { limit: 1_000_000, rate: 0.01 },
    { limit: 2_000_000, rate: 0.0035 },
    { limit: 7_000_000, rate: 0.002 },
    { limit: Infinity, rate: 0.001 },
  ];

  for (const tier of tiers) {
    if (remaining <= 0) break;
    const taxable = Math.min(remaining, tier.limit);
    annualFee += taxable * tier.rate;
    remaining -= taxable;
  }

  return Math.max(annualFee, 10_000);
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
