import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Our Process — 13 Meetings in Year One",
  description:
    "Most financial plans are a 90-minute meeting, a PDF, and an invoice. See exactly what a year of working with Wealth In Yourself looks like — 13 meetings across 4 phases.",
};

const phases = [
  {
    name: "Ground",
    timing: "Months 1-2",
    color: "border-secondary",
    bgAccent: "bg-secondary/10",
    textAccent: "text-secondary",
    meetings: [
      {
        number: 1,
        name: "Orientation & Cash Flow Mapping",
        description:
          "Meet, align on logistics, map income and expenses, set your financial baseline.",
      },
      {
        number: 2,
        name: "Envision",
        description:
          "Life planning session using the Money Quotient framework. What does your ideal life look like?",
      },
      {
        number: 3,
        name: "Engage",
        description:
          "Values deep dive. What matters most? What are you building toward?",
      },
      {
        number: 4,
        name: "Balance Sheet & Net Worth",
        description:
          "Full financial inventory. Assets, liabilities, and your net worth baseline.",
      },
    ],
  },
  {
    name: "Design",
    timing: "Months 3-5",
    color: "border-success",
    bgAccent: "bg-success/10",
    textAccent: "text-success",
    meetings: [
      {
        number: 5,
        name: "Tax Strategy Session",
        description:
          "Proactive tax planning. Entity structure, Roth conversions, deductions, estimated payments.",
      },
      {
        number: 6,
        name: "Insurance & Risk Management",
        description:
          "Review all coverage. Life, disability, umbrella, property, long-term care.",
      },
      {
        number: 7,
        name: "Investment Strategy",
        description:
          "Portfolio review. Asset allocation, risk assessment, cost analysis, rebalancing plan.",
      },
      {
        number: 8,
        name: "Estate & Legacy Planning",
        description:
          "Wills, trusts, power of attorney, healthcare directive, beneficiary audit.",
      },
    ],
  },
  {
    name: "Build",
    timing: "Months 6-9",
    color: "border-primary",
    bgAccent: "bg-primary/10",
    textAccent: "text-primary",
    meetings: [
      {
        number: 9,
        name: "Explore",
        description:
          "Real estate portfolio integration, business planning, or a specialized topic based on your needs.",
      },
      {
        number: 10,
        name: "Empower",
        description:
          "Financial therapy integration. Money scripts, behavioral patterns, decision-making frameworks.",
      },
      {
        number: 11,
        name: "Sequence Setup & Automation",
        description:
          "Cash flow automation, account organization, and system setup so your plan runs itself.",
      },
    ],
  },
  {
    name: "Evolve",
    timing: "Months 10-12",
    color: "border-warning",
    bgAccent: "bg-warning/10",
    textAccent: "text-warning",
    meetings: [
      {
        number: 12,
        name: "Enlighten",
        description:
          "Year-one review. What worked, what changed, what comes next.",
      },
      {
        number: 13,
        name: "Annual Review",
        description:
          "Comprehensive review. Net worth update, fee reassessment, next-year priorities.",
      },
    ],
  },
];

const vfoPartners = [
  {
    name: "Altruist",
    logo: "/logos/partners/altruist.svg",
    role: "Custodian",
  },
  {
    name: "RightCapital",
    logo: "/logos/partners/rightcapital.png",
    role: "Financial Planning",
  },
  {
    name: "Encore Estate Plans",
    logo: "/logos/partners/encore-estate-plans.webp",
    role: "Estate Planning",
  },
  {
    name: "Valur",
    logo: "/logos/partners/valur.svg",
    role: "Advanced Tax Strategies",
  },
  {
    name: "Monarch Money",
    logo: "/logos/partners/monarch.png",
    role: "Cash Flow Tracking",
  },
];

export default function OurProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Process
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Most financial plans are a 90-minute meeting, a PDF, and an invoice.
          </h1>
          <p className="mt-6 text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Here&apos;s what Wealth In Yourself actually looks like over a year.
            Four phases. Thirteen meetings. One flat fee.
          </p>
        </div>
      </section>

      {/* Year One Timeline */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Year One"
            title="13 meetings. 4 phases. Every area of your financial life."
            subtitle="Each phase builds on the last. By the end of Year One, you have a complete, coordinated financial system — not a binder on a shelf."
          />

          <div className="mt-14 space-y-16">
            {phases.map((phase) => (
              <div key={phase.name}>
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-12 h-12 rounded-full ${phase.bgAccent} flex items-center justify-center`}
                  >
                    <span
                      className={`text-lg font-bold ${phase.textAccent}`}
                    >
                      {phase.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {phase.name}
                    </h3>
                    <p className="text-sm text-neutral-dark/70">
                      {phase.timing}
                    </p>
                  </div>
                </div>

                {/* Meeting Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {phase.meetings.map((meeting) => (
                    <div
                      key={meeting.number}
                      className={`border-l-4 ${phase.color} bg-neutral-bg rounded-xl p-6 hover:shadow-md transition-shadow`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-full ${phase.bgAccent} flex items-center justify-center text-sm font-bold ${phase.textAccent}`}
                        >
                          {meeting.number}
                        </span>
                        <div>
                          <h4 className="font-bold text-primary">
                            {meeting.name}
                          </h4>
                          <p className="mt-1 text-sm text-neutral-dark/70 leading-relaxed">
                            {meeting.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VFO In Action */}
      <section className="bg-primary py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Virtual Family Office in Action"
            title="You don't coordinate the team. We do."
            dark
          />
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-3xl mx-auto text-center">
            When you need a cost segregation study, I don&apos;t send you to
            Google &mdash; I introduce you to the right partner, manage the
            handoff, review the output with you, and coordinate the tax and
            investment implications.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {vfoPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white/10 backdrop-blur rounded-xl p-5 text-center border border-white/10 hover:border-secondary/30 transition-all"
              >
                <div className="h-10 flex items-center justify-center mb-3">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <p className="text-sm font-semibold text-white">
                  {partner.name}
                </p>
                <p className="text-xs text-white/70 mt-1">{partner.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/virtual-family-office"
              className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
            >
              Learn more about the VFO model &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Year Two and Beyond */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Year Two and Beyond"
            title="After the first year, the rhythm changes."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-neutral-bg rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary">
                Quarterly Strategy Calls
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                Four focused check-ins per year. Adjust the plan as your life
                and business evolve.
              </p>
            </div>
            <div className="bg-neutral-bg rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary">
                Annual Comprehensive Review
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                Full net worth update, fee reassessment, and next-year
                priorities. Your fee goes down as your wealth goes up.
              </p>
            </div>
            <div className="bg-neutral-bg rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary">
                Event-Driven Planning
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                A business sale, a new property, a baby, a career change. When
                life happens, your plan adapts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Costs */}
      <section className="bg-primary py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="What This Costs"
            title="All of this — 13 meetings, VFO coordination, unlimited access — is one flat fee."
            dark
          />
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            No AUM percentage. No commissions. No surprise invoices. Your fee is
            based on net worth and declines as your wealth grows.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-block px-8 py-3.5 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
            >
              See Full Pricing
            </Link>
            <Link
              href="/calculator"
              className="inline-block px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-colors"
            >
              Calculate Your Fee
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
