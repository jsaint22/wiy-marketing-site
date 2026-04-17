import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "WIY vs AUM Advisors — The Math Most Advisors Won't Show You",
  description:
    "AUM fees cost you $1M+ over 20 years. See the side-by-side comparison between a traditional 1% AUM advisor and Wealth In Yourself's flat-fee model.",
};

const comparisonRows = [
  {
    label: "Fee Structure",
    aum: "1% of assets under management",
    wiy: "Flat fee based on net worth",
  },
  {
    label: "Minimum",
    aum: "Usually $1M\u2013$5M AUM",
    wiy: "$10K/year minimum (typically $1M+ net worth)",
  },
  {
    label: "Scope",
    aum: "Primarily portfolio management",
    wiy: "Full Virtual Family Office",
  },
  {
    label: "Fee grows when portfolio grows",
    aum: "Yes \u2014 automatically",
    wiy: "No \u2014 your fee is your fee",
  },
  {
    label: "Included services",
    aum: "Investment management, occasional planning",
    wiy: "Tax strategy, investments, estate, insurance, real estate, business planning, financial therapy",
  },
  {
    label: "Conflicts of interest",
    aum: "AUM fee creates incentive to keep assets with them regardless of optimal deployment",
    wiy: "Zero. Fee is independent of decisions.",
  },
  {
    label: "Access to partners (CPA, attorney, insurance)",
    aum: "You find them yourself",
    wiy: "Coordinated VFO network included",
  },
  {
    label: "Client portal experience",
    aum: "Usually a third-party aggregator",
    wiy: "Custom-built WIY portal",
  },
  {
    label: "Transparent pricing published online",
    aum: "Rarely",
    wiy: "Always",
  },
];

