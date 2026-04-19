"use client";

import { useState, useMemo } from "react";

function calculateAnnualFee(netWorth: number): number {
  if (netWorth < 500_000) return 0;

  // Declining percentage fee model
  // First $1M at 1.00%, next $2M at 0.35%, next $7M at 0.20%, above $10M at 0.10%
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

  // Enforce $10,000 annual minimum
  return Math.max(annualFee, 10_000);
}

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNetWorth(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    if (Number.isInteger(m)) return `$${m}M`;
    const s = m.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
    return `$${s}M`;
  }
  return formatCurrency(value);
}

export default function FeeCalculator({ standalone = false }: { standalone?: boolean }) {
  const [netWorth, setNetWorth] = useState(3_000_000);

  const isBelowMinimum = netWorth < 500_000;
  const annual = useMemo(() => calculateAnnualFee(netWorth), [netWorth]);
  const monthly = Math.round(annual / 12);
  const effectiveRate = netWorth > 0 ? ((annual / netWorth) * 100).toFixed(2) : "0.00";

  // AUM comparison: 1% annually
  const aumAnnual = netWorth * 0.01;
  const aumMonthly = Math.round(aumAnnual / 12);

  // WIY fee is a flat fee based on net worth at time of engagement.
  // It does NOT automatically grow with portfolio returns (unlike AUM).
  const wiyAnnualFee = annual; // fixed based on current net worth input

  // True when AUM is cheaper than WIY (typically below ~$1M)
  const aumIsCheaper = aumAnnual < annual;

  // 30-year projection: two portfolio paths, fees deducted each year
  const years = 30;
  const growthRate = 0.07;
  let aumPortfolio = netWorth;
  let wiyPortfolio = netWorth;
  let aumTotal = 0;
  let wiyTotal = 0;

  for (let i = 0; i < years; i++) {
    // Grow both portfolios first
    aumPortfolio *= 1 + growthRate;
    wiyPortfolio *= 1 + growthRate;
    // AUM fee scales with portfolio; WIY fee is fixed at starting net worth
    const aumFee = aumPortfolio * 0.01;
    aumTotal += aumFee;
    wiyTotal += wiyAnnualFee;
    aumPortfolio -= aumFee;
    wiyPortfolio -= wiyAnnualFee;
  }

  const portfolioBenefit = wiyPortfolio - aumPortfolio;
  const delta = aumTotal - wiyTotal;

  return (
    <div className={standalone ? "" : "bg-white rounded-2xl shadow-lg border border-neutral-bg p-6 sm:p-8"}>
      <div className="space-y-6">
        {/* Net worth input */}
        <div>
          <label className="block text-sm font-semibold text-neutral-dark mb-2">
            Your Net Worth (excluding primary residence)
          </label>
          <div className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {formatNetWorth(netWorth)}
          </div>
          <input
            type="range"
            min={500_000}
            max={35_000_000}
            step={50_000}
            value={netWorth}
            onChange={(e) => setNetWorth(Number(e.target.value))}
            className="w-full h-2 bg-neutral-bg rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-neutral-dark/50 mt-1">
            <span>$500K</span>
            <span>$35M</span>
          </div>
        </div>

        {isBelowMinimum ? (
          <div className="bg-neutral-bg rounded-xl p-6 text-center">
            <p className="text-lg font-semibold text-primary">
              Below our minimum
            </p>
            <p className="mt-2 text-neutral-dark/70">
              At this net worth level, a flat-fee model likely isn&apos;t the most
              cost-effective option. Let&apos;s talk about whether we&apos;re a fit.
            </p>
          </div>
        ) : (
          <>
            {/* Your fee */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-neutral-bg rounded-xl p-4">
                <p className="text-xs font-semibold text-neutral-dark/60 uppercase tracking-wider">
                  Monthly Fee
                </p>
                <p className="text-2xl font-bold text-primary mt-1">
                  {formatCurrency(monthly)}
                </p>
              </div>
              <div className="bg-neutral-bg rounded-xl p-4">
                <p className="text-xs font-semibold text-neutral-dark/60 uppercase tracking-wider">
                  Annual Fee
                </p>
                <p className="text-2xl font-bold text-primary mt-1">
                  {formatCurrency(annual)}
                </p>
              </div>
              <div className="bg-neutral-bg rounded-xl p-4">
                <p className="text-xs font-semibold text-neutral-dark/60 uppercase tracking-wider">
                  Effective Rate
                </p>
                <p className="text-2xl font-bold text-success mt-1">{effectiveRate}%</p>
              </div>
            </div>

            {/* Comparison panel */}
            <div className="border-t border-neutral-bg pt-6">
              <h3 className="text-lg font-bold text-primary mb-4">
                30-Year Fee Comparison
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border-2 border-success/30 bg-success/5 p-4">
                  <p className="text-xs font-semibold text-success uppercase tracking-wider">
                    With Wealth In Yourself (Flat Fee)
                  </p>
                  <p className="text-2xl font-bold text-success mt-1">
                    {formatCurrency(wiyTotal)}
                  </p>
                  <p className="text-xs text-neutral-dark/50 mt-1">
                    Total fees over 30 years
                  </p>
                </div>
                <div className="rounded-xl border-2 border-warning/30 bg-warning/5 p-4">
                  <p className="text-xs font-semibold text-warning uppercase tracking-wider">
                    At 1% AUM Advisor
                  </p>
                  <p className="text-2xl font-bold text-warning mt-1">
                    {formatCurrency(aumTotal)}
                  </p>
                  <p className="text-xs text-neutral-dark/50 mt-1">
                    Total fees over 30 years
                  </p>
                </div>
              </div>
              {aumIsCheaper ? (
                <div className="mt-4 bg-warning/5 border border-warning/20 rounded-xl p-4 text-center">
                  <p className="text-sm font-semibold text-warning">
                    At this net worth, a 1% AUM advisor is less expensive.
                  </p>
                  <p className="text-xs text-neutral-dark/60 mt-2">
                    Our flat-fee model is designed for clients with $1M+ in net worth.
                    Below that threshold, a percentage-based advisor may cost less.
                    The flat fee starts to save you money as your wealth grows beyond ~$1M.
                  </p>
                </div>
              ) : (
                <div className="mt-4 bg-primary/5 rounded-xl p-4 text-center">
                  <p className="text-sm text-neutral-dark/70">Portfolio benefit</p>
                  <p className="text-3xl font-bold text-primary">
                    {formatCurrency(portfolioBenefit)}
                  </p>
                  <p className="text-sm text-neutral-dark/70">
                    more in your portfolio over 30 years
                  </p>
                  <p className="text-xs text-neutral-dark/50 mt-1">
                    ({formatCurrency(delta)} in fee savings, plus growth on those savings)
                  </p>
                </div>
              )}
            </div>

            {/* Monthly comparison */}
            <div className="flex items-center justify-between bg-neutral-bg rounded-xl p-4 text-sm">
              <div>
                <span className="text-neutral-dark/60">AUM advisor monthly: </span>
                <span className="font-semibold text-warning">{formatCurrency(aumMonthly)}</span>
              </div>
              <div>
                <span className="text-neutral-dark/60">Your flat fee: </span>
                <span className="font-semibold text-success">{formatCurrency(monthly)}</span>
              </div>
            </div>

            {/* Compliance disclosure */}
            <p className="text-xs text-neutral-dark/40 leading-relaxed">
              Assumes 7% annual portfolio growth for illustrative purposes only. Actual returns will vary. This is not a guarantee of future performance. Fees are assumed to be deducted from the portfolio annually.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
