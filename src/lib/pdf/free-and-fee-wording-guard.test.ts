import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Regression guard for the copy Josh decided on 2026-09-16 (wiy-operating-system
 * references/compliance-log.md, the three findings logged to op-debt by the
 * 2026-09-15 lead-magnet funnel pass). Two removals:
 *
 * 1. NAC 90.32934(1)(g): the FAQ said the fee "doesn't change whether you have
 *    $1M or $20M," and the Lake Tahoe page said the fee tracks "the complexity
 *    of your financial life, not your portfolio balance." Both contradict the
 *    fee canon in src/lib/fee-canon.ts (a declining percentage of net worth).
 * 2. NAC 90.32934(1)(e): the four guides require an email address, so calling
 *    them "free" describes a conditioned offer. "Free" also came off the intro
 *    call for consistency with Standing Rule 4 Category 1.b(iv), which bars a
 *    "free" representation in the sequences that link to these pages.
 *
 * Deliberately NOT covered: /three-questions (genuinely ungated, no email
 * required) and the newsletter opt-in lines, which are neither a guide nor the
 * call. A hit here means removed wording came back.
 */
const FILES = [
  "src/app/faq/page.tsx",
  "src/app/pricing/page.tsx",
  "src/app/contact/page.tsx",
  "src/app/financial-planner-lake-tahoe/page.tsx",
  "src/app/about/page.tsx",
  "src/app/services/page.tsx",
  "src/app/virtual-family-office/page.tsx",
  "src/components/CTASection.tsx",
  "src/app/5-questions/page.tsx",
  "src/app/re-investor-checklist/page.tsx",
  "src/app/business-owner-roadmap/page.tsx",
  "src/app/w2-escape-plan/page.tsx",
  "src/app/for-business-owners/page.tsx",
  "src/app/for-fire-followers/page.tsx",
  "src/app/for-real-estate-investors/page.tsx",
  "src/app/blog/[slug]/page.tsx",
  "src/components/LeadMagnetCapture.tsx",
  // Added 2026-09-24 with the target-range sweep below.
  "src/app/vs-aum/page.tsx",
  "src/components/FeeCalculator.tsx",
  "public/llms.txt",
];

const BANNED: Array<[string, RegExp]> = [
  ["fee described as independent of net worth", /doesn.t change whether you have/i],
  ["fee described as tracking complexity rather than net worth", /complexity of your financial life, not your portfolio/i],
  ["'free' on a gated guide", /free (pdf|checklist|roadmap|guide|download|resource)/i],
  ["'free' capture headline", /, free\./i],
  ["'Free:' metadata title prefix", /title: "Free:/],
  ["'free' on the intro call", /free (\d+-min|15-minute|intro call)/i],
  ["intro call represented as free", /intro call is free/i],
  ["Getting Acquainted meeting represented as free", /meeting .{0,12}also free/i],

  // Added 2026-09-17 (Josh's call). "No pitch. No pressure." was the third
  // 2026-09-15 op-debt finding: it promises how an advisory interaction will
  // feel, the same class as the "free" and personal-attention language already
  // removed. Taking it out surfaced four more phrasings of the same promise,
  // plus two that restated the "free" claim without using the word — which is
  // why the sweep above missed them.
  ["no-pitch / no-pressure promise", /no pitch|no pressure/i],
  ["'no strings' / 'no hidden fees' absence claim", /no strings|no hidden fees/i],
  ["intro call cost restated without the word 'free'", /doesn.t cost anything|neither does the getting acquainted/i],
  ["'before you spend a dollar'", /before you spend a dollar/i],
  // The SR4 1.b sequences send up to five automated emails, so this promise is
  // no longer true as well as being a promise.
  ["'no follow-up spam'", /no follow-?up spam/i],

  // Added 2026-09-24 (Josh's call). The site said the firm works with households
  // "starting at $500K" and "typically $1M or higher," and llms.txt said
  // "exceptions are not granted." Josh's target is $3M to $30M households, and the
  // filed ADV Part 2A Item 7 (2026-06-26) recommends $1,000,000, negotiable at the
  // firm's discretion. Copy now states the range and the $15,000 minimum fee, and
  // no net-worth floor below the range. Regexes are scoped to net-worth phrasing so
  // the fee schedule ("First $1M") and lead-magnet audience lines stay legal.
  ["sub-range net-worth floor ($1M or higher / or more / $1M+ net worth)", /\$1M(\+ in total net worth|\+ net worth| or higher| or more)/i],
  ["'typically $1M+' fit statement", /typically \$1M\+/i],
  ["$500K client-floor statement", /(starting at|from|with) \$500K in net worth|below \$500K/i],
  ["'exceptions are not granted' (contradicts ADV Item 7 'negotiable')", /exceptions are not granted/i],
];

function withoutComments(source: string): string {
  return source
    .split("\n")
    .filter((line) => {
      const t = line.trim();
      return !(t.startsWith("//") || t.startsWith("/*") || t.startsWith("*") || t.startsWith("{/*"));
    })
    .join("\n");
}

describe("conditioned-'free' and fee-accuracy copy guard", () => {
  for (const file of FILES) {
    it(`${file} carries none of the removed wording`, () => {
      const text = withoutComments(readFileSync(join(process.cwd(), file), "utf8"));
      const hits = BANNED.filter(([, re]) => re.test(text)).map(([label]) => label);
      expect(hits).toEqual([]);
    });
  }
});
