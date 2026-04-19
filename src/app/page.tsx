import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import EmailCapture from "@/components/EmailCapture";

const clientPaths = [
  {
    title: "Business Owners",
    description:
      "Uneven income, entity structuring, tax complexity, exit planning. You need an advisor who actually understands what you're building.",
    href: "/for-business-owners",
    caseStudyLabel: "See how a tech founder saved $47K in Year 1",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Real Estate Investors",
    description:
      "1031 exchanges, depreciation strategies, entity structures, passive vs. active rules. Your portfolio is complex. Your planning should match.",
    href: "/for-real-estate-investors",
    caseStudyLabel: "See how a RE investor deferred $62K in taxes",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "FIRE Followers",
    description:
      "You didn't grind for years to white-knuckle a 4% rule. Roth ladders, tax-efficient withdrawals, coast strategies, and a plan that lets you actually live.",
    href: "/for-fire-followers",
    caseStudyLabel: "See how a FIRE couple added 7 years of runway",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
  },
];

const partners = [
  {
    name: "Altruist",
    logo: "/logos/partners/altruist.svg",
    description: "Custodian — where your investments are held, safely and independently.",
  },
  {
    name: "RightCapital",
    logo: "/logos/partners/rightcapital.png",
    description: "Financial planning software — powers your projections, scenarios, and retirement models.",
  },
  {
    name: "Sequence",
    logo: "/logos/partners/sequence.svg",
    description: "Life planning platform — maps your goals, values, and ideal life design.",
  },
  {
    name: "Valur",
    logo: "/logos/partners/valur.svg",
    description: "Advanced tax strategies — Charitable Remainder Trusts, OZ funds, and more.",
  },
  {
    name: "Northwest Registered Agent",
    logo: "/logos/partners/northwest-registered-agent.svg",
    description: "Entity formation — LLCs, S-Corps, and registered agent services.",
  },
  {
    name: "Equity Trust",
    logo: "/logos/partners/equity-trust.png",
    description: "Self-directed IRA custodian — invest retirement funds in real estate and alternatives.",
  },
  {
    name: "Encore Estate Plans",
    logo: "/logos/partners/encore-estate-plans.webp",
    description: "Estate planning — wills, trusts, and powers of attorney coordinated with your financial plan.",
  },
  {
    name: "Monarch Money",
    logo: "/logos/partners/monarch.png",
    description: "Cash flow tracking — real-time visibility into your income, spending, and net worth.",
  },
];

