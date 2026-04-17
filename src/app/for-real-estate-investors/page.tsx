import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Financial Planning for Real Estate Investors | Flat Fee Advisor",
  description:
    "Flat fee financial advisor for real estate investors. Depreciation strategy, 1031 exchange coordination, entity structuring, passive vs. active income planning, and portfolio integration — all for one flat fee.",
};

const painPoints = [
  {
    title: "Depreciation Strategy",
    description:
      "Cost segregation, bonus depreciation, recapture planning. These aren't optional conversations — they're the difference between keeping and losing six figures.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "1031 Exchanges",
    description:
      "Timing, identification rules, qualified intermediaries, and what happens when a deal falls through. We coordinate the entire process with your team.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Entity Structures",
    description:
      "LLCs, series LLCs, LPs, land trusts. The right structure protects your assets and minimizes taxes. The wrong one creates liability.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Passive vs. Active Income",
    description:
      "REPS (Real Estate Professional Status), material participation, and how your rental income is classified changes everything about your tax bill.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Self-Directed IRA / Solo 401(k)",
    description:
      "Using retirement accounts to invest in real estate. The rules are strict. The opportunities are significant.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    title: "Portfolio Integration",
    description:
      "Your real estate isn't separate from your financial plan. We integrate rental income, equity, and leverage into your total picture.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
];

const howWeWork = [
  "We understand cap rates, cash-on-cash returns, and debt service coverage.",
  "We coordinate with your CPA on depreciation and entity strategy.",
  "We build projections that account for rental income, vacancy, and capital expenditures.",
  "We help you decide: buy another property, or diversify into paper assets?",
  "Flat fee — we don't charge more because your portfolio grew.",
];

const faqs = [
  {
    question: "Do you manage real estate properties?",
    answer:
      "No. We don't manage properties, find deals, or act as brokers. We handle the financial planning side — tax strategy, entity structuring, cash flow projections, retirement planning, and investment management for your non-real-estate assets. We work alongside your property manager, CPA, and attorney.",
  },
  {
    question: "How do you handle the tax side of real estate?",
    answer:
      "We build proactive tax strategies around your real estate holdings. Depreciation schedules, 1031 exchange planning, REPS qualification, passive activity rules — we model all of it. Then we coordinate directly with your CPA so nothing gets missed at filing time. We don't file taxes. We make sure your tax strategy is intentional, not reactive.",
  },
  {
    question: "I already have a CPA who specializes in real estate. Why do I need you?",
    answer:
      "Your CPA handles compliance — filing returns and keeping you legal. We handle strategy — multi-year tax projections, entity optimization, when to sell vs. hold vs. exchange, and how your real estate fits into your broader financial life. The best outcomes happen when a good CPA and a good planner are working together. We make that coordination seamless.",
  },
  {
    question: "What does your flat fee include for real estate investors?",
    answer:
      "Everything. Tax strategy, investment management for your non-real-estate portfolio, 1031 exchange coordination, entity structure review, retirement planning, insurance review, and ongoing advice. One fee. No AUM percentage. No extra charges when you close on a new property.",
  },
  {
    question: "Can you help me decide between buying more real estate and investing in the market?",
    answer:
      "Yes. This is one of the most important questions we help clients answer. We model both scenarios — including leverage, tax impact, liquidity, concentration risk, and your personal goals. The right answer is different for everyone, and it changes over time. We give you the numbers so you can make the call with confidence.",
  },
  {
    question: "Do you work with investors who only have a few properties?",
    answer:
      "Yes. Whether you have two rentals or twenty, the planning needs are real. Entity structure, depreciation strategy, and portfolio integration matter at every scale. Most of our real estate clients have between 3 and 100 properties, but we work with investors at all levels.",
  },
];

export default function ForRealEstateInvestorsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            For Real Estate Investors
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            Real estate made you wealthy. Now protect it.
          </h1>
          <p className="mt-6 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Most advisors see real estate as an alternative asset class. We see
            it as the engine of your financial life — and we plan around it
            accordingly.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Handle"
            title="The planning your current advisor probably isn't doing."
            subtitle="Real estate investors have specific, technical planning needs. We know what they are because we work with them every day."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-neutral-bg p-8 hover:shadow-lg hover:border-secondary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
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
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-dark/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-10 sm:py-14 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we work with real estate investors"
            subtitle="We speak your language. No blank stares when you mention cap rates or cost segregation."
          />

          <div className="mt-14 space-y-6">
            {howWeWork.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-6 border border-secondary/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-neutral-dark leading-relaxed text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Questions From Real Estate Investors"
      />

      {/* CTA */}
      <CTASection
        headline="Your portfolio deserves more than a generic financial plan."
        subtext="Book a 15-minute intro call. We'll talk about your properties, your goals, and whether we're the right fit."
      />
    </main>
  );
}
