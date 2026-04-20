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

Font.register({
  family: "Playfair Display",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvUDQ.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/playfairdisplay/v40/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKeiukDQ.ttf",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf",
      fontWeight: 700,
    },
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

const LOGO_URL = process.env.NEXT_PUBLIC_ENVIRONMENT === "production"
  ? "https://wealthinyourself.com/logos/wiy-logo-stacked.png"
  : "https://wiy-marketing-site.vercel.app/logos/wiy-logo-stacked.png";
const BOOKING_URL = "https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call";

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
    <View style={s.checkItem}>
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
      <Text style={s.footer}>
        Wealth In Yourself LLC | Registered Investment Adviser — State of Nevada |
        195 Highway 50, Suite 205, Zephyr Cove, NV 89448 | (415) 915-5948 |
        josh@wealthinyourself.com{"\n"}This checklist is educational and is not
        tax, legal, or investment advice. Discuss all items with your qualified
        advisory team before taking action.
      </Text>
      {page && <Text style={s.pageNum}>{page}</Text>}
    </>
  );
}

function CTAPage({ variant }: { variant?: "re-investor" | "business-owner" | "w2-escape" }) {
  const copy = {
    "re-investor": {
      title: "How many boxes did you check?",
      body1: "Every unchecked box is a conversation your advisory team should be having — and money that may be walking out the door. Most RE investors we work with find $50K–$200K in overlooked tax savings within the first 90 days of engagement.",
      body2: "Book a complimentary 15-minute intro call. We'll talk about your portfolio, your team, and whether coordination is the missing piece.",
    },
    "business-owner": {
      title: "Is your exit plan actually built — or just imagined?",
      body1: "Most business owners discover 3–5 structural gaps that would cost them hundreds of thousands at exit. QSBS qualification, entity restructuring, defined benefit plans — these have deadlines that don't wait for you to be ready.",
      body2: "Book a complimentary 15-minute intro call. We'll talk about your timeline, your structure, and whether your current team has the full picture.",
    },
    "w2-escape": {
      title: "Ready to build your escape plan?",
      body1: "The difference between a stressful leap and a calculated transition is a few hours of financial architecture work. Runway math, entity setup, tax optimization, and income sequencing — that's what we build together.",
      body2: "Book a complimentary 15-minute intro call. We'll talk about your timeline, your runway, and whether flat-fee planning is the right fit.",
    },
  };

  const c = copy[variant || "re-investor"];

  return (
    <Page size="LETTER" style={s.page}>
      <View style={s.ctaBox}>
        <Text style={s.ctaTitle}>{c.title}</Text>
        <Text style={s.body}>{c.body1}</Text>
        <Text style={s.body}>{c.body2}</Text>
        <Text style={{ fontSize: 9, color: color.muted, marginTop: 10, marginBottom: 10 }}>
          Josh St. Laurent, CFP®, CFT™, APFC®, ACC, MS — Founder, Wealth In Yourself
        </Text>
        <Link src={BOOKING_URL}>
          <Text style={s.ctaLink}>
            Book a 15-minute intro call →
          </Text>
        </Link>
      </View>
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
        <Image src={LOGO_URL} style={{ width: 140, marginBottom: 30, opacity: 0.9 }} />
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
          Are you leaving money on the table? Most real estate investors are —
          and they don&apos;t know it until someone runs the numbers. This
          checklist covers the tax strategies that separate sophisticated
          investors from everyone else. It&apos;s not advice — it&apos;s a
          conversation starter between you and your advisory team.
        </Text>
        <Text style={{ fontSize: 9, color: color.secondary, fontWeight: 600, marginBottom: 8 }}>
          How to use this: Check each box you can answer &ldquo;yes&rdquo; to.
          Every unchecked box is a conversation to have with your team.
        </Text>
        <View style={s.divider} />

        <Text style={s.sectionTitle}>1031 Exchanges</Text>
        <CheckItem bold="Do you have a 1031 exchange strategy for your next property sale?" text="A 1031 exchange lets you defer capital gains taxes by reinvesting sale proceeds into a like-kind property. The rules are strict — 45-day identification window, 180-day closing deadline — and missing either one means you pay the full tax bill." />
        <CheckItem bold="Have you evaluated a Reverse 1031 exchange?" text="If you find the replacement property before selling, a reverse exchange lets you acquire first and sell second. More expensive, but removes the 45-day pressure." />
        <CheckItem bold="Do you have a Qualified Intermediary relationship established?" text="You cannot touch the proceeds yourself — a QI must hold them. Setting this up during a transaction is stressful. Having a QI in place before you list is a best practice most investors skip." />

        <Text style={s.sectionTitle}>Cost Segregation</Text>
        <CheckItem bold="Have you run a cost segregation study on every property you own?" text="Cost segregation reclassifies building components into shorter depreciation categories (5, 7, or 15 years instead of 27.5 or 39). The result: accelerated depreciation deductions that can dramatically reduce your taxable income." />
        <CheckItem bold="Are you aware of the current bonus depreciation rules?" text="Bonus depreciation is 100% again for most qualifying property acquired and placed in service after January 19, 2025, under the One Big Beautiful Bill Act (OBBBA). This permanently reversed the prior phase-down schedule. Your CPA and financial planner should model acquisition timing together." />
        <Footer />
      </Page>

      {/* More sections */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.sectionTitle}>Entity Structure</Text>
        <CheckItem bold="Is your entity structure optimized for both liability protection and tax efficiency?" text="LLCs, S-Corps, partnerships, and holding companies all have different tax treatment. What worked at 2 properties may be costing you at 10." />
        <CheckItem bold="Have you evaluated a holding company structure?" text="Once you own multiple properties across multiple LLCs, a parent holding company can simplify management, improve lending optics, and create tax planning flexibility." />

        <Text style={s.sectionTitle}>QBI Deduction</Text>
        <CheckItem bold="Are you taking advantage of the QBI deduction on your rental income?" text="Section 199A can provide up to a 20% deduction on qualified business income from pass-through entities. Whether your rental activity qualifies depends on structure and time spent." />

        <Text style={s.sectionTitle}>State Tax Considerations</Text>
        <CheckItem bold="Have you evaluated your state of residency from a tax perspective?" text="For investors with flexibility on where they live, this is one of the highest-leverage tax decisions available." />
        <CheckItem bold="Are you filing in every state where you have rental income?" text="Many investors underfile. The penalties for not filing are typically worse than the tax owed." />

        <Text style={s.sectionTitle}>Short-Term Rental Strategies</Text>
        <CheckItem bold="Are you leveraging the STR loophole for material participation?" text="Short-term rentals with average stays of 7 days or less are not treated as rental activity under IRC Section 469. If you materially participate, losses can offset your ordinary income." />
        <CheckItem bold="Do you have documentation proving your material participation hours?" text="The IRS requires contemporaneous logs. A simple time-tracking habit now protects a potentially massive deduction later." />

        <Text style={s.sectionTitle}>Depreciation &amp; Recapture</Text>
        <CheckItem bold="Do you have a depreciation recapture plan for when you eventually sell?" text="When you sell a depreciated property, the IRS recaptures depreciation at 25% — plus capital gains on any appreciation. This tax bill surprises investors who never modeled it." />
        <CheckItem bold="Have you modeled the tax impact of a sale vs. a refinance-and-hold strategy?" text="A cash-out refinance gives you liquidity without triggering depreciation recapture or capital gains. In many cases, the math favors holding indefinitely and refinancing instead of selling." />

        <Text style={s.sectionTitle}>Your Advisory Team</Text>
        <CheckItem bold="Do you have both a CPA and a financial planner — and are they talking?" text="Your CPA handles compliance. Your financial planner handles strategy. You need both, and they need to coordinate. If they've never spoken, that's a problem." />
        <CheckItem bold="Is your CPA proactively suggesting strategies — or just filing what you hand them?" text="A reactive CPA costs you money every year. If they've never mentioned cost segregation, entity restructuring, or STR material participation without you asking first, that's a gap." />
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
        <Image src={LOGO_URL} style={{ width: 140, marginBottom: 30, opacity: 0.9 }} />
        <Text style={s.coverTitle}>
          The Entrepreneur&apos;s{"\n"}Wealth Extraction Roadmap
        </Text>
        <View style={{ borderBottomWidth: 2, borderBottomColor: color.secondary, width: 60, marginBottom: 16 }} />
        <Text style={s.coverSubtitle}>
          The financial architecture decisions that determine whether{"\n"}your
          exit builds generational wealth or just pays the tax bill.
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
          Most business owners build incredible companies — and then leave
          millions on the table when it&apos;s time to step away. Whether
          you&apos;re five years out or five months, this roadmap covers the
          decisions that matter most.
        </Text>
        <View style={s.divider} />

        <Text style={s.sectionTitle}>Business Valuation</Text>
        <CheckItem bold="Do you have a current, independent business valuation?" text="Not a back-of-napkin number. A formal valuation sets the foundation for every exit decision that follows." />
        <CheckItem bold="Do you understand which valuation method applies?" text="EBITDA multiples, discounted cash flow, asset-based, comparable transactions — each produces a different number." />
        <CheckItem bold="Have you identified the 3-5 value drivers a buyer will care about?" text="Recurring revenue, customer concentration, owner dependency, gross margins, growth trajectory. If more than 30% of revenue comes from your personal relationships, that's a valuation discount to fix." />

        <Text style={s.sectionTitle}>Entity Structure &amp; Tax Positioning</Text>
        <CheckItem bold="Is your entity structured to minimize the tax impact of a sale?" text="The difference between a stock sale and an asset sale can be millions. C-corp vs. S-corp vs. LLC — the structure you chose at founding may not be right for exit." />
        <CheckItem bold="Have you evaluated QSBS (Section 1202)?" text="Qualified Small Business Stock can exclude up to $10M in capital gains from federal tax — or $15M for stock issued after July 4, 2025 under the OBBBA expansion, with tiered holding periods. Requirements are specific and most owners learn about it too late." />
        <CheckItem bold="Are you using an IDGT or estate vehicle to transfer interests?" text="Transferring business interests at today's valuation — before the exit premium — can save your family millions in estate tax." />
        <Footer />
      </Page>

      <Page size="LETTER" style={s.page}>
        <Text style={s.sectionTitle}>Cash Flow &amp; Income Replacement</Text>
        <CheckItem bold="Do you know your post-exit income need?" text="What does your life cost per month without the business? Include health insurance, taxes on withdrawals, and a buffer. Most owners overestimate how far proceeds will go." />
        <CheckItem bold="Have you modeled the after-tax proceeds?" text="Federal capital gains, state capital gains, depreciation recapture, ordinary income recapture, NIIT — the tax stack on a business sale is complex." />
        <CheckItem bold="Do you have a wealth management plan for the proceeds?" text="The day after you sell is the most dangerous day of your financial life. Having an investment policy statement and portfolio strategy before the close is non-negotiable." />

        <Text style={s.sectionTitle}>Succession &amp; Continuity</Text>
        <CheckItem bold="Do you have a written succession plan?" text="If you're hit by a bus tomorrow, who runs the business? Who has the passwords, banking access, vendor relationships?" />
        <CheckItem bold="Have you evaluated internal sale vs. external sale vs. ESOP?" text="Each has radically different tax implications, timelines, and outcomes. Your financial planner should be modeling all three." />
        <CheckItem bold="Do you have a buy-sell agreement with your partners?" text="Without one, your family inherits a legal fight, not a clean exit." />

        <Text style={s.sectionTitle}>Tax Timing &amp; Strategy</Text>
        <CheckItem bold="Have you considered an installment sale (Section 453)?" text="Spreading capital gains recognition over the payment period can keep you in lower tax brackets for years." />
        <CheckItem bold="Have you explored a Charitable Remainder Trust?" text="A CRT lets you transfer interests before the sale, receive an income stream for life, get a charitable deduction, and avoid capital gains on the transferred amount." />

        <Text style={s.sectionTitle}>The Advisory Team</Text>
        <CheckItem bold="Do you have all four: financial planner, CPA, estate attorney, M&A advisor?" text="Each handles a different piece. If any one is missing, you have a gap. Coordination is the financial planner's job." />
        <CheckItem bold="Are all four working from the same playbook — or operating in silos?" text="If your CPA hasn't spoken to your estate attorney this year, nobody is coordinating your full picture. That's the gap where money falls through." />
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
        <Image src={LOGO_URL} style={{ width: 140, marginBottom: 30, opacity: 0.9 }} />
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
          You&apos;ve been thinking about it for months — maybe years. Leaving
          the W-2, going independent, building something of your own. The dream
          is clear. What&apos;s usually missing is the financial architecture
          underneath it. This checklist covers the decisions that determine
          whether your transition is calculated or chaotic.
        </Text>
        <View style={s.divider} />

        <Text style={s.sectionTitle}>The Runway</Text>
        <CheckItem bold="Do you know your monthly burn rate — the real one?" text="Add up everything, then add 15% for the things you forgot. Most people underestimate by 20-30%." />
        <CheckItem bold="Do you have 12-18 months of living expenses in liquid savings?" text="Not invested. Not in a retirement account. Liquid. Six months is for employed people. You need more." />
        <CheckItem bold="Have you stress-tested against a delayed revenue scenario?" text="What if your first client takes 6 months? Model the worst case, not the optimistic one." />

        <Text style={s.sectionTitle}>Health Insurance</Text>
        <CheckItem bold="Do you have a post-employment health insurance plan?" text="COBRA (18 months, $1,500-2,500/mo for a family), ACA marketplace, or a spouse's employer plan. The cost swing can be $15,000-30,000/year." />
        <CheckItem bold="Are you maximizing current employer benefits before you leave?" text="Schedule every deferred appointment, fill prescriptions, use your FSA balance. This is free money you're walking away from." />

        <Text style={s.sectionTitle}>Entity Setup &amp; Tax Architecture</Text>
        <CheckItem bold="Have you decided on your business entity structure?" text="An LLC provides liability protection. An S-corp election can save thousands in self-employment tax once income exceeds ~$50-60K." />
        <CheckItem bold="Do you understand the self-employment tax impact?" text="You pay both halves of Social Security and Medicare — 15.3% on the first $184,500 in 2026 plus 2.9% above that. This is in addition to income tax. Limits are adjusted annually." />
        <CheckItem bold="Have you set up quarterly estimated tax payments?" text="The IRS expects you to pay as you earn. If you owe more than $1,000 at filing, you'll face underpayment penalties." />
        <Footer />
      </Page>

      <Page size="LETTER" style={s.page}>
        <Text style={s.sectionTitle}>Retirement Accounts</Text>
        <CheckItem bold="Do you have a plan for your employer 401(k)?" text="Leave it, roll to an IRA, or roll to a new plan. Do not cash it out — the tax hit plus 10% penalty will cost you a quarter of the balance." />
        <CheckItem bold="Have you evaluated a Solo 401(k) or SEP-IRA?" text="A Solo 401(k) lets you contribute up to $72,000/year ($24,500 employee + up to 25% employer). A SEP-IRA limits you to 25% of net self-employment income. Limits are adjusted annually." />
        <CheckItem bold="Are you planning to use an HSA?" text="With a high-deductible health plan, you can contribute $4,400 (individual) or $8,750 (family), plus $1,000 catch-up at 55+. The only triple-tax-advantaged account in the tax code. Limits are adjusted annually." />

        <Text style={s.sectionTitle}>Income Replacement</Text>
        <CheckItem bold="Do you have your first client identified before you leave?" text="Ideally, you've already landed your first paying client while still employed. This validates the model and puts cash flow on the calendar." />
        <CheckItem bold="Have you calculated your break-even number?" text="Monthly revenue needed to cover personal burn + business costs + quarterly taxes. Know this number cold." />
        <CheckItem bold="Do you have a non-compete agreement?" text="Read it carefully. Violating one can result in an injunction and damages. Get legal advice before you give notice." />

        <Text style={s.sectionTitle}>Personal Financial Architecture</Text>
        <CheckItem bold="Is your personal emergency fund separate from business runway?" text="Different accounts, different purposes. Don't raid one for the other." />
        <CheckItem bold="Have you had the conversation with your spouse or partner?" text="They need to understand the timeline, the plan, the risks, and their role. Alignment here prevents 90% of the stress." />
        <CheckItem bold="Do you have a written transition plan with specific dates?" text="'Someday' is not a plan. A timeline with milestones converts a dream into a project." />
        <Footer />
      </Page>

      {/* Departure Timeline Worksheet */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.sectionTitle}>Your Departure Timeline</Text>
        <Text style={s.body}>
          Use this worksheet to map your transition. Fill in target dates and
          check each box as you complete it. A calculated departure has
          milestones — not just a quit date.
        </Text>
        <View style={s.divider} />

        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontWeight: 700, fontSize: 12, color: color.primary, marginBottom: 6 }}>
            Month -12: Foundation
          </Text>
          <CheckItem bold="Calculate real monthly burn rate" text="(include 15% buffer): $________/mo" />
          <CheckItem bold="Determine liquid runway" text="Savings ÷ burn rate = ________ months" />
          <CheckItem bold="Research health insurance options" text="COBRA: $________/mo | Marketplace: $________/mo | Spouse plan: $________/mo" />
        </View>

        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontWeight: 700, fontSize: 12, color: color.primary, marginBottom: 6 }}>
            Month -6: Architecture
          </Text>
          <CheckItem bold="Choose and form business entity" text="LLC / S-Corp / Sole Prop — filed in: ________________" />
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

        <View style={s.ctaBox}>
          <Text style={{ fontSize: 10, color: color.primary, lineHeight: 1.5 }}>
            Want help filling this in? Book a 15-minute call and we&apos;ll walk
            through your specific numbers — runway, entity choice, tax
            architecture, and timing. No pitch. Just math.
          </Text>
        </View>
        <Footer />
      </Page>

      <CTAPage variant="w2-escape" />
    </Document>
  );
}