const pressFeatures = [
  {
    name: "MarketWatch",
    title: "Featured Contributor",
    logo: "/press/marketwatch.png",
    href: "https://www.marketwatch.com/guides/financial-advisors/best-financial-advisors-in-reno-nv/",
  },
  {
    name: "Advisorpedia",
    title: "Contributing Author",
    logo: "/press/Advisorpedia Logo.jpeg",
    href: "https://www.advisorpedia.com/author/joshua-st-laurent/",
  },
  {
    name: "BiggerPockets",
    title: "Featured Financial Advisor",
    logo: "/badges/BP_Featured-FinAd-Blue_1000W.png",
    href: "https://www.biggerpockets.com",
    isBadge: true,
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Flat-Fee Fiduciary Advisory
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Your money should buy you time.
                <br className="hidden sm:block" />
                Not the other way around.
              </h1>
              <p className="mt-6 text-lg text-neutral-dark/70 leading-relaxed max-w-xl">
                Wealth In Yourself is a flat-fee, fiduciary financial life
                planning firm for entrepreneurs and real estate investors. No
                commissions. No AUM fees. Just honest advice built around the
                life you want to create.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-center"
                >
                  Book your 15-minute intro call
                </a>
                <Link
                  href="/pricing#calculator"
                  className="px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors text-center"
                >
                  See what you&apos;d pay
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
            </div>
          </div>
        </div>
      </section>

      {/* As Featured In — Integrated Credential Bar */}
      <section className="bg-primary py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {pressFeatures.map((press) => (
              <a
                key={press.name}
                href={press.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <div className="bg-white rounded-full px-6 py-3 flex items-center justify-center">
                  <Image
                    src={press.logo}
                    alt={press.name}
                    width={"isBadge" in press && press.isBadge ? 80 : 140}
                    height={"isBadge" in press && press.isBadge ? 80 : 40}
                    className={`object-contain ${
                      "isBadge" in press && press.isBadge ? "h-10 w-auto" : "h-8 w-auto"
                    }`}
                  />
                </div>
                <span className="text-[11px] text-white/50 group-hover:text-white/70 transition-colors font-medium">
                  {press.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why This Exists
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-tight">
            I watched advisors take off their fiduciary hat and put on their sales hat in the same conversation.
          </h2>
          <div className="mt-8 space-y-6 text-lg text-neutral-dark/80 leading-relaxed">
            <p>
              I spent a decade at Fidelity watching advisors legally switch
              between fiduciary and broker-dealer mode mid-conversation. They
              called it &ldquo;taking off your IA hat and putting on your BD
              hat.&rdquo; It&apos;s legal. It&apos;s common. And almost nobody
              outside the industry knows it&apos;s happening.
            </p>
            <p>
              So I built a firm where fiduciary isn&apos;t a hat you put on
              when it&apos;s convenient. Where your fee doesn&apos;t grow just
              because your account did. Where the person sitting across from
              you is building businesses, owning real estate, and designing
              their own life &mdash; not just managing yours.
            </p>
            <p className="text-primary font-semibold">
              That&apos;s Wealth In Yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Funnel CTA */}
      <section className="bg-neutral-bg py-8 sm:py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-dark/70 text-lg">
            Not ready to book a call? Read Josh&apos;s most popular essay.
          </p>
          <a
            href="https://joshstlaurent.com/writing/the-hat-trick-nobody-talks-about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
          >
            Read &ldquo;The Hat Trick Nobody Talks About&rdquo;
          </a>
        </div>
      </section>

      {/* VFO positioning */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Virtual Family Office"
            title="The planning infrastructure of the ultra-wealthy. Without the eight-figure price tag."
            subtitle="A Virtual Family Office coordinates your tax strategy, investments, insurance, estate plan, and business structure into one system. Typically reserved for $50M+ families. We built it into every client engagement."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tax Strategy", desc: "Proactive tax planning, not just filing. We find the money your CPA leaves on the table." },
              { title: "Investment Planning", desc: "Low-cost, evidence-based portfolios. No proprietary products. No commissions." },
              { title: "Life Planning", desc: "We start with what you want your life to look like. The financial structure exists to serve that vision, not the other way around." },
              { title: "Insurance & Estate", desc: "Coverage that actually protects your family. Estate documents that reflect your values." },
              { title: "Business Structure", desc: "Entity optimization, retirement plan design, and cash flow strategy for business owners." },
              { title: "One Flat Fee", desc: "All of this, coordinated. No AUM percentage. No hidden costs. One transparent monthly fee." },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-neutral-bg rounded-xl p-6 border border-neutral-bg"
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

      {/* Your WIY Experience — Client Portal Preview (A2) */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Wealth In Yourself Experience"
            title="Most advisors send PDFs. We built you a portal."
            subtitle="Your dashboard, journey map, and wins tracker — live from Day 1. No PDFs. No guessing where you stand."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dashboard Preview */}
            <div className="rounded-2xl border border-neutral-bg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <a href="https://portal.wealthinyourself.com" target="_blank" rel="noopener noreferrer" className="text-xs text-white/60 ml-2 hover:text-white/80 transition-colors">portal.wealthinyourself.com</a>
              </div>
              <div className="bg-neutral-bg p-6">
                <div className="bg-white rounded-lg p-4 mb-3">
                  <p className="text-xs font-semibold text-neutral-dark/40 uppercase tracking-wider">Dashboard</p>
                  <p className="text-lg font-bold text-primary mt-1">Welcome, Sarah</p>
                  <p className="text-sm text-neutral-dark/60 mt-1">Your next meeting is April 22</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-neutral-dark/40">Net Worth</p>
                    <p className="text-sm font-bold text-primary">$3.2M</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs text-neutral-dark/40">Phase</p>
                    <p className="text-sm font-bold text-success">Build</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 mt-2">
                  <p className="text-xs text-neutral-dark/40">Action Items</p>
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded border border-secondary" />
                      <p className="text-xs text-neutral-dark/70">Sign estate documents</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-success/20 border border-success flex items-center justify-center">
                        <span className="text-[8px] text-success">&#10003;</span>
                      </div>
                      <p className="text-xs text-neutral-dark/40 line-through">Fund Solo 401(k)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Preview */}
            <div className="rounded-2xl border border-neutral-bg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-xs text-white/60 ml-2">My Plan Journey</span>
              </div>
              <div className="bg-neutral-bg p-6">
                <div className="space-y-3">
                  {[
                    { phase: "Ground", status: "complete", meetings: "3/3" },
                    { phase: "Design", status: "complete", meetings: "4/4" },
                    { phase: "Build", status: "active", meetings: "2/3" },
                    { phase: "Evolve", status: "upcoming", meetings: "0/3" },
                  ].map((p) => (
                    <div
                      key={p.phase}
                      className={`bg-white rounded-lg p-3 flex items-center justify-between ${
                        p.status === "active" ? "border-2 border-secondary" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            p.status === "complete"
                              ? "bg-success/10 text-success"
                              : p.status === "active"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-neutral-bg text-neutral-dark/30"
                          }`}
                        >
                          {p.status === "complete" ? "\u2713" : p.phase[0]}
                        </div>
                        <div>
                          <p className={`text-sm font-semibold ${
                            p.status === "upcoming" ? "text-neutral-dark/30" : "text-primary"
                          }`}>
                            {p.phase}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-neutral-dark/40">{p.meetings}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wins Preview */}
            <div className="rounded-2xl border border-neutral-bg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <span className="text-xs text-white/60 ml-2">My Wins</span>
              </div>
              <div className="bg-neutral-bg p-6">
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-success text-sm">$</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">S-Corp Election Savings</p>
                        <p className="text-xs text-neutral-dark/60 mt-0.5">Saved $18,400 in self-employment tax</p>
                        <p className="text-[10px] text-neutral-dark/30 mt-1">March 2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-success text-sm">$</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Roth Conversion Ladder</p>
                        <p className="text-xs text-neutral-dark/60 mt-0.5">Converted $85K at 12% bracket</p>
                        <p className="text-[10px] text-neutral-dark/30 mt-1">February 2026</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-secondary text-sm">&#9733;</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-primary">Estate Plan Complete</p>
                        <p className="text-xs text-neutral-dark/60 mt-0.5">Trust, will, POA, and healthcare directive</p>
                        <p className="text-[10px] text-neutral-dark/30 mt-1">January 2026</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-neutral-dark/50">
            Clients only. Existing clients log in at{" "}
            <a href="https://portal.wealthinyourself.com" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-secondary transition-colors underline">portal.wealthinyourself.com</a>.
          </p>
        </div>
      </section>

      {/* Partner Ecosystem (A5) */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Team Under One Fee"
            title="You don't coordinate the team. We do."
            subtitle="Your flat fee covers the coordination. You pay partners directly only when their service is engaged. No markups. No middlemen."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl p-5 border border-neutral-bg hover:border-secondary/20 hover:shadow-sm transition-all"
              >
                <div className={`${partner.name === "Monarch Money" ? "h-12" : "h-10"} flex items-center justify-center mb-2`}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.name === "Monarch Money" ? 140 : 120}
                    height={partner.name === "Monarch Money" ? 48 : 40}
                    className={`${partner.name === "Monarch Money" ? "max-h-12" : "max-h-10"} w-auto object-contain`}
                  />
                </div>
                <p className="text-xs font-semibold text-primary text-center mb-2">
                  {partner.name}
                </p>
                <p className="text-xs text-neutral-dark/60 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-neutral-dark/50 max-w-2xl mx-auto">
            Services coordinated through Wealth In Yourself. You pay the partner directly only
            when their service is actively engaged. No additional advisory fees.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Built for people who refuse to do things the conventional way."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientPaths.map((path) => (
              <div
                key={path.title}
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
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href={path.href}
                    className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-xs text-neutral-dark/50 hover:text-secondary transition-colors"
                  >
                    {path.caseStudyLabel} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture />

      {/* Fee model overview */}
      <section className="bg-white py-10 sm:py-14">
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
                    className="flex items-center justify-between bg-neutral-bg rounded-lg p-4 border border-neutral-bg"
                  >
                    <span className="text-sm font-medium text-neutral-dark">{nw}</span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-primary">{fee}</span>
                      <span className="text-xs text-neutral-dark/50 ml-2">({rate})</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/pricing"
                  className="text-primary font-semibold hover:text-secondary transition-colors"
                >
                  See full pricing details &rarr;
                </Link>
                <Link
                  href="/vs-aum"
                  className="text-neutral-dark/50 font-medium hover:text-secondary transition-colors"
                >
                  Compare to AUM advisors &rarr;
                </Link>
              </div>
            </div>
            <div className="bg-neutral-bg rounded-2xl p-8 border border-neutral-bg text-center">
              <p className="text-6xl font-bold text-primary">$0</p>
              <p className="text-lg text-neutral-dark/70 mt-2">in commissions. Ever.</p>
              <hr className="my-6 border-white" />
              <p className="text-6xl font-bold text-secondary">100%</p>
              <p className="text-lg text-neutral-dark/70 mt-2">fiduciary, always.</p>
              <hr className="my-6 border-white" />
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
