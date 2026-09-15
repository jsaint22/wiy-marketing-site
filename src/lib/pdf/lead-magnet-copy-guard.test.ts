import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

/**
 * Regression guard for the lead-magnet funnel copy cleared 2026-09-15
 * (wiy-operating-system references/nurture-copy-compliance-review-2026-09-15.md
 * F3/F4, Standing Rule 8, NAC 90.32934). Scans the guide PDF sources and the
 * four landing pages, ignoring code comments. A hit means a removed claim
 * came back and needs a new SR8 pass before it ships.
 */
const FILES = [
  "src/lib/pdf/lead-magnet-pdf.tsx",
  "src/lib/pdf/five-questions-pdf.tsx",
  "src/app/5-questions/page.tsx",
  "src/app/re-investor-checklist/page.tsx",
  "src/app/business-owner-roadmap/page.tsx",
  "src/app/w2-escape-plan/page.tsx",
  "src/lib/lead-magnet-page-copy.ts",
];

const BANNED: Array<[string, RegExp]> = [
  ["gift framing of the intro call", /complimentary/i],
  ["fee described as flat", /flat[- ]fee|flat annual fee/i],
  ["no-pitch promise", /no (sales )?pitch/i],
  ["client-experience claim", /(investors|owners|clients|people) we work with/i],
  ["unsubstantiated dollar outcome", /\$50K|\$200K|hundreds of thousands|millions on the table|save your family millions|can be millions/i],
  ["unsubstantiated frequency or outcome", /90% of the stress|20-30%|most (people|investors|owners|real estate investors|underperforming)|many investors underfile/i],
  ["urgency", /too late|don't wait|deadlines that don/i],
  ["'free money'", /free money/i],
  ["unverified cost ranges and thresholds", /\$1,500|\$15,000-30,000|\$12K|~\$50-60K|7-15%|12-18 months|6-month|15% buffer|add 15%|quarter of the balance/i],
  ["imprecise recapture rate", /recaptures depreciation at 25%/i],
  ["superseded bonus depreciation phase-down", /phase-down and how/i],
  ["inaccurate 'single-page' description", /single-page|one-page/i],
  ["em-dash", /—/],
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

describe("lead-magnet funnel copy guard", () => {
  for (const file of FILES) {
    it(`${file} carries none of the removed claims`, () => {
      const text = withoutComments(readFileSync(join(process.cwd(), file), "utf8"));
      const hits = BANNED.filter(([, re]) => re.test(text)).map(([label]) => label);
      expect(hits).toEqual([]);
    });
  }
});
