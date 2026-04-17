/**
 * Fee calculation logic shared between the website calculator and the PDF.
 * Mirrors src/components/FeeCalculator.tsx — keep in sync.
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

export interface YearlyProjection {
  year: number;
  portfolioValue: number;
  aumFee: number;
  wiyFee: number;
  cumulativeAum: number;
  cumulativeWiy: number;
}

export function projectFees(
  startingValue: number,
  years: number,
  growthRate = 0.07,
  wiyEscalation = 0.03
): YearlyProjection[] {
  const projections: YearlyProjection[] = [];
  let portfolioValue = startingValue;
  let cumulativeAum = 0;
  let cumulativeWiy = 0;
  const baseWiyFee = calculateWiyAnnualFee(startingValue);

  for (let y = 1; y <= years; y++) {
    const aumFee = portfolioValue * 0.01;
    // WIY fee: based on initial assessment, escalated 3% per year
    const wiyFee = baseWiyFee * Math.pow(1 + wiyEscalation, y - 1);

    cumulativeAum += aumFee;
    cumulativeWiy += wiyFee;

    projections.push({
      year: y,
      portfolioValue,
      aumFee,
      wiyFee,
      cumulativeAum,
      cumulativeWiy,
    });

    portfolioValue *= 1 + growthRate;
  }

  return projections;
}
