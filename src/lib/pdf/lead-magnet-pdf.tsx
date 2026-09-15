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

/* ------------------------------------------------------------------ */
/*  Fonts (same as aum-math.tsx)                                       */
/* ------------------------------------------------------------------ */

import path from "path";

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
  checkBorder: "#C9A449",
};

const LOGO_WHITE = path.join(process.cwd(), "public", "logos", "wiy-logo-stacked-white.png");
const BOOKING_URL = "https://cal.com/jsaint/intro-call";

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
    fontSize: 32,
    fontWeight: 700,
    color: color.white,
    textAlign: "center",
    marginBottom: 12,
  },
  coverSubtitle: {
    fontSize: 14,
    color: color.secondary,
    textAlign: "center",
    marginBottom: 40,
  },
  coverFooter: {
    fontSize: 10,
    color: "#FFFFFF99",
    textAlign: "center",
    marginTop: 20,
  },
  sectionTitle: {
    fontFamily: "Playfair Display",
    fontSize: 18,
    fontWeight: 700,
    color: color.primary,
    marginBottom: 14,
    marginTop: 8,
  },
  checkItem: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "flex-start",
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1.5,
    borderColor: color.checkBorder,
    borderRadius: 2,
    marginRight: 10,
    marginTop: 2,
  },
  checkText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
    color: color.dark,
  },
  checkBold: {
    fontWeight: 700,
    color: color.primary,
  },
  body: {
    fontSize: 10,
    lineHeight: 1.6,
    color: color.dark,
    marginBottom: 8,
  },
  ctaBox: {
    backgroundColor: color.bg,
    padding: 20,
    borderRadius: 6,
    marginTop: 20,
  },
  ctaTitle: {
    fontFamily: "Playfair Display",
    fontSize: 16,
    fontWeight: 700,
    color: color.primary,
    marginBottom: 8,
  },
  ctaLink: {
    fontSize: 10,
    color: color.secondary,
    fontWeight: 600,
    marginTop: 6,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    marginVertical: 16,
  },
});

/* ------------------------------------------------------------------ */
/*  Shared components                                                  */
/* ------------------------------------------------------------------ */

function CheckItem({
  bold,
  text,
}: {
  bold: string;
  text: string;
}) {
  return (
    <View style={s.checkItem} wrap={false}>
      <View style={s.checkbox} />
      <Text style={s.checkText}>
        <Text style={s.checkBold}>{bold}</Text> {text}
      </Text>
    </View>
  );
}

function Footer({ page }: { page?: number }) {
  return (
    <>
      <Text style={s.footer} fixed>
        Wealth In Yourself LLC | Registered Investment Adviser, State of Nevada |
        195 Highway 50, Suite 205, Zephyr Cove, NV 89448 | (415) 915-5948 |
        josh@wealthinyourself.com{"\n"}This checklist is educational and is not
        tax, legal, or investment advice. Discuss all items with your qualified
        advisory team before taking action.
      </Text>
      {page && <Text style={s.pageNum}>{page}</Text>}
    </>
  );
}

/*
 * CTA copy. Rewritten 2026-09-15 for Standing Rule 8 and NAC 90.32934
 * (wiy-operating-system references/nurture-copy-compliance-review-2026-09-15.md
 * F3): no client-experience claims, no dollar outcomes, no urgency, no
 * gift framing of the intro call, and no description of the fee as flat
 * (the WIY fee is a declining percentage of net worth with a $15,000
 * minimum). The close matches how Josh ends an intro call.
 */
const CALL_CLOSE =
  "By the end, I'll tell you whether it's worth going deeper in a second conversation, or whether I'm not the right fit.";
const BOOKING_LINK_TEXT = "Schedule a 15-minute call";

type CTAVariant = "re-investor" | "business-owner" | "w2-escape";

const CTA_COPY: Record<CTAVariant, { title: string; body1: string; body2: string }> = {
  "re-investor": {
    title: "How many boxes did you check?",
    body1: "Every unchecked box is a conversation your advisory team should be having.",
    body2: "If you'd like to go through the unchecked ones with me, book a 15-minute intro call and bring the checklist. We'll talk about your portfolio and your team.",
  },
  "business-owner": {
    title: "Is your exit plan built, or just imagined?",
    body1: "If some of your answers were \"not yet,\" that's the list to bring.",
    body2: "Book a 15-minute intro call. We'll talk about your timeline, your structure, and whether your current team has the full picture.",
  },
  "w2-escape": {
    title: "Ready to build your escape plan?",
    body1: "Runway, health coverage, entity setup, taxes, and the order you replace your income in all have to fit together. That's the planning work I do.",
    body2: "Book a 15-minute intro call and bring your runway number. We'll talk about your timeline and what's still open on this list.",
  },
};

