import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Services | WIY — Flat-Fee Fiduciary Financial Planning",
  description:
    "Flat fee financial planning from a fiduciary advisor. Life planning, tax strategy, investment management, insurance review, estate coordination, and planning for business owners and real estate investors.",
};

const services = [
  {
    title: "Life Planning",
    description:
      "Your plan starts with what you want your life to look like — not a retirement date. We use financial therapy and values-based coaching to build a financial structure around the life you actually want.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Tax Strategy",
    description:
      "Proactive tax planning that goes beyond filing. We coordinate with your CPA and find the money they leave on the table. Entity structuring, Roth conversions, tax-loss harvesting, and multi-year projections.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "Investment Planning",
    description:
      "Evidence-based, low-cost portfolios. No proprietary products. No commissions. We build and manage your investment strategy across all accounts — taxable, retirement, HSA, 529s.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "Insurance Review",
    description:
      "We audit your current coverage and fill the gaps. Life, disability, umbrella, long-term care — we recommend what you actually need, not what pays us commissions. We don't sell insurance.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Estate Planning Coordination",
    description:
      "We work with your estate attorney to ensure your documents reflect your values and your plan. Trusts, beneficiary designations, power of attorney, healthcare directives.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Entity & Business Owner Planning",
    description:
      "S-Corp optimization, Solo 401(k), SEP, Defined Benefit plans, cash flow management, and exit planning. Built for people running their own thing.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Real Estate Portfolio Coordination",
    description:
      "Cost segregation studies, 1031 exchange coordination, entity structuring, depreciation strategy, passive vs. active income classification, and SDIRA guidance.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Financial Therapy & Behavioral Coaching",
    description:
      "Money decisions are emotional decisions. We use financial therapy techniques to help you understand your relationship with money, break unproductive patterns, and make decisions with clarity.",
    icon: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    title: "Charitable Giving & Philanthropy Coordination",
    description:
      "Donor-advised funds, charitable remainder trusts, QCDs, and strategic giving. We help you maximize impact and minimize tax liability so your generosity goes further.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
];

const faqs = [
  {
    question: "Do I need all of these services?",
    answer:
      "Not every client needs every service every year. Some clients use all of them \u2014 typically business owners with complex estate and tax situations. Others use fewer \u2014 FIRE-track clients may focus heavily on tax-efficient withdrawal planning and investment strategy. Your flat fee covers the full scope regardless; we use what you need, when you need it, and don\u2019t charge extra when your needs grow.",
  },
  {
    question: "How is this different from what my CPA does?",
    answer:
      "Your CPA looks backward. They file what already happened. We look forward. We model scenarios, project tax liability across multiple years, and coordinate with your CPA so nothing falls through the cracks. Most CPAs are great at compliance. We handle strategy.",
  },
  {
    question: "Do you manage investments directly?",
    answer:
      "Yes. We build and manage your portfolio across all accounts. Low-cost, evidence-based funds. No proprietary products, no commissions, no conflicts. You always know exactly what you own and why. We custody with Altruist, a modern advisor-first custodian built for independent fiduciaries. No sales quotas, no proprietary products, no incentive to churn your portfolio. You get institutional-grade execution with the modern client experience you'd expect.",
  },
  {
    question: "Do you sell insurance?",
    answer:
      "We don't sell insurance. Within our Virtual Family Office model, we coordinate with independent insurance professionals to analyze coverage gaps and help you evaluate options. You pay them directly if you need coverage. We receive no commissions, ever.",
  },
  {
    question: "How does the flat fee work?",
    answer:
      "Your fee isn't tied to your portfolio's day-to-day performance. We set a flat annual fee based on your total net worth (excluding your primary residence) when we begin working together, and we reassess that fee on your anniversary date each year. This means you know exactly what you're paying — no percentage of assets, no commissions, no hidden fees.",
  },
  {
    question: "Can you help if I already have a financial plan?",
    answer:
      "Absolutely. We'll review what you have, identify gaps, and either improve it or start fresh. A lot of clients come to us with plans that looked good on paper but weren't actually built around their life.",
  },
  {
    question: "How often do we meet?",
    answer:
      "Our process is designed around depth, not frequency for its own sake. Our comprehensive onboarding sequence covers 13 meetings across four phases: Ground (discovery), Design (life planning), Build (execution), and Evolve (ongoing). After onboarding, we meet quarterly at minimum — and anytime you need us in between. Our goal isn't to schedule meetings to justify our fee; it's to build a relationship where you actually know us and we actually know you.",
  },
  {
    question: "What if I only need help with one area?",
    answer:
      "That's fine. Some clients come in for tax strategy and realize they need investment help. Others just want an insurance audit. We'll scope the engagement to fit what you actually need.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero + Services Grid (consolidated) */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">
            Nine services. One fee. Zero silos.
          </h1>
          <p className="mt-6 text-lg text-neutral-dark/70 max-w-2xl mx-auto">
            Every service below is included in your flat fee. No add-ons. No
            surprise invoices. Your tax strategy informs your investment plan.
            Your estate plan reflects your business structure. Your insurance
            coverage fills the gaps. Nothing operates in a silo because
            everything is coordinated by one team.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Everything a family office delivers. Without the eight-figure minimums."
            subtitle="Here&apos;s what your flat fee covers. Every service. Every client. No tiers."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
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
                      d={service.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-dark/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 sm:py-14 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="How it works"
            subtitle="No 47-page proposals. No months of waiting. Here's what happens."
          />

          <div className="mt-10 space-y-8">
            {[
              {
                step: "01",
                title: "Intro call",
                text: "15 minutes. No pitch. We learn about your situation, you learn about how we work. If it's a fit, we move forward.",
              },
              {
                step: "02",
                title: "Discovery & data gathering",
                text: "We dig into your finances, your goals, and what your ideal life actually looks like. This is where the real work starts.",
              },
              {
                step: "03",
                title: "Your plan",
                text: "A clear, actionable financial plan covering every relevant area. Not a binder that collects dust — a living strategy you'll actually use.",
              },
              {
                step: "04",
                title: "Ongoing partnership",
                text: "Life changes. Your plan changes with it. We meet regularly, stay proactive, and handle the details so you don't have to.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-neutral-dark/70 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Questions About Our Services" />

      {/* CTA */}
      <CTASection />
    </main>
  );
}
