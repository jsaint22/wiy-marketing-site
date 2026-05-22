import type { Metadata } from "next";
import LeadMagnetCapture from "@/components/LeadMagnetCapture";
import CTASection from "@/components/CTASection";
import { CinematicHero } from "@/components/cinematic/CinematicHero";

export const metadata: Metadata = {
  title: "5 Questions a $3M–$30M Household Should Ask Their Advisor",
  description:
    "A free single-page diagnostic. Five substantive questions any household at $3M–$30M of net worth should be able to put to any advisor — including us. Use it before your next review meeting.",
};

const questions = [
  {
    number: 1,
    question:
      "How does my fee change as my net worth grows? Show me the math at $3M, $10M, and $20M — in dollars, not percentages.",
    goodAnswer:
      "A concrete dollar figure at each net worth tier, with the methodology explained. If they can't give you a number without \"it depends,\" ask them to walk through their fee structure on the spot using your actual net worth.",
  },
  {
    number: 2,
    question:
      "What specifically do you do for me that I couldn't reasonably do myself with 4 hours per quarter and good software?",
    goodAnswer:
      "A list of specific services that require professional judgment — entity structure design, multi-year tax modeling, estate document coordination, insurance strategy across vehicles. If the answer is \"we manage your portfolio,\" ask what their portfolio management adds beyond what a low-cost diversified strategy would deliver — and listen for a specific answer.",
  },
  {
    number: 3,
    question:
      "When was the last time you proactively brought me a tax-savings opportunity I wasn't already aware of?",
    goodAnswer:
      "A specific example with a date. \"Last March I flagged that your Roth conversion ladder would push you over the ACA subsidy cliff\" — that's proactive. \"We always look for opportunities\" — that's marketing language. Tax planning happens in October, not April.",
  },
  {
    number: 4,
    question:
      "If I died tomorrow, who would my spouse call first — and is that person on speed dial in your office?",
    goodAnswer:
      "A named person, a relationship that already exists, and a documented protocol. The answer should NOT be \"we'd help your spouse find an estate attorney.\" The estate attorney should already be in the workflow before the death happens.",
  },
  {
    number: 5,
    question:
      "How do you coordinate with my CPA, estate attorney, and insurance broker — and who's responsible when that coordination fails?",
    goodAnswer:
      "A specific coordination cadence (quarterly tax reviews, annual estate reviews, etc.) and a clear answer about accountability. \"Coordination\" that means \"we email them when needed\" is not coordination — it's referral. Real coordination is one team working off one plan.",
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
          <div className="space-y-12">
            {questions.map((q) => (
              <div key={q.number} className="border-l-4 border-secondary pl-6">
                <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                  Question {q.number} of 5
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-primary leading-snug mb-5">
                  {q.question}
                </h3>
                <div className="bg-white rounded-lg p-5 sm:p-6 border border-neutral-dark/10">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                    What a good answer looks like
                  </p>
                  <p className="text-neutral-dark/85 leading-relaxed">
                    {q.goodAnswer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email capture — gates PDF download */}
      <div id="get-the-pdf">
        <LeadMagnetCapture
          magnet="five-questions"
          headline="Get the printable PDF."
          subheadline="Five questions. One page. Bring it to your next review."
          description="Enter your name and email. You'll get the single-page PDF in your inbox within 60 seconds. No spam. No sales pitch. Use it however you want."
          buttonText="Send me the PDF"
          successMessage="Sent! Check your inbox for the 5 Questions PDF."
        />
      </div>

      <CTASection />
    </main>
  );
}