function CTABox({ variant }: { variant: CTAVariant }) {
  const c = CTA_COPY[variant];
  return (
    <View style={s.ctaBox}>
      <Text style={s.ctaTitle}>{c.title}</Text>
      <Text style={s.body}>{c.body1}</Text>
      <Text style={s.body}>{c.body2}</Text>
      <Text style={s.body}>{CALL_CLOSE}</Text>
      <Text style={{ fontSize: 9, color: color.muted, marginTop: 10, marginBottom: 10 }}>
        Josh St. Laurent, CFP®, CFT™, APFC®, ACC, MS | Founder, Wealth In Yourself
      </Text>
      <Link src={BOOKING_URL}>
        <Text style={s.ctaLink}>{BOOKING_LINK_TEXT}</Text>
      </Link>
    </View>
  );
}

function CTAPage({ variant }: { variant: CTAVariant }) {
  return (
    <Page size="LETTER" style={s.page}>
      <CTABox variant={variant} />
      <Footer />
    </Page>
  );
}

/* ================================================================== */
/*  RE INVESTOR TAX STRATEGY CHECKLIST                                 */
/* ================================================================== */

export function REInvestorChecklistPDF() {
  return (
    <Document>
      {/* Cover */}
      <Page size="LETTER" style={s.coverPage}>
        <Image src={LOGO_WHITE} style={{ width: 140, marginBottom: 30 }} />
        <Text style={s.coverTitle}>
          The Real Estate Investor&apos;s{"\n"}Tax Strategy Checklist
        </Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: color.secondary, width: 60, marginBottom: 16 }} />
        <Text style={s.coverSubtitle}>
          16 questions your advisory team should be answering.
        </Text>
        <Text style={{ fontSize: 10, color: "#FFFFFFBB", textAlign: "center", marginTop: 20 }}>
          By Josh St. Laurent, CFP®, CFT™, APFC®, ACC, MS
        </Text>
        <Text style={s.coverFooter}>
          wealthinyourself.com
        </Text>
      </Page>

      {/* Intro + first sections */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.body}>
          This checklist covers the tax questions worth raising as a real
          estate portfolio grows. It isn&apos;t advice. It&apos;s a
          conversation starter for you and your advisory team, and the answers
          depend on your own facts.
        </Text>
        <Text style={{ fontSize: 9, color: color.secondary, fontWeight: 600, marginBottom: 8 }}>
          How to use this: Check each box you can answer &ldquo;yes&rdquo; to.
          Every unchecked box is a conversation to have with your team.
        </Text>
        <View style={s.divider} />

        <Text style={s.sectionTitle} minPresenceAhead={70}>1031 Exchanges</Text>
        <CheckItem bold="Do you have a 1031 exchange strategy for your next property sale?" text="A 1031 exchange lets you defer tax on the gain when you sell real property held for business or investment and reinvest in like-kind real property. The deadlines are strict: 45 days from the sale to identify the replacement property, and 180 days to close on it (or your tax return's due date, with extensions, if that comes first). Miss either one and the exchange generally fails, so the gain is taxable." />
        <CheckItem bold="Have you evaluated a Reverse 1031 exchange?" text="If you find the replacement property before you sell, a reverse exchange lets you buy first and sell second. It costs more to set up and has its own deadlines, so it needs planning before you make an offer." />
        <CheckItem bold="Do you have a Qualified Intermediary relationship established?" text="You can't take the sale proceeds yourself, even briefly, or the exchange can fail. A qualified intermediary usually holds them. Arranging one in the middle of a sale adds pressure, so it's easier to line one up before you list." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Cost Segregation</Text>
        <CheckItem bold="Have you run a cost segregation study on every property you own?" text="A cost segregation study identifies parts of a property that can be depreciated over 5, 7, or 15 years instead of 27.5 years (residential rental) or 39 years (nonresidential). That moves deductions into earlier years. It also changes what's taxed when you sell, so model both ends with your CPA." />
        <CheckItem bold="Are you aware of the current bonus depreciation rules?" text="The One Big Beautiful Bill Act (signed July 4, 2025) made 100% bonus depreciation permanent for qualified property acquired and placed in service after January 19, 2025, replacing the earlier phase-down. Your CPA and financial planner should look at acquisition timing together." />
        <Footer />
      </Page>

      {/* More sections */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.sectionTitle} minPresenceAhead={70}>Entity Structure</Text>
        <CheckItem bold="Is your entity structure optimized for both liability protection and tax efficiency?" text="LLCs, S corporations, partnerships, and holding companies are treated differently for tax. The setup that fit your first couple of properties may not fit the portfolio you have now." />
        <CheckItem bold="Have you evaluated a holding company structure?" text="Once you own multiple properties across multiple LLCs, a parent holding company can simplify management, improve lending optics, and create tax planning flexibility." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>QBI Deduction</Text>
        <CheckItem bold="Are you taking advantage of the QBI deduction on your rental income?" text="Section 199A allows a deduction of up to 20% of qualified business income from pass-through businesses, and the One Big Beautiful Bill Act made it permanent. Whether your rentals count as a business for this deduction depends on how they're run and the time spent on them." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>State Tax Considerations</Text>
        <CheckItem bold="Have you evaluated your state of residency from a tax perspective?" text="If you have flexibility on where you live, state residency is worth modeling. Moving also comes with rules about proving where you actually live." />
        <CheckItem bold="Are you filing in every state where you have rental income?" text="Rental income from another state can create a filing requirement there, even when little or no tax is due. Missed filings can bring penalties and interest." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Short-Term Rental Strategies</Text>
        <CheckItem bold="Are you leveraging the STR loophole for material participation?" text="Under the passive activity rules, a property with an average guest stay of 7 days or less isn't treated as a rental activity. If you also materially participate, losses may be nonpassive and able to offset other income, subject to other limits. Your CPA can tell you whether yours qualifies." />
        <CheckItem bold="Do you have documentation proving your material participation hours?" text="If the IRS asks, you have to show your participation with records. A time log kept as you go is much easier to rely on than one rebuilt later." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Depreciation &amp; Recapture</Text>
        <CheckItem bold="Do you have a depreciation recapture plan for when you eventually sell?" text="When you sell a property you've depreciated, the part of the gain that comes from depreciation is taxed under its own rules and can be taxed at a higher rate than the rest of the gain. Some components from a cost segregation study can be taxed as ordinary income. It's worth modeling before you list." />
        <CheckItem bold="Have you modeled the tax impact of a sale vs. a refinance-and-hold strategy?" text="A cash-out refinance isn't a sale, so it generally doesn't trigger tax on the gain or the depreciation. It does add debt and payments. Ask your CPA and planner to put the two paths side by side for the specific property." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Your Advisory Team</Text>
        <CheckItem bold="Do you have both a CPA and a financial planner, and are they talking?" text="Your CPA handles compliance. Your financial planner handles strategy. You need both, and they need to coordinate. If they've never spoken, that's a problem." />
        <CheckItem bold="Is your CPA proactively suggesting strategies, or just filing what you hand them?" text="If they've never raised cost segregation, entity structure, or short-term rental material participation without you asking first, that's a gap worth talking about." />
        <Footer />
      </Page>

      <CTAPage variant="re-investor" />
    </Document>
  );
}

