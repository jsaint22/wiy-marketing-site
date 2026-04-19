import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { projectFees, formatUSD } from "@/lib/pdf/fee-math";

export const metadata: Metadata = {
  title: "Flat Fee vs. AUM Advisors — The Math Most Advisors Won't Show You",
  description:
    "See the side-by-side comparison between a traditional 1% AUM advisor and Wealth In Yourself's flat-fee model. The math shows the true cost of percentage-based fees over 20 and 30 years.",
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
    label: "Scope of services",
    aum: "Primarily portfolio management",
    wiy: "Tax, investments, estate, insurance, business planning, RE investor planning, financial therapy",
  },
  {
    label: "Fee grows when portfolio grows",
    aum: "Yes — automatically, even if they did nothing",
    wiy: "Rate declines as your net worth grows",
  },
  {
    label: "Incentive to keep assets in your account",
    aum: "Yes — moving money out reduces their fee",
    wiy: "None. Your fee doesn't change based on where assets are held.",
  },
  {
    label: "Conflicts of interest",
    aum: "Incentive to discourage paying down debt, gifting, real estate purchases, or starting a business",
    wiy: "Zero. Fee is independent of asset allocation decisions.",
  },
  {
    label: "CPA, attorney, insurance coordination",
    aum: "You find and manage them yourself",
    wiy: "Vetted VFO partner network — coordinated and included",
  },
  {
    label: "Meeting frequency",
    aum: "Typically 1-2 per year",
    wiy: "Unlimited — meet as often as you need",
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
  const proj = projectFees(5_000_000, 20);
  const milestoneYears = [1, 5, 10, 15, 20];
  const rows = proj.years
    .filter((y) => milestoneYears.includes(y.year))
    .map((y) => ({
      year: y.year,
      aumPortfolio: formatCurrency(y.aumPortfolio),
      aumFee: formatCurrency(y.aumFee),
      cumAum: formatCurrency(y.cumulativeAumFees),
      wiyFee: formatCurrency(y.wiyFee),
      cumWiy: formatCurrency(y.cumulativeWiyFees),
    }));

  return {
    rows,
    totalAum: formatCurrency(proj.cumulativeAumFees),
    totalWiy: formatCurrency(proj.cumulativeWiyFees),
    feeDelta: formatCurrency(proj.feeDelta),
    portfolioBenefit: formatCurrency(proj.portfolioBenefit),
    aumEnd: formatCurrency(proj.aumEndPortfolio),
    wiyEnd: formatCurrency(proj.wiyEndPortfolio),
  };
}

