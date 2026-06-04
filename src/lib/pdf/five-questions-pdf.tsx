import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";
import path from "path";

/* ------------------------------------------------------------------ */
/*  Fonts (same registration approach as lead-magnet-pdf.tsx)          */
/* ------------------------------------------------------------------ */

const fontsDir = path.join(process.cwd(), "public", "fonts");

Font.register({
  family: "Playfair Display",
  fonts: [
    { src: path.join(fontsDir, "PlayfairDisplay-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontsDir, "PlayfairDisplay-Bold.ttf"), fontWeight: 700 },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    { src: path.join(fontsDir, "Inter-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontsDir, "Inter-SemiBold.ttf"), fontWeight: 600 },
    { src: path.join(fontsDir, "Inter-Bold.ttf"), fontWeight: 700 },
  ],
});

/* ------------------------------------------------------------------ */
/*  Brand                                                              */
/* ------------------------------------------------------------------ */

const color = {
  primary: "#1B3A4B",
  secondary: "#C9A449",
  dark: "#2A2A2A",
  bg: "#F7F3ED",
  white: "#FFFFFF",
  muted: "#8A8A8A",
};

const LOGO_WHITE = path.join(
  process.cwd(),
  "public",
  "logos",
  "wiy-logo-stacked-white.png"
);
const BOOKING_URL =
  "https://cal.com/jsaint/intro-call";

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const s = StyleSheet.create({
  coverPage: {
    fontFamily: "Inter",
    fontSize: 10,
    color: color.white,
    backgroundColor: color.primary,
    paddingHorizontal: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    color: color.dark,
    backgroundColor: color.white,
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 60,
  },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 60,
    right: 60,
    fontSize: 8,
    color: color.muted,
    textAlign: "center",
    lineHeight: 1.4,
  },
  pageNum: {
    position: "absolute",
    bottom: 24,
    right: 60,
    fontSize: 8,
    color: color.muted,
  },
  coverTitle: {
    fontFamily: "Playfair Display",
    fontSize: 28,
    fontWeight: 700,
    color: color.white,
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 1.2,
  },
  coverSubtitle: {
    fontSize: 13,
    color: color.secondary,
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 1.4,
  },
  coverFooter: {
    fontSize: 10,
    color: "#FFFFFF99",
    textAlign: "center",
    marginTop: 20,
  },
  intro: {
    fontSize: 10.5,
    lineHeight: 1.6,
    color: color.dark,
    marginBottom: 10,
  },
  questionNumber: {
    fontSize: 8.5,
    color: color.secondary,
    fontWeight: 700,
    letterSpacing: 1.5,
    marginBottom: 4,
  },
  questionText: {
    fontFamily: "Playfair Display",
    fontSize: 14,
    fontWeight: 700,
    color: color.primary,
    lineHeight: 1.35,
    marginBottom: 8,
  },
  goodAnswerLabel: {
    fontSize: 8.5,
    color: color.primary,
    fontWeight: 700,
    letterSpacing: 1,
    marginBottom: 3,
  },
  goodAnswerText: {
    fontSize: 9.5,
    lineHeight: 1.55,
    color: color.dark,
    marginBottom: 0,
  },
  questionBlock: {
    marginBottom: 16,
    paddingLeft: 12,
    borderLeftWidth: 2,
    borderLeftColor: color.secondary,
  },
  ctaBox: {
    backgroundColor: color.bg,
    padding: 16,
    borderRadius: 6,
    marginTop: 14,
  },
  ctaTitle: {
    fontFamily: "Playfair Display",
    fontSize: 14,
    fontWeight: 700,
    color: color.primary,
    marginBottom: 6,
  },
  ctaBody: {
    fontSize: 9.5,
    lineHeight: 1.55,
    color: color.dark,
    marginBottom: 6,
  },
  ctaLink: {
    fontSize: 10,
    color: color.secondary,
    fontWeight: 600,
    marginTop: 4,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    marginVertical: 12,
  },
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const QUESTIONS: Array<{
  number: number;
  question: string;
  goodAnswer: string;
}> = [
  {
    number: 1,
    question:
      "How does my fee change as my net worth grows? Show me the math at $3M, $10M, and $20M — in dollars, not percentages.",
    goodAnswer:
      'A concrete dollar figure at each net worth tier, with the methodology explained. If they can\'t give you a number without "it depends," ask them to walk through their fee structure on the spot using your actual net worth.',
  },
  {
    number: 2,
    question:
      "What specifically do you do for me that I couldn't reasonably do myself with 4 hours per quarter and good software?",
    goodAnswer:
      'A list of specific services that require professional judgment — entity structure design, multi-year tax modeling, estate document coordination, insurance strategy across vehicles. If the answer is "we manage your portfolio," ask what their portfolio management adds beyond what a low-cost diversified strategy would deliver — and listen for a specific answer.',
  },
  {
    number: 3,
    question:
      "When was the last time you proactively brought me a tax-savings opportunity I wasn't already aware of?",
    goodAnswer:
      'A specific example with a date. "Last March I flagged that your Roth conversion ladder would push you over the ACA subsidy cliff" — that\'s proactive. "We always look for opportunities" — that\'s marketing language. Tax planning happens in October, not April.',
  },
  {
    number: 4,
    question:
      "If I died tomorrow, who would my spouse call first — and is that person on speed dial in your office?",
    goodAnswer:
      'A named person, a relationship that already exists, and a documented protocol. The answer should NOT be "we\'d help your spouse find an estate attorney." The estate attorney should already be in the workflow before the death happens.',
  },
  {
    number: 5,
    question:
      "How do you coordinate with my CPA, estate attorney, and insurance broker — and who's responsible when that coordination fails?",
    goodAnswer:
      'A specific coordination cadence (quarterly tax reviews, annual estate reviews, etc.) and a clear answer about accountability. "Coordination" that means "we email them when needed" is not coordination — it\'s referral. Real coordination is one team working off one plan.',
  },
];

/* ------------------------------------------------------------------ */
/*  Shared components                                                  */
/* ------------------------------------------------------------------ */

function Footer({ page }: { page?: number }) {
  return (
    <>
      <Text style={s.footer}>
        Wealth In Yourself LLC | Registered Investment Adviser — State of Nevada
        | 195 Highway 50, Suite 205, Zephyr Cove, NV 89448 | (415) 915-5948 |
        josh@wealthinyourself.com{"\n"}This resource is educational and is not
        tax, legal, or investment advice. Discuss all items with your qualified
        advisory team before taking action.
      </Text>
      {page && <Text style={s.pageNum}>{page}</Text>}
    </>
  );
}

function QuestionBlock({
  number,
  question,
  goodAnswer,
}: {
  number: number;
  question: string;
  goodAnswer: string;
}) {
  return (
    <View style={s.questionBlock} wrap={false}>
      <Text style={s.questionNumber}>QUESTION {number} OF 5</Text>
      <Text style={s.questionText}>{question}</Text>
      <Text style={s.goodAnswerLabel}>WHAT A GOOD ANSWER LOOKS LIKE</Text>
      <Text style={s.goodAnswerText}>{goodAnswer}</Text>
    </View>
  );
}

/* ================================================================== */
/*  FIVE QUESTIONS YOUR ADVISOR SHOULD ANSWER                          */
/* ================================================================== */

export default function FiveQuestionsPDF() {
  return (
    <Document>
      {/* Cover */}
      <Page size="LETTER" style={s.coverPage}>
        <Image src={LOGO_WHITE} style={{ width: 140, marginBottom: 30 }} />
        <Text style={s.coverTitle}>
          The 5 Questions a $3M–$30M Household{"\n"}Should Be Asking Their
          Advisor
        </Text>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: color.secondary,
            width: 60,
            marginBottom: 16,
          }}
        />
        <Text style={s.coverSubtitle}>
          A single-page diagnostic. Use it before your next{"\n"}review meeting
          — with us or with anyone.
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "#FFFFFFBB",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          By Josh St. Laurent, CFP®, CFT™, APFC®, ACC, MS
        </Text>
        <Text style={s.coverFooter}>wealthinyourself.com</Text>
      </Page>

      {/* Intro + first 2 questions */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.intro}>
          At $3M–$30M of net worth, the cost of an underperforming advisor
          relationship isn&apos;t a few basis points — it&apos;s missed tax
          strategy, uncoordinated estate planning, and decisions made in
          isolation that should have been made as a team. The hard part is that
          most underperforming relationships look fine from the outside. Polite
          quarterly meetings. Reasonable returns. No obvious problems.
        </Text>
        <Text style={s.intro}>
          These five questions are designed to surface what&apos;s actually
          happening underneath. Every question is one your advisor should be
          able to answer without preparation — and one we&apos;d expect to be
          asked ourselves. There&apos;s no gotcha here. Just five conversations
          a household at this net worth deserves to have.
        </Text>
        <View style={s.divider} />

        <QuestionBlock
          number={QUESTIONS[0].number}
          question={QUESTIONS[0].question}
          goodAnswer={QUESTIONS[0].goodAnswer}
        />
        <QuestionBlock
          number={QUESTIONS[1].number}
          question={QUESTIONS[1].question}
          goodAnswer={QUESTIONS[1].goodAnswer}
        />

        <Footer page={2} />
      </Page>

      {/* Questions 3, 4, 5 + CTA */}
      <Page size="LETTER" style={s.page}>
        <QuestionBlock
          number={QUESTIONS[2].number}
          question={QUESTIONS[2].question}
          goodAnswer={QUESTIONS[2].goodAnswer}
        />
        <QuestionBlock
          number={QUESTIONS[3].number}
          question={QUESTIONS[3].question}
          goodAnswer={QUESTIONS[3].goodAnswer}
        />
        <QuestionBlock
          number={QUESTIONS[4].number}
          question={QUESTIONS[4].question}
          goodAnswer={QUESTIONS[4].goodAnswer}
        />

        <View style={s.ctaBox}>
          <Text style={s.ctaTitle}>How did your advisor do?</Text>
          <Text style={s.ctaBody}>
            If five of five came back clean, you have a great advisor relationship
            — keep it. If two or more came back unclear, the gap is worth
            investigating. The diagnostic isn&apos;t about us — it&apos;s about
            whether your current relationship matches the complexity of your
            net worth.
          </Text>
          <Text style={s.ctaBody}>
            If you&apos;d like to talk through what came up, book a complimentary
            15-minute call. We&apos;ll walk through your answers together and
            tell you honestly whether a change is worth the friction.
          </Text>
          <Text
            style={{
              fontSize: 9,
              color: color.muted,
              marginTop: 8,
              marginBottom: 6,
            }}
          >
            Josh St. Laurent, CFP®, CFT™, APFC®, ACC, MS — Founder, Wealth In
            Yourself
          </Text>
          <Link src={BOOKING_URL}>
            <Text style={s.ctaLink}>Book a 15-minute intro call →</Text>
          </Link>
        </View>

        <Footer page={3} />
      </Page>
    </Document>
  );
}
