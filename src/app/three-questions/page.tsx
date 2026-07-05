import type { Metadata } from "next";
import Link from "next/link";
import ThreeQuestionsCapture from "@/components/ThreeQuestionsCapture";

/**
 * ============================================================
 * [DRAFT — COMPLIANCE REVIEW REQUIRED BEFORE PUBLISH]
 * ============================================================
 * Play-4 lead-magnet funnel plumbing for the WIY "Three Questions" worksheet.
 * References/content-factory-audit-and-plan-2026-07-04.md §4b.
 *
 * This route is built DARK on purpose:
 *   - robots: noindex, nofollow (below)
 *   - NOT added to src/app/Navigation.tsx
 *   - NOT added to src/app/sitemap.ts
 * Do not link this page from anywhere public, email it to a prospect, or
 * post it on social until Josh has reviewed the copy AND it has cleared
 * /consult compliance. Open NV exam CIC26-050 makes this client-facing
 * surface especially sensitive right now.
 *
 * Copy source (verbatim — edit there, not here):
 *   references/wiy-three-questions-worksheet-DRAFT-2026-07-04.md
 * Question text origin:
 *   references/wiy-three-questions-canonical-2026-06-12.md
 * ============================================================
 */

export const metadata: Metadata = {
  title: "The Three Questions — A Worksheet from Wealth In Yourself",
  description:
    "DRAFT — not yet published. A self-administrable worksheet from Wealth In Yourself: three questions about the life this money is supposed to fund.",
  robots: { index: false, follow: false },
};

const BOOKING_URL =
  "https://cal.com/jsaint/intro-call?utm_source=three_questions_worksheet&utm_medium=lead_magnet&utm_campaign=play4_funnel";

const PDF_URL = "/pdfs/The-Three-Questions-Worksheet-WIY.pdf";