/* ================================================================== */
/*  BUSINESS OWNER EXIT PLANNING ROADMAP                               */
/* ================================================================== */

export function BusinessOwnerRoadmapPDF() {
  return (
    <Document>
      <Page size="LETTER" style={s.coverPage}>
        <Image src={LOGO_WHITE} style={{ width: 140, marginBottom: 30 }} />
        <Text style={s.coverTitle}>
          The Entrepreneur&apos;s{"\n"}Wealth Extraction Roadmap
        </Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: color.secondary, width: 60, marginBottom: 16 }} />
        <Text style={s.coverSubtitle}>
          The financial decisions that shape{"\n"}what you keep when you exit
          your business.
        </Text>
        <Text style={{ fontSize: 10, color: "#FFFFFFBB", textAlign: "center", marginTop: 20 }}>
          By Josh St. Laurent, CFP®, CFT™, APFC®, ACC, MS
        </Text>
        <Text style={s.coverFooter}>
          wealthinyourself.com
        </Text>
      </Page>

      <Page size="LETTER" style={s.page}>
        <Text style={s.body}>
          Building a company and getting wealth out of it are different
          problems. Whether you&apos;re five years from an exit or five months,
          this roadmap covers the decisions to work through with your team.
        </Text>
        <View style={s.divider} />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Business Valuation</Text>
        <CheckItem bold="Do you have a current, independent business valuation?" text="Not a back-of-napkin number. A formal valuation sets the foundation for every exit decision that follows." />
        <CheckItem bold="Do you understand which valuation method applies?" text="EBITDA multiples, discounted cash flow, asset-based, comparable transactions. Each produces a different number." />
        <CheckItem bold="Have you identified the value drivers a buyer will care about most?" text="Recurring revenue, customer concentration, owner dependency, gross margins, growth trajectory. How much of your revenue depends on your personal relationships? A buyer will ask, and so should you." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Entity Structure &amp; Tax Positioning</Text>
        <CheckItem bold="Is your entity structured to minimize the tax impact of a sale?" text="A stock sale and an asset sale can produce very different after-tax results. The structure you chose at founding (C corporation, S corporation, or LLC) may not be the right one for an exit." />
        <CheckItem bold="Have you evaluated QSBS (Section 1202)?" text="Qualified small business stock can let you exclude some or all of the gain on C corporation stock from federal tax. For stock acquired after July 4, 2025, the per-company limit is generally the greater of $15 million (adjusted for inflation starting in 2027) or 10 times your basis, and a partial exclusion is available after 3 or 4 years. Stock acquired on or before that date keeps the older rules: generally the greater of $10 million or 10 times basis, with a holding period of more than 5 years. The requirements are specific and state treatment varies, so ask your CPA whether your stock could qualify." />
        <CheckItem bold="Are you using an IDGT or estate vehicle to transfer interests?" text="Moving business interests to family or a trust while they're valued before a sale is an estate planning question. Your estate attorney and CPA should look at it together." />
        <Footer />
      </Page>

      <Page size="LETTER" style={s.page}>
        <Text style={s.sectionTitle} minPresenceAhead={70}>Cash Flow &amp; Income Replacement</Text>
        <CheckItem bold="Do you know your post-exit income need?" text="What does your life cost per month without the business? Include health insurance, taxes on withdrawals, and a buffer." />
        <CheckItem bold="Have you modeled the after-tax proceeds?" text="Federal capital gains, state capital gains, depreciation recapture, ordinary income recapture, and the net investment income tax can all come into play on a business sale." />
        <CheckItem bold="Do you have a wealth management plan for the proceeds?" text="Deciding how the proceeds will be invested, and what they need to pay for, is easier before the close than after the money lands." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Succession &amp; Continuity</Text>
        <CheckItem bold="Do you have a written succession plan?" text="If you're hit by a bus tomorrow, who runs the business? Who has the passwords, banking access, vendor relationships?" />
        <CheckItem bold="Have you evaluated internal sale vs. external sale vs. ESOP?" text="Each has different tax treatment, timelines, and tradeoffs. Your financial planner should be modeling all three." />
        <CheckItem bold="Do you have a buy-sell agreement with your partners?" text="Without one, it can be unclear what happens to your share if you die, become disabled, or want out." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Tax Timing &amp; Strategy</Text>
        <CheckItem bold="Have you considered an installment sale (Section 453)?" text="An installment sale generally lets you report the gain as payments come in rather than all in the year of sale. Depreciation recapture is still taxed in the year of sale, and large installment notes can carry an interest charge." />
        <CheckItem bold="Have you explored a Charitable Remainder Trust?" text="A charitable remainder trust can receive business interests before a sale, pay you an income stream for life or a set term, and give you a partial charitable deduction. The trust doesn't pay tax when it sells, but the payments you receive generally carry that gain out to you over time. The transfer has to happen before a sale is locked in." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>The Advisory Team</Text>
        <CheckItem bold="Do you have all four: financial planner, CPA, estate attorney, M&A advisor?" text="Each handles a different piece. If any one is missing, you have a gap. Coordination is the financial planner's job." />
        <CheckItem bold="Are all four working from the same playbook, or operating in silos?" text="If your CPA hasn't spoken to your estate attorney this year, nobody is coordinating your full picture." />
        <Footer />
      </Page>

      <CTAPage variant="business-owner" />
    </Document>
  );
}

