import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FeeCalculator from "@/components/FeeCalculator";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, declining flat fee fiduciary financial advisor. One fee covers everything — tax strategy, investment management, estate coordination, and more. No AUM percentage. No surprises.",
};

const tiers = [
  { range: "First $1M", rate: "0.50%", note: "of net worth" },
  { range: "$1M – $3M", rate: "0.35%", note: "next $2M" },
  { range: "$3M – $5M", rate: "0.25%", note: "next $2M" },
  { range: "$5M – $10M", rate: "0.15%", note: "next $5M" },
  { range: "Above $10M", rate: "0.10%", note: "everything after" },
];

const milestones = [
  { nw: "$1M", fee: "$417/mo", effective: "0.50%" },
  { nw: "$3M", fee: "$779/mo", effective: "0.31%" },
  { nw: "$5M", fee: "$1,029/mo", effective: "0.25%" },
  { nw: "$10M", fee: "$1,654/mo", effective: "0.20%" },
  { nw: "$20M", fee: "$2,654/mo", effective: "0.16%" },
];

const includedServices = [
  {
    title: "Life Planning",
    desc: "Goals-based planning built around the life you actually want to live.",
    icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342",
  },
  {
    title: "Tax Strategy",
    desc: "Proactive planning that finds money your CPA leaves on the table.",
    icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z",
  },
  {
    title: "Investment Management",
    desc: "Low-cost, evidence-based portfolios. No proprietary products. No commissions.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  },
  {
    title: "Insurance Review",
    desc: "Coverage that actually protects your family. No upsells. No kickbacks.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Estate Coordination",
    desc: "Documents that reflect your values. Structures that protect what you built.",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
  },
  {
    title: "Business Planning",
    desc: "Entity optimization, retirement plan design, and exit strategy for owners.",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0",
  },
  {
    title: "RE Investor Planning",
    desc: "1031 exchanges, depreciation, entity structures, and passive activity rules.",
    icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819",
  },
];

const faqs = [
  {
    question: "What's included in the flat fee?",
    answer:
      "Everything. Life planning, tax strategy, investment management, insurance review, estate coordination, business planning, and real estate investor planning. One fee. No add-ons. No surprise invoices. If it touches your financial life, it's covered.",
  },
  {
    question: "How is net worth calculated?",
    answer:
      "We use total net worth: assets minus liabilities. That includes investment accounts, real estate equity, business value, and other holdings, minus any outstanding debt. We reassess periodically and adjust your fee accordingly.",
  },
  {
    question: "Do you charge for the intro call?",
    answer:
      "No. The 30-minute intro call is free. No pitch. No pressure. We use it to understand your situation and determine if we're the right fit. If we're not, we'll tell you.",
  },
  {
    question: "How does this compare to a typical AUM advisor?",
    answer:
      "Most AUM advisors charge 1% of assets under management. At $3M, that's $30,000 per year. Our fee at $3M is about $9,350 per year. The gap widens as your wealth grows. Over 30 years, you could keep hundreds of thousands more with our model.",
  },
  {
    question: "Is there a minimum net worth requirement?",
    answer:
      "Yes. We work with clients who have at least $500K in net worth. Below that threshold, a flat fee model may not be the most cost-effective option for you, and we'd rather be honest about that upfront.",
  },
  {
    question: "Can I cancel at any time?",
    answer:
      "Yes. No lock-in contracts. No cancellation fees. No guilt trips. We earn your business every month. If we stop adding value, you should leave.",
  },
  {
    question: "Why not just charge a flat dollar amount?",
    answer:
      "Because a $500/month fee means something very different to someone with $500K versus $10M. Our tiered model scales with complexity — higher net worth typically means more accounts, entities, and tax considerations. The declining rate ensures you're never overpaying.",
  },
  {
    question: "Do fees change if markets drop?",
    answer:
      "Your fee is based on net worth, not market performance on a given day. We reassess periodically. Short-term market swings don't trigger fee changes. This keeps your costs predictable.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Transparent Pricing
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            A fee structure that makes sense.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            AUM advisors charge more as you succeed. Our declining flat fee
            rewards your growth instead of penalizing it.
          </p>
        </div>
      </section>

      {/* Fee Formula Visualization */}
      <section className="bg-neutral-bg py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Formula"
            title="The more you build, the less you pay."
            subtitle="A declining percentage applied to tiers of your net worth. Simple math. Aligned incentives."
          />

          {/* Tier breakdown */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-neutral-bg overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-primary text-white text-xs sm:text-sm font-semibold uppercase tracking-wider">
                <div className="px-4 sm:px-6 py-3">Net Worth Range</div>
                <div className="px-4 sm:px-6 py-3 text-center">Annual Rate</div>
                <div className="px-4 sm:px-6 py-3 text-right">Applies To</div>
              </div>
              {tiers.map((tier, i) => (
                <div
                  key={tier.range}
                  className={`grid grid-cols-3 gap-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-neutral-bg/50"
                  }`}
                >
                  <div className="px-4 sm:px-6 py-4 font-semibold text-neutral-dark text-sm sm:text-base">
                    {tier.range}
                  </div>
                  <div className="px-4 sm:px-6 py-4 text-center">
                    <span className="inline-block bg-primary/10 text-primary font-bold text-sm sm:text-base px-3 py-0.5 rounded-full">
                      {tier.rate}
                    </span>
                  </div>
                  <div className="px-4 sm:px-6 py-4 text-right text-neutral-dark/60 text-sm">
                    {tier.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Example milestones */}
          <div className="mt-16">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-primary mb-8">
              What that looks like in practice
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {milestones.map((m) => (
                <div
                  key={m.nw}
                  className="bg-white rounded-xl p-5 border border-neutral-bg text-center"
                >
                  <p className="text-xs font-semibold text-neutral-dark/50 uppercase tracking-wider">
                    Net Worth
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-primary mt-1">
                    {m.nw}
                  </p>
                  <hr className="my-3 border-neutral-bg" />
                  <p className="text-lg font-bold text-secondary">{m.fee}</p>
                  <p className="text-xs text-neutral-dark/50 mt-1">
                    Effective: {m.effective}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Calculator"
            title="See your exact fee."
            subtitle="Drag the slider. Compare to a 1% AUM advisor. Do the math yourself."
          />
          <div className="mt-12">
            <FeeCalculator />
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-neutral-bg py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What You Get"
            title="Everything. One fee."
            subtitle="No add-ons. No surprise invoices. If it touches your financial life, it's covered."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl p-6 border border-neutral-bg"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-neutral-dark/60 text-sm">
            No tiers. No packages. Every client gets full access to every service.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Pricing Questions" />

      {/* CTA */}
      <CTASection />
    </>
  );
}
