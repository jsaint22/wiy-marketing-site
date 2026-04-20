import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  Font,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import path from "path";
import {
  calculateWiyAnnualFee,
  formatUSD,
  projectFees,
} from "./fee-math";

/* ------------------------------------------------------------------ */
/*  Fonts                                                              */
/* ------------------------------------------------------------------ */

const fontsDir = path.join(process.cwd(), "public", "fonts");

Font.register({
  family: "Playfair Display",
  fonts: [
    { src: path.join(fontsDir, "PlayfairDisplay-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontsDir, "PlayfairDisplay-Italic.ttf"), fontWeight: 400, fontStyle: "italic" },
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
/*  Brand tokens                                                       */
/* ------------------------------------------------------------------ */

const color = {
  primary: "#1B3A4B",
  secondary: "#C9A449",
  dark: "#2A2A2A",
  bg: "#F7F3ED",
  white: "#FFFFFF",
  success: "#4A7C59",
  warning: "#B8794A",
  muted: "#8A8A8A",
};

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const s = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    color: color.dark,
    backgroundColor: color.white,
    paddingTop: 60,
    paddingBottom: 60,
    paddingHorizontal: 60,
  },
  coverPage: {
    fontFamily: "Inter",
    fontSize: 10,
    color: color.white,
    backgroundColor: color.primary,
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
    justifyContent: "center",
    alignItems: "center",
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
  // Typography
  h1: {
    fontFamily: "Playfair Display",
    fontSize: 36,
    fontWeight: 700,
    color: color.primary,
    marginBottom: 12,
  },
  h2: {
    fontFamily: "Playfair Display",
    fontSize: 22,
    fontWeight: 700,
    color: color.primary,
    marginBottom: 16,
  },
  h3: {
    fontFamily: "Inter",
    fontSize: 13,
    fontWeight: 700,
    color: color.primary,
    marginBottom: 8,
  },
  body: {
    fontSize: 10.5,
    lineHeight: 1.7,
    color: color.dark,
    marginBottom: 10,
  },
  bodySmall: {
    fontSize: 9,
    lineHeight: 1.6,
    color: color.dark,
  },
  accent: {
    color: color.secondary,
  },
  bold: {
    fontWeight: 700,
  },
  // Layout
  section: {
    marginBottom: 24,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: color.bg,
    marginVertical: 20,
  },
  goldDivider: {
    borderBottomWidth: 2,
    borderBottomColor: color.secondary,
    marginVertical: 16,
    width: 60,
  },
  // Table
  tableHeader: {
    flexDirection: "row" as const,
    backgroundColor: color.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  tableHeaderCell: {
    flex: 1,
    color: color.white,
    fontSize: 9,
    fontWeight: 700,
  },
  tableRow: {
    flexDirection: "row" as const,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: color.bg,
  },
  tableRowAlt: {
    flexDirection: "row" as const,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: color.bg,
    backgroundColor: "#FAFAF7",
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
  },
  tableCellBold: {
    flex: 1,
    fontSize: 10,
    fontWeight: 700,
  },
  // Card
  card: {
    backgroundColor: color.bg,
    borderRadius: 6,
    padding: 12,
    marginBottom: 8,
  },
  cardAccent: {
    backgroundColor: color.primary,
    borderRadius: 6,
    padding: 16,
    marginBottom: 12,
  },
  // Bar chart
  barGroup: {
    flexDirection: "row" as const,
    alignItems: "center" as const,
    marginBottom: 8,
  },
  barLabel: {
    width: 50,
    fontSize: 8,
    fontWeight: 600,
    color: color.dark,
  },
  barTrack: {
    flex: 1,
    height: 18,
    backgroundColor: color.bg,
    borderRadius: 3,
    position: "relative" as const,
  },
  barFill: {
    height: 18,
    borderRadius: 3,
    position: "absolute" as const,
    top: 0,
    left: 0,
  },
  barValue: {
    fontSize: 7.5,
    fontWeight: 700,
    color: color.dark,
    marginLeft: 6,
  },
  // Bullet
  bulletRow: {
    flexDirection: "row" as const,
    marginBottom: 6,
    paddingLeft: 4,
  },
  bulletDot: {
    width: 14,
    fontSize: 10,
    color: color.secondary,
    fontWeight: 700,
  },
  bulletText: {
    flex: 1,
    fontSize: 10.5,
    lineHeight: 1.6,
    color: color.dark,
  },
  // Pullquote
  pullquote: {
    borderLeftWidth: 3,
    borderLeftColor: color.secondary,
    paddingLeft: 16,
    marginVertical: 16,
    marginLeft: 8,
  },
  pullquoteText: {
    fontFamily: "Playfair Display",
    fontSize: 13,
    fontStyle: "italic" as const,
    color: color.primary,
    lineHeight: 1.6,
  },
});

const COMPLIANCE_FOOTER =
  "Educational content only. Not financial advice. Results illustrative. Past performance not indicative of future results.";

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

function Footer({ pageNumber }: { pageNumber: number }) {
  return (
    <>
      <Text style={s.footer}>{COMPLIANCE_FOOTER}</Text>
      <Text style={s.pageNum}>{pageNumber}</Text>
    </>
  );
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={s.bulletRow}>
      <Text style={s.bulletDot}>•</Text>
      <Text style={s.bulletText}>{children}</Text>
    </View>
  );
}

function Bar({
  label,
  value,
  maxValue,
  barColor,
}: {
  label: string;
  value: number;
  maxValue: number;
  barColor: string;
}) {
  const pct = Math.min((value / maxValue) * 100, 100);
  return (
    <View style={s.barGroup}>
      <Text style={s.barLabel}>{label}</Text>
      <View style={s.barTrack}>
        <View
          style={[s.barFill, { width: `${pct}%`, backgroundColor: barColor }]}
        />
      </View>
      <Text style={s.barValue}>{formatUSD(value)}</Text>
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  Fee comparison data                                                */
/* ------------------------------------------------------------------ */

const wealthLevels = [1_000_000, 5_000_000, 10_000_000, 25_000_000];

function wealthLabel(nw: number): string {
  return nw >= 1_000_000 ? `$${nw / 1_000_000}M` : formatUSD(nw);
}

function yearOneTable() {
  return wealthLevels.map((nw) => ({
    netWorth: nw,
    aumFee: nw * 0.01,
    wiyFee: calculateWiyAnnualFee(nw),
    label: wealthLabel(nw),
  }));
}

/* ------------------------------------------------------------------ */
/*  Document                                                           */
/* ------------------------------------------------------------------ */

const logoPath = path.join(process.cwd(), "public", "logos", "wiy-logo-stacked.png");

export default function AumMathPDF() {
  const table = yearOneTable();

  // Run projections for $5M at 20 and 30 years
  const proj5M_20 = projectFees(5_000_000, 20);
  const proj5M_30 = projectFees(5_000_000, 30);

  // Run projections for all wealth levels at 20 and 30 years
  const summaries20 = wealthLevels.map((nw) => ({
    label: wealthLabel(nw),
    ...projectFees(nw, 20),
  }));
  const summaries30 = wealthLevels.map((nw) => ({
    label: wealthLabel(nw),
    ...projectFees(nw, 30),
  }));

  const maxBarPortBenefit20 = Math.max(...summaries20.map((s) => s.portfolioBenefit));
  const maxBarPortBenefit30 = Math.max(...summaries30.map((s) => s.portfolioBenefit));

  return (
    <Document
      title="The AUM Math — Wealth In Yourself"
      author="Joshua St. Laurent, CFP®, CFT™"
      subject="What 1% of your assets actually costs you over a career"
    >
      {/* ========== PAGE 1 — COVER ========== */}
      <Page size="LETTER" style={s.coverPage}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 80,
          }}
        >
          <Image
            src={logoPath}
            style={{ width: 100, height: 100, marginBottom: 40 }}
          />
          <Text
            style={{
              fontFamily: "Playfair Display",
              fontSize: 42,
              fontWeight: 700,
              color: color.white,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            The AUM Math
          </Text>
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: color.secondary,
              width: 80,
              marginBottom: 20,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              color: color.secondary,
              textAlign: "center",
              lineHeight: 1.6,
              marginBottom: 40,
            }}
          >
            What 1% of your assets actually costs you over a career.
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: "#FFFFFFCC",
              textAlign: "center",
              marginBottom: 6,
            }}
          >
            By Joshua St. Laurent, CFP®, CFT™
          </Text>
          <Text
            style={{
              fontSize: 10,
              color: "#FFFFFF99",
              textAlign: "center",
            }}
          >
            Wealth In Yourself — wealthinyourself.com
          </Text>
        </View>
        <Text
          style={{
            position: "absolute",
            bottom: 24,
            left: 60,
            right: 60,
            fontSize: 6.5,
            color: "#FFFFFF66",
            textAlign: "center",
          }}
        >
          {COMPLIANCE_FOOTER}
        </Text>
      </Page>

      {/* ========== PAGE 2 — EXECUTIVE SUMMARY ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>Executive Summary</Text>
        <View style={s.goldDivider} />

        <Text style={s.body}>
          A 1% AUM fee does not cost you 1%. It costs you the compounded growth
          of that 1%, every year, for decades. This report shows the exact math.
        </Text>

        {/* Mini table */}
        <View style={[s.tableHeader, { marginTop: 16 }]}>
          <Text style={[s.tableHeaderCell, { flex: 1.2 }]}>Starting NW</Text>
          <Text style={s.tableHeaderCell}>20-Year Benefit</Text>
          <Text style={s.tableHeaderCell}>30-Year Benefit</Text>
        </View>
        {wealthLevels.map((nw, i) => {
          const r20 = projectFees(nw, 20);
          const r30 = projectFees(nw, 30);
          return (
            <View key={nw} style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}>
              <Text style={[s.tableCellBold, { flex: 1.2, color: color.primary }]}>
                {wealthLabel(nw)}
              </Text>
              <Text style={[s.tableCell, { color: color.success, fontWeight: 700 }]}>
                {formatUSD(r20.portfolioBenefit)}
              </Text>
              <Text style={[s.tableCell, { color: color.success, fontWeight: 700 }]}>
                {formatUSD(r30.portfolioBenefit)}
              </Text>
            </View>
          );
        })}

        <Text style={[s.bodySmall, { marginTop: 12, color: color.muted }]}>
          Portfolio benefit = additional portfolio value you keep with flat fees vs. 1% AUM,
          accounting for lost compounding on fees paid. 7% annual growth assumed.
        </Text>

        <View style={[s.cardAccent, { marginTop: 20 }]}>
          <Text style={{ fontSize: 11, color: "#FFFFFFCC", textAlign: "center", lineHeight: 1.6 }}>
            At $5M over 30 years, your portfolio is{" "}
            <Text style={{ color: color.secondary, fontWeight: 700 }}>
              {formatUSD(proj5M_30.portfolioBenefit)}
            </Text>
            {" "}larger with flat fees.{"\n"}
            The rest of this report shows you how.
          </Text>
        </View>

        <Footer pageNumber={2} />
      </Page>

      {/* ========== PAGE 3 — INTRODUCTION ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>Introduction</Text>
        <View style={s.goldDivider} />

        <View style={s.pullquote}>
          <Text style={s.pullquoteText}>
            &ldquo;When most advisors quote you a 1% AUM fee, they say something
            like &lsquo;It&rsquo;s just one percent.&rsquo;{"\n"}
            That&rsquo;s the line. &lsquo;Just one percent.&rsquo;{"\n"}
            The math says otherwise. Over a 20-year career, 1% compounds into
            something most clients have never seen laid out.{"\n"}
            This report is the math.&rdquo;
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>What this report shows</Text>
          <Bullet>
            How AUM (assets under management) fees actually work — and why
            they grow faster than most people realize.
          </Bullet>
          <Bullet>
            Side-by-side math comparing 1% AUM fees to a flat-fee model at
            $1M, $5M, $10M, and $25M in assets.
          </Bullet>
          <Bullet>
            The 20-year and 30-year compounding effect — the numbers most
            advisors never put in front of you.
          </Bullet>
          <Bullet>
            What you could actually do with the money you keep.
          </Bullet>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>Why it matters</Text>
          <Text style={s.body}>
            The difference between a 1% AUM fee and a flat fee is not 1%. It is
            the compounded cost of 1% applied to a growing portfolio, year
            after year, for decades. At higher net worth levels, that
            difference becomes hundreds of thousands — or millions — of
            dollars. Money that stays in your accounts, compounds for your
            family, and works for your goals instead of your advisor&rsquo;s.
          </Text>
          <Text style={s.body}>
            This report uses real math and transparent assumptions. No tricks.
            No fine print. Just the numbers.
          </Text>
        </View>

        <Footer pageNumber={3} />
      </Page>

      {/* ========== PAGE 3 — HOW AUM FEES WORK ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>How AUM Fees Actually Work</Text>
        <View style={s.goldDivider} />

        <View style={s.section}>
          <Text style={s.h3}>The mechanics</Text>
          <Text style={s.body}>
            An AUM fee is a percentage of your total managed assets, charged
            annually (usually billed quarterly). If your advisor charges 1% and
            you have $5 million invested, you pay $50,000 per year.
          </Text>
          <Text style={s.body}>
            Here is the part people miss: as your portfolio grows, so does the
            fee. If your portfolio grows to $7 million, you now pay $70,000.
            The advisor did not do 40% more work. They may not have changed
            your plan at all. But they earned 40% more.
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>The structural conflict</Text>
          <Text style={s.body}>
            AUM creates a structural incentive misalignment. Your advisor is
            financially rewarded when your managed assets grow — which can
            discourage advice that moves money out of the managed portfolio,
            even when that move is in your best interest. Paying down a
            mortgage, funding a business, buying real estate, or making a
            large charitable gift all reduce the advisor&rsquo;s revenue.
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>Why flat fees align incentives</Text>
          <Text style={s.body}>
            A flat-fee advisor earns the same regardless of where your money
            goes. The advice is about your life, not your account balance.
            Whether you invest more, pay off debt, buy a property, or give
            generously — the fee stays the same. The advisor&rsquo;s only job
            is to give you the best advice, period.
          </Text>
        </View>

        <View style={s.cardAccent}>
          <Text
            style={{
              fontFamily: "Playfair Display",
              fontSize: 12,
              color: color.secondary,
              textAlign: "center",
              lineHeight: 1.6,
            }}
          >
            &ldquo;Your AUM advisor gets paid more when your account grows —
            whether or not you ever get better advice.&rdquo;
          </Text>
        </View>

        <Footer pageNumber={4} />
      </Page>

      {/* ========== PAGE 4 — YEAR 1 MATH ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>
          The Math: Year 1
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: color.muted,
            marginBottom: 16,
          }}
        >
          Annual fees at 1% AUM vs. WIY flat fee at four net worth levels.
        </Text>
        <View style={s.goldDivider} />

        {/* Table */}
        <View style={s.tableHeader}>
          <Text style={[s.tableHeaderCell, { flex: 1.2 }]}>Net Worth</Text>
          <Text style={s.tableHeaderCell}>AUM Fee (1%)</Text>
          <Text style={s.tableHeaderCell}>WIY Flat Fee</Text>
          <Text style={s.tableHeaderCell}>You Save</Text>
        </View>
        {table.map((row, i) => (
          <View
            key={row.netWorth}
            style={i % 2 === 0 ? s.tableRow : s.tableRowAlt}
          >
            <Text style={[s.tableCellBold, { flex: 1.2, color: color.primary }]}>
              {row.label}
            </Text>
            <Text style={[s.tableCell, { color: color.warning }]}>
              {formatUSD(row.aumFee)}
            </Text>
            <Text style={[s.tableCell, { color: color.success }]}>
              {formatUSD(row.wiyFee)}
            </Text>
            <Text style={[s.tableCellBold, { color: color.primary }]}>
              {row.aumFee - row.wiyFee > 0
                ? formatUSD(row.aumFee - row.wiyFee)
                : "—"}
            </Text>
          </View>
        ))}

        <View style={{ marginTop: 24 }}>
          <View style={s.card}>
            <Text style={s.h3}>What the table shows</Text>
            <Text style={s.bodySmall}>
              At $1M, the fees are identical — the WIY flat fee matches the
              AUM cost at this level. This is by design: flat-fee planning
              becomes increasingly advantageous as net worth grows. At $5M,
              you save $29,000 per year. At $25M, you save $204,000 per year
              — every single year.
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 12 }}>
          <Text style={s.bodySmall}>
            WIY fee based on declining-percentage model: first $1M at 1.00%,
            next $2M at 0.35%, next $7M at 0.20%, above $10M at 0.10%.
            $10,000 annual minimum. AUM assumes standard 1% of managed assets.
          </Text>
        </View>

        <Footer pageNumber={5} />
      </Page>

      {/* ========== PAGE 5 — 20-YEAR COMPOUNDING ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>The 20-Year Compounding Effect</Text>
        <Text
          style={{
            fontSize: 10,
            color: color.muted,
            marginBottom: 16,
          }}
        >
          Portfolio benefit over 20 years at each wealth level. Fees are paid
          from the portfolio each year, reducing the base for future growth.
        </Text>
        <View style={s.goldDivider} />

        <View style={s.section}>
          <Text style={s.h3}>Portfolio benefit of flat fees vs. AUM (20 years)</Text>
          {summaries20.map((b) => (
            <Bar
              key={b.label}
              label={b.label}
              value={b.portfolioBenefit}
              maxValue={maxBarPortBenefit20}
              barColor={color.success}
            />
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.h3}>Cumulative fee comparison at $5M (20 years)</Text>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <View style={[s.card, { flex: 1, marginRight: 4 }]}>
              <Text style={[s.bodySmall, { color: color.warning, fontWeight: 700 }]}>
                AUM fees paid
              </Text>
              <Text style={[s.h3, { color: color.warning, marginBottom: 0 }]}>
                {formatUSD(proj5M_20.cumulativeAumFees)}
              </Text>
            </View>
            <View style={[s.card, { flex: 1, marginLeft: 4 }]}>
              <Text style={[s.bodySmall, { color: color.success, fontWeight: 700 }]}>
                WIY fees paid
              </Text>
              <Text style={[s.h3, { color: color.success, marginBottom: 0 }]}>
                {formatUSD(proj5M_20.cumulativeWiyFees)}
              </Text>
            </View>
          </View>
          <Text style={s.bodySmall}>
            Fee savings: {formatUSD(proj5M_20.feeDelta)}. But because those
            savings stay invested and compound, the total portfolio benefit is
            even larger.
          </Text>
        </View>

        <View style={s.cardAccent}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 9, color: "#FFFFFFAA", marginBottom: 4 }}>
                At $5M over 20 years
              </Text>
              <Text style={{ fontSize: 9, color: "#FFFFFFAA" }}>
                AUM portfolio: {formatUSD(proj5M_20.aumEndPortfolio)}
              </Text>
              <Text style={{ fontSize: 9, color: "#FFFFFFAA" }}>
                WIY portfolio: {formatUSD(proj5M_20.wiyEndPortfolio)}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={{ fontSize: 9, color: color.secondary, marginBottom: 4 }}>
                Portfolio benefit
              </Text>
              <Text
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: 24,
                  fontWeight: 700,
                  color: color.secondary,
                }}
              >
                {formatUSD(proj5M_20.portfolioBenefit)}
              </Text>
            </View>
          </View>
        </View>

        <Text style={s.bodySmall}>
          Assumptions: 7% annual portfolio growth. AUM fee: 1% of current
          portfolio value each year. WIY fee: tiered formula recalculated on
          current portfolio value. Fees paid from portfolio each year. All
          figures pre-tax and illustrative.
        </Text>

        <Footer pageNumber={6} />
      </Page>

      {/* ========== PAGE 6 — 30-YEAR OUTLOOK ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>The 30-Year Outlook</Text>
        <Text
          style={{
            fontSize: 10,
            color: color.muted,
            marginBottom: 16,
          }}
        >
          The same math extended to 30 years — where the difference becomes
          impossible to ignore.
        </Text>
        <View style={s.goldDivider} />

        <View style={s.section}>
          <Text style={s.h3}>Portfolio benefit of flat fees vs. AUM (30 years)</Text>
          {summaries30.map((b) => (
            <Bar
              key={b.label}
              label={b.label}
              value={b.portfolioBenefit}
              maxValue={maxBarPortBenefit30}
              barColor={color.success}
            />
          ))}
        </View>

        <View style={s.section}>
          <Text style={s.h3}>Cumulative fee comparison at $5M (30 years)</Text>
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <View style={[s.card, { flex: 1, marginRight: 4 }]}>
              <Text style={[s.bodySmall, { color: color.warning, fontWeight: 700 }]}>
                AUM fees paid
              </Text>
              <Text style={[s.h3, { color: color.warning, marginBottom: 0 }]}>
                {formatUSD(proj5M_30.cumulativeAumFees)}
              </Text>
            </View>
            <View style={[s.card, { flex: 1, marginLeft: 4 }]}>
              <Text style={[s.bodySmall, { color: color.success, fontWeight: 700 }]}>
                WIY fees paid
              </Text>
              <Text style={[s.h3, { color: color.success, marginBottom: 0 }]}>
                {formatUSD(proj5M_30.cumulativeWiyFees)}
              </Text>
            </View>
          </View>
          <Text style={s.bodySmall}>
            Fee savings: {formatUSD(proj5M_30.feeDelta)}. With compounding,
            the total portfolio benefit grows to {formatUSD(proj5M_30.portfolioBenefit)}.
          </Text>
        </View>

        <View style={s.cardAccent}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 9, color: "#FFFFFFAA", marginBottom: 4 }}>
                At $5M over 30 years
              </Text>
              <Text style={{ fontSize: 9, color: "#FFFFFFAA" }}>
                AUM portfolio: {formatUSD(proj5M_30.aumEndPortfolio)}
              </Text>
              <Text style={{ fontSize: 9, color: "#FFFFFFAA" }}>
                WIY portfolio: {formatUSD(proj5M_30.wiyEndPortfolio)}
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text style={{ fontSize: 9, color: color.secondary, marginBottom: 4 }}>
                Portfolio benefit
              </Text>
              <Text
                style={{
                  fontFamily: "Playfair Display",
                  fontSize: 24,
                  fontWeight: 700,
                  color: color.secondary,
                }}
              >
                {formatUSD(proj5M_30.portfolioBenefit)}
              </Text>
            </View>
          </View>
        </View>

        <View style={s.pullquote}>
          <Text style={s.pullquoteText}>
            The 30-year view is where the math becomes impossible to ignore.
            At $5M, your portfolio is {formatUSD(proj5M_30.portfolioBenefit)}{" "}
            larger with flat fees — money that never had to leave your
            balance sheet.
          </Text>
        </View>

        <Text style={s.bodySmall}>
          Same assumptions as 20-year projections. 7% annual growth. Fees
          paid from portfolio each year. WIY fee recalculated on current
          portfolio value annually.
        </Text>

        <Footer pageNumber={7} />
      </Page>

      {/* ========== PAGE 7 — WHAT YOU COULD DO ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>What You Could Do With the Savings</Text>
        <View style={s.goldDivider} />

        <Text style={[s.body, { marginBottom: 6 }]}>
          At the $5M level alone, your portfolio grows{" "}
          {formatUSD(proj5M_20.portfolioBenefit)} more over 20 years and{" "}
          {formatUSD(proj5M_30.portfolioBenefit)} more over 30 years with flat
          fees. At higher net worth, the numbers are dramatically larger.
          Here is what that money could mean for your life:
        </Text>

        <View>
          <View style={[s.card, { padding: 10, marginBottom: 6 }]}>
            <Text style={[s.h3, { color: color.secondary, marginBottom: 3, fontSize: 11 }]}>
              Real estate investment portfolio
            </Text>
            <Text style={[s.bodySmall, { fontSize: 8.5 }]}>
              A down payment — or full purchase — on income-producing rental
              properties that generate cash flow for decades.
            </Text>
          </View>

          <View style={[s.card, { padding: 10, marginBottom: 6 }]}>
            <Text style={[s.h3, { color: color.secondary, marginBottom: 3, fontSize: 11 }]}>
              Education fully funded
            </Text>
            <Text style={[s.bodySmall, { fontSize: 8.5 }]}>
              Cover the entire cost of private school and college for multiple
              children — without student loans.
            </Text>
          </View>

          <View style={[s.card, { padding: 10, marginBottom: 6 }]}>
            <Text style={[s.h3, { color: color.secondary, marginBottom: 3, fontSize: 11 }]}>
              Early retirement by 3–5 years
            </Text>
            <Text style={[s.bodySmall, { fontSize: 8.5 }]}>
              An extra two to fifteen million in your portfolio — depending on wealth level and time horizon — means
              you reach financial independence years sooner.
            </Text>
          </View>

          <View style={[s.card, { padding: 10, marginBottom: 6 }]}>
            <Text style={[s.h3, { color: color.secondary, marginBottom: 3, fontSize: 11 }]}>
              Generational wealth transfer
            </Text>
            <Text style={[s.bodySmall, { fontSize: 8.5 }]}>
              Money that stays compounding in your accounts today becomes
              the inheritance — or the trust — that changes your family tree.
            </Text>
          </View>

          <View style={[s.card, { padding: 10, marginBottom: 6 }]}>
            <Text style={[s.h3, { color: color.secondary, marginBottom: 3, fontSize: 11 }]}>
              Business investment or philanthropy
            </Text>
            <Text style={[s.bodySmall, { fontSize: 8.5 }]}>
              Fund your next venture, seed a foundation, or make the
              charitable gifts you have always planned.
            </Text>
          </View>
        </View>

        <View style={[s.pullquote, { marginTop: 8 }]}>
          <Text style={[s.pullquoteText, { fontSize: 11 }]}>
            &ldquo;This isn&rsquo;t theoretical. This is real money that never
            has to leave your balance sheet.&rdquo;
          </Text>
        </View>

        <Footer pageNumber={8} />
      </Page>

      {/* ========== PAGE 8 — WHY ADVISORS DON'T SHOW YOU THIS ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>
          Why Most Advisors Don&rsquo;t Show You This
        </Text>
        <View style={s.goldDivider} />

        <View style={s.section}>
          <Text style={s.h3}>The structural reality</Text>
          <Text style={s.body}>
            AUM fees account for the vast majority of revenue at most registered
            investment advisory (RIA) firms in the United States. The entire
            industry infrastructure — custodians, compliance platforms,
            technology vendors — is built around AUM billing. Showing clients
            the true compounded cost of that model is, quite literally, bad
            for business.
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>Fiduciary vs. suitability</Text>
          <Text style={s.body}>
            Many investors assume that &ldquo;fiduciary&rdquo; means
            &ldquo;always acting in your best interest.&rdquo; In practice,
            fiduciary duty has limits. An advisor can be a fiduciary and still
            charge a fee structure that systematically transfers wealth from
            your portfolio to theirs. The standard requires suitable advice —
            it does not require the most cost-effective fee arrangement.
          </Text>
          <Text style={s.body}>
            Many advisors are dually registered — they hold both an RIA
            (fiduciary) license and a broker-dealer license. When acting as a
            broker, fiduciary duty does not apply. And even in their fiduciary
            capacity, the standard does not require the lowest possible fee —
            only that the advice be in your best interest given the services
            provided. A 1% AUM fee on a $10 million portfolio can satisfy
            fiduciary duty even when a flat fee would save you $69,000 per year.
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>Why flat-fee firms are still rare</Text>
          <Text style={s.body}>
            Flat-fee advisory is harder to scale. AUM fees grow automatically
            with markets. Flat fees require the advisor to deliver value that
            justifies renewal every year, regardless of what the market does.
            Most firms prefer the easier path. The firms that choose flat fees
            do it because they believe it is the right model for clients — not
            because it is the easiest model for the business.
          </Text>
        </View>

        <Footer pageNumber={9} />
      </Page>

      {/* ========== PAGE 9 — METHODOLOGY ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>Methodology &amp; Assumptions</Text>
        <View style={s.goldDivider} />

        <View style={s.section}>
          <Text style={s.h3}>Assumptions used in this analysis</Text>
          <Bullet>
            7% annual portfolio growth, applied before fees each year.
          </Bullet>
          <Bullet>
            Fees are paid from the portfolio each year, reducing the base for
            future growth. This is how fees work in practice.
          </Bullet>
          <Bullet>
            AUM fee: 1% of current portfolio value, charged at end of year.
          </Bullet>
          <Bullet>
            WIY fee: tiered formula recalculated on current portfolio value
            each year — 1% on the first $1M, 0.35% on the next $2M, 0.20% on
            the next $7M, 0.10% above $10M. $10,000 annual minimum.
          </Bullet>
          <Bullet>
            Two separate portfolio paths are tracked: one paying AUM fees,
            one paying WIY fees. The difference in ending portfolio value is
            the "portfolio benefit."
          </Bullet>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>Why "portfolio benefit" matters more than fee savings</Text>
          <Text style={s.body}>
            The cumulative fee difference understates the true cost of AUM
            fees. When fees are deducted from a portfolio, the money lost to
            fees can no longer compound. Over decades, this lost compounding
            significantly exceeds the raw fee difference. The "portfolio
            benefit" figure captures both the direct fee savings and the
            growth on those savings.
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>Important disclaimers</Text>
          <Text style={s.body}>
            Figures compound over time. Individual results will vary based on
            actual returns, tax situation, and portfolio composition. The 7%
            growth rate is a long-term historical average for diversified
            portfolios and is not a guarantee. All projections are
            illustrative and pre-tax. This analysis does not account for
            inflation, taxes, or specific investment strategies.
          </Text>
        </View>

        <View style={s.card}>
          <Text style={s.h3}>Summary of key results at $5M starting portfolio</Text>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <View style={{ flex: 1 }}>
              <Text style={[s.bodySmall, { fontWeight: 700 }]}>20 Years</Text>
              <Text style={s.bodySmall}>Fee delta: {formatUSD(proj5M_20.feeDelta)}</Text>
              <Text style={s.bodySmall}>Portfolio benefit: {formatUSD(proj5M_20.portfolioBenefit)}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[s.bodySmall, { fontWeight: 700 }]}>30 Years</Text>
              <Text style={s.bodySmall}>Fee delta: {formatUSD(proj5M_30.feeDelta)}</Text>
              <Text style={s.bodySmall}>Portfolio benefit: {formatUSD(proj5M_30.portfolioBenefit)}</Text>
            </View>
          </View>
        </View>

        <Footer pageNumber={10} />
      </Page>

      {/* ========== PAGE 10 — YOUR NUMBERS ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>Your Numbers</Text>
        <View style={s.goldDivider} />

        <View style={s.pullquote}>
          <Text style={s.pullquoteText}>
            &ldquo;The numbers in this report are illustrative. Your numbers
            are specific.&rdquo;
          </Text>
        </View>

        <Text style={s.body}>
          Every financial situation is different. Your net worth, your growth
          trajectory, your time horizon, and your goals are all unique.
          The math in this report uses round numbers and standard assumptions
          to illustrate the principle. Your actual savings could be higher
          or lower.
        </Text>

        <Link src="https://wealthinyourself.com/pricing">
          <View style={[s.cardAccent, { marginTop: 20, padding: 24 }]}>
            <Text
              style={{
                fontFamily: "Playfair Display",
                fontSize: 16,
                fontWeight: 700,
                color: color.white,
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              See your exact numbers
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: "#FFFFFFCC",
                textAlign: "center",
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              Use the WIY fee calculator to run the math on your specific net
              worth — and see exactly what you would save over 30 years.
            </Text>
            <View
              style={{
                backgroundColor: color.secondary,
                borderRadius: 6,
                paddingVertical: 12,
                paddingHorizontal: 20,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: color.primary,
                  textAlign: "center",
                }}
              >
                wealthinyourself.com/pricing
              </Text>
            </View>
          </View>
        </Link>

        <Link src="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call">
          <View style={[s.cardAccent, { marginTop: 16, padding: 24 }]}>
            <Text
              style={{
                fontFamily: "Playfair Display",
                fontSize: 16,
                fontWeight: 700,
                color: color.white,
                textAlign: "center",
                marginBottom: 12,
              }}
            >
              Talk to Josh
            </Text>
            <Text
              style={{
                fontSize: 11,
                color: "#FFFFFFCC",
                textAlign: "center",
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              Book a free 15-minute intro call to see if flat-fee planning
              is the right fit for your situation.
            </Text>
            <View
              style={{
                backgroundColor: color.secondary,
                borderRadius: 6,
                paddingVertical: 12,
                paddingHorizontal: 20,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: color.primary,
                  textAlign: "center",
                }}
              >
                Book a 15-minute intro call →
              </Text>
            </View>
          </View>
        </Link>

        <Footer pageNumber={11} />
      </Page>

      {/* ========== PAGE 11 — ABOUT ========== */}
      <Page size="LETTER" style={s.page}>
        <Text style={s.h2}>About Josh &amp; Wealth In Yourself</Text>
        <View style={s.goldDivider} />

        <View style={s.section}>
          <Text style={s.body}>
            Joshua St. Laurent is a CERTIFIED FINANCIAL PLANNER™ professional,
            Certified Financial Therapist™, Accredited Personal Financial
            Coach®, Associate Certified Coach, and holds a Master of Science
            in Financial Planning. He founded Wealth In Yourself to deliver
            institutional-quality financial planning at a flat fee — because
            Josh believes the way advisors get paid should never compromise the
            advice clients receive.
          </Text>
        </View>

        <View style={s.section}>
          <Text style={s.h3}>The FIAT Philosophy</Text>
          <Text style={s.body}>
            FIAT — Fiduciary In All Things. WIY is built on a single principle:
            fiduciary in all things. One flat fee. No AUM. No commissions. No
            product sales. The only revenue is the planning fee — which means
            the only incentive Josh has is to give you the best advice possible,
            regardless of where your money ends up.
          </Text>
        </View>

        <View style={s.card}>
          <Text style={[s.h3, { marginBottom: 12 }]}>Contact</Text>
          <Text style={[s.body, { marginBottom: 4 }]}>
            josh@wealthinyourself.com
          </Text>
          <Text style={[s.body, { marginBottom: 4 }]}>
            wealthinyourself.com
          </Text>
          <Text style={s.body}>
            Wealth In Yourself LLC — Registered Investment Adviser,
            State of Nevada
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 8,
              color: color.muted,
              lineHeight: 1.6,
            }}
          >
            This document is educational content produced by Wealth In Yourself
            LLC. It is not financial advice, and it does not constitute an offer
            to provide investment advisory services. All projections and
            illustrations use hypothetical assumptions and are not guarantees of
            future results. Your situation is unique. Consult a qualified
            fiduciary financial advisor before making financial decisions.
            Past performance is not indicative of future results. Fee
            comparisons assume a 1% AUM advisory fee and the WIY flat-fee
            schedule as of 2026. Actual fees may vary. Wealth In Yourself LLC
            is a Registered Investment Adviser with the State of Nevada.
          </Text>
        </View>

        <Footer pageNumber={12} />
      </Page>
    </Document>
  );
}
