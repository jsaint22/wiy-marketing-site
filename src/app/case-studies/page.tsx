import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Case Studies | WIY — Flat-Fee Fiduciary Financial Planning",
  description:
    "Anonymized case studies showing how WIY approaches complex financial planning situations — from tech exits and real estate portfolios to FIRE planning and corporate-to-consulting transitions.",
};

const caseStudies = [
  {
    label: "The Tech Founder",
    situation:
      "Built a SaaS company over seven years and completed a $4M exit. Proceeds were a mix of cash and earnout payments spread across multiple tax years.",
    challenge:
      "Needed entity restructuring, tax optimization on the sale proceeds, and a plan for what comes next. Without proactive planning, a significant portion of the exit would have gone to federal and state taxes in a single year.",
    approach:
      "Multi-year Roth conversion strategy to take advantage of lower-income years post-exit. Charitable giving structure using a donor-advised fund to offset concentrated gains. Coast FIRE plan that allowed for part-time advisory work without jeopardizing long-term financial independence.",
  },
  {
    label: "The Real Estate Portfolio",
    situation:
      "Owned 12 rental units across 3 states with a total portfolio value of approximately $6M. Income was being reported as passive across the board.",
    challenge:
      "Passive income classification was wrong, costing roughly $40K per year in unnecessary taxes. Entity structure had grown organically with no coordination between properties or states.",
    approach:
      "REPS (Real Estate Professional Status) qualification analysis to determine eligibility for active income treatment. Cost segregation studies on qualifying properties to accelerate depreciation. Entity restructuring to improve liability protection and simplify multi-state tax filing.",
  },
  {
    label: "The Corporate Escapee",
    situation:
      "Left a $350K corporate job to start a consulting business. Had a mix of employer 401(k), RSUs, and deferred compensation that all needed to be unwound on different timelines.",
    challenge:
      "Needed to transition from employer benefits to a self-employed structure without creating unnecessary tax events or coverage gaps. COBRA was expiring, deferred comp was paying out, and there was no disability coverage in place.",
    approach:
      "Solo 401(k) with mega backdoor Roth contributions to maximize tax-advantaged savings. HSA optimization paired with a high-deductible health plan. Individual disability insurance to replace employer-provided coverage. Cash flow projection mapping consulting revenue against fixed expenses across the first 18 months.",
  },
  {
    label: "The FIRE Couple",
    situation:
      "Combined portfolio of $2.5M across taxable brokerage, traditional IRAs, and Roth accounts. Both partners in their late 30s, both wanting to leave corporate work by 40.",
    challenge:
      "Current withdrawal strategy would pull from traditional IRAs first, triggering unnecessary taxes and potentially losing ACA premium subsidies. No coordination between accounts or tax brackets.",
    approach:
      "Roth conversion ladder timed to fill lower tax brackets during the early retirement years. ACA subsidy optimization by managing modified adjusted gross income through strategic account selection. Phased retirement timeline that allowed one partner to step away first while the other maintained employer healthcare coverage.",
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-bg py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Case Studies
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            Real planning. Real results. Real people.
          </h1>
          <p className="mt-6 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            These are anonymized examples of how we&apos;ve helped clients
            navigate complex financial situations. Names and identifying details
            have been changed.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Scenarios"
            title="How we approach complex situations."
          />

          <div className="mt-16 space-y-12">
            {caseStudies.map((study) => (
              <div
                key={study.label}
                className="rounded-2xl border border-neutral-bg p-8 sm:p-10 hover:shadow-lg hover:border-secondary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">
                    {study.label}
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                      Situation
                    </h4>
                    <p className="text-neutral-dark/70 leading-relaxed">
                      {study.situation}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-neutral-dark/70 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-2">
                      Planning Approach
                    </h4>
                    <p className="text-neutral-dark/70 leading-relaxed">
                      {study.approach}
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
            These case studies are hypothetical examples for illustrative
            purposes only. They do not represent actual client results and should
            not be construed as a guarantee of future performance.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
}
