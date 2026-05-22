import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Financial Planning for FIRE",
  description:
    "Flat-fee financial planning for FIRE followers who already run their own spreadsheets. Roth conversion × ACA interaction, state tax migration timing, estate planning at $5M, backdoor sequencing, and sequence-of-returns stress testing.",
};

const edgeCases = [
  {
    title: "Roth conversion × ACA subsidy interaction",
    description:
      "Converting $40K from traditional to Roth in early retirement can disqualify a family of 4 from $18K of ACA premium subsidies. The math depends on your specific MAGI cliff, state, and silver plan benchmark. Most retirement calculators don’t model this interaction.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "State tax migration optimization",
    description:
      "Moving from CA → NV / TX → FL / WA → TN before a big Roth conversion or business sale saves more than most people make in a year. But the residency-establishment timing, severance of intent, and audit-defensible documentation is where most DIY moves get caught.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    title: "Estate planning at $5M+ NW",
    description:
      "Most FIRE folks defer estate planning until $10M+. At $5M with kids, you’re already past the threshold where a basic will leaves real money on the table. Grantor trust structures, beneficiary IRA design, and state estate tax migration all matter sooner than the personal finance community admits.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Backdoor + mega-backdoor sequencing for W-2 → coast transitions",
    description:
      "If you’re still W-2 in your final 3-5 working years before coast/FIRE, the mega-backdoor Roth window can shovel $40K+/year into Roth on top of your normal contributions. Sequencing this against your existing 401(k), IRA basis, and pro-rata rule trap is fiddly.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Sequence-of-returns risk + dynamic withdrawal strategies",
    description:
      "The 4% rule is built on average outcomes. Real early retirees who hit a bad first decade (think 2000-2010) needed bond tents, dynamic withdrawal floors, and CAPE-based adjustments to avoid running out at 80. Most FIRE calculators don’t stress-test this.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    title: "International relocation + tax-treaty optimization",
    description:
      "Moving abroad in early retirement triggers a different ruleset: foreign earned income exclusion vs. tax-treaty paths, FATCA + FBAR reporting, residency severance documentation that survives a US audit, healthcare coordination across jurisdictions, and Roth conversion sequencing while the income window stays low and your new country’s tax treatment cooperates. Italy’s 7% retiree regime, Puerto Rico Act 60, and Caribbean residency programs each have specific qualification windows and ongoing compliance burdens that most DIY relocators miss.",
    icon: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z M3 12h18 M12 3a9 9 0 010 18 M12 3a9 9 0 000 18",
  },
];

const howWeWork = [
  "We run Monte Carlo simulations with real-world assumptions, not best-case averages",
  "We build Roth conversion strategies that account for ACA subsidy cliffs and state tax exposure",
  "We coordinate withdrawal sequencing across taxable, traditional, Roth, and HSA accounts",
  "We pressure-test the plan against bad-first-decade markets, not just average returns",
  "Flat fee means we don’t benefit from keeping your money invested longer",
];

const faqs = [
  {
    question: "Do I really need a financial advisor if I’m pursuing FIRE?",
    answer:
      "You’ve done the hard part — the savings rate, the asset allocation discipline, the tax software optimization. Honestly, you’re probably sharper than most advisors on the basics. Where the value shows up is at the weird edges: the Roth conversion that disqualifies you from ACA subsidies, the state move that needs audit-defensible timing, the estate plan that needs to outlive your spreadsheet. We’re the second set of eyes on the decisions where being a sharp DIYer costs you six figures over the next 30 years.",
  },
  {
    question: "Won’t your fee eat into my FIRE number?",
    answer:
      "Our flat fee is based on complexity, not assets. For most FIRE clients, the tax savings alone — from Roth conversion optimization, capital gains harvesting, and ACA subsidy planning — more than cover the cost in Year 1. We charge a known, fixed amount. No percentage of your portfolio.",
  },
  {
    question: "I’m not fully FIRE yet. Is it too early to work with you?",
    answer:
      "The best time to start planning is before you leave your job — not after. The decisions you make in the 2-3 years before FIRE (Roth conversions, asset location, mega-backdoor contributions, healthcare planning, state of residency) have outsized impact on how long your money lasts. Waiting until you’ve already quit limits your options.",
  },
  {
    question: "How do you handle the healthcare gap before Medicare?",
    answer:
      "We model your income to optimize ACA subsidies — which often means coordinating Roth conversions, capital gains harvesting, and withdrawal sequence so your Modified Adjusted Gross Income stays inside the subsidy range. The MAGI cliff is one of the highest-ROI planning decisions for early retirees, and most FIRE calculators don’t model the interaction with conversions and harvesting.",
  },
  {
    question: "Do you understand the different types of FIRE?",
    answer:
      "Lean FIRE, Fat FIRE, Coast FIRE, Barista FIRE — we’ve worked with all of them. The planning is different for someone targeting $40K/year in expenses versus $150K/year. We don’t push one version. We model yours, stress-test it, and make sure the math actually works across a range of market conditions.",
  },
  {
    question: "What’s the difference between working with you and just using bogleheads + a tax CPA?",
    answer:
      "Honestly, for the basics, not much. Bogleheads is a great community and a good CPA handles the return. We’re not trying to replace either. We come in when the decision tree gets weird — the Roth conversion that ripples into ACA, the state move that requires audit-defensible timing, the estate plan that needs to outlive your spreadsheet. If your situation stays simple, you don’t need us. If it doesn’t, a flat fee for coordinated planning across tax, healthcare, estate, and withdrawal sequencing usually pays for itself in Year 1.",
  },
];

