import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Font,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import path from "path";

/**
 * The Three Questions — WIY self-administrable worksheet PDF.
 *
 * DRAFT — compliance review required before publish. This PDF backs the
 * Play-4 lead-magnet funnel (/three-questions route), which is built DARK
 * per references/content-factory-audit-and-plan-2026-07-04.md §4b and is
 * NOT to be linked, indexed, or distributed until Josh + compliance clear
 * the copy (open NV exam CIC26-050).
 *
 * Copy source (verbatim, do not edit here — edit the source and
 * re-propagate): references/wiy-three-questions-worksheet-DRAFT-2026-07-04.md
 * Question text origin: references/wiy-three-questions-canonical-2026-06-12.md
 *
 * Mirrors the styling approach of five-questions-pdf.tsx.
 */

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

// NOTE: booking URL intentionally omitted from v1 PDF body — the UTM-tracked
// booking CTA lives on the /three-questions page itself (Play-2 attribution).
// Re-add here with a matching UTM tag if/when this PDF is approved to carry
// its own booking link.

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
    fontSize: 30,
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
    fontSize: 10,
    lineHeight: 1.6,
    color: color.dark,
    marginBottom: 9,
  },
  howToUseTitle: {
    fontFamily: "Playfair Display",
    fontSize: 13,
    fontWeight: 700,
    color: color.primary,
    marginBottom: 6,
    marginTop: 4,
  },
  howToUseItem: {
    fontSize: 9.5,
    lineHeight: 1.5,
    color: color.dark,
    marginBottom: 4,
  },
  attribution: {
    fontSize: 8.5,
    color: color.muted,
    marginTop: 10,
    lineHeight: 1.5,
  },
  questionLabel: {
    fontSize: 8.5,
    color: color.secondary,
    fontWeight: 700,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  questionPrompt: {
    fontFamily: "Playfair Display",
    fontSize: 13.5,
    fontWeight: 700,
    color: color.primary,
    lineHeight: 1.4,
    marginBottom: 8,
  },
  questionNote: {
    fontSize: 9,
    lineHeight: 1.5,
    color: color.muted,
    marginBottom: 14,
  },
  writeLine: {
    borderBottomWidth: 0.75,
    borderBottomColor: "#C9C2B4",
    marginBottom: 20,
  },
  closingTitle: {
    fontFamily: "Playfair Display",
    fontSize: 16,
    fontWeight: 700,
    color: color.primary,
    marginBottom: 10,
  },
  closingBody: {
    fontSize: 10,
    lineHeight: 1.6,
    color: color.dark,
    marginBottom: 9,
  },
  disclosure: {
    fontSize: 7.5,
    color: color.muted,
    lineHeight: 1.5,
    marginTop: 16,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    marginVertical: 12,
  },
});

function Footer({ page }: { page?: number }) {
  return (
    <>
      <Text style={s.footer}>
        Wealth In Yourself LLC | Registered Investment Adviser — State of Nevada
        | 195 Highway 50, Suite 205, Zephyr Cove, NV 89448 | (415) 915-5948 |
        josh@wealthinyourself.com{"\n"}This worksheet is a self-reflection
        exercise, not financial, tax, or legal advice, and does not describe or
        recommend any specific investment strategy or outcome.
      </Text>
      {page && <Text style={s.pageNum}>{page}</Text>}
    </>
  );
}

function QuestionPage({
  pageNum,
  label,
  prompt,
  note,
}: {
  pageNum: number;
  label: string;
  prompt: string;
  note: string;
}) {
  return (
    <Page size="LETTER" style={s.page}>
      <Text style={s.questionLabel}>{label}</Text>
      <Text style={s.questionPrompt}>{prompt}</Text>
      <Text style={s.questionNote}>{note}</Text>
      {Array.from({ length: 9 }).map((_, i) => (
        <View key={i} style={s.writeLine} />
      ))}
      <Footer page={pageNum} />
    </Page>
  );
}

