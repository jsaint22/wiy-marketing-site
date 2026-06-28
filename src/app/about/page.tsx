import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Joshua St. Laurent",
  description:
    "Joshua St. Laurent, CFP, CFT, left the brokerage world to build a flat-fee fiduciary firm that serves clients first. Learn about the founding of Wealth In Yourself and the standards behind it.",
};

const credentials = [
  { label: "MS", detail: "Financial Life Planning, Golden Gate University" },
  { label: "CFP\u00AE", detail: "Certified Financial Planner" },
  { label: "CFT\u2122", detail: "Certified Financial Therapist" },
  { label: "APFC\u00AE", detail: "Accredited Personal Financial Coach" },
  { label: "ACC", detail: "Associate Certified Coach" },
  { label: "EA", detail: "Enrolled Agent (in progress)" },
];

const standards = [
  {
    word: "Fee-only",
    desc: "No commissions. No kickbacks. We get paid by you and only you.",
  },
  {
    word: "Independent",
    desc: "No parent company. No proprietary products. No one telling us what to sell.",
  },
  {
    word: "Always a fiduciary",
    desc: "Not sometimes. Not when it's convenient. Every recommendation, every time.",
  },
  {
    word: "Transparent",
    desc: "A flat fee you can see. No AUM percentages hiding in the background as your wealth grows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://wealthinyourself.com" },
              { "@type": "ListItem", position: 2, name: "About Joshua St. Laurent", item: "https://wealthinyourself.com/about" },
            ],
          }),
        }}
      />
      {/* Hero */}
      <section className="bg-white py-6 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Meet the Founder
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Joshua St. Laurent
              </h1>
              <p className="mt-2 text-xl text-neutral-dark/70 font-medium">
                MS &middot; CFP&reg; &middot; CFT&trade; &middot; APFC&reg; &middot; ACC &middot; Founder
              </p>
              <p className="mt-6 text-lg text-neutral-dark/70 leading-relaxed max-w-xl">
                I left the brokerage world because the system is built to
                serve advisors and firms &mdash; not the people sitting across the
                table. So I built something that does.
              </p>
            </div>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl bg-neutral-bg overflow-hidden">
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

      {/* Origin Story */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Breaking Point"
            title="Why I walked away."
          />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              I spent a decade in the industry. I learned the craft. I also learned
              how the system actually works &mdash; advisors incentivized to
              gather assets, push products, and keep clients in the dark about
              what they were really paying. The client&apos;s best interest
              came second. Sometimes it didn&apos;t come at all.
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 py-2 my-8 text-xl font-semibold text-primary italic">
              &ldquo;I watched advisors take off their fiduciary hat and put on
              their sales hat in the same conversation.&rdquo;
            </blockquote>
            <p>
              That was the moment. I couldn&apos;t unsee it. And I
              couldn&apos;t keep being part of it.
            </p>
            <p>
              When I finally left, I walked away from the highest-paying
              job of my life. I took no clients with me, on principle. I
              built from zero.
            </p>
            <p className="text-primary font-semibold">
              I am proud of that.
            </p>
          </div>
        </div>
      </section>

      {/* GGU Discovery */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Shift"
            title="Where planning became personal."
          />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              I pursued a Master&apos;s in Financial Life Planning at Golden
              Gate University. Not an MBA. Not a finance degree. A program
              built around a radical idea: planning starts with your life, not
              your money.
            </p>
            <p>
              That&apos;s where I discovered financial therapy &mdash; the
              practice of understanding why you make the decisions you make
              about money before trying to optimize them. It rewired how I
              think about this work entirely.
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 py-2 my-8 text-xl font-semibold text-primary italic">
              &ldquo;I watched a financial coach ask someone one question and
              completely change how they saw their relationship with
              money.&rdquo;
            </blockquote>
            <p>
              Spreadsheets don&apos;t change behavior. Understanding does. The
              numbers matter — but they come after you know what you&apos;re
              building toward.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Teaching"
            title="I teach the program I graduated from."
          />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              I&apos;m an Adjunct Professor at Golden Gate University,
              teaching in the same Financial Planning program I came through
              as a student. It keeps me sharp. It also keeps me honest &mdash;
              the students ask the questions my clients don&apos;t know to ask,
              and the answer has to hold up either way.
            </p>
            <p>
              Teaching is a tax on certainty. You can&apos;t coast on jargon when
              a student wants to know why. If I can&apos;t defend a financial
              planning position to someone studying for the CFP exam, it
              probably doesn&apos;t belong in a client recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* FIAT */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
            Our Standard
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            FIAT &mdash; Fiduciary In All Things
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Not just a legal obligation. A standard we apply to every relationship,
            every recommendation, and every decision. Your interests come first &mdash;
            not sometimes, not when it&apos;s convenient, but always.
          </p>
          <a
            href="/fiduciary"
            className="inline-block mt-6 text-secondary font-semibold hover:text-secondary/80 transition-colors"
          >
            Read our full fiduciary commitment &rarr;
          </a>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Standard"
            title="What we stand for."
            subtitle="No commissions. No proprietary products. No AUM fees that create conflicts. A flat fee structure that stays fair as you grow."
            dark
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((item) => (
              <div
                key={item.word}
                className="bg-white/10 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white">{item.word}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Credentials"
            title="The receipts."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="bg-neutral-bg rounded-xl p-6 text-center"
              >
                <p className="text-xl font-bold text-primary">{cred.label}</p>
                <p className="mt-1 text-sm text-neutral-dark/70">
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Service"
            title="Financial planning done right is a public good."
          />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              I&apos;ve donated time to{" "}
              <a href="https://www.3rddecade.org" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:text-secondary underline">3rd Decade</a>,
              a nonprofit providing financial planning and mentorship to young
              adults who wouldn&apos;t otherwise have access to it. Most financial
              advice is delivered to the people who need it least. That&apos;s
              backward.
            </p>
            <p>
              I&apos;ve served as a Guardian ad Litem, representing youth in the
              court system who would otherwise have no voice in decisions being
              made about their lives. It&apos;s the kind of work that doesn&apos;t
              pay, doesn&apos;t scale, and doesn&apos;t look like advisory practice
              at all. It&apos;s also the kind of work that keeps the rest of it
              honest.
            </p>
            <p>
              I&apos;ve supported Junior Achievement&apos;s financial literacy
              programs in schools. Few things matter more than teaching people
              young what compound interest and honest fees actually look like.
            </p>
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Off the Clock"
            title="The person behind the planner."
          />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              Wealth In Yourself is where I spend most of my time &mdash; serving
              entrepreneurs and real estate investors who&apos;ve outgrown the AUM
              model. I also run a separate practice, Top Shelf Private Wealth, for
              professional hockey players. I&apos;m a lifelong hockey player myself,
              and it turns out compressed earning windows, jock tax, and cross-border
              planning demand the same rigor I bring to WIY clients in different
              contexts. The work informs the work.
            </p>
            <p>
              I live near Lake Tahoe, Nevada with my wife Amanda and our son Cole.
              Our daughter is due September 2026.
            </p>
            <p>
              I hosted a 35-episode podcast where I talked about the things most
              advisors won&apos;t say out loud &mdash; fee conflicts, industry
              incentives, and what real financial planning actually looks like
              when you strip away the sales pitch. The catalog is preserved at{" "}
              <Link href="/podcast" className="text-secondary hover:text-secondary/80 underline">
                /podcast
              </Link>
              .
            </p>
            <p>
              I also own Lake Tahoe Motorcycle Rentals and CA Homes In The
              Pines, a short-term rental business in the Sierra Nevada.
              Advisors who help clients build wealth should be building it
              themselves. I&apos;m not just managing your money &mdash;
              I&apos;m doing the same work you are. I&apos;m also working
              toward my private pilot&apos;s license &mdash; slower than
              I&apos;d like, but the hours add up.
            </p>
          </div>
        </div>
      </section>

      {/* Related Reading */}
      <section className="bg-white py-8 sm:py-10 border-t border-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-neutral-dark/50 uppercase tracking-wider mb-4">Related</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/pricing" className="text-primary hover:text-secondary font-medium transition-colors">See our fee schedule →</Link>
            <Link href="/our-process" className="text-primary hover:text-secondary font-medium transition-colors">How the planning process works →</Link>
            <Link href="/faq" className="text-primary hover:text-secondary font-medium transition-colors">Common questions →</Link>
            <Link href="/fiduciary" className="text-primary hover:text-secondary font-medium transition-colors">Our fiduciary standard →</Link>
          </div>
        </div>
      </section>

      <CTASection
        headline="Looking for an advisor who lives the work, not just sells it?"
        subtext="Book a 15-minute intro call. No pitch. No pressure. Just a conversation about what matters to you."
      />
    </>
  );
}