/* ================================================================== */
/*  W-2 ESCAPE PLAN CHECKLIST                                          */
/* ================================================================== */

// NOTE: Tax figures reference 2026 IRS limits. REVIEW ANNUALLY each December.
export function W2EscapePlanPDF() {
  return (
    <Document>
      <Page size="LETTER" style={s.coverPage}>
        <Image src={LOGO_WHITE} style={{ width: 140, marginBottom: 30 }} />
        <Text style={s.coverTitle}>
          The W-2 Escape Plan
        </Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: color.secondary, width: 60, marginBottom: 16 }} />
        <Text style={s.coverSubtitle}>
          Know Your Number Before You Give Notice
        </Text>
        <Text style={{ fontSize: 10, color: "#FFFFFFBB", textAlign: "center", marginTop: 20 }}>
          By Josh St. Laurent, CFP®, CFT™, APFC®, ACC, MS
        </Text>
        <Text style={s.coverFooter}>
          wealthinyourself.com
        </Text>
      </Page>

      <Page size="LETTER" style={s.page}>
        <Text style={s.body}>
          You&apos;ve been thinking about it for months, or years: leaving the
          W-2 and building something of your own. This checklist covers the
          financial pieces that decide whether the move is calculated or
          chaotic.
        </Text>
        <View style={s.divider} />

        <Text style={s.sectionTitle} minPresenceAhead={70}>The Runway</Text>
        <CheckItem bold="Do you know your monthly burn rate, the real one?" text="Track everything that leaves your accounts for a month, including subscriptions and automatic payments. Then add a buffer for the things that didn't show up that month." />
        <CheckItem bold="Have you decided how many months of living expenses you need in liquid savings before you leave?" text="Not invested. Not in a retirement account. Liquid. Divide savings by your real burn rate, then decide how many months you'd want if revenue comes in late." />
        <CheckItem bold="Have you stress-tested against a delayed revenue scenario?" text="What if your first paying client takes much longer than you expect? Model a slow start." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Health Insurance</Text>
        <CheckItem bold="Do you have a post-employment health insurance plan?" text="COBRA, an ACA marketplace plan, or a spouse's plan. COBRA generally lasts up to 18 months after leaving a job and can cost up to 102% of the plan's full premium. Get quotes for all three." />
        <CheckItem bold="Are you maximizing current employer benefits before you leave?" text="Schedule deferred appointments, fill prescriptions, and check what happens to your FSA balance when you leave." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Entity Setup &amp; Tax Architecture</Text>
        <CheckItem bold="Have you decided on your business entity structure?" text="An LLC can provide liability protection. Whether an S corporation election pays off depends on your profit, a reasonable salary, and the added payroll costs. Ask your CPA to run the numbers." />
        <CheckItem bold="Do you understand the self-employment tax impact?" text="You pay both halves of Social Security and Medicare on most of your net self-employment earnings: 12.4% for Social Security up to $184,500 of combined wages and self-employment earnings for 2026, and 2.9% for Medicare with no cap, plus 0.9% more at higher incomes. It's on top of income tax, and the wage limit changes every year." />
        <CheckItem bold="Have you set up quarterly estimated tax payments?" text="With no employer withholding, the IRS expects tax paid during the year, usually in quarterly estimates. Underpaying can bring a penalty even if you pay in full at filing, so have your CPA set your first year's amounts." />
        <Footer />
      </Page>

      <Page size="LETTER" style={s.page}>
        <Text style={s.sectionTitle} minPresenceAhead={70}>Retirement Accounts</Text>
        <CheckItem bold="Do you have a plan for your employer 401(k)?" text="Leave it, roll it to an IRA, or roll it to a new plan. Cashing it out generally means income tax on the full amount, plus a 10% additional tax if you're under 59½ and no exception applies." />
        <CheckItem bold="Have you evaluated a Solo 401(k) or SEP-IRA?" text="For 2026, total Solo 401(k) contributions can be up to $72,000: an employee deferral of up to $24,500 plus an employer contribution based on your self-employment earnings, with catch-up contributions at 50 and older on top. A SEP-IRA allows only the employer contribution. For self-employed people the employer calculation comes out lower than the plan's stated percentage, so have your CPA run it. Limits change every year." />
        <CheckItem bold="Are you planning to use an HSA?" text="With an HSA-eligible high-deductible health plan, you can contribute up to $4,400 (self-only coverage) or $8,750 (family coverage) for 2026, plus $1,000 more at age 55 and older. For federal tax, contributions are deductible, growth isn't taxed, and withdrawals for qualified medical expenses aren't taxed. Limits change every year." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Income Replacement</Text>
        <CheckItem bold="Do you have your first client identified before you leave?" text="Ideally, you've already landed your first paying client while still employed. This validates the model and puts cash flow on the calendar." />
        <CheckItem bold="Have you calculated your break-even number?" text="Monthly revenue needed to cover personal burn + business costs + quarterly taxes. Know this number cold." />
        <CheckItem bold="Do you have a non-compete agreement?" text="Read it carefully. Violating one can result in an injunction and damages. Get legal advice before you give notice." />

        <Text style={s.sectionTitle} minPresenceAhead={70}>Personal Financial Architecture</Text>
        <CheckItem bold="Is your personal emergency fund separate from business runway?" text="Different accounts, different purposes. Don't raid one for the other." />
        <CheckItem bold="Have you had the conversation with your spouse or partner?" text="They need to understand the timeline, the plan, the risks, and their role." />
        <CheckItem bold="Do you have a written transition plan with specific dates?" text="'Someday' is not a plan. A timeline with milestones converts a dream into a project." />
        <Footer />
      </Page>

      {/* Departure Timeline Worksheet */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.sectionTitle} minPresenceAhead={70}>Your Departure Timeline</Text>
        <Text style={s.body}>
          Use this worksheet to map your transition. Fill in target dates and
          check each box as you complete it. A calculated departure has
          milestones, not just a quit date.
        </Text>
        <View style={s.divider} />

        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontWeight: 700, fontSize: 12, color: color.primary, marginBottom: 6 }}>
            Month -12: Foundation
          </Text>
          <CheckItem bold="Calculate real monthly burn rate" text="(include a buffer): $________/mo" />
          <CheckItem bold="Determine liquid runway" text="Savings ÷ burn rate = ________ months" />
          <CheckItem bold="Research health insurance options" text="COBRA: $________/mo | Marketplace: $________/mo | Spouse plan: $________/mo" />
        </View>

        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontWeight: 700, fontSize: 12, color: color.primary, marginBottom: 6 }}>
            Month -6: Architecture
          </Text>
          <CheckItem bold="Choose and form business entity" text="LLC / S-Corp / Sole Prop, filed in: ________________" />
          <CheckItem bold="Open business bank account" text="Separate from personal. Non-negotiable." />
          <CheckItem bold="Set up Solo 401(k) or SEP-IRA" text="Provider: ________________ | Contribution target: $________/yr" />
          <CheckItem bold="Land first client or signed LOI" text="Client: ________________ | Revenue: $________/mo" />
        </View>

        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontWeight: 700, fontSize: 12, color: color.primary, marginBottom: 6 }}>
            Month -3: Preparation
          </Text>
          <CheckItem bold="Calculate break-even revenue" text="Personal burn + business costs + quarterly taxes = $________/mo" />
          <CheckItem bold="Review non-compete with attorney" text="Attorney: ________________ | Clear to proceed: Y / N" />
          <CheckItem bold="Max out employer benefits" text="FSA balance used / prescriptions filled / dental + vision scheduled" />
          <CheckItem bold="Have the conversation with your partner" text="Alignment on timeline, risks, and their role." />
        </View>

        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontWeight: 700, fontSize: 12, color: color.primary, marginBottom: 6 }}>
            Month 0: Departure
          </Text>
          <CheckItem bold="Submit resignation" text="Target date: ________________" />
          <CheckItem bold="Roll employer 401(k)" text="To: IRA / Solo 401(k) / Leave in place" />
          <CheckItem bold="Activate health insurance" text="COBRA start / Marketplace enrollment / Spouse plan effective" />
          <CheckItem bold="First quarterly estimated payment" text="Due date: ________ | Amount: $________" />
        </View>

        <CTABox variant="w2-escape" />
        <Footer />
      </Page>
    </Document>
  );
}
