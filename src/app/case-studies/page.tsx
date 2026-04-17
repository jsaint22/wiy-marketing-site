import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Case Studies | Wealth In Yourself — Flat-Fee Fiduciary Financial Planning",
  description:
    "Anonymized case studies showing how Wealth In Yourself approaches complex financial planning situations — from tech exits and real estate portfolios to FIRE planning.",
};

const caseStudies = [
  {
    label: "The Tech Founder",
    netWorth: "$4M",
    highlight: "$47K saved in Year 1",
    highlightColor: "text-success",
    situation:
      "Founder of a SaaS company, $4M net worth, $800K annual income, Delaware C-Corp, no retirement plan, paying maximum marginal tax rate.",
    challenge:
      "Leaving $40K+ of tax-advantaged retirement savings on the table every year. Poorly structured entity choice for income type.",
    approach: [
      "Restructured to S-Corp election for reasonable salary optimization",
      "Set up Solo 401(k) with profit-sharing contributions",
      "Coordinated with tax strategist for quarterly review cadence",
      "Rebalanced retirement allocation to align with overall portfolio",
    ],
    outcome:
      "$47,000 in year-one tax savings. Ongoing annual tax advantage of ~$35,000. Solo 401(k) balance growing at maximum contribution rate.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    segment: "Business Owners",
    segmentHref: "/for-business-owners",
  },
  {
    label: "The RE Investor",
    netWorth: "$6M",
    highlight: "$142K tax deferral",
    highlightColor: "text-success",
    situation:
      "Real estate investor with 14 properties across three states, $6M net worth, W-2 income from day job, self-managing most properties.",
    challenge:
      "No cost segregation studies in place. Missed 1031 opportunity on recent sale ($80K capital gains). Entity structure mixed \u2014 some LLCs, some personal, no asset protection strategy.",
    approach: [
      "Coordinated cost seg studies on 4 highest-basis properties",
      "Structured 1031 exchange for pending sale",
      "Established series LLC structure for asset protection",
      "Integrated depreciation optimization into overall tax strategy",
    ],
    outcome:
      "$62,000 in Year 1 tax deferral through cost seg. Additional $80,000 deferred through 1031. Liability protection gap closed before a tenant lawsuit that came in Year 2.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    segment: "Real Estate Investors",
    segmentHref: "/for-real-estate-investors",
  },
  {
    label: "The FIRE Couple",
    netWorth: "$2.8M",
    highlight: "7 extra years of runway",
    highlightColor: "text-secondary",
    situation:
      "Couple, late 40s, $2.8M net worth, planning to retire at 52. Heavy in traditional 401(k)s, some taxable brokerage, modest Roth balance.",
    challenge:
      "Withdrawal sequencing plan didn\u2019t exist. Roth conversion opportunity window (low-income years between career and Social Security) was being wasted. Healthcare costs for pre-65 retirement unaccounted for.",
    approach: [
      "Built 40-year withdrawal sequencing model",
      "Designed 8-year Roth conversion ladder",
      "Analyzed geographic arbitrage options (kept Tahoe home, bought a condo in Portugal for 4 months/year)",
      "Coordinated healthcare planning for ACA eligibility vs. expat insurance",
    ],
    outcome:
      "7 additional years of financial runway vs. prior plan. $150K+ lifetime tax savings from Roth conversion ladder. Clear geographic-optionality plan they didn\u2019t have before.",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    segment: "FIRE Followers",
    segmentHref: "/for-fire-followers",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Case Studies
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            Real planning. Quantified results.
          </h1>
          <p className="mt-6 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Three scenarios. Three different financial lives. One thing in
            common: the math worked.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div
                key={study.label}
                className="rounded-2xl border border-neutral-bg overflow-hidden"
              >
                {/* Header */}
                <div className="bg-primary px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={study.icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {study.label}
                      </h3>
                      <p className="text-white/60 text-sm">
                        {study.netWorth} net worth &middot;{" "}
                        <Link href={study.segmentHref} className="text-secondary hover:text-secondary/80 transition-colors">
                          {study.segment}
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg px-4 py-2">
                    <p className={`text-lg font-bold ${study.highlightColor}`}>
                      {study.highlight}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        Situation
                      </h4>
                      <p className="text-neutral-dark/70 leading-relaxed">
                        {study.situation}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                        Challenge
                      </h4>
                      <p className="text-neutral-dark/70 leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
                      What We Did
                    </h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {study.approach.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-success mt-0.5 font-bold flex-shrink-0">&#10003;</span>
                          <span className="text-neutral-dark/70 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 bg-success/5 border border-success/20 rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-success uppercase tracking-wider mb-2">
                      Outcome
                    </h4>
                    <p className="text-primary font-semibold leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="bg-neutral-bg py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-neutral-dark/50 text-center leading-relaxed">
            Illustrative case study based on typical client scenarios. Names
            and specific details have been anonymized and aggregated. Individual
            results vary based on personal circumstances. Not a guarantee of
            future performance or outcomes. Past results do not guarantee future
            performance.
          </p>
        </div>
      </section>

      {/* See Your Math CTA */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Your Turn"
            title="See what the math looks like for you."
          />
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing#calculator"
              className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Open the Fee Calculator
            </Link>
            <Link
              href="/vs-aum"
              className="px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
            >
              Compare Wealth In Yourself vs. AUM
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