export default function ThreeQuestionsPDF() {
  return (
    <Document>
      {/* Cover */}
      <Page size="LETTER" style={s.coverPage}>
        <Image src={LOGO_WHITE} style={{ width: 140, marginBottom: 30 }} />
        <Text style={s.coverTitle}>The Three Questions</Text>
        <View
          style={{
            borderBottomWidth: 2,
            borderBottomColor: color.secondary,
            width: 60,
            marginBottom: 16,
          }}
        />
        <Text style={s.coverSubtitle}>
          A worksheet from Wealth In Yourself — fill it out alone,{"\n"}before
          we talk.
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

      {/* Before you start */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.intro}>
          Most of the numbers I get handed in a first conversation are answers
          to the wrong question. Net worth, income, the size of a portfolio —
          that&apos;s the how. Almost nobody hands me the why.
        </Text>
        <Text style={s.intro}>
          Here&apos;s what I&apos;ve built this firm on: money is a means, not
          the point. Time is the actual resource — the one you can&apos;t get
          back, refinance, or earn more of. You&apos;ve already spent years
          working on the how. This worksheet is twenty quiet minutes on the
          why.
        </Text>
        <Text style={s.intro}>
          Three questions. No advisor in the room, no clock running, nobody to
          perform for. Find an hour where no one needs you — coffee, a
          notebook, your own handwriting. Write in real sentences, not bullet
          points. There&apos;s no wrong answer and nothing here gets scored.
          The only way to fail this is to skip it because it feels indulgent.
          It isn&apos;t. It&apos;s the actual work — and it&apos;s the same
          work we&apos;ll do together, in more depth, if we end up working
          together.
        </Text>

        <View style={s.divider} />

        <Text style={s.howToUseTitle}>How to use it</Text>
        <Text style={s.howToUseItem}>
          • Alone. If you have a partner, have them do their own copy
          separately — then compare. Don&apos;t write it together.
        </Text>
        <Text style={s.howToUseItem}>
          • Handwritten if you can manage it. The friction is part of what
          makes you slow down and get specific.
        </Text>
        <Text style={s.howToUseItem}>
          • No time limit — but don&apos;t second-draft yourself. The first
          honest sentence beats the polished one.
        </Text>
        <Text style={s.howToUseItem}>
          • Bring it to our call, or don&apos;t. Both are fine.
        </Text>

        <Text style={s.attribution}>
          This sequence is inspired by the life-planning tradition of George
          Kinder; the questions here are Wealth In Yourself&apos;s own.
        </Text>

        <Footer page={2} />
      </Page>

      {/* Question One */}
      <QuestionPage
        pageNum={3}
        label="QUESTION ONE — THE LIFE"
        prompt={
          "Take the money question off the table. You have enough — enough that the standard worries don't run your decisions anymore. Now: what does your actual life look like? Not the goals you'd check off — the life itself. Where do you wake up? What's the work you give your mornings to? Who's around the table? What does an ordinary Tuesday look like? Describe it in real, specific detail."
        }
        note={
          "If you catch yourself listing goals — a house, a number, a trip — back up. Goals are what you'd check off. This is asking what's actually happening in the room. Slow down until you can see it."
        }
      />

      {/* Question Two */}
      <QuestionPage
        pageNum={4}
        label="QUESTION TWO — THE DECADE"
        prompt={
          "Now put a clock on it. You learn you get five more years — maybe ten, no more. And here's the design of it: your health holds the whole way, full strength to the last day, but the end arrives without warning. What stays? What stops? What starts? Which work do you walk away from, and which do you finally begin? What does your life reorganize around when you can't count on year eleven?"
        }
        note={
          "Notice what this question protects — your health, all the way through — and what it doesn't protect, which is time. If your first answer is a project or a purchase, ask it again. What stays is usually a person or a way of spending a day, not a thing."
        }
      />

      {/* Question Three */}
      <QuestionPage
        pageNum={5}
        label="QUESTION THREE — THE DAY"
        prompt={
          "Last one. You have one day left. Before you answer, sit with that — don't move past it. What rises? The thing you never finished. The person you didn't get around to becoming. The work you kept postponing, the conversation you never had. Name what surfaces — what actually comes up, not what you think you're supposed to say."
        }
        note={
          "Don't rush past the discomfort of this one. Sit with it for a minute before you write anything. What comes up first is usually the truest answer — even if it isn't the one you expected to write down."
        }
      />

      {/* Closing */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.closingTitle}>Bring this — or don&apos;t</Text>
        <Text style={s.closingBody}>
          Bring this to our call, or leave it at home. Either way, I&apos;m not
          grading it, and I&apos;m not going to ask you to read it out loud if
          you don&apos;t want to.
        </Text>
        <Text style={s.closingBody}>
          What I actually want to talk about is what happened while you sat
          with these — what surprised you, what you couldn&apos;t answer,
          where you got stuck and had to put the pen down for a minute.
          That&apos;s the real conversation. The worksheet was just how we got
          there.
        </Text>
        <Text style={s.closingBody}>
          If nothing came up, that&apos;s information too. If everything did,
          we&apos;ll take our time with it.
        </Text>
        <Text style={[s.closingBody, { marginTop: 12 }]}>— Josh</Text>

        <Text style={s.disclosure}>
          Wealth In Yourself LLC is a Nevada state-registered investment
          adviser. This worksheet is a self-reflection exercise, not
          financial, tax, or legal advice, and does not describe or recommend
          any specific investment strategy or outcome.
        </Text>

        <Footer page={6} />
      </Page>
    </Document>
  );
}
