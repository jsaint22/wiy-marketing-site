import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

const clientPaths = [
  {
    title: "Business Owners",
    description:
      "Uneven income, entity structuring, tax complexity, exit planning. You need an advisor who actually understands what you're building.",
    href: "/for-business-owners",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Real Estate Investors",
    description:
      "1031 exchanges, depreciation strategies, entity structures, passive vs. active rules. Your portfolio is complex. Your planning should match.",
    href: "/for-real-estate-investors",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "FIRE Followers",
    description:
      "Optionality over deprivation. Coasting strategies, tax-efficient withdrawals, and actually enjoying the life you designed.",
    href: "/for-fire-followers",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-6 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Flat-Fee Fiduciary Advisory
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Your money should serve your life.{" "}
                <span className="text-secondary">Not the other way around.</span>
              </h1>
              <p className="mt-6 text-lg text-neutral-dark/70 leading-relaxed max-w-xl">
                Most advisors charge you more as your wealth grows — even though
                the work doesn&apos;t change. We charge a flat fee, act as your
                fiduciary, and build a plan around the life you actually want.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  Book Your Intro Call
                </a>
                <Link
                  href="/pricing#calculator"
                  className="px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors text-center"
                >
                  See What You&apos;d Pay
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-neutral-bg overflow-hidden">
                <Image
                  src="/team/josh-headshot-v2.jpg"
                  alt="Joshua St. Laurent, CFP, CFT — Founder of Wealth In Yourself"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-neutral-bg">
                <p className="text-xs text-neutral-dark/60 uppercase tracking-wider font-semibold">
                  As seen in
                </p>
                <p className="text-sm font-bold text-primary mt-1">
                  Forbes &middot; MarketWatch &middot; Advisorpedia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VFO positioning */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Virtual Family Office"
            title="The planning infrastructure of the ultra-wealthy. Without the eight-figure price tag."
            subtitle="A Virtual Family Office coordinates your tax strategy, investment planning, insurance, estate plan, and business structure into one coherent system. Most people only get this if they have $50M+. We built it for everyone."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tax Strategy", desc: "Proactive tax planning, not just filing. We find the money your CPA leaves on the table." },
              { title: "Investment Planning", desc: "Low-cost, evidence-based portfolios. No proprietary products. No commissions." },
              { title: "Life Planning", desc: "Your plan starts with what you want your life to look like — then we build the financial structure to support it." },
              { title: "Insurance & Estate", desc: "Coverage that actually protects your family. Estate documents that reflect your values." },
              { title: "Business Structure", desc: "Entity optimization, retirement plan design, and cash flow strategy for business owners." },
              { title: "One Flat Fee", desc: "All of this, coordinated. No AUM percentage. No hidden costs. One transparent monthly fee." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-neutral-bg"
              >
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/virtual-family-office"
              className="text-primary font-semibold hover:text-secondary transition-colors"
            >
              Learn more about the VFO model &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Ideal client paths */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Built for people who refuse to do things the conventional way."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientPaths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group bg-neutral-bg rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all border border-transparent hover:border-secondary/20"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={path.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {path.title}
                </h3>
                <p className="mt-3 text-neutral-dark/70 text-sm leading-relaxed">
                  {path.description}
                </p>
                <span className="inline-block mt-4 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fee model overview */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeading
                eyebrow="Transparent Pricing"
                title="A fee that goes down as your wealth goes up."
                subtitle="AUM advisors charge more as you succeed. Our declining flat fee means the wealthier you get, the less you pay as a percentage. That's how incentives should work."
                centered={false}
              />
              <div className="mt-8 space-y-4">
                {[
                  ["$1M net worth", "~$833/mo", "1.00%"],
                  ["$3M net worth", "~$1,417/mo", "0.57%"],
                  ["$5M net worth", "~$1,750/mo", "0.42%"],
                  ["$10M net worth", "~$2,583/mo", "0.31%"],
                ].map(([nw, fee, rate]) => (
                  <div
                    key={nw}
                    className="flex items-center justify-between bg-white rounded-lg p-4 border border-neutral-bg"
                  >
                    <span className="text-sm font-medium text-neutral-dark">{nw}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-primary">{fee}</span>
                      <span className="text-xs text-neutral-dark/50 ml-2">({rate})</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/pricing"
                className="inline-block mt-6 text-primary font-semibold hover:text-secondary transition-colors"
              >
                See full pricing details &rarr;
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-neutral-bg text-center">
              <p className="text-6xl font-bold text-primary">$0</p>
              <p className="text-lg text-neutral-dark/70 mt-2">in commissions. Ever.</p>
              <hr className="my-6 border-neutral-bg" />
              <p className="text-6xl font-bold text-secondary">100%</p>
              <p className="text-lg text-neutral-dark/70 mt-2">fiduciary, always.</p>
              <hr className="my-6 border-neutral-bg" />
              <p className="text-6xl font-bold text-success">1</p>
              <p className="text-lg text-neutral-dark/70 mt-2">
                flat fee. All services included.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
