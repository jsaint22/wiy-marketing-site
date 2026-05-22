import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Case Studies",
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
      "Founder of a B2B SaaS company, $4M net worth, $800K W-2-equivalent income, operating as a Delaware C-Corp with no employer-sponsored retirement plan. Paying 37% federal + 3.8% NIIT on nearly all income.",
    challenge:
      "Leaving $69K+ of annual tax-advantaged retirement contributions on the table. C-Corp structure creating double taxation on distributions. No quarterly tax planning cadence with CPA.",
    approach: [
      "Coordinated S-Corp election with CPA and set reasonable salary at $250K — reducing self-employment tax on remaining distributions",
      "Established Solo 401(k) with $69,000 in combined employee/employer contributions (Year 1)",
      "Built quarterly tax projection cadence with coordinated CPA",
      "Rebalanced retirement allocation from 100% target-date fund to low-cost, tax-efficient index portfolio",
    ],
    outcome:
      "$47,000 in year-one tax savings between S-Corp election and retirement contributions. Ongoing annual tax advantage of ~$35,000. WIY annual fee: $17,000.",
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
      "Real estate investor with 14 residential rental properties across three states. $6M net worth. Still working a W-2 day job at $180K. Self-managing most properties. No formal asset protection strategy.",
    challenge:
      "Zero cost segregation studies on any property. Missed a 1031 exchange on a recent $400K sale — triggering $80K in capital gains tax. Entity structure was a patchwork: some properties in LLCs, some held personally, no series LLC, no umbrella policy.",
    approach: [
      "Coordinated cost segregation studies on 4 highest-basis properties (combined basis: $2.1M)",
      "Structured 1031 exchange for a pending $520K sale into two replacement properties",
      "Coordinated with qualified legal counsel to establish series LLC structure with each property in its own series",
      "Integrated accelerated depreciation into overall tax strategy to offset W-2 income via Real Estate Professional Status analysis",
    ],
    outcome:
      "$62,000 in Year 1 tax deferral through cost segregation. Additional $80,000 deferred via 1031 exchange. Working with qualified legal counsel, a series LLC structure was established — providing legal separation between properties. WIY annual fee: $21,000.",
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
      "Dual-income couple, both 48, combined $340K income. $2.8M net worth: $1.6M in traditional 401(k)s, $400K taxable brokerage, $200K Roth, $600K in home equity. Target: retire at 52.",
    challenge:
      "No withdrawal sequencing plan. $1.6M in pre-tax accounts with no Roth conversion strategy — meaning a massive tax bomb at RMD age. Healthcare costs for 13 years of pre-Medicare coverage completely unmodeled. Original plan ran out of money at age 81.",
    approach: [
      "Built a 40-year withdrawal sequencing model across all account types with Monte Carlo stress testing",
      "Designed an 8-year Roth conversion ladder targeting $200K/year in conversions during the low-income window between retirement and Social Security",
      "Modeled geographic arbitrage: keep Tahoe primary residence, spend 4 months/year in Portugal at ~40% lower cost of living",
      "Built healthcare bridge plan: ACA eligibility by managing MAGI below 400% FPL during conversion years, with expat insurance as backup",
    ],
    outcome:
      "7 additional years of projected financial runway vs. their original plan (money lasts to 88, not 81), based on Monte Carlo analysis with historical return assumptions. $150K+ in projected lifetime tax savings from the Roth conversion ladder, dependent on future tax rates and conversion timing. Clear month-by-month retirement income plan they can actually follow. WIY annual fee: $13,500.",
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
            Real planning. Real results.
          </h1>
          <p className="mt-6 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Three planning scenarios. Three different financial lives. Each illustrates how coordinated tax, investment, and life planning creates measurable value.
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
          <p className="text-sm text-neutral-dark/70 text-center leading-relaxed">
            These case studies are hypothetical composites created for illustrative purposes only. They do not represent the experience of any actual client. The scenarios, strategies, and outcomes described are based on specific assumed circumstances and may not be applicable to your situation. Tax savings figures are estimates based on tax law in effect at the time of analysis; tax laws change and individual results depend on personal circumstances, implementation, and applicable law at the time of filing. Financial projections involve assumptions about future market conditions, tax rates, and spending patterns that may not materialize. No guarantee of similar outcomes is made or implied. Past results — whether actual or illustrative — do not guarantee future performance. Wealth In Yourself is a registered investment adviser. This content does not constitute personalized investment, tax, or legal advice. Consult qualified professionals regarding your specific situation.
          </p>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
