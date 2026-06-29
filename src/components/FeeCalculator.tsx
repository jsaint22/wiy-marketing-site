"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { trackCalculatorInteract } from "@/lib/analytics";
// Fee math is single-sourced: the tier rates + $15k minimum live in
// src/lib/fee-canon.ts (mirroring wiy-client-portal/lib/fees.ts), surfaced
// through fee-math.ts. Do not re-implement the formula or hardcode 15_000 here.
import {
  calculateWiyAnnualFee,
  formatUSD,
  DISPLAY_FLOOR_NET_WORTH,
} from "@/lib/pdf/fee-math";

function formatNetWorth(value: number): string {
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    if (Number.isInteger(m)) return `$${m}M`;
    const s = m.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
    return `$${s}M`;
  }
  return formatUSD(value);
}

export default function FeeCalculator({ standalone = false }: { standalone?: boolean }) {
  const [netWorth, setNetWorth] = useState(3_000_000);
  const trackTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleSliderChange = useCallback((value: number) => {
    setNetWorth(value);
    if (trackTimeout.current) clearTimeout(trackTimeout.current);
    trackTimeout.current = setTimeout(() => trackCalculatorInteract(value), 2000);
  }, []);

  const isBelowMinimum = netWorth < DISPLAY_FLOOR_NET_WORTH;
  const annual = useMemo(() => calculateWiyAnnualFee(netWorth), [netWorth]);
  const monthly = Math.round(annual / 12);
  const effectiveRate = netWorth > 0 ? ((annual / netWorth) * 100).toFixed(2) : "0.00";

  // AUM comparison: 1% annually (first-year values for display)
  const aumAnnual = netWorth * 0.01;
  const aumMonthly = Math.round(aumAnnual / 12);

  // True when AUM is cheaper than WIY in year 1 (typically below ~$1M)
  const aumIsCheaper = aumAnnual < annual;

  // 30-year projection: two portfolio paths, fees deducted each year.
  // FIRM POLICY: WIY fee is reassessed annually based on current net worth
  // (per FAQ and pricing page). Both fee models scale with portfolio growth,
  // but WIY uses declining tiers so the effective rate drops as wealth grows.
  const years = 30;
  const growthRate = 0.07;
  let aumPortfolio = netWorth;
  let wiyPortfolio = netWorth;
  let aumTotal = 0;
  let wiyTotal = 0;

  for (let i = 0; i < years; i++) {
    // Grow both portfolios
    aumPortfolio *= 1 + growthRate;
    wiyPortfolio *= 1 + growthRate;
    // AUM fee: 1% of current portfolio value
    const aumFee = aumPortfolio * 0.01;
    // WIY fee: reassessed annually on current portfolio value using tiered rates
    const wiyFee = calculateWiyAnnualFee(wiyPortfolio);
    aumTotal += aumFee;
    wiyTotal += wiyFee;
    aumPortfolio -= aumFee;
    wiyPortfolio -= wiyFee;
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
            min={1_500_000}
            max={35_000_000}
            step={50_000}
            value={netWorth}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
            aria-label="Net worth slider"
            aria-valuemin={1_500_000}
            aria-valuemax={35_000_000}
            aria-valuenow={netWorth}
            className="w-full h-2 bg-neutral-bg rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-neutral-dark/70 mt-1">
            <span>$1.5M</span>
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
                <p className="text-xs font-semibold text-neutral-dark/70 uppercase tracking-wider">
                  Monthly Fee
                </p>
                <p className="text-2xl font-bold text-primary mt-1">
                  {formatUSD(monthly)}
                </p>
              </div>
              <div className="bg-neutral-bg rounded-xl p-4">
                <p className="text-xs font-semibold text-neutral-dark/70 uppercase tracking-wider">
                  Annual Fee
                </p>
                <p className="text-2xl font-bold text-primary mt-1">
                  {formatUSD(annual)}
                </p>
              </div>
              <div className="bg-neutral-bg rounded-xl p-4">
                <p className="text-xs font-semibold text-neutral-dark/70 uppercase tracking-wider">
                  Effective Rate
                </p>
                <p className="text-2xl font-bold text-success mt-1">{effectiveRate}%</p>
              </div>
            </div>

            {aumIsCheaper ? (
              /* Below ~$1M: WIY minimum is more expensive than 1% AUM.
                 Show honest comparison without misleading projections. */
              <div className="border-t border-neutral-bg pt-6">
                <div className="flex items-center justify-between bg-neutral-bg rounded-xl p-4 text-sm">
                  <div>
                    <span className="text-neutral-dark/70">1% AUM advisor: </span>
                    <span className="font-semibold text-neutral-dark">{formatUSD(aumMonthly)}/mo</span>
                  </div>
                  <div>
                    <span className="text-neutral-dark/70">WIY flat fee: </span>
                    <span className="font-semibold text-primary">{formatUSD(monthly)}/mo</span>
                  </div>
                </div>
                <div className="mt-4 bg-neutral-bg rounded-xl p-5 text-center">
                  <p className="text-sm font-semibold text-primary">
                    Honest math: at {formatNetWorth(netWorth)}, a 1% AUM advisor costs less per year.
                  </p>
                  <p className="text-sm text-neutral-dark/70 mt-2 leading-relaxed">
                    Our {formatUSD(annual)}/year minimum is designed for clients with
                    $1M+ in net worth, where the flat fee saves you money every year
                    — and the gap grows as your wealth grows. Below $1M, percentage-based
                    pricing may be more cost-effective.
                  </p>
                </div>
              </div>
            ) : (
              /* Above ~$1M: WIY is cheaper. Show the full 30-year comparison. */
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
                      {formatUSD(wiyTotal)}
                    </p>
                    <p className="text-xs text-neutral-dark/70 mt-1">
                      Total fees over 30 years
                    </p>
                  </div>
                  <div className="rounded-xl border-2 border-warning/30 bg-warning/5 p-4">
                    <p className="text-xs font-semibold text-warning uppercase tracking-wider">
                      At 1% AUM Advisor
                    </p>
                    <p className="text-2xl font-bold text-warning mt-1">
                      {formatUSD(aumTotal)}
                    </p>
                    <p className="text-xs text-neutral-dark/70 mt-1">
                      Total fees over 30 years
                    </p>
                  </div>
                </div>
                <div className="mt-4 bg-primary/5 rounded-xl p-4 text-center">
                  <p className="text-sm text-neutral-dark/70">Estimated portfolio benefit<sup className="text-xs">*</sup></p>
                  <p className="text-3xl font-bold text-primary">
                    {formatUSD(portfolioBenefit)}
                  </p>
                  <p className="text-sm text-neutral-dark/70">
                    more in your portfolio over 30 years
                  </p>
                  <p className="text-xs text-neutral-dark/70 mt-1">
                    ({formatUSD(delta)} in fee savings, compounded at the assumed growth rate)
                  </p>
                  <p className="text-[10px] text-neutral-dark/50 mt-2 leading-snug">
                    <sup>*</sup> Hypothetical and illustrative only. Assumes 7% annual portfolio growth, 1% AUM fee vs. WIY declining flat fee. Past performance is not indicative of future results.
                  </p>
                </div>

                {/* Monthly comparison */}
                <div className="mt-4 flex items-center justify-between bg-neutral-bg rounded-xl p-4 text-sm">
                  <div>
                    <span className="text-neutral-dark/70">AUM advisor monthly: </span>
                    <span className="font-semibold text-warning">{formatUSD(aumMonthly)}</span>
                  </div>
                  <div>
                    <span className="text-neutral-dark/70">Your flat fee: </span>
                    <span className="font-semibold text-success">{formatUSD(monthly)}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Compliance disclosure — always visible */}
            <div className="border-t border-neutral-bg pt-4 mt-2">
              <p className="text-xs text-neutral-dark/70 leading-relaxed">
                <strong>Important disclosure:</strong> This calculator is for illustrative
                purposes only. The 30-year projection assumes a hypothetical 7% annual
                portfolio growth rate with fees deducted annually from the portfolio balance.
                Actual investment returns will vary and may be higher or lower than the
                assumed rate. Past performance is not indicative of future results. The WIY
                flat fee is based on net worth at engagement and is reviewed annually. AUM
                fees shown assume a 1% annual fee on portfolio value — actual AUM fees vary
                by advisor and may be higher or lower. This is not investment advice, a
                guarantee of future performance, or a solicitation to purchase any security.
                Consult a qualified professional before making financial decisions.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
