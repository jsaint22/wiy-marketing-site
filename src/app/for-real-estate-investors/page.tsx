import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import { EditorialPullQuote } from "@/components/cinematic/EditorialPullQuote";

export const metadata: Metadata = {
  title: "Financial Planning for Real Estate Investors",
  description:
    "Flat fee financial advisor for real estate investors. Depreciation strategy, 1031 exchange coordination, entity structuring, passive vs. active income planning, and portfolio integration — all for one flat fee.",
};

const painPoints = [
  {
    title: "Depreciation Strategy",
    description:
      "Cost segregation study sequencing across acquisitions, bonus depreciation phase-down modeling, §1250 recapture forecasting at exit, and passive loss carryforward tracking under §469. The difference between a reactive depreciation schedule and a planned one is six figures over a hold period.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "1031 Exchanges",
    description:
      "45-day identification windows. 180-day closing deadlines. Qualified intermediary selection. Reverse exchange structures. DST fallback when the target property falls through on day 40. We model the deferred tax liability across the next three swaps before you ever sign the relinquished-property contract.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Entity Structures",
    description:
      "Series LLC strategy across state lines, holding-company architecture for asset protection, S-Corp election timing for property management income, and land trust use for privacy. Every property held in your personal name is a lawsuit away from threatening everything else you own.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Passive vs. Active Income",
    description:
      "REPS qualification documentation, the 750-hour material participation threshold, short-term rental loophole eligibility, and how the passive-vs-active classification of your rental income changes your entire tax bill — and your eligibility to offset W-2 or business income with paper losses.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Self-Directed IRA / Solo 401(k)",
    description:
      "Checkbook control structures, UBIT/UDFI exposure on leveraged property, prohibited transaction rules under §4975, and disqualified person analysis. One prohibited transaction blows up the entire account’s tax-advantaged status. We architect the structure so you capture the opportunity without triggering disqualification.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    title: "Portfolio Integration",
    description:
      "Rental income, equity, leverage, vacancy assumptions, capital expenditure reserves, and concentration risk all integrated into one financial picture — alongside your brokerage accounts, retirement assets, and business equity. Because 80% of your net worth in one asset class is a plan. It’s just not a complete one.",
    icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
  },
];

const howWeWork = [
  "When you’re considering a 1031. We model the deferred tax liability across the next three swaps, sequence the cost segregation studies on the replacement property, and coordinate with the qualified intermediary before you sign the relinquished-property contract.",
  "When you cross 750 hours of material participation. We document the REPS qualification, restructure the entity election, and model the passive loss release against your W-2 or business income.",
  "When your STR generates $200K+/year. We design the entity around it, plan the depreciation timing under the short-term rental rules, and model the eventual exit — whether that’s a sale, a 1031, or a Delaware Statutory Trust roll.",
  "When you’re weighing another property against the brokerage account. We model both scenarios — leverage, tax impact, liquidity, concentration risk, and your goals — and give you the numbers so you can make the call with confidence.",
  "Flat fee. One number, set annually. It doesn’t change when you close on another property or when your portfolio value moves.",
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
      "Everything. Tax strategy, investment management for your non-real-estate portfolio, 1031 exchange coordination, entity structure review, retirement planning, insurance review, and ongoing advice. One flat fee, set annually. No extra charges when you close on a new property.",
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
      {/* Hero — CinematicHero shared shell. Copy verbatim from prior hero;
          15-min booking link as default primaryCta. */}
      <CinematicHero
        eyebrow="For Real Estate Investors"
        headline="Your portfolio is complex. Your planning should match."
        subhead="You’ve built positions in LTRs, syndications, maybe some STR or commercial. You have a CPA who files and a brokerage account no one is integrating. What you don’t have is one advisor coordinating the tax strategy, entity structure, estate plan, and exit timing across every property."
        primaryCta={{
          label: "Book your 15-minute intro call",
          href: "https://cal.com/jsaint/intro-call",
          external: true,
        }}
      />

      {/* Pain Points */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Handle"
            title="The planning real estate investors actually need."
            subtitle="Specific, technical, sequenced. We work with real estate investors every day — these are the conversations that move the numbers."
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

      {/* Editorial pull-quote — verbatim from Depreciation Strategy pain-point card */}
      <EditorialPullQuote>
        The difference between a reactive depreciation schedule and a planned one is six figures over a hold period.
      </EditorialPullQuote>

      {/* How We Work */}
      <section className="py-10 sm:py-14 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we work with real estate investors"
            subtitle="Concrete coordinations, not generic feature lists. We speak your language — cap rates, cash-on-cash, DSCR, REPS, cost seg, DST."
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

      {/* Editorial pull-quote — verbatim from Entity Structures pain-point card */}
      <EditorialPullQuote>
        Every property held in your personal name is a lawsuit away from threatening everything else you own.
      </EditorialPullQuote>

      {/* BiggerPockets Featured Financial Advisor Badge */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <Image
            src="/badges/BP_Featured-FinAd-Blue_1000W.png"
            alt="BiggerPockets Featured Financial Advisor"
            width={180}
            height={180}
            className="w-40 h-auto"
          />
          <p className="mt-4 text-lg font-semibold text-primary">
            Featured Financial Advisor on BiggerPockets
          </p>
          <p className="mt-2 text-neutral-dark/70 max-w-xl">
            BiggerPockets is the largest real estate investing community in the world. We&apos;re recognized as a Featured Financial Advisor because we actually understand real estate — not just stocks and bonds.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Questions From Real Estate Investors"
      />

      {/* Editorial pull-quote — verbatim from Portfolio Integration pain-point card */}
      <EditorialPullQuote>
        Because 80% of your net worth in one asset class is a plan. It&rsquo;s just not a complete one.
      </EditorialPullQuote>

      {/* Free Resource — mid-funnel soft offer */}
      <section className="bg-secondary/10 py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Not ready for a call? Start here</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            The RE Investor&apos;s Tax Strategy Checklist
          </h2>
          <p className="mt-4 text-neutral-dark/70 leading-relaxed max-w-xl mx-auto">
            16 questions your advisory team should be answering about 1031 exchanges,
            cost segregation, entity structure, and depreciation. Free PDF — built for
            investors with 3+ properties.
          </p>
          <Link
            href="/re-investor-checklist"
            className="inline-block mt-6 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get the free checklist
          </Link>
        </div>
      </section>

      {/* Case Study Link — proof setup before the close */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Case Study</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            14 properties. $142K in tax deferral.
          </h2>
          <p className="mt-3 text-neutral-dark/70">
            REPS qualification, cost segregation ($62K Year 1), and 1031 coordination ($80K) — all under one flat fee.
          </p>
          <Link href="/case-studies" className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition-colors">
            Read the full case study &rarr;
          </Link>
          <p className="mt-4 text-[11px] text-neutral-dark/50 leading-snug max-w-md mx-auto">
            Hypothetical composite for illustrative purposes only. Results based on specific client circumstances and are not a guarantee of future results.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Your portfolio deserves planning that fits it."
        subtext="Book a 15-minute intro call. We'll talk about your properties, your goals, and whether we're the right fit."
      />
    </main>
  );
}
