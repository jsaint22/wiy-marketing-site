import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Referral Partners \u2014 CPAs, Attorneys, and Financial Professionals",
  description:
    "Partner with Wealth In Yourself to provide your clients with flat-fee, fiduciary financial planning. No referral fees. Coordinated planning. Your clients stay your clients.",
};

const idealClients = [
  {
    title: "Entrepreneurs & Business Owners",
    description:
      "Founders with complex entity structures, tax situations, and exit planning needs who have outgrown basic financial advice.",
  },
  {
    title: "Real Estate Investors",
    description:
      "Clients with multiple properties, 1031 exchange needs, cost segregation opportunities, and passive income classification questions.",
  },
  {
    title: "High Net Worth Individuals",
    description:
      "Clients with $1M+ in net worth who need coordinated planning across tax, investments, estate, and insurance.",
  },
  {
    title: "Complex Tax Situations",
    description:
      "Multi-entity owners, clients with stock compensation, Roth conversion opportunities, or charitable giving strategies that need proactive planning.",
  },
];

const howWeWork = [
  {
    title: "No Referral Fees",
    description:
      "We don\u2019t pay referral fees and we don\u2019t accept them. Our only obligation is to the client. This keeps the relationship clean and the advice unconflicted.",
  },
  {
    title: "Coordinated Planning",
    description:
      "We work directly with you. Tax projections, entity decisions, estate plans, and insurance reviews are coordinated \u2014 not made in a vacuum. You stay informed on the financial strategy that affects your work.",
  },
  {
    title: "Shared Clients Stay Shared",
    description:
      "We don\u2019t compete with you. Your CPA relationship, your legal work, your insurance expertise \u2014 we respect the lanes. Clients get better outcomes when their advisors work together.",
  },
  {
    title: "Regular Communication",
    description:
      "When we make a recommendation that touches your area \u2014 a Roth conversion, an entity restructure, a trust amendment \u2014 we loop you in before the client acts. No surprises.",
  },
];

const services = [
  "Life Planning",
  "Tax Strategy",
  "Investment Planning",
  "Insurance Review",
  "Estate Planning Coordination",
  "Entity & Business Owner Planning",
  "Real Estate Portfolio Coordination",
  "Financial Therapy & Behavioral Coaching",
  "Charitable Giving & Philanthropy Coordination",
];

export default function ForPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            For CPAs, Attorneys & Financial Professionals
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            A Planning Partner Your Clients Will Thank You For
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
            Your clients deserve financial planning that works with your
            expertise, not around it. We coordinate directly with you to deliver
            comprehensive, flat-fee fiduciary planning &mdash; so your clients
            get better outcomes and you get a partner you can trust.
          </p>
        </div>
      </section>

      {/* Who We're a Good Fit For */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Ideal Referrals"
            title="Who we&apos;re a good fit for."
            subtitle="If your client has any of these characteristics, we can help."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {idealClients.map((client) => (
              <div
                key={client.title}
                className="bg-white rounded-xl p-6 border border-neutral-bg"
              >
                <h3 className="text-lg font-bold text-primary">
                  {client.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Approach"
            title="How we work together."
            subtitle="We built our practice to complement yours &mdash; not compete with it."
          />
          <div className="mt-12 space-y-8 max-w-2xl mx-auto">
            {howWeWork.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
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
                  <h3 className="font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 text-neutral-dark/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Your Clients Get */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client Experience"
            title="What your clients get."
            subtitle="One flat fee. Nine services. A Virtual Family Office model that coordinates every piece of their financial life."
          />
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-neutral-bg">
              <h3 className="font-bold text-primary mb-4">
                The Full VFO Service Suite
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-secondary flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-neutral-dark/80">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-neutral-dark/60">
              Every client gets access to a private portal, unlimited meetings,
              and direct access to their planner. No call centers. No
              hand-offs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduce a Client */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Introduce a client."
            subtitle="If you have a client who could benefit from coordinated, flat-fee planning, we&apos;d love to connect."
          />
          <div className="mt-8 space-y-4">
            <p className="text-lg text-neutral-dark/70 leading-relaxed">
              Email Josh directly at{" "}
              <a
                href="mailto:josh@wealthinyourself.com"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                josh@wealthinyourself.com
              </a>{" "}
              or book a 15-minute call to discuss how we can work together.
            </p>
            <a
              href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Let&apos;s build a better experience for your clients."
        subtext="No referral fees. No competition. Just coordinated planning that makes everyone&apos;s work better."
        buttonText="Book a Partner Call"
      />
    </>
  );
}
