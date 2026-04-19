import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Financial Planning for FIRE",
  description:
    "Flat-fee financial planning built for the FIRE community. Roth conversion ladders, tax-efficient withdrawal strategies, coast FIRE analysis, sequence of returns risk testing, and healthcare planning before Medicare.",
};

const painPoints = [
  {
    title: "Optionality Over Deprivation",
    description:
      "FIRE isn't about suffering through a 50% savings rate. It's about creating options. Coast FIRE, Barista FIRE, Lean FIRE — we help you find the version that fits your actual life.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Tax-Efficient Withdrawal Strategy",
    description:
      "Roth conversion ladders, capital gains harvesting, ACA subsidy optimization. The order you pull from your accounts matters more than most people realize.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Coasting Strategies",
    description:
      "You might not need to grind for 20 more years. A coast strategy lets you downshift — part-time work, a passion project, a lower-stress role — and still hit your number. But the math has to be right, and most spreadsheets miss the nuance.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Sequence of Returns Risk",
    description:
      "The first 5 years of early retirement can make or break your plan. We stress-test against bad markets, not just average returns.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
  {
    title: "Healthcare Before Medicare",
    description:
      "This is the FIRE killer nobody talks about enough. A family of four paying full-price health insurance can burn $30K+ per year before they see a doctor. ACA subsidy optimization, MAGI management, and gap-year planning aren\u2019t optional — they\u2019re the difference between FIRE working and FIRE failing.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Geographic Arbitrage Planning",
    description:
      "State income tax, cost of living, property tax differences, and international relocation. Where you live changes everything about your FIRE number. We model the scenarios so you pick the right one.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
];

const howWeWork = [
  "We run Monte Carlo simulations with real-world assumptions",
  "We build Roth conversion strategies across your accumulation and drawdown phases",
  "We coordinate tax strategy with your withdrawal sequence",
  "We help you define \"enough\" — then build the plan to get there",
  "Flat fee means we don't benefit from keeping your money invested longer",
];

const faqs = [
  {
    question: "Do I really need a financial advisor if I'm pursuing FIRE?",
    answer:
      "You've done the hard part — building the savings rate and the discipline. But the withdrawal phase is where the real complexity lives. Roth conversion ladders, ACA subsidy cliffs, sequence of returns risk, and tax-efficient drawdown across multiple account types. A spreadsheet can model the basics. A planner catches the $50K mistakes hiding in the details.",
  },
  {
    question: "Won't your fee eat into my FIRE number?",
    answer:
      "Our flat fee is based on complexity, not assets. And for most FIRE clients, the tax savings alone — from Roth conversion optimization, capital gains harvesting, and ACA subsidy planning — more than cover the cost in Year 1. We don't take a percentage of your portfolio. We charge a known, fixed amount.",
  },
  {
    question: "I'm not fully FIRE yet. Is it too early to work with you?",
    answer:
      "The best time to start planning is before you leave your job — not after. The decisions you make in the 2-3 years before FIRE (Roth conversions, asset location, mega backdoor contributions, healthcare planning) have outsized impact on how long your money lasts. Waiting until you've already quit limits your options.",
  },
  {
    question: "How do you handle the healthcare gap before Medicare?",
    answer:
      "We model your income to optimize ACA subsidies — sometimes saving $15K-$20K per year in premiums alone. This means coordinating your Roth conversions, capital gains harvesting, and withdrawal sequence so your Modified Adjusted Gross Income stays in the subsidy range. It's one of the highest-ROI planning moves for early retirees.",
  },
  {
    question: "Do you understand the different types of FIRE?",
    answer:
      "Lean FIRE, Fat FIRE, Coast FIRE, Barista FIRE — we've worked with all of them. The planning is different for someone targeting $40K/year in expenses versus $150K/year. We don't push one version. We model yours, stress-test it, and make sure the math actually works across a range of market conditions.",
  },
  {
    question: "What makes you different from other fee-only advisors?",
    answer:
      "Most fee-only advisors still charge AUM — a percentage of your assets. That means their incentive is to keep your money invested with them, not to help you spend it wisely. We charge a flat fee. We also bring financial therapy training, which matters when you're wrestling with the emotional side of leaving a career, redefining your identity, and trusting your plan.",
  },
];

export default function ForFireFollowersPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Financial Planning for FIRE
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            FIRE isn&apos;t about deprivation. It&apos;s about optionality.
          </h1>
          <p className="mt-6 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Most FIRE content focuses on cutting expenses to the bone. We focus
            on designing a life worth living — and building the financial
            structure to support it on your terms.
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Focus On"
            title="The stuff that actually moves the needle."
            subtitle="Spreadsheets are a starting point. Planning is what fills the gaps."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {painPoints.map((point) => (
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

      {/* How We Work */}
      <section className="py-10 sm:py-14 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="How we work with FIRE followers."
            subtitle="No generic retirement projections. No one-size-fits-all asset allocation. Here's what an engagement actually looks like."
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
            Tax-efficient withdrawals and geographic arbitrage — the math that changes everything.
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
            replacement — 13 questions that separate a calculated leap from an expensive
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
        headline="Ready to stop guessing and start planning your exit?"
        subtext="Book a 15-minute intro call. No pitch. No pressure. Just a conversation about whether the math actually works."
      />
    </main>
  );
}