export default function ThreeQuestionsPage() {
  return (
    <main>
      {/* Visible draft banner — stays until Josh + compliance clear this page */}
      <div className="bg-warning text-black text-center text-sm font-semibold py-2 px-4">
        [DRAFT — compliance review required before publish. Not for
        distribution.]
      </div>

      {/* Hero */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-4">
            Free Worksheet
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            The Three Questions
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            A worksheet from Wealth In Yourself — fill it out alone, before we
            talk.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PDF_URL}
              download
              className="inline-block px-8 py-3.5 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Download the worksheet (PDF)
            </a>
            <a
              href="#questions"
              className="inline-block px-8 py-3.5 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Read it here first
            </a>
          </div>
          <p className="mt-4 text-white/60 text-xs">
            Free. Ungated. No email required.
          </p>
        </div>
      </section>

      {/* Before you start */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Before you start
          </h2>
          <p className="text-lg text-neutral-dark/85 leading-relaxed mb-5">
            Most of the numbers I get handed in a first conversation are
            answers to the wrong question. Net worth, income, the size of a
            portfolio — that&apos;s the <em>how</em>. Almost nobody hands me
            the <em>why</em>.
          </p>
          <p className="text-lg text-neutral-dark/85 leading-relaxed mb-5">
            Here&apos;s what I&apos;ve built this firm on: money is a means,
            not the point. Time is the actual resource — the one you
            can&apos;t get back, refinance, or earn more of. You&apos;ve
            already spent years working on the how. This worksheet is twenty
            quiet minutes on the why.
          </p>
          <p className="text-lg text-neutral-dark/85 leading-relaxed mb-8">
            Three questions. No advisor in the room, no clock running, nobody
            to perform for. Find an hour where no one needs you — coffee, a
            notebook, your own handwriting. Write in real sentences, not
            bullet points. There&apos;s no wrong answer and nothing here gets
            scored. The only way to fail this is to skip it because it feels
            indulgent. It isn&apos;t. It&apos;s the actual work — and
            it&apos;s the same work we&apos;ll do together, in more depth, if
            we end up working together.
          </p>

          <div className="bg-neutral-bg rounded-xl p-6 mb-8">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">
              How to use it
            </h3>
            <ul className="space-y-2 text-neutral-dark/80 text-base leading-relaxed list-disc list-inside">
              <li>
                Alone. If you have a partner, have them do their own copy
                separately — then compare. Don&apos;t write it together.
              </li>
              <li>
                Handwritten if you can manage it. The friction is part of what
                makes you slow down and get specific.
              </li>
              <li>
                No time limit — but don&apos;t second-draft yourself. The
                first honest sentence beats the polished one.
              </li>
              <li>Bring it to our call, or don&apos;t. Both are fine.</li>
            </ul>
          </div>

          <p className="text-sm text-neutral-dark/50 italic">
            This sequence is inspired by the life-planning tradition of George
            Kinder; the questions here are Wealth In Yourself&apos;s own.
          </p>
        </div>
      </section>

      {/* The three questions */}
      <section id="questions" className="py-14 sm:py-20 bg-neutral-bg">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="border-l-4 border-secondary pl-6">
            <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
              Question One — The Life
            </p>
            <p className="text-xl sm:text-2xl font-bold text-primary leading-snug mb-4">
              Take the money question off the table. You have enough — enough
              that the standard worries don&apos;t run your decisions anymore.
              Now: what does your actual life look like? Not the goals
              you&apos;d check off — the life itself. Where do you wake up?
              What&apos;s the work you give your mornings to? Who&apos;s
              around the table? What does an ordinary Tuesday look like?
              Describe it in real, specific detail.
            </p>
            <p className="text-sm italic text-neutral-dark/60 leading-relaxed">
              If you catch yourself listing goals — a house, a number, a trip
              — back up. Goals are what you&apos;d check off. This is asking
              what&apos;s actually happening in the room. Slow down until you
              can see it.
            </p>
          </div>

          <div className="border-l-4 border-secondary pl-6">
            <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
              Question Two — The Decade
            </p>
            <p className="text-xl sm:text-2xl font-bold text-primary leading-snug mb-4">
              Now put a clock on it. You learn you get five more years — maybe
              ten, no more. And here&apos;s the design of it: your health
              holds the whole way, full strength to the last day, but the end
              arrives without warning. What stays? What stops? What starts?
              Which work do you walk away from, and which do you finally
              begin? What does your life reorganize around when you can&apos;t
              count on year eleven?
            </p>
            <p className="text-sm italic text-neutral-dark/60 leading-relaxed">
              Notice what this question protects — your health, all the way
              through — and what it doesn&apos;t protect, which is time. If
              your first answer is a project or a purchase, ask it again. What
              stays is usually a person or a way of spending a day, not a
              thing.
            </p>
          </div>

          <div className="border-l-4 border-secondary pl-6">
            <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
              Question Three — The Day
            </p>
            <p className="text-xl sm:text-2xl font-bold text-primary leading-snug mb-4">
              Last one. You have one day left. Before you answer, sit with
              that — don&apos;t move past it. What rises? The thing you never
              finished. The person you didn&apos;t get around to becoming. The
              work you kept postponing, the conversation you never had. Name
              what surfaces — what actually comes up, not what you think
              you&apos;re supposed to say.
            </p>
            <p className="text-sm italic text-neutral-dark/60 leading-relaxed">
              Don&apos;t rush past the discomfort of this one. Sit with it for
              a minute before you write anything. What comes up first is
              usually the truest answer — even if it isn&apos;t the one you
              expected to write down.
            </p>
          </div>

          <p className="text-center text-neutral-dark/70">
            The downloadable PDF has full ruled space to write in. This page
            is for reading it first.
          </p>
        </div>
      </section>

      {/* Bring this or don't + opt-ins */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Bring this — or don&apos;t
          </h2>
          <p className="text-lg text-neutral-dark/85 leading-relaxed mb-5">
            Bring this to our call, or leave it at home. Either way, I&apos;m
            not grading it, and I&apos;m not going to ask you to read it out
            loud if you don&apos;t want to.
          </p>
          <p className="text-lg text-neutral-dark/85 leading-relaxed mb-5">
            What I actually want to talk about is what happened while you sat
            with these — what surprised you, what you couldn&apos;t answer,
            where you got stuck and had to put the pen down for a minute.
            That&apos;s the real conversation. The worksheet was just how we
            got there.
          </p>
          <p className="text-lg text-neutral-dark/85 leading-relaxed mb-10">
            If nothing came up, that&apos;s information too. If everything
            did, we&apos;ll take our time with it.
          </p>

          <div className="text-center mb-14">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book a 15-minute intro call
            </Link>
            <p className="mt-2 text-neutral-dark/50 text-sm">— Josh</p>
          </div>

          <ThreeQuestionsCapture />

          <p className="mt-10 text-xs text-neutral-dark/50 italic text-center leading-relaxed">
            Wealth In Yourself LLC is a Nevada state-registered investment
            adviser. This worksheet is a self-reflection exercise, not
            financial, tax, or legal advice, and does not describe or
            recommend any specific investment strategy or outcome.
          </p>
        </div>
      </section>
    </main>
  );
}
