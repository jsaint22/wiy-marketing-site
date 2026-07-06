import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";
import { RevealOnScroll } from "@/components/cinematic/RevealOnScroll";

export const metadata: Metadata = {
  title: "Coordinated Expertise — The People Behind Your Plan",
  description:
    "The actual bench behind the Virtual Family Office model: who Josh coordinates with, what each specialist does, and where that bench still has an open seat. No in-house staff. No referral fees. Just the honest answer to who actually does the work.",
};

interface BenchSeat {
  category: string;
  status: "ACTIVE" | "VETTED NETWORK" | "NAMED — ONE RELATIONSHIP" | "OPEN SEAT";
  statusColor: "success" | "warning" | "primary";
  icon: string;
  body: string[];
}

const benchSeats: BenchSeat[] = [
  {
    category: "Estate Planning",
    status: "ACTIVE",
    statusColor: "success",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    body: [
      "When a client needs a trust drafted, a will updated, or an existing estate plan reviewed, I coordinate with Encore Estate Plans — the estate planning firm I use directly with clients today.",
      "I brief them on your situation before you're introduced, sit in on the review, and make sure the documents that come back actually reflect the plan we built together — not a generic template.",
    ],
  },
  {
    category: "Tax Strategy",
    status: "VETTED NETWORK",
    statusColor: "success",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    body: [
      "I don't hand every client to the same CPA — I keep a vetted network and match you to the one who actually fits your situation: business-tax specialists for entity owners, exit-planning CPAs for owners heading toward a sale, and Tahoe-local preparers for straightforward state returns.",
      "My job is the strategy that happens between filing seasons: the Roth conversion, the entity election, the multi-year projection. I coordinate that directly with whichever CPA is preparing your return, so the strategy and the filing agree with each other.",
    ],
  },
  {
    category: "Entity Formation",
    status: "ACTIVE",
    statusColor: "success",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    body: [
      "For LLC formation, registered agent service, and annual state filings, I use Northwest Registered Agent. To be precise about what that is: a filing service, not a law firm.",
      "Anything that requires actual legal judgment — how your entities should be structured, what the operating agreement should say — is planning I do directly with you, coordinated with your attorney.",
    ],
  },
  {
    category: "Exit Planning",
    status: "NAMED — ONE RELATIONSHIP",
    statusColor: "primary",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    body: [
      "When a business-owner client starts thinking seriously about an exit, I bring in Eric Cooper, CEPA — WIY's exit-planning partner and consultant, brought in specifically for that work.",
    ],
  },
  {
    category: "Insurance & Risk",
    status: "OPEN SEAT",
    statusColor: "warning",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    body: [
      "This is the one seat on the bench I haven't filled. I'll review your coverage — life, disability, umbrella, long-term care — and tell you directly where you're over-insured or exposed.",
      "But I don't yet have a named insurance specialist I bring in for placement. I'd rather tell you that plainly than imply a relationship that doesn't exist.",
    ],
  },
];

const stack = [
  { name: "Altruist", logo: "/logos/partners/altruist.svg", role: "Custodian" },
  { name: "RightCapital", logo: "/logos/partners/rightcapital.png", role: "Financial Planning" },
  { name: "Encore Estate Plans", logo: "/logos/partners/encore-estate-plans.webp", role: "Estate Documents" },
  { name: "Valur", logo: "/logos/partners/valur.svg", role: "Advanced Tax Strategies" },
  { name: "Monarch Money", logo: "/logos/partners/monarch.png", role: "Cash Flow Tracking" },
  { name: "Equity Trust", logo: "/logos/partners/equity-trust.png", role: "Self-Directed IRA Custodian" },
];

const coordinationSteps = [
  {
    title: "I Brief Them First",
    desc: "Before any specialist hears your name, they hear your situation — in writing, from me. They start already caught up, not cold.",
  },
  {
    title: "I Make the Introduction",
    desc: "You don't cold-call a stranger and re-explain your life from scratch. I connect you directly, with the context already shared.",
  },
  {
    title: "I Sit In",
    desc: "On the conversations that matter, I'm in the room or on the call — not because I don't trust the specialist, but because your plan doesn't get to fragment.",
  },
  {
    title: "I Follow Through",
    desc: "What gets decided gets carried back into your plan. Nothing sits in a silo, waiting for you to notice it got dropped.",
  },
];

