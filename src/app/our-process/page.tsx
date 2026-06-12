import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { CinematicHero } from "@/components/cinematic/CinematicHero";
import { ScrollPinnedCinema } from "@/components/cinematic/ScrollPinnedCinema";
import { RevealOnScroll } from "@/components/cinematic/RevealOnScroll";

export const metadata: Metadata = {
  title: "Our Process — 9 Meetings + Annual Re-Vision",
  description:
    "Twelve months. Nine conversations. One designed life. See exactly what a year of working with Wealth In Yourself looks like — 9 meetings across 6 phases, plus an annual Re-Vision.",
};

// Canonical 6-phase Life Architecture — mirrors wiy-client-portal/config/meetings.ts
// PHASES: Arrive · Story · Vision · Build · Blueprint · On Cadence.
const phases = [
  {
    name: "Arrive",
    timing: "Week 1",
    color: "border-secondary",
    bgAccent: "bg-secondary/10",
    textAccent: "text-secondary",
    description: "Establish trust. The orientation conversation.",
    meetings: [
      {
        number: 1,
        name: "Arrive",
        description:
          "Meet, establish trust, review your intro forms — Your Financial Life Right Now and What's Shifting Right Now — and set the foundation for everything that follows.",
      },
    ],
  },
  {
    name: "Story",
    timing: "Week 2",
    color: "border-success",
    bgAccent: "bg-success/10",
    textAccent: "text-success",
    description: "Surface your money history without making it feel like therapy.",
    meetings: [
      {
        number: 2,
        name: "Story",
        description:
          "Surface your money history — the experiences that built your current beliefs and behaviors. The Money Story exercise. Guided autobiography, not an interview.",
      },
    ],
  },
  {
    name: "Vision",
    timing: "Week 3",
    color: "border-primary",
    bgAccent: "bg-primary/10",
    textAccent: "text-primary",
    description: "Light the torch. The most important meeting in the engagement.",
    meetings: [
      {
        number: 3,
        name: "Vision",
        description:
          "The turning point. Explore what you actually want from life through The Three Questions — a sequence inspired by the life-planning tradition of George Kinder; the questions are Wealth In Yourself's own. Leave with a written Vision Statement.",
      },
    ],
  },
  {
    name: "Build",
    timing: "Weeks 4–8",
    color: "border-secondary",
    bgAccent: "bg-secondary/10",
    textAccent: "text-secondary",
    description: "Name what's in the way, then design the architecture around it.",
    meetings: [
      {
        number: 4,
        name: "Obstacles",
        description:
          "Name what stands between you and the Vision — internal, relational, structural, financial. Build a map to remove the top three.",
      },
      {
        number: 5,
        name: "Time & Cash",
        description:
          "Design your calendar and cash-flow architecture so your money buys you time, not the other way around.",
      },
      {
        number: 6,
        name: "Tax & Entity",
        description:
          "Entity structure, tax-planning roadmap, and business architecture — every recommendation tied back to your Vision.",
      },
      {
        number: 7,
        name: "Capital",
        description:
          "Investment design in behavioral layers: what protects, what funds the Vision, what expresses who you are.",
      },
      {
        number: 8,
        name: "Protect",
        description:
          "Risk, insurance, estate, asset protection — framed as fortifying the upside your Vision requires.",
      },
    ],
  },
  {
    name: "Blueprint",
    timing: "Week 9",
    color: "border-success",
    bgAccent: "bg-success/10",
    textAccent: "text-success",
    description: "Receive the designed artifact. Install the rhythm.",
    meetings: [
      {
        number: 9,
        name: "Blueprint",
        description:
          "Receive your Blueprint — the designed artifact of your planning engagement. Walk through it section by section, install the implementation rhythm.",
      },
    ],
  },
  {
    name: "On Cadence",
    timing: "Ongoing + Annually",
    color: "border-primary",
    bgAccent: "bg-primary/10",
    textAccent: "text-primary",
    description: "Reopen the Vision each year. Keep the plan alive.",
    meetings: [
      {
        number: 10,
        name: "Re-Vision",
        description:
          "Reopen the Vision, refresh the Obstacle Map, update the Blueprint. The annual meeting that prevents drift and re-energizes the engagement.",
      },
    ],
  },
];

