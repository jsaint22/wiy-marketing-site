import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Financial Planning for Business Owners",
  description:
    "Flat-fee, fiduciary financial planning for $2M–$10M revenue founders. Coordinated tax, entity, retirement, cash flow, and exit strategy for S-Corp, LLC, and C-Corp owners.",
};

const painPoints = [
  {
    title: "Uneven Income",
    description:
      "A $400K year followed by a $150K year. Distributions in Q4 that don’t show up in your personal account until January. We build cash-flow plans that bend with your revenue — variable contribution schedules, reserve thresholds, and tax projections across multiple income scenarios.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-6L16.5 16m0 0L12 10.5m4.5 5.5V3" />
      </svg>
    ),
  },
  {
    title: "Tax Complexity",
    description:
      "S-Corp vs. C-Corp vs. LLC. Reasonable compensation rules. QBI deduction phase-outs. Retirement plan contribution limits that change based on your entity type. Your CPA handles the filing. We handle the strategy that makes filing day a lot less painful.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
    ),
  },
  {
    title: "Entity Structuring",
    description:
      "The right entity structure can save you six figures over a decade. The wrong one costs you every April.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Retirement Plan Design",
    description:
      "Solo 401(k), SEP IRA, Defined Benefit plans, cash balance plans. Each shelters a different ceiling of income; the right structure for your entity and revenue can defer $100K+ per year. We run the numbers on every option and design the plan that fits.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Exit Planning",
    description:
      "Whether you’re selling in 2 years or 20, your exit strategy should start now. Valuation strategy, deal structure, §1202 / QSBS qualification, installment sale analysis, and the question nobody asks until it’s too late: what does your life look like after the wire hits?",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
    ),
  },
  {
    title: "Cash Flow Management",
    description:
      "You have $200K sitting in your business account. Do you reinvest, distribute, or fund a retirement plan? The answer changes every quarter. We build the framework so you stop guessing and start deciding with confidence.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const howWeWork = [
  {
    title: "The week a $400K invoice clears.",
    body: "We model the tax hit, decide whether to defer estimated payments, and plan the cash deployment between operating account, retirement contribution, and personal savings — before the money sits idle.",
  },
  {
    title: "The month you’re considering a retirement plan restatement.",
    body: "We model Solo 401(k) vs. SEP IRA vs. cash balance vs. Defined Benefit, project the 5-year tax savings against the administrative cost, and coordinate with the TPA to get the structure built and funded on time.",
  },
  {
    title: "The quarter your business throws off more cash than your salary can absorb.",
    body: "We design the personal-and-business cash flow architecture so excess capital deploys to its highest-return purpose — debt reduction, real estate, market investment, or strategic retained business cash — with the tax timing handled.",
  },
  {
    title: "The year you start thinking about exit.",
    body: "We structure the entity for §1202 / QSBS exemption qualification, model the tax burden of a stock vs. asset sale, coordinate with M&A counsel, and bring in the right tax attorney before the LOI lands — not after.",
  },
  {
    title: "Every April, October, and December.",
    body: "Multi-year tax projections, not just this year’s return. Compensation strategy across federal, state, and self-employment taxes. Stress-tests against a 30% revenue dip. One flat fee, coordinated with your CPA and attorney so every decision is informed by the full picture.",
  },
];

