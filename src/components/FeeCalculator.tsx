"use client";

import { useState, useMemo } from "react";

function calculateMonthlyFee(netWorth: number): number {
  // Declining percentage fee model
  // First $1M at 0.50%, next $2M at 0.35%, next $2M at 0.25%, next $5M at 0.15%, above $10M at 0.10%
  let annualFee = 0;
  let remaining = netWorth;

  const tiers = [
    { limit: 1_000_000, rate: 0.005 },
    { limit: 2_000_000, rate: 0.0035 },
    { limit: 2_000_000, rate: 0.0025 },
    { limit: 5_000_000, rate: 0.0015 },
    { limit: Infinity, rate: 0.001 },
  ];

  for (const tier of tiers) {
    if (remaining <= 0) break;
    const taxable = Math.min(remaining, tier.limit);
    annualFee += taxable * tier.rate;
    remaining -= taxable;
  }

  return Math.round(annualFee / 12);
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
    return m % 1 === 0 ? `$${m}M` : `$${m.toFixed(1)}M`;
  }
  return formatCurrency(value);
}

export default function FeeCalculator({ standalone = false }: { standalone?: boolean }) {
  const [netWorth, setNetWorth] = useState(3_000_000);

  const monthly = useMemo(() => calculateMonthlyFee(netWorth), [netWorth]);
  const annual = monthly * 12;
  const effectiveRate = ((annual / netWorth) * 100).toFixed(2);

  // AUM comparison: 1% annually
  const aumAnnual = netWorth * 0.01;
  const aumMonthly = Math.round(aumAnnual / 12);

  // 30-year projection (assuming 7% annual growth)
  const years = 30;
  const growthRate = 0.07;
  let wiyTotal = 0;
  let aumTotal = 0;
  let projectedNW = netWorth;

  for (let i = 0; i < years; i++) {
    wiyTotal += calculateMonthlyFee(projectedNW) * 12;
    aumTotal += projectedNW * 0.01;
    projectedNW *= 1 + growthRate;
  }

  const delta = aumTotal - wiyTotal;

  return (
    <div className={standalone ? "" : "bg-white rounded-2xl shadow-lg border border-neutral-bg p-6 sm:p-8"}>
      <div className="space-y-6">
        {/* Net worth input */}
        <div>
          <label className="block text-sm font-semibold text-neutral-dark mb-2">
            Your Net Worth
          </label>
          <div className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            {formatNetWorth(netWorth)}
          </div>
          <input
            type="range"
            min={500_000}
            max={25_000_000}
            step={100_000}
            value={netWorth}
            onChange={(e) => setNetWorth(Number(e.target.value))}
            className="w-full h-2 bg-neutral-bg rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-neutral-dark/50 mt-1">
            <span>$500K</span>
            <span>$25M</span>
          </div>
        </div>

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
                With WIY (Flat Fee)
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
          <div className="mt-4 bg-primary/5 rounded-xl p-4 text-center">
            <p className="text-sm text-neutral-dark/70">You keep</p>
            <p className="text-3xl font-bold text-primary">
              {formatCurrency(delta)}
            </p>
            <p className="text-sm text-neutral-dark/70">
              more of your money over 30 years
            </p>
          </div>
        </div>

        {/* Monthly comparison */}
        <div className="flex items-center justify-between bg-neutral-bg rounded-xl p-4 text-sm">
          <div>
            <span className="text-neutral-dark/60">AUM advisor monthly: </span>
            <span className="font-semibold text-warning">{formatCurrency(aumMonthly)}</span>
          </div>
          <div>
            <span className="text-neutral-dark/60">Your WIY fee: </span>
            <span className="font-semibold text-success">{formatCurrency(monthly)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
