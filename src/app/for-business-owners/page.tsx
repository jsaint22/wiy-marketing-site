import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Financial Planning for Business Owners",
  description:
    "Fee-only financial planner for entrepreneurs and fiduciary financial advisor for business owners. Flat-fee, tax-focused planning for S-Corp, LLC, and C-Corp owners — no AUM fees, no conflicts.",
};

const painPoints = [
  {
    title: "Uneven Income",
    description:
      "Your income isn\u2019t a salary. It\u2019s distributions, retained earnings, and capital gains. Planning around irregular cash flow requires an advisor who gets it.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-6L16.5 16m0 0L12 10.5m4.5 5.5V3" />
      </svg>
    ),
  },
  {
    title: "Tax Complexity",
    description:
      "S-Corp vs. C-Corp vs. LLC. Reasonable compensation. QBI deductions. Retirement plan contributions. Your CPA handles compliance. We handle strategy.",
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
      "Solo 401(k), SEP IRA, Defined Benefit plans. Most advisors don\u2019t know these exist. We design the plan that maximizes your tax-deferred savings.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Exit Planning",
    description:
      "Whether you\u2019re selling in 2 years or 20, your exit strategy should start now. Valuation, tax optimization, and what comes after.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
      </svg>
    ),
  },
  {
    title: "Cash Flow Management",
    description:
      "Balancing business reinvestment with personal financial security. We help you decide when to pull money out and where to put it.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
];

const howWeWork = [
  "We coordinate with your CPA and attorney \u2014 not replace them",
  "We build multi-year tax projections, not just this year\u2019s return",
  "We stress-test your plan against business downturns",
  "We design compensation strategies that minimize your total tax burden",
  "One flat fee \u2014 no AUM percentage eating into your growth",
];

const faqs = [
  {
    question: "Do you replace my CPA or attorney?",
    answer:
      "No. We work alongside them. Your CPA handles compliance and filing. Your attorney handles legal structure. We sit in the middle and make sure every decision is coordinated \u2014 so your tax strategy, entity structure, retirement plan, and investment approach actually work together instead of in silos.",
  },
  {
    question: "What types of business owners do you work with?",
    answer:
      "We work with founders, solo operators, and small business owners across industries \u2014 typically earning $200K+ through their business. S-Corp owners, LLC members, C-Corp shareholders. If your financial life is intertwined with your business, that\u2019s exactly who we built this for.",
  },
  {
    question: "How is a flat fee better than AUM for business owners?",
    answer:
      "When your net worth is growing because your business is scaling, an AUM advisor\u2019s fee grows with it \u2014 even if the work doesn\u2019t change. A flat fee means your cost is tied to the complexity of your situation, not the size of your portfolio. You keep more of what you build.",
  },
  {
    question: "Can you help me set up a retirement plan for my business?",
    answer:
      "Absolutely. We design retirement plans \u2014 Solo 401(k), SEP IRA, Defined Benefit, and cash balance plans \u2014 based on your income, entity type, and how aggressively you want to defer taxes. Most advisors default to a SEP IRA because it\u2019s easy. We do the math to find the structure that actually saves you the most.",
  },
  {
    question: "I\u2019m thinking about selling my business. When should I start planning?",
    answer:
      "Yesterday. But today works too. Exit planning isn\u2019t a six-month project \u2014 it\u2019s a multi-year process that involves valuation strategy, tax-efficient deal structure, and figuring out what your financial life looks like after the sale. The earlier you start, the more options you have.",
  },
  {
    question: "What if my income is unpredictable year to year?",
    answer:
      "That\u2019s normal for business owners, and it\u2019s exactly why cookie-cutter financial plans fail. We build flexible plans with cash reserve strategies, variable contribution schedules, and tax projections across multiple income scenarios. Your plan should bend with your business \u2014 not break.",
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
            Your business is your biggest asset. Most advisors don&apos;t know
            what to do with it.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
            You didn&apos;t build your business to watch an advisor charge you 1%
            to put your money in index funds. You need coordinated planning
            across your business, your taxes, and your life.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Real Challenges"
            title="Business owner finances aren&apos;t simple. Your advisor shouldn&apos;t pretend they are."
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
            title="How we work with business owners."
            subtitle="We&apos;ve built our process around the reality of running a business &mdash; not a textbook version of it."
          />
          <div className="mt-12 space-y-5 max-w-2xl mx-auto">
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
                <p className="text-lg text-neutral-dark/80 leading-relaxed">
                  {item}
                </p>
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
            If you&apos;ve been told to &ldquo;max out your SEP IRA&rdquo; and
            call it a day, you&apos;re leaving serious money on the table. The
            difference between a generic advisor and one who understands
            business ownership is six figures over a career &mdash; in taxes
            alone.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Questions Business Owners Ask Us"
        faqs={faqs}
      />

      {/* CTA */}
      <CTASection
        headline="Ready for an advisor who understands what you&apos;re building?"
        subtext="Book a 15-minute intro call. No pitch. No AUM proposal. Just a conversation about your business, your taxes, and what comes next."
      />
    </>
  );
}
