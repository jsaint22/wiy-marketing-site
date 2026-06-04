import { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import FeeCalculator from "@/components/FeeCalculator";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { projectFees, formatUSD } from "@/lib/pdf/fee-math";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import { FeeTierReveal } from "@/components/cinematic/FeeTierReveal";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One transparent flat fee — declining as your wealth grows — covers life planning, tax strategy, investment management, estate coordination, business planning, and unlimited meetings. Published in full on this page.",
};

const tiers = [
  { range: "First $1M", rate: "1.00%", note: "of net worth" },
  { range: "$1M – $3M", rate: "0.35%", note: "next $2M" },
  { range: "$3M – $10M", rate: "0.20%", note: "next $7M" },
  { range: "Above $10M", rate: "0.10%", note: "everything after" },
];

const milestones = [
  { nw: "$1M", fee: "$833/mo", effective: "1.00%" },
  { nw: "$3M", fee: "$1,417/mo", effective: "0.57%" },
  { nw: "$5M", fee: "$1,750/mo", effective: "0.42%" },
  { nw: "$10M", fee: "$2,583/mo", effective: "0.31%" },
  { nw: "$20M", fee: "$3,417/mo", effective: "0.21%" },
  { nw: "$30M", fee: "$4,250/mo", effective: "0.17%" },
];