export default function ForFireFollowersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            For FIRE Followers
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            You&apos;ve already done the hard part. Here&apos;s where coordination pays you back.
          </h1>
          <p className="mt-6 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            If you&apos;ve gotten to $2-5M+ NW by reading bogleheads, optimizing your
            tax software, and running your own spreadsheets, you&apos;re sharper than
            most advisors. We don&apos;t want to take over &mdash; we want to be the
            second set of eyes on the few decisions where &ldquo;sharp DIY&rdquo;
            costs you six figures over the next 30 years.
          </p>
        </div>
      </section>

      {/* Edge Cases — Where DIY Hits Its Limits */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Where DIY Hits Its Limits"
            title="The decisions that don’t fit in a spreadsheet."
            subtitle="Five specific edge cases where the FIRE crowd consistently gets caught. None of these are hard if you know they exist. All of them are expensive if you don’t."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {edgeCases.map((point) => (
              <div
                key={point.title}
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
                      d={point.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {point.title}
                </h3>
                <p className="text-neutral-dark/70 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Fit */}
      <section className="py-10 sm:py-14 bg-neutral-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Where We Fit
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            We&apos;re not here to replace your bogleheads workflow.
          </h2>
          <p className="mt-5 text-lg text-neutral-dark/80 leading-relaxed">
            We&apos;re the advisor you call when the decision tree gets weird &mdash;
            the Roth conversion that ripples into ACA, the state move that
            requires audit-defensible timing, the estate plan that needs to
            outlive your spreadsheet. Coordinated planning across tax,
            healthcare, withdrawal sequencing, and estate, charged as a flat
            fee based on complexity. No AUM percentage. No pressure to hand
            over the portfolio.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="How we work with FIRE followers."
            subtitle="No generic retirement projections. No one-size-fits-all asset allocation. Here’s what an engagement actually looks like."
          />

          <div className="mt-14 space-y-6">
            {howWeWork.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
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

      {/* Case Study Link */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Case Study</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            $2.8M. 7 extra years of runway.
          </h2>
          <p className="mt-3 text-neutral-dark/70">
            Tax-efficient withdrawals and geographic arbitrage &mdash; the math that changes everything.
          </p>
          <Link href="/case-studies" className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition-colors">
            Read the full case study &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Questions From the FIRE Community"
      />

      {/* Free Resource */}
      <section className="bg-secondary/10 py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Free Download</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            The W-2 Escape Plan
          </h2>
          <p className="mt-4 text-neutral-dark/70 leading-relaxed max-w-xl mx-auto">
            Runway math, health insurance, entity setup, retirement accounts, and income
            replacement &mdash; 13 questions that separate a calculated leap from an expensive
            mistake. Free PDF.
          </p>
          <Link
            href="/w2-escape-plan"
            className="inline-block mt-6 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get the free checklist
          </Link>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Book your 15-minute intro call."
        subtext="15-min diagnostic. No proposal. No “why don’t you let us manage it” close. Just a competent second set of eyes on the decision you’re trying to make."
      />
    </main>
  );
}
