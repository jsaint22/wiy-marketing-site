import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import EmailCapture from "@/components/EmailCapture";
import { getAllPosts } from "@/lib/blog";

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
    caseStudyLabel: "See how a RE investor deferred $142K in taxes",
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
    name: "Encore Estate Plans",
    logo: "/logos/partners/encore-estate-plans.webp",
    description: "Estate planning — wills, trusts, and powers of attorney coordinated with your financial plan.",
  },
  {
    name: "Valur",
    logo: "/logos/partners/valur.svg",
    description: "Advanced tax strategies — Charitable Remainder Trusts, OZ funds, and more.",
  },
  {
    name: "Monarch Money",
    logo: "/logos/partners/monarch.png",
    description: "Cash flow tracking — real-time visibility into your income, spending, and net worth.",
  },
];

const pressFeatures = [
  {
    name: "Forbes",
    logo: "/press/Forbes.png",
  },
  {
    name: "MarketWatch",
    logo: "/press/marketwatch.png",
  },
  {
    name: "Advisorpedia",
    logo: "/press/Advisorpedia Logo.png",
  },
  {
    name: "BiggerPockets",
    logo: "/badges/BP_Featured-FinAd-Blue_1000W.png",
  },
] as const;

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-neutral-bg/30 to-neutral-bg/60 pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-8 lg:pb-10">
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
                  className="text-primary font-medium underline underline-offset-4 hover:text-secondary transition-colors py-2"
                >
                  Or see what you&apos;d pay &rarr;
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-2xl bg-neutral-bg overflow-hidden shadow-lg">
                <Image
                  src="/team/josh-headshot-v2.jpg"
                  alt="Joshua St. Laurent, CFP, CFT — Founder of Wealth In Yourself"
                  width={420}
                  height={560}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* As Featured In */}
      <section className="bg-primary py-6 sm:py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-white/80 uppercase tracking-widest mb-5">
            As Featured In
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {pressFeatures.map((press) => (
              <div
                key={press.name}
                className="bg-white rounded-xl flex items-center justify-center p-4"
                style={{ height: 80 }}
              >
                <Image
                  src={press.logo}
                  alt={press.name}
                  width={240}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Why This Exists
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            I watched advisors take off their fiduciary hat and put on their sales hat in the same conversation.
          </h2>
          <div className="mt-8 space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              I spent a decade watching advisors legally switch
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
            <p className="text-secondary font-semibold">
              That&apos;s Wealth In Yourself. The standard here is{" "}
              <a href="/fiduciary" className="text-secondary hover:text-secondary/80 underline">FIAT &mdash; Fiduciary In All Things</a>.
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
            eyebrow="The Life Architecture · Virtual Family Office"
            title="The planning infrastructure of the ultra-wealthy. Without the eight-figure price tag."
            subtitle="A Virtual Family Office coordinates your tax strategy, investments, estate plan, and business structure into one system &mdash; bringing in outside specialists when your situation calls for them. We call the coordinated system The Life Architecture. Typically reserved for $50M+ families. We built it into every client engagement."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tax Strategy", desc: "Proactive tax planning, not just filing. We find the money your CPA leaves on the table." },
              { title: "Investment Planning", desc: "Low-cost, evidence-based portfolios. No proprietary products. No commissions." },
              { title: "Life Planning", desc: "We start with what you want your life to look like. The financial structure exists to serve that vision, not the other way around." },
              { title: "Estate & Risk Review", desc: "Estate documents that reflect your values. Coverage reviewed so nothing is overlooked." },
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

      {/* Partner Ecosystem (A5) */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Team Under One Fee"
            title="You don't coordinate the team. We do."
            subtitle="Your flat fee covers the coordination. You pay partners directly only when their service is engaged. No markups. No middlemen."
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-xl p-5 border border-neutral-bg hover:border-secondary/20 hover:shadow-sm transition-all"
              >
                <div className="h-10 flex items-center justify-center mb-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </div>
                <p className="text-xs font-semibold text-primary text-center mb-2">
                  {partner.name}
                </p>
                <p className="text-xs text-neutral-dark/70 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/virtual-family-office"
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
            >
              See all partners and tools &rarr;
            </Link>
          </div>
          <p className="mt-3 text-center text-xs text-neutral-dark/70 max-w-2xl mx-auto">
            Services coordinated through Wealth In Yourself. You pay the partner directly only
            when their service is actively engaged. No additional advisory fees.
          </p>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Work With"
            title="Built for people who refuse to do things the conventional way."
            dark
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientPaths.map((path) => (
              <div
                key={path.title}
                className="group bg-white/10 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all border border-white/10 hover:border-secondary/30"
              >
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={path.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                  {path.title}
                </h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">
                  {path.description}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <Link
                    href={path.href}
                    className="text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    Learn more &rarr;
                  </Link>
                  <Link
                    href="/case-studies"
                    className="text-xs text-white/70 hover:text-secondary transition-colors"
                  >
                    {path.caseStudyLabel} &rarr;
                  </Link>
                  <p className="text-[10px] text-white/50 leading-snug mt-1">
                    Hypothetical composite for illustrative purposes only. Results based on specific client circumstances and are not a guarantee of future results.
                  </p>
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
                      <span className="text-xs text-neutral-dark/70 ml-2">({rate})</span>
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
                  className="text-neutral-dark/70 font-medium hover:text-secondary transition-colors"
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

      {/* Free Resources */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Free Resources"
            title="Not ready to book a call? Start here."
            subtitle="Free guides built for the people we work with. No fluff. No email spam. Just the questions your advisory team should be answering."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/re-investor-checklist"
              className="group bg-white rounded-xl p-6 border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all"
            >
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">For RE Investors</p>
              <h3 className="mt-2 text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                Tax Strategy Checklist
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                16 questions about 1031 exchanges, cost segregation, entity structure, and depreciation.
              </p>
              <p className="mt-3 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                Get the free PDF &rarr;
              </p>
            </Link>
            <Link
              href="/business-owner-roadmap"
              className="group bg-white rounded-xl p-6 border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all"
            >
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">For Business Owners</p>
              <h3 className="mt-2 text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                Wealth Extraction Roadmap
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                Valuation, QSBS, entity structure, and the full team you need before you exit.
              </p>
              <p className="mt-3 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                Get the free PDF &rarr;
              </p>
            </Link>
            <Link
              href="/w2-escape-plan"
              className="group bg-white rounded-xl p-6 border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all"
            >
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider">For W-2 Professionals</p>
              <h3 className="mt-2 text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                W-2 Escape Plan
              </h3>
              <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                Runway math, health insurance, entity setup, and 13 questions before you make the leap.
              </p>
              <p className="mt-3 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                Get the free PDF &rarr;
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Writing */}
      {posts.length > 0 && (
        <section className="bg-white py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Latest Writing"
              title="Recent essays and insights."
            />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <div className="bg-neutral-bg rounded-xl p-6 hover:shadow-lg hover:border-secondary/20 border border-transparent transition-all h-full">
                    <time className="text-xs text-neutral-dark/70">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </time>
                    <h3 className="mt-2 text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/blog" className="text-primary font-semibold hover:text-secondary transition-colors">
                Read all essays &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
            Newsletter
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            One real idea, every week
          </h2>
          <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
            Money, life planning, and what the advisory industry doesn&apos;t want
            you to know. Written by Josh — not a marketing team. No spam. No fluff.
          </p>
          <a
            href="https://joshstlaurent.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3.5 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
          >
            Subscribe on Substack
          </a>
          <p className="mt-3 text-white/80 text-xs">
            Free. Unsubscribe anytime. Your email stays between us.
          </p>
        </div>
      </section>

      {/* Latest Podcast Episode */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Episode"
            title="The Wealth In Yourself Podcast"
            subtitle="Conversations about money, life planning, and the things most advisors won't say out loud."
          />
          <div className="mt-8">
            <iframe
              src="https://open.spotify.com/embed/show/6L3ew149S5Kc8vN2UwYRSR?utm_source=generator&theme=0"
              width="100%"
              height="232"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
              title="Wealth In Yourself Podcast on Spotify"
            />
          </div>
          <div className="mt-4 text-center">
            <Link href="/podcast" className="text-primary font-semibold hover:text-secondary transition-colors">
              Browse all 35 episodes &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