export default function VsAumPage() {
  const { rows, totalAum, totalWiy, feeDelta, portfolioBenefit, aumEnd, wiyEnd } = buildFeeTable();
  const proj30 = projectFees(5_000_000, 30);

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Wealth In Yourself vs. AUM
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            The 1% fee isn&apos;t 1%. It&apos;s much more.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            At $5M, a 1% AUM fee costs you {portfolioBenefit} in portfolio value over 20 years — and {formatCurrency(proj30.portfolioBenefit)} over 30. The math is simple. The impact is not.
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

      {/* Pull Quote */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight font-[family-name:var(--font-playfair)]">
            &ldquo;The AUM model was designed in the 1980s. Better than commissions. But &lsquo;better than commissions&rsquo; is a low bar.&rdquo;
          </blockquote>
          <p className="mt-4 text-secondary font-semibold text-sm">
            &mdash; Josh St. Laurent
          </p>
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
              The math at $5M over 20 years.
            </h2>
            <p className="mt-4 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
              Fees are paid from the portfolio each year, reducing the base for future growth.
            </p>
          </div>

          {/* Summary cards — lead with portfolio benefit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Portfolio Benefit</p>
              <p className="text-3xl sm:text-4xl font-bold text-primary mt-2">{portfolioBenefit}</p>
              <p className="text-sm text-neutral-dark/60 mt-1">more in your portfolio with WIY over 20 years</p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">30-Year Benefit</p>
              <p className="text-3xl sm:text-4xl font-bold text-primary mt-2">{formatCurrency(proj30.portfolioBenefit)}</p>
              <p className="text-sm text-neutral-dark/60 mt-1">more in your portfolio with WIY over 30 years</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-warning/5 border border-warning/20 rounded-xl p-6 text-center">
              <p className="text-sm font-semibold text-warning uppercase tracking-wider">AUM Fees Paid (20yr)</p>
              <p className="text-2xl sm:text-3xl font-bold text-warning mt-2">{totalAum}</p>
              <p className="text-sm text-neutral-dark/60 mt-1">cumulative fees</p>
            </div>
            <div className="bg-success/5 border border-success/20 rounded-xl p-6 text-center">
              <p className="text-sm font-semibold text-success uppercase tracking-wider">WIY Fees Paid (20yr)</p>
              <p className="text-2xl sm:text-3xl font-bold text-success mt-2">{totalWiy}</p>
              <p className="text-sm text-neutral-dark/60 mt-1">cumulative fees</p>
            </div>
            <div className="bg-neutral-bg border border-neutral-bg rounded-xl p-6 text-center">
              <p className="text-sm font-semibold text-neutral-dark uppercase tracking-wider">Fee Delta (20yr)</p>
              <p className="text-2xl sm:text-3xl font-bold text-neutral-dark mt-2">{feeDelta}</p>
              <p className="text-sm text-neutral-dark/60 mt-1">less in fees with WIY</p>
            </div>
          </div>

          {/* Fee comparison table */}
          <div className="hidden sm:block bg-neutral-bg rounded-2xl border border-neutral-bg overflow-hidden">
            <div className="grid grid-cols-6 gap-0 bg-primary text-white text-xs font-semibold uppercase tracking-wider">
              <div className="px-4 py-3">Year</div>
              <div className="px-4 py-3 text-right">AUM Portfolio (after fee)</div>
              <div className="px-4 py-3 text-right">AUM Fee (1%)</div>
              <div className="px-4 py-3 text-right">Cum. AUM Fees</div>
              <div className="px-4 py-3 text-right">WIY Fee (flat)</div>
              <div className="px-4 py-3 text-right">Cum. WIY Fees</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.year} className={`grid grid-cols-6 gap-0 text-sm ${i % 2 === 0 ? "bg-white" : "bg-neutral-bg/50"}`}>
                <div className="px-4 py-3 font-semibold text-neutral-dark">{r.year}</div>
                <div className="px-4 py-3 text-right text-neutral-dark/70">{r.aumPortfolio}</div>
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
                <p className="font-bold text-primary mb-2">Year {r.year} &middot; AUM Portfolio: {r.aumPortfolio}</p>
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
            Assumes 7% annual portfolio growth for illustrative purposes only. Actual returns will vary. This is not a guarantee of future performance. Fees are assumed to be deducted from the portfolio annually. AUM fee is 1% of portfolio value each year (grows with portfolio). WIY fee is a flat fee based on starting net worth (does not grow with portfolio returns).
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
              The AUM model was designed in the 1980s as a step up from commissions.
              It was better. But &quot;better than commissions&quot; is a low bar.
            </p>
            <p>
              The structural problem: your advisor earns more when your investable
              account balance grows. That creates a quiet incentive to keep assets
              parked — even when moving them is the right call.
            </p>
            <p>
              Should you pay off the mortgage? Buy a rental property? Fund a
              business? Gift to your kids? Start a donor-advised fund? These are
              often the best financial decisions you can make. Every one of them
              reduces your advisor&apos;s paycheck.
            </p>
            <p>
              A flat fee based on net worth removes that conflict entirely. We get
              paid the same whether you invest it, spend it, gift it, or deploy it
              into real estate. Our only job is to help you make the right decision.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-dark/50 text-center leading-relaxed">
            This comparison uses hypothetical examples for illustrative purposes only. Past performance is not indicative of future results. Individual results will vary. Assumes 7% annual portfolio growth with fees deducted annually. Actual returns, fees, and outcomes depend on individual circumstances and market conditions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="See what your fee would actually be at Wealth In Yourself."
        subtext="Open the calculator and compare. No login, no email required."
        buttonText="Open the Calculator"
        buttonHref="/pricing#calculator"
      />
    </>
  );
}