const vfoPartners = [
  {
    name: "Altruist",
    logo: "/logos/partners/altruist.svg",
    role: "Custodian",
  },
  {
    name: "RightCapital",
    logo: "/logos/partners/rightcapital.png",
    role: "Financial Planning",
  },
  {
    name: "Encore Estate Plans",
    logo: "/logos/partners/encore-estate-plans.webp",
    role: "Estate Planning",
  },
  {
    name: "Valur",
    logo: "/logos/partners/valur.svg",
    role: "Advanced Tax Strategies",
  },
  {
    name: "Monarch Money",
    logo: "/logos/partners/monarch.png",
    role: "Cash Flow Tracking",
  },
  {
    name: "Equity Trust",
    logo: "/logos/partners/equity-trust.png",
    role: "Self-Directed IRA Custodian",
  },
];

// Cinema chapters — canonical 6 phases (Arrive / Story / Vision / Build / Blueprint / On Cadence),
// client-voice descriptions.
const cinemaChapters = [
  {
    number: "01",
    title: "Arrive",
    body: "One meeting in week one. We meet, establish trust, review your intro forms — Your Financial Life Right Now and What's Shifting Right Now — and set the foundation for everything that follows.",
  },
  {
    number: "02",
    title: "Story",
    body: "One meeting to surface your money history — the experiences that built your current beliefs and behaviors. Guided autobiography, not an interview.",
  },
  {
    number: "03",
    title: "Vision",
    body: "The turning point. We work through The Three Questions and end with a written Vision Statement of the life this engagement is designed to fund.",
  },
  {
    number: "04",
    title: "Build",
    body: "Five meetings across the next five weeks. Obstacles, cash architecture, tax + entity, capital design, and risk + estate — every recommendation tied back to the Vision, not built around a portfolio benchmark.",
  },
  {
    number: "05",
    title: "Blueprint",
    body: "One meeting to hand over your Blueprint — the designed artifact of your planning year — and install the implementation rhythm.",
  },
  {
    number: "06",
    title: "On Cadence",
    body: "An Annual Re-Vision reopens the Vision and keeps the plan alive — plus unlimited event-driven planning when life happens.",
  },
];

// Flattened meeting list for the post-cinema grid — preserves order + verbatim copy.
const allMeetings = phases.flatMap((phase) =>
  phase.meetings.map((meeting) => ({
    ...meeting,
    phaseName: phase.name,
    phaseColor: phase.color,
    phaseBgAccent: phase.bgAccent,
    phaseTextAccent: phase.textAccent,
  }))
);

