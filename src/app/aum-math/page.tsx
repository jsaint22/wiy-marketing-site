import type { Metadata } from "next";
import EmailCapture from "@/components/EmailCapture";
import CTASection from "@/components/CTASection";
import { projectFees, formatUSD } from "@/lib/pdf/fee-math";

export const metadata: Metadata = {
  title: "The AUM Math — What 1% Actually Costs You",
  description:
    "A free 12-page report showing what AUM fees actually cost over 20 and 30 years. At $5M, the compounded difference is $2.4M over 20 years and $7M over 30. See the math.",
};

export default function AumMathPage() {
  const r5m20 = projectFees(5_000_000, 20);
  const r5m30 = projectFees(5_000_000, 30);

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm tracking-wide uppercase">
            Free Report
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            1% is the most expensive sentence in wealth management.
          </h1>
          <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            &ldquo;It&rsquo;s just one percent.&rdquo; That&rsquo;s what they
            say. This 12-page report shows what that sentence actually costs you
            over 20 and 30 years — at $1M, $5M, $10M, and $25M.
          </p>
        </div>
      </section>

      {/* Preview numbers */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">
            A preview of the math
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-neutral-bg rounded-xl p-6 text-center">
              <p className="text-xs font-semibold text-neutral-dark/70 uppercase tracking-wider">
                $5M over 20 years
              </p>
              <p className="text-2xl font-bold text-primary mt-2">
                {formatUSD(r5m20.portfolioBenefit)}
              </p>
              <p className="text-xs text-neutral-dark/70 mt-1">
                more in your portfolio with flat fees
              </p>
            </div>
            <div className="bg-neutral-bg rounded-xl p-6 text-center">
              <p className="text-xs font-semibold text-neutral-dark/70 uppercase tracking-wider">
                $5M over 30 years
              </p>
              <p className="text-2xl font-bold text-primary mt-2">
                {formatUSD(r5m30.portfolioBenefit)}
              </p>
              <p className="text-xs text-neutral-dark/70 mt-1">
                more in your portfolio with flat fees
              </p>
            </div>
            <div className="bg-neutral-bg rounded-xl p-6 text-center">
              <p className="text-xs font-semibold text-neutral-dark/70 uppercase tracking-wider">
                Year 1 at $5M
              </p>
              <p className="text-2xl font-bold text-primary mt-2">
                $29,000
              </p>
              <p className="text-xs text-neutral-dark/70 mt-1">
                saved in fees — every single year
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-neutral-dark/70">
            7% annual growth assumed. Fees paid from portfolio. Full methodology in the report.
          </p>
        </div>
      </section>

      {/* What's in the report */}
      <section className="py-10 sm:py-12 bg-neutral-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-6">
            What&apos;s in the report
          </h2>
          <ul className="space-y-3">
            {[
              "How AUM fees actually work — and the compounding cost nobody shows you",
              "Year 1 fee comparison at $1M, $5M, $10M, and $25M",
              "20-year and 30-year portfolio projections with bar charts",
              "Why fiduciary duty doesn't prevent this (the structural conflict)",
              "What you could do with the savings (real estate, early retirement, generational wealth)",
              "Full methodology — transparent assumptions, no tricks",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-secondary shrink-0" />
                <span className="text-neutral-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Email capture */}
      <EmailCapture />

      <CTASection />
    </main>
  );
}
