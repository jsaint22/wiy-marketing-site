import type { Metadata } from "next";
import LeadMagnetCapture from "@/components/LeadMagnetCapture";
import CTASection from "@/components/CTASection";
import { CinematicHero } from "@/components/cinematic/CinematicHero";

export const metadata: Metadata = {
  title: "5 Questions a $3M–$30M Household Should Ask Their Advisor",
  description:
    "A free single-page diagnostic. Five substantive questions any household at $3M–$30M of net worth should be able to put to any advisor — including us. Use it before your next review meeting.",
};

// On-page we show only the questions themselves. The "what a good answer looks
// like" benchmark for each + the score-yourself diagnostic live in the gated PDF
// (src/lib/pdf/five-questions-pdf.tsx) — that's the value the email earns.
const questions = [
  {
    number: 1,
    question:
      "How does my fee change as my net worth grows? Show me the math at $3M, $10M, and $20M — in dollars, not percentages.",
  },
  {
    number: 2,
    question:
      "What specifically do you do for me that I couldn't reasonably do myself with 4 hours per quarter and good software?",
  },
  {
    number: 3,
    question:
      "When was the last time you proactively brought me a tax-savings opportunity I wasn't already aware of?",
  },
  {
    number: 4,
    question:
      "If I died tomorrow, who would my spouse call first — and is that person on speed dial in your office?",
  },
  {
    number: 5,
    question:
      "How do you coordinate with my CPA, estate attorney, and insurance broker — and who's responsible when that coordination fails?",
  },
];

export default function FiveQuestionsPage() {
  return (
    <main>
      <CinematicHero
        eyebrow="Free Resource"
        headline={
          <>
            5 Questions Every High-Net-Worth Household Should Be Asking Their Advisor
          </>
        }
        subhead="Most households at three to thirty million in net worth can't answer these five questions about their current advisor relationship. We can. So can any advisor worth their fee. Use this list before your next review meeting — with us or with anyone."
        primaryCta={{
          label: "Get the PDF",
          href: "#get-the-pdf",
        }}
        secondaryCta={{
          label: "See the questions",
          href: "#questions",
        }}
      />

      {/* Intro */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
            Why these five questions
          </h2>
          <p className="text-lg text-neutral-dark/85 leading-relaxed mb-5">
            At $3M–$30M of net worth, the cost of an underperforming advisor
            relationship isn&apos;t a few basis points — it&apos;s missed tax
            strategy, uncoordinated estate planning, and decisions made in
            isolation that should have been made as a team. The hard part is
            that most underperforming relationships look fine from the outside.
            Polite quarterly meetings. Reasonable returns. No obvious problems.
          </p>
          <p className="text-lg text-neutral-dark/85 leading-relaxed mb-5">
            These five questions are designed to surface what&apos;s actually
            happening underneath. Every question is one your advisor should be
            able to answer without preparation — and one we&apos;d expect to be
            asked ourselves. There&apos;s no gotcha here. Just five
            conversations a household at this net worth deserves to have.
          </p>
          <p className="text-lg text-neutral-dark/85 leading-relaxed">
            Use this list at your next review meeting — with us or with anyone.
          </p>
        </div>
      </section>

      {/* The 5 Questions */}
      <section id="questions" className="py-14 sm:py-20 bg-neutral-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-10">
            The five questions
          </h2>
          <div className="space-y-8">
            {questions.map((q) => (
              <div key={q.number} className="border-l-4 border-secondary pl-6">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                  Question {q.number} of 5
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-primary leading-snug">
                  {q.question}
                </h3>
              </div>
            ))}
          </div>
          <p className="mt-12 text-lg text-neutral-dark/85 leading-relaxed">
            Knowing the questions is the easy half. The harder half is knowing
            what a strong answer to each one actually sounds like — so you can
            tell real substance from a polished deflection. That&apos;s in the
            free one-page PDF below, along with a simple way to score where your
            current advisor stands.
          </p>
        </div>
      </section>

      {/* Email capture — gates PDF download */}
      <div id="get-the-pdf">
        <LeadMagnetCapture
          magnet="five-questions"
          headline="What does a good answer actually sound like?"
          subheadline="The free one-page PDF gives you a strong-answer benchmark for all five questions — plus a quick way to score where your current advisor stands."
          description="Enter your name and email and I'll send the single-page PDF to your inbox within 60 seconds. No spam. No sales pitch. Bring it to your next review."
          buttonText="Send me the PDF"
          successMessage="Sent! Check your inbox for the 5 Questions PDF."
        />
      </div>

      <CTASection />
    </main>
  );
}