const faqs = [
  {
    question: "Do you replace my CPA or attorney?",
    answer:
      "No. We work alongside them. Your CPA handles compliance and filing. Your attorney handles legal structure. We sit in the middle and make sure every decision is coordinated — so your tax strategy, entity structure, retirement plan, and investment approach actually work together instead of in silos.",
  },
  {
    question: "What types of business owners do you work with?",
    answer:
      "We work with founders, solo operators, and small business owners across industries — typically $2M–$10M in revenue and earning $200K+ through the business. S-Corp owners, LLC members, C-Corp shareholders. If your financial life is intertwined with your business, that’s exactly who we built this for.",
  },
  {
    question: "How does your flat fee work as my business and net worth grow?",
    answer:
      "Your fee is tied to the complexity of your situation, not the size of your portfolio. We set it based on the scope of work — entity strategy, multi-year tax projections, retirement plan design, exit planning, investment coordination — and revisit annually as your situation evolves. When your business scales, your planning gets more sophisticated, not arbitrarily more expensive.",
  },
  {
    question: "Can you help me set up a retirement plan for my business?",
    answer:
      "Absolutely. We design retirement plans — Solo 401(k), SEP IRA, Defined Benefit, and cash balance plans — based on your income, entity type, and how aggressively you want to defer taxes. We run the math across every structure and recommend the one that shelters the most income for your specific situation.",
  },
  {
    question: "I’m thinking about selling my business. When should I start planning?",
    answer:
      "Yesterday. But today works too. Exit planning isn’t a six-month project — it’s a multi-year process that involves valuation strategy, §1202 / QSBS qualification, tax-efficient deal structure, and figuring out what your financial life looks like after the sale. The earlier you start, the more options you have.",
  },
  {
    question: "What if my income is unpredictable year to year?",
    answer:
      "That’s normal for business owners, and it’s exactly why generic financial plans fail. We build flexible plans with cash reserve strategies, variable contribution schedules, and tax projections across multiple income scenarios. Your plan should bend with your business — not break.",
  },
];

export default function ForBusinessOwnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            For Business Owners
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Your business is growing. Your planning should be growing with it.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
            You have an entity, a CPA, a 401(k), and a brokerage account. What
            you don&apos;t have is one person coordinating the tax, entity,
            retirement, cash flow, and exit-planning decisions that compound
            over your next 5–10 years.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Real Challenges"
            title="Business owner finances aren&apos;t simple. Your planning shouldn&apos;t be either."
            subtitle="These are the problems we solve every day &mdash; because we&apos;ve seen what happens when they go unaddressed."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-white rounded-xl p-6 border border-neutral-bg hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">{point.icon}</div>
                <h3 className="text-lg font-bold text-primary">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="Here&apos;s what we actually do, by the calendar."
            subtitle="We&apos;ve built our process around the real moments that drive your tax, cash flow, and wealth outcomes &mdash; not a generic annual review cycle."
          />
          <div className="mt-12 space-y-6 max-w-2xl mx-auto">
            {howWeWork.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary leading-snug">
                    {item.title}
                  </p>
                  <p className="mt-1 text-base text-neutral-dark/80 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Credibility Block */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="border-l-4 border-secondary pl-6 py-2 text-xl font-semibold text-primary italic">
            &ldquo;Most business owners don&apos;t have a financial plan. They
            have a tax return and a brokerage account. Those aren&apos;t the
            same thing.&rdquo;
          </blockquote>
          <p className="mt-6 text-neutral-dark/70 text-lg leading-relaxed">
            A real plan ties together entity structure, retirement plan design,
            cash flow architecture, investment strategy, and exit prep —
            under one coordinated framework. Done well, proactive tax strategy
            alone compounds into six figures over a career.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Questions Business Owners Ask Us"
        faqs={faqs}
      />

      {/* Case Study Link */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Case Study</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            A tech founder saved $47K in Year 1.
          </h2>
          <p className="mt-3 text-neutral-dark/70">
            S-Corp election, Solo 401(k), and cost segregation — coordinated under one plan.
          </p>
          <Link href="/case-studies" className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition-colors">
            Read the full case study &rarr;
          </Link>
          <p className="mt-4 text-[11px] text-neutral-dark/50 leading-snug max-w-md mx-auto">
            Hypothetical composite for illustrative purposes only. Results based on specific client circumstances and are not a guarantee of future results.
          </p>
        </div>
      </section>

      {/* Free Resource */}
      <section className="bg-secondary/10 py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Free Download</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            The Entrepreneur&apos;s Wealth Extraction Roadmap
          </h2>
          <p className="mt-4 text-neutral-dark/70 leading-relaxed max-w-xl mx-auto">
            Valuation, entity structure, QSBS, cash flow modeling, and the full advisory
            team you need before you exit — or before your next growth phase. Free PDF.
          </p>
          <Link
            href="/business-owner-roadmap"
            className="inline-block mt-6 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get the free roadmap
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to coordinate the planning your business actually needs?"
        subtext="Book your 15-minute intro call. Just a conversation about your business, your taxes, and what comes next."
      />
    </>
  );
}