const includedServices = [
  {
    title: "Life Planning",
    desc: "Your money exists to fund a specific life. We design the plan around that life — not around a portfolio benchmark.",
    icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342",
  },
  {
    title: "Tax Strategy",
    desc: "Proactive tax planning that coordinates with your CPA. Roth conversions, harvesting, entity optimization, estimated payments — quarterly, not just at filing time.",
    icon: "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z",
  },
  {
    title: "Investment Management",
    desc: "Low-cost, evidence-based portfolios. No proprietary products. No commissions.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
  },
  {
    title: "Insurance Review",
    desc: "Term life, umbrella, disability, long-term care — we review every policy. No commissions. No affiliated carriers. Just coverage that fits.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Estate Coordination",
    desc: "Trusts, beneficiary audits, titling reviews, powers of attorney. We coordinate with your estate attorney so nothing falls through the cracks.",
    icon: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
  },
  {
    title: "Business Planning",
    desc: "S-Corp vs. LLC analysis, Solo 401(k) and defined benefit plan design, buy-sell agreements, and exit strategy modeling.",
    icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0",
  },
  {
    title: "RE Investor Planning",
    desc: "1031 exchanges, cost segregation studies, depreciation recapture planning, series LLC structures, and passive activity rule optimization.",
    icon: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819",
  },
  {
    title: "Unlimited Meetings",
    desc: "No per-meeting charges. No hourly billing. Meet weekly during a transition, quarterly when things are steady. Your call.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  },
  {
    title: "VFO Partner Network",
    desc: "We coordinate with selected specialists when your situation calls for outside expertise — including tax, estate, and entity formation coordination. No referral fees. No separate onboarding.",
    icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
];

const faqs = [
  {
    question: "Do you charge for the intro call?",
    answer:
      "No. Your initial 15-minute intro call is free, and if we\u2019re a mutual fit, we\u2019ll schedule a Getting Acquainted meeting that\u2019s also at no cost. You get over an hour with us to decide whether this is the right partnership \u2014 no pressure, no hidden fees, no strings.",
  },
  {
    question: "What's included in the flat fee?",
    answer:
      "Everything. Life planning, tax strategy, investment management, insurance review, estate coordination, business planning, and real estate investor planning. One fee. No add-ons. No surprise invoices. If it touches your financial life, it's covered.",
  },
  {
    question: "How is net worth calculated?",
    answer:
      "We calculate net worth by totaling your assets (investments, business equity, real estate holdings, cash) minus your liabilities. Your primary residence is excluded from the calculation. We reassess your net worth on your anniversary date each year — the date we began working together.",
  },
  {
    question: "How does this compare to a typical AUM advisor?",
    answer:
      "A typical AUM advisor charges 1% of assets under management. At $3M, that's $30,000 per year. Our fee at $3M is $17,000 per year — $13,000 less annually. At $5M, the gap is $29,000 per year in the first year alone, and it widens as a 1% AUM fee compounds on a growing portfolio while our flat fee stays the same. We built an entire page that walks through the math — see our full AUM comparison.",
  },
  {
    question: "Is there a minimum net worth requirement?",
    answer:
      "Our minimum annual fee is $10,000, which typically makes sense for clients with a net worth of $1M or higher (excluding primary residence). We can work with clients starting at $500K in net worth, but at that level you'd pay the $10,000 annual flat fee. Below $500K, a flat-fee model likely isn't the most cost-effective option for you, and we'd rather be honest about that upfront.",
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
    question: "Do fees change if my net worth decreases?",
    answer:
      "We reassess your fee on your anniversary date each year based on your current net worth. If your net worth has grown, your fee may increase. If it has decreased — which happens with clients who retire and travel the world, contribute heavily to philanthropy, or simply enter a different life phase — your fee decreases accordingly. Our commitment is to charge fairly based on your current situation, not to lock in a fee that stops making sense for you.",
  },
];

export default function PricingPage() {
  const proj20 = projectFees(5_000_000, 20);

  return (
    <>
      {/* Hero — Cinematic shell. Original page had no primary CTA; using canonical
          15-min booking link as a sensible default (CinematicHero requires primaryCta). */}
      <CinematicHero
        eyebrow="Transparent Pricing"
        headline="One flat fee. Everything included."
        subhead="Life planning, tax strategy, investment management, estate coordination, business planning, RE investor planning, unlimited meetings — all coordinated by one advisor for one transparent monthly fee. Your fee scales with complexity, not with how well your portfolio does."
        primaryCta={{
          label: "Book your 15-minute intro call",
          href: "https://cal.com/jsaint/intro-call",
          external: true,
        }}
      />

      {/* Primary residence callout */}
      <section className="bg-success/5 border-y border-success/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
          <p className="text-lg font-semibold text-primary">
            Your primary residence isn&apos;t included in the net worth calculation.
          </p>
          <p className="mt-2 text-neutral-dark/70">
            We don&apos;t believe you should pay an advisory fee on the equity in your home — that&apos;s not an asset we&apos;re managing, strategizing around, or adding value to.
          </p>
        </div>
      </section>

      {/* Fee Formula Visualization */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Formula"
            title="The more you build, the less you pay."
            subtitle="A declining percentage applied to tiers of your net worth. Simple math. Aligned incentives."
          />

          {/* Tier breakdown */}
          <div className="mt-10 max-w-3xl mx-auto">
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
                  <div className="px-4 sm:px-6 py-4 text-right text-neutral-dark/70 text-sm">
                    {tier.note}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-neutral-dark/70">
              $10,000 annual minimum fee applies at all net worth levels.
            </p>
          </div>

          {/* Example milestones — animated CountUp reveal. Values preserved verbatim
              from the original milestones array (formula-derived, Compliance-attested). */}
          <div className="mt-12">
            <h3 className="text-center text-xl sm:text-2xl font-bold text-primary mb-6">
              What that looks like in practice
            </h3>
            <div className="max-w-3xl mx-auto">
              <FeeTierReveal
                tiers={milestones.map((m) => ({
                  netWorth: m.nw,
                  monthly: parseInt(m.fee.replace(/[^0-9]/g, ""), 10),
                  effectiveRate: m.effective,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fee Transparency Differentiator */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-8 sm:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold">
              We publish our fees because we have nothing to hide.
            </h3>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Every line of our pricing is on this page. The formula. The tier breakdown. The interactive calculator. The math at $5M over 20 years. No sales calls required before you know what you&apos;d pay.
            </p>
            <p className="mt-4 text-white/80 text-lg leading-relaxed">
              Our pricing is flat, fair, and aligned with your success — not your account balance.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Calculator */}
      <section id="calculator" className="bg-neutral-bg py-10 sm:py-14 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Calculator"
            title="See your exact fee."
            subtitle="Drag the slider. Compare to a 1% AUM advisor. Do the math yourself."
          />
          <div className="mt-10">
            <FeeCalculator />
          </div>
        </div>
      </section>

      {/* Post-calculator nudge */}
      <section className="bg-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-neutral-dark/70">
            Like what you see? That fee covers <strong>everything</strong> below.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What You Get"
            title="Everything. One fee."
            subtitle="No add-ons. No surprise invoices. If it touches your financial life, it's covered."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((service) => (
              <div
                key={service.title}
                className="bg-neutral-bg rounded-xl p-6 border border-neutral-bg"
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
          <p className="mt-8 text-center text-neutral-dark/70 text-sm">
            No tiers. No packages. Every client gets full access to every service.
          </p>
        </div>
      </section>

      {/* vs AUM Link */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            How does this compare to a 1% AUM advisor?
          </h2>
          <p className="mt-3 text-neutral-dark/70">
            At $5M over 20 years, the math is straightforward: our flat fee costs {formatUSD(proj20.cumulativeWiyFees)}. A 1% AUM fee on the same portfolio costs {formatUSD(proj20.cumulativeAumFees)} — a difference of {formatUSD(proj20.feeDelta)} in fees alone, or {formatUSD(proj20.portfolioBenefit)} when you account for the growth those fees would have earned you.
          </p>
          <Link href="/vs-aum" className="inline-block mt-6 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
            See the full comparison &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Pricing Questions" />

      {/* CTA */}
      <CTASection />
    </>
  );
}
