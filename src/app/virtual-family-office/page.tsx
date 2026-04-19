import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

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
    desc: "Your advisor manages your brokerage account and sends you a quarterly report. That\u2019s not planning. You need someone who sees your tax strategy, your estate, your insurance, and your investments as one system. That\u2019s what we do.",
  },
];

const faqs = [
  {
    question: "What exactly is a Virtual Family Office?",
    answer:
      "A traditional family office is a private firm that manages every aspect of a wealthy family\u2019s financial life \u2014 investments, taxes, estate, insurance, philanthropy \u2014 with a dedicated team under one roof. They typically require $50M\u2013$100M+ in assets and cost $500K\u2013$1M+ per year. A Virtual Family Office delivers the same coordinated approach through one advisor who quarterbacks your existing team \u2014 your CPA, your estate attorney, your insurance professional \u2014 for a flat fee that\u2019s a fraction of the cost.",
  },
  {
    question: "How is this different from a regular financial advisor?",
    answer:
      "Most advisors manage your investments and call it a day. They don\u2019t coordinate with your CPA on tax strategy. They don\u2019t review your estate documents. They don\u2019t audit your insurance coverage. A VFO model covers all of those domains and makes sure every decision is coordinated. Your tax strategy informs your investment plan. Your estate plan reflects your business structure. Nothing operates in isolation.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our flat fee is based on the complexity of your financial life \u2014 measured by total net worth (excluding your primary residence). Fees start at $10,000 per year. Compare that to a traditional family office ($500K+/year) or an AUM advisor charging 1% on a $5M portfolio ($50,000/year for less scope). You get more coordination for less cost, with zero conflicts of interest.",
  },
  {
    question: "Do you replace my CPA and attorney?",
    answer:
      "No. We work alongside them. Your CPA handles tax compliance. Your attorney handles legal documents. We sit in the middle and make sure every professional on your team is working from the same strategy. Think of us as the general contractor for your financial life \u2014 we coordinate all the specialists so nothing falls through the cracks.",
  },
  {
    question: "What if I don't have a CPA or estate attorney yet?",
    answer:
      "We\u2019ll help you find the right ones. Part of the VFO model is building your team \u2014 not just managing it. We have relationships with tax professionals and estate attorneys who work well in a coordinated model, and we\u2019ll make introductions based on your specific needs.",
  },
  {
    question: "Is this only for business owners?",
    answer:
      "No. The VFO model works for anyone whose financial life has real complexity \u2014 business owners, real estate investors, FIRE pursuers, executives with stock compensation, and families who\u2019ve simply outgrown their current advisor. If you have decisions that span tax, investments, estate, and insurance, this model was built for you.",
  },
];

export default function VirtualFamilyOfficePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
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
            decades &mdash; a tax strategist, an investment manager, an estate
            attorney, an insurance analyst, all talking to each other. We built
            that same infrastructure into one flat-fee advisory relationship.
            No eight-figure minimum required.
          </p>
        </div>
      </section>

      {/* What Is a VFO */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Concept"
            title="What is a Virtual Family Office?"
          />
          <div className="mt-10 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              Traditional family offices serve families with $50M&ndash;$100M+.
              They employ a full-time team &mdash; tax strategists, investment
              managers, estate attorneys, insurance analysts &mdash; all
              coordinated under one roof. The cost? $500K&ndash;$1M+ per year.
            </p>
            <p>
              You don&apos;t need to spend that much. But you do need
              the coordination.
            </p>
            <p>
              A Virtual Family Office delivers that same coordinated approach
              through one advisor who quarterbacks your entire team. Your CPA,
              estate attorney, insurance professionals, and investment strategy
              &mdash; all working from the same playbook, with one person making
              sure nothing falls through the cracks.
            </p>
          </div>
        </div>
      </section>

      {/* How It's Different */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Difference"
            title="This isn&rsquo;t what most advisors do."
            dark
          />
          <div className="mt-10 space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              Most advisors manage investments and call it financial planning.
              They charge 1% of your assets, which means their incentive is to
              gather more of your money &mdash; not to help you use it well,
              minimize taxes, or design your life. Your estate plan says one
              thing, your investment account says another, and nobody is
              making sure they agree.
            </p>
            <p className="font-semibold text-white">
              A VFO approach is different:
            </p>
          </div>
          <ul className="mt-6 space-y-4">
            {vfoDifferences.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-secondary flex-shrink-0" />
                <span className="text-lg text-white/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What You Get"
            title="Everything under one roof."
            subtitle="No piecemeal advice. No gaps. Every domain of your financial life, coordinated."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vfoServices.map((service, idx) => {
              const icons = [
                "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              ];
              return (
                <div
                  key={service.title}
                  className="group bg-white rounded-xl p-6 border-l-4 border-l-secondary/40 border border-neutral-bg hover:border-secondary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <svg
                      className="w-5 h-5 text-secondary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={icons[idx]} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who This Is For"
            title="Built for people with real complexity."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whoItsFor.map((persona) => {
              const personaIcons: Record<string, string> = {
                "Business Owners": "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                "Real Estate Investors": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                "FIRE Pursuers": "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
              };
              const icon = personaIcons[persona.title] || "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6";
              return (
                <div
                  key={persona.title}
                  className="group bg-neutral-bg rounded-xl p-6 border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    {persona.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                    {persona.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Portal */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Command Center"
            title="Everything lives in one place — your private client portal."
            subtitle="No chasing emails. No digging through PDFs. Your entire financial life — dashboard, journey map, action items, and wins — all in one secure portal you can access anytime."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Live Dashboard",
                desc: "See your net worth, upcoming meetings, and open action items at a glance. Updated in real time.",
                icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
              },
              {
                title: "Journey Map",
                desc: "Track your progress through every phase of your financial plan. Know exactly where you are and what comes next.",
                icon: "M9 6.75V15m0 0l3-3m-3 3l-3-3m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Wins Tracker",
                desc: "Every tax saved, every strategy implemented, every milestone hit — documented and visible so you can see the value compounding.",
                icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-dark/50">
            Existing clients log in at{" "}
            <a href="https://portal.wealthinyourself.com" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-secondary transition-colors underline">portal.wealthinyourself.com</a>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Questions About the Virtual Family Office"
      />

      <CTASection
        headline="Ready for an advisor who sees the whole picture?"
        subtext="Book a 15-minute intro call. No pitch. No pressure. Just a conversation about what\u2019s working, what\u2019s not, and whether this model fits your life."
      />
    </>
  );
}