const faqs = [
  {
    question: "Do you get paid for bringing in these specialists?",
    answer:
      "No. I don't currently maintain formal referral arrangements with any of the people or firms above, and compensation doesn't flow between us in either direction. These relationships exist because I trust the work — not because of a financial arrangement between us.",
  },
  {
    question: "Has a handoff like this actually happened, or is this theoretical?",
    answer:
      "Both, honestly — depending on the seat. Estate planning through Encore is the most established relationship on this bench; clients have had real trust and estate work coordinated through it. The newer seats — exit planning, insurance — haven't had a live client handoff yet. I'd rather tell you which is which than let the page imply more history than exists.",
  },
  {
    question: "Why don't you just build this in-house?",
    answer:
      "Because an in-house team at this wealth tier is the wrong tool — you'd be paying for headcount you don't need so I can offer a service I'm not the best person to deliver directly. A CPA who does this daily, an estate attorney who drafts documents for a living — they're better at their specialty than I would be moonlighting in it. My job is coordinating the specialists, staying the single point of contact, and making sure nothing falls through the cracks between them. That's the actual value — not pretending to be a twelve-person firm from a one-person office.",
  },
  {
    question: "What if my situation needs a specialist who isn't on this bench yet?",
    answer:
      "I say so. If your situation calls for expertise outside my existing relationships — which happens, especially for the seats marked open above — I tell you directly and help you find the right fit, rather than forcing you into a relationship that isn't actually right for your situation.",
  },
  {
    question: "Is this a family office?",
    answer:
      "No, and I want to be precise about that. A traditional family office is a private staff — employees, under one roof — typically reserved for $50M–$100M+ families at $500K+ per year. Every name on this page is an independent professional or firm I coordinate with, not someone on my payroll. The full explanation of the model is on the Virtual Family Office page.",
  },
];

function StatusPill({ status, color }: { status: BenchSeat["status"]; color: BenchSeat["statusColor"] }) {
  const colorClasses =
    color === "success"
      ? "bg-success/10 text-success"
      : color === "warning"
      ? "bg-warning/10 text-warning"
      : "bg-primary/10 text-primary";
  return (
    <span
      className={`inline-block ${colorClasses} font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full`}
    >
      {status}
    </span>
  );
}

export default function CoordinatedExpertisePage() {
  return (
    <>
      {/* Draft banner — internal only, strip before publish */}
      <div className="bg-warning text-white text-center text-sm font-semibold py-2 px-4">
        INTERNAL DRAFT — not published. Content decisions are resolved; awaiting
        Josh&apos;s final review before this goes live.
      </div>

      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Proof, Not a Pitch
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            The People Behind the Plan
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            One advisor. One flat fee. One person accountable to you — that
            part doesn&apos;t change. But &ldquo;I do this alone&rdquo; was never
            true, and pretending otherwise doesn&apos;t serve you. Here&apos;s
            the actual bench: who I coordinate, what each seat does, and where
            that bench still has an open chair.
          </p>
        </div>
      </section>

      {/* How Coordination Actually Works */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Not a Slogan"
            title="Four things happen before you ever meet a specialist."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coordinationSteps.map((step, i) => (
              <RevealOnScroll key={step.title} delay={i * 0.05}>
                <div className="bg-white rounded-xl p-6 h-full border border-neutral-bg">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mb-4 text-sm font-bold text-secondary">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-dark/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The Bench, Seat by Seat */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Bench"
            title="Five seats. Here's exactly who's in each one — and who isn't, yet."
            subtitle="No twelve-person team. Five categories, named honestly, one at a time."
          />
          <div className="mt-12 space-y-6">
            {benchSeats.map((seat, i) => (
              <RevealOnScroll key={seat.category} delay={i * 0.04}>
                <div className="rounded-2xl border border-neutral-bg p-6 sm:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-secondary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d={seat.icon} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-primary">{seat.category}</h3>
                    </div>
                    <StatusPill status={seat.status} color={seat.statusColor} />
                  </div>
                  <div className="space-y-3 text-neutral-dark/80 leading-relaxed">
                    {seat.body.map((p, pi) => (
                      <p key={pi}>{p}</p>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The Stack */}
      <RevealOnScroll>
        <section className="bg-primary py-14 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Technology & Custody"
              title="The systems the coordination runs on."
              subtitle="Software and custody don't replace judgment — but they're part of how the coordination actually happens: one integrated view instead of six separate logins."
              dark
            />
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {stack.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-5 text-center border border-white/20 hover:border-secondary/40 transition-all"
                >
                  <div className="h-10 flex items-center justify-center mb-3">
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={120}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-primary">{item.name}</p>
                  <p className="text-xs text-neutral-dark/70 mt-1">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* How It's Tracked */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It's Tracked"
            title="Today, the coordination lives in a conversation and your case file."
          />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              When I brief a specialist or review what comes back, I note it in
              your file — what was shared, what came back, and when. It
              isn&apos;t a client-facing dashboard today; it&apos;s how I make
              sure nothing about your plan gets lost between conversations.
            </p>
          </div>
        </div>
      </section>

      {/* What This Isn't */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Honest Framing" title="What this isn't." />
          <div className="mt-8 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              This isn&apos;t a family office with a staff under one roof —
              those exist at $50M+ minimums and $500K+ price tags. It isn&apos;t
              a set of employees, either. Every name above is an independent
              professional I coordinate with, not someone on my payroll. And
              there are no referral fees or formal referral arrangements behind
              any of it — the relationships exist because I trust the work,
              not because of a financial arrangement between us.
            </p>
            <p>
              <Link
                href="/virtual-family-office"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                Read the full Virtual Family Office model &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Questions About the Bench" />

      <CTASection
        headline="Want to see how this works for your specific situation?"
        subtext="Book a 15-minute intro call. Bring the specialist question you haven't had a good answer to — that's usually the fastest way to see the coordination model in action."
      />
    </>
  );
}
