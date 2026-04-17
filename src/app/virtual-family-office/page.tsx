import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Virtual Family Office",
  description:
    "A Virtual Family Office delivers coordinated tax, investment, insurance, estate, and business planning through one flat-fee advisor. The same infrastructure ultra-wealthy families have used for decades — now accessible to you.",
};

const vfoServices = [
  {
    title: "Financial Life Planning",
    desc: "Values-based, financial therapy informed. We start with your life, then build the numbers around it.",
  },
  {
    title: "Proactive Tax Strategy & CPA Coordination",
    desc: "We don\u2019t wait until April. Your tax strategy drives decisions year-round, and we work directly with your CPA.",
  },
  {
    title: "Evidence-Based Investment Management",
    desc: "No stock picks. No market timing. A disciplined, research-backed portfolio built around your actual goals.",
  },
  {
    title: "Insurance Audit & Recommendations",
    desc: "Most people are over-insured in the wrong places and under-insured where it matters. We fix that.",
  },
  {
    title: "Estate Planning Coordination",
    desc: "We quarterback your estate attorney relationship so your documents, beneficiaries, and titling all match your plan.",
  },
  {
    title: "Business Owner Planning",
    desc: "Entity structure, retirement plans, tax optimization, and exit strategy \u2014 all coordinated under one roof.",
  },
  {
    title: "Real Estate Investor Planning",
    desc: "Depreciation strategies, 1031 exchanges, entity structuring, and cash flow analysis across your portfolio.",
  },
  {
    title: "Ongoing Monitoring & Adjustments",
    desc: "Life changes. Your plan changes with it. We proactively review and adjust \u2014 you don\u2019t have to ask.",
  },
];

const vfoDifferences = [
  "Starts with your life, not your portfolio",
  "Coordinates across all financial domains \u2014 tax, estate, insurance, investments, business",
  "Charges a flat fee \u2014 no conflicts",
  "Acts as the quarterback, not just the investment manager",
  "Proactively identifies opportunities instead of waiting for you to ask",
];

const whoItsFor = [
  {
    title: "Business Owners",
    desc: "Complex tax situations, entity structuring, retirement plan design, and eventual exit planning. You need someone who sees the whole board.",
  },
  {
    title: "Real Estate Investors",
    desc: "Multiple entities, depreciation schedules, 1031 exchanges, and cash flow decisions that affect your entire financial picture.",
  },
  {
    title: "FIRE Pursuers",
    desc: "You need more than a savings rate and a spreadsheet. You need a comprehensive exit strategy \u2014 tax-efficient drawdown, healthcare, insurance gaps, and a plan that actually works.",
  },
  {
    title: "People Who\u2019ve Outgrown Their Advisor",
    desc: "Or never had one worth keeping. You know you need coordination. You just haven\u2019t found someone who does it right.",
  },
];

export default function VirtualFamilyOfficePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            The Model
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            A Virtual Family Office.
            <br />
            For the rest of us.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            Ultra-wealthy families have had coordinated financial teams for
            decades. We built the same infrastructure &mdash; tax, investments,
            insurance, estate, business planning &mdash; into one flat-fee
            advisory relationship.
          </p>
        </div>
      </section>

      {/* What Is a VFO */}
      <section className="bg-neutral-bg py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Concept"
            title="What is a Virtual Family Office?"
          />
          <div className="mt-10 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              Traditional family offices serve families with $50M&ndash;$100M+.
              They employ a team of specialists &mdash; tax strategists,
              investment managers, estate attorneys, insurance analysts &mdash;
              all coordinated under one roof.
            </p>
            <p>The problem? Most people can&apos;t afford that.</p>
            <p>
              A Virtual Family Office delivers the same coordinated approach
              through one advisor who quarterbacks the entire team. Your CPA,
              estate attorney, insurance agent, and investment strategy &mdash;
              all working from the same playbook.
            </p>
          </div>
        </div>
      </section>

      {/* How It's Different */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Difference"
            title="This isn&rsquo;t what most advisors do."
          />
          <div className="mt-10 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              Most advisors manage investments and call it financial planning.
              They charge 1% of your assets, which means their incentive is to
              gather more assets &mdash; not to help you spend your money well,
              minimize taxes, or design your life.
            </p>
            <p className="font-semibold text-primary">
              A VFO approach is different:
            </p>
          </div>
          <ul className="mt-6 space-y-4">
            {vfoDifferences.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                <span className="text-lg text-neutral-dark/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-neutral-bg py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What You Get"
            title="Everything under one roof."
            subtitle="No piecemeal advice. No gaps. Every domain of your financial life, coordinated."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vfoServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-neutral-bg"
              >
                <h3 className="text-lg font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who This Is For"
            title="Built for people with real complexity."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whoItsFor.map((persona) => (
              <div
                key={persona.title}
                className="bg-neutral-bg rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-primary">
                  {persona.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {persona.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready for an advisor who sees the whole picture?"
        subtext="Book a 30-minute intro call. No pitch. No pressure. Just a conversation about what matters to you."
      />
    </>
  );
}