function formatCurrency(n: number): string {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function buildFeeTable() {
  const years = 20;
  const growthRate = 0.07;
  const aumRate = 0.01;
  const wiyStartFee = 21000;
  const wiyGrowthRate = 0.03;
  let portfolio = 5_000_000;
  let cumAum = 0;
  let cumWiy = 0;
  const rows: { year: number; portfolio: string; aumFee: string; cumAum: string; wiyFee: string; cumWiy: string }[] = [];

  for (let y = 1; y <= years; y++) {
    const aumFee = portfolio * aumRate;
    const wiyFee = wiyStartFee * Math.pow(1 + wiyGrowthRate, y - 1);
    cumAum += aumFee;
    cumWiy += wiyFee;
    if (y === 1 || y === 5 || y === 10 || y === 15 || y === 20) {
      rows.push({
        year: y,
        portfolio: formatCurrency(portfolio),
        aumFee: formatCurrency(aumFee),
        cumAum: formatCurrency(cumAum),
        wiyFee: formatCurrency(wiyFee),
        cumWiy: formatCurrency(cumWiy),
      });
    }
    portfolio = portfolio * (1 + growthRate) - aumFee;
  }
  return { rows, totalAum: formatCurrency(cumAum), totalWiy: formatCurrency(cumWiy), diff: formatCurrency(cumAum - cumWiy) };
}

export default function VsAumPage() {
  const { rows, totalAum, totalWiy, diff } = buildFeeTable();

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            WIY vs. AUM
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            AUM fees cost you $1&nbsp;million over 20&nbsp;years. Flat fees don&apos;t.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            Here&apos;s the math most advisors don&apos;t want you to see.
          </p>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary text-center mb-10">
            The side-by-side comparison.
          </h2>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl border border-neutral-bg overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-primary text-white text-sm font-semibold uppercase tracking-wider">
              <div className="px-6 py-4">&nbsp;</div>
              <div className="px-6 py-4 text-center">Traditional AUM Advisor</div>
              <div className="px-6 py-4 text-center">Wealth In Yourself</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 gap-0 ${i % 2 === 0 ? "bg-white" : "bg-neutral-bg/50"}`}
              >
                <div className="px-6 py-4 font-semibold text-neutral-dark text-sm">
                  {row.label}
                </div>
                <div className="px-6 py-4 text-neutral-dark/70 text-sm text-center">
                  {row.aum}
                </div>
                <div className="px-6 py-4 text-primary font-medium text-sm text-center">
                  {row.wiy}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {comparisonRows.map((row) => (
              <div key={row.label} className="bg-white rounded-xl border border-neutral-bg p-5">
                <p className="text-sm font-bold text-primary mb-3">{row.label}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-warning uppercase tracking-wider mb-1">AUM Advisor</p>
                    <p className="text-sm text-neutral-dark/70">{row.aum}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-success uppercase tracking-wider mb-1">WIY</p>
                    <p className="text-sm text-primary font-medium">{row.wiy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Math at $5M */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
              The Math
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              The math at $5M.
            </h2>
            <p className="mt-4 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Cumulative fees over 20 years. Starting portfolio of $5M with 7% annual growth.
            </p>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-warning/5 border border-warning/20 rounded-xl p-6 text-center">
              <p className="text-sm font-semibold text-warning uppercase tracking-wider">AUM Advisor (1%)</p>
              <p className="text-3xl sm:text-4xl font-bold text-warning mt-2">{totalAum}</p>
              <p className="text-sm text-neutral-dark/60 mt-1">cumulative fees</p>
            </div>
            <div className="bg-success/5 border border-success/20 rounded-xl p-6 text-center">
              <p className="text-sm font-semibold text-success uppercase tracking-wider">WIY Flat Fee</p>
              <p className="text-3xl sm:text-4xl font-bold text-success mt-2">{totalWiy}</p>
              <p className="text-sm text-neutral-dark/60 mt-1">cumulative fees</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">You Keep</p>
              <p className="text-3xl sm:text-4xl font-bold text-primary mt-2">{diff}</p>
              <p className="text-sm text-neutral-dark/60 mt-1">more with WIY</p>
            </div>
          </div>

          {/* Fee comparison table */}
          <div className="hidden sm:block bg-neutral-bg rounded-2xl border border-neutral-bg overflow-hidden">
            <div className="grid grid-cols-6 gap-0 bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              <div className="px-4 py-3">Year</div>
              <div className="px-4 py-3 text-right">Portfolio</div>
              <div className="px-4 py-3 text-right">AUM Fee</div>
              <div className="px-4 py-3 text-right">Cum. AUM</div>
              <div className="px-4 py-3 text-right">WIY Fee</div>
              <div className="px-4 py-3 text-right">Cum. WIY</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.year} className={`grid grid-cols-6 gap-0 text-sm ${i % 2 === 0 ? "bg-white" : "bg-neutral-bg/50"}`}>
                <div className="px-4 py-3 font-semibold text-neutral-dark">{r.year}</div>
                <div className="px-4 py-3 text-right text-neutral-dark/70">{r.portfolio}</div>
                <div className="px-4 py-3 text-right text-warning font-medium">{r.aumFee}</div>
                <div className="px-4 py-3 text-right text-warning">{r.cumAum}</div>
                <div className="px-4 py-3 text-right text-success font-medium">{r.wiyFee}</div>
                <div className="px-4 py-3 text-right text-success">{r.cumWiy}</div>
              </div>
            ))}
          </div>

          {/* Mobile fee cards */}
          <div className="sm:hidden space-y-3">
            {rows.map((r) => (
              <div key={r.year} className="bg-white rounded-xl border border-neutral-bg p-4">
                <p className="font-bold text-primary mb-2">Year {r.year} &middot; Portfolio: {r.portfolio}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-xs text-warning font-semibold uppercase">AUM Fee</p>
                    <p className="text-neutral-dark/70">{r.aumFee}/yr</p>
                    <p className="text-xs text-neutral-dark/50">Total: {r.cumAum}</p>
                  </div>
                  <div>
                    <p className="text-xs text-success font-semibold uppercase">WIY Fee</p>
                    <p className="text-neutral-dark/70">{r.wiyFee}/yr</p>
                    <p className="text-xs text-neutral-dark/50">Total: {r.cumWiy}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs text-neutral-dark/50 max-w-2xl mx-auto">
            Illustrative calculation. Assumes 7% annual portfolio growth, 3% annual
            fee reassessment based on net worth increase. Actual results vary.
          </p>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-8">
            Why AUM fees are a structural problem.
          </h2>
          <div className="space-y-6 text-lg text-neutral-dark/80 leading-relaxed">
            <p>
              The AUM model was invented in the 1980s as a compromise &mdash; better
              than commission-only, but still tied to the asset. The problem: if your
              advisor earns more when your account grows, he has an incentive to keep
              assets in the account.
            </p>
            <p>
              Should you pay down your mortgage? Take equity out for real estate? Gift
              to the next generation? Start a business? These are often the right
              decisions &mdash; and they all reduce your advisor&apos;s fee.
            </p>
            <p>
              That&apos;s a quiet conflict of interest baked into the model. Flat fees
              eliminate it entirely.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="See what your fee would actually be at WIY."
        subtext="Open the calculator and compare. No login, no email required."
        buttonText="Open the Calculator"
        buttonHref="/pricing#calculator"
      />
    </>
  );
}