export default function OurProcessPage() {
  return (
    <>
      {/* Hero — Cinematic shell. Original page had no primary CTA; using canonical
          15-min booking link as a sensible default (CinematicHero requires primaryCta). */}
      <CinematicHero
        eyebrow="Our Process"
        headline="Twelve months. Nine conversations. One designed life."
        subhead="The Life Architecture is what we call the year-long engagement that takes a household from 'we have money but not clarity' to 'we know exactly where this is going.' Six phases. Nine meetings, plus an annual Re-Vision. One flat fee."
        primaryCta={{
          label: "Book your 15-minute intro call",
          href: "https://cal.com/jsaint/intro-call",
          external: true,
        }}
      />

      {/* Pinned scroll cinema — canonical 6 phases */}
      <ScrollPinnedCinema chapters={cinemaChapters} />

      {/* 9 Meetings — wrapped grid */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Year One and Beyond"
            title="Six phases. Nine meetings, plus an annual Re-Vision. Every area of your financial life."
            subtitle="Each phase builds on the last. By the end of Year One, you have your Blueprint — a designed artifact of your financial life, not a binder on a shelf."
          />

          <div className="mt-14 space-y-16">
            {phases.map((phase) => (
              <div key={phase.name}>
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={`w-12 h-12 rounded-full ${phase.bgAccent} flex items-center justify-center`}
                  >
                    <span
                      className={`text-lg font-bold ${phase.textAccent}`}
                    >
                      {phase.name[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">
                      {phase.name}
                    </h3>
                    <p className="text-sm text-neutral-dark/70">
                      {phase.timing}
                    </p>
                  </div>
                </div>

                {/* Meeting Cards — each wrapped in RevealOnScroll */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {phase.meetings.map((meeting) => {
                    // Compute the meeting's index in the flat list for stagger.
                    const flatIdx = allMeetings.findIndex(
                      (m) => m.number === meeting.number
                    );
                    return (
                      <RevealOnScroll
                        key={meeting.number}
                        delay={flatIdx * 0.05}
                      >
                        <div
                          className={`border-l-4 ${phase.color} bg-neutral-bg rounded-xl p-6 hover:shadow-md transition-shadow h-full`}
                        >
                          <div className="flex items-start gap-4">
                            <span
                              className={`flex-shrink-0 w-8 h-8 rounded-full ${phase.bgAccent} flex items-center justify-center text-sm font-bold ${phase.textAccent}`}
                            >
                              {meeting.number}
                            </span>
                            <div>
                              <h4 className="font-bold text-primary">
                                {meeting.name}
                              </h4>
                              <p className="mt-1 text-sm text-neutral-dark/70 leading-relaxed">
                                {meeting.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </RevealOnScroll>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VFO In Action */}
      <RevealOnScroll>
        <section className="bg-primary py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="The Virtual Family Office in Action"
              title="You don't coordinate the team. We do."
              dark
            />
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-3xl mx-auto text-center">
              When you need a cost segregation study, I don&apos;t send you to
              Google &mdash; I introduce you to the right partner, manage the
              handoff, review the output with you, and coordinate the tax and
              investment implications.
            </p>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {vfoPartners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white rounded-xl p-5 text-center border border-white/20 hover:border-secondary/40 transition-all"
                >
                  <div className="h-10 flex items-center justify-center mb-3">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-primary">
                    {partner.name}
                  </p>
                  <p className="text-xs text-neutral-dark/70 mt-1">{partner.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/virtual-family-office"
                className="text-secondary font-semibold hover:text-secondary/80 transition-colors"
              >
                Learn more about the VFO model &rarr;
              </Link>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Year Two and Beyond */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Year Two and Beyond"
            title="After the first year, the rhythm changes."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <RevealOnScroll delay={0}>
              <div className="bg-neutral-bg rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  Annual Re-Vision
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  Reopen the Vision, refresh the Obstacle Map, update the Blueprint.
                  The meeting that prevents drift and re-energizes the engagement.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="bg-neutral-bg rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  Ongoing Coordination
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  Tax strategy, investment monitoring, insurance reviews, and
                  estate updates — coordinated across your VFO team year-round.
                </p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="bg-neutral-bg rounded-xl p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">
                  Event-Driven Planning
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  A business sale, a new property, a baby, a career change. When
                  life happens, your plan adapts.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* What This Costs — informational; pricing link is inline, single close via CTASection below */}
      <section className="bg-primary py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="What This Costs"
            title="All of this — 9 meetings, the Blueprint, VFO coordination, unlimited access — is one flat fee."
            dark
          />
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            No commissions. No surprise invoices. Your fee is based on net worth
            and declines as your wealth grows.{" "}
            <Link
              href="/pricing"
              className="text-secondary font-semibold hover:text-secondary/80 underline underline-offset-4 transition-colors"
            >
              See the full pricing page
            </Link>
            .
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
