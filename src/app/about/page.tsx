import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Joshua St. Laurent",
  description:
    "Joshua St. Laurent, CFP, CFT, left the brokerage world to build a flat-fee fiduciary firm that serves clients first. Learn why he founded Wealth In Yourself and the standards behind it.",
};

const credentials = [
  { label: "CFP\u00AE", detail: "Certified Financial Planner" },
  { label: "CFT\u2122", detail: "Certified Financial Therapist" },
  { label: "APFC\u00AE", detail: "Accredited Personal Financial Coach" },
  { label: "ACC", detail: "Associate Certified Coach" },
  { label: "MS", detail: "Financial Life Planning, Golden Gate University" },
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
                CFP&reg; &middot; CFT&trade; &middot; APFC&reg; &middot; ACC &middot; MS &middot; Founder
              </p>
              <p className="mt-6 text-lg text-neutral-dark/70 leading-relaxed max-w-xl">
                I built Wealth In Yourself because the advisory industry is
                broken. It&apos;s built to serve advisors and firms, not the
                people sitting across the table. I decided to fix that.
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

      {/* Origin Story — Fidelity */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Breaking Point"
            title="Why I left Fidelity."
          />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              I started my career at Fidelity. I learned a lot. I also learned
              how the system actually works.
            </p>
            <p>
              The system served the firm. Advisors were incentivized to gather
              assets, push products, and keep clients in the dark about what
              they were really paying. The client&apos;s best interest came
              second — if it came at all.
            </p>
            <blockquote className="border-l-4 border-secondary pl-6 py-2 my-8 text-xl font-semibold text-primary italic">
              &ldquo;I watched advisors take off their fiduciary hat and put on
              their sales hat in the same conversation.&rdquo;
            </blockquote>
            <p>
              That was the moment. I couldn&apos;t unsee it. And I
              couldn&apos;t keep being part of it.
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
              built around the idea that planning starts with life, not money.
            </p>
            <p>
              That&apos;s where I discovered financial therapy and
              values-aligned coaching. It changed everything about how I think
              about this work.
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

      {/* What We Stand For */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Standard"
            title="What we stand for."
            subtitle="No commissions. No proprietary products. No AUM fees that create conflicts. A flat fee structure that stays fair as you grow."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((item) => (
              <div
                key={item.word}
                className="bg-white rounded-xl p-6 border border-neutral-bg"
              >
                <h3 className="text-lg font-bold text-primary">{item.word}</h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
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

      {/* Personal */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Off the Clock"
            title="The person behind the planner."
          />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              I&apos;m building two advisory firms — Wealth In Yourself, for
              entrepreneurs and real estate investors, and Top Shelf Private
              Wealth, built exclusively for professional hockey players. I live
              in Lake Tahoe, Nevada with my wife Amanda and our son Cole. Our
              daughter is due September 2026.
            </p>
            <p>
              I also own Lake Tahoe Motorcycle Rentals and CA Homes In The
              Pines — a luxury short-term rental business creating world-class
              vacation experiences in the Sierra Nevada. I believe advisors
              who help clients build wealth should be building it themselves,
              not just managing other people&apos;s money.
            </p>
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
