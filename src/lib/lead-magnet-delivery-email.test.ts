import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  DELIVERY_COPY,
  DELIVERY_FROM,
  DELIVERY_REPLY_TO,
  INTRO_CALL_URL,
  LEAD_MAGNET_EMAIL_DISCLAIMER,
  deliveryTemplateText,
  renderDeliveryEmail,
  type DeliveryMagnetSlug,
} from "./lead-magnet-delivery-email";

const SLUGS = Object.keys(DELIVERY_COPY) as DeliveryMagnetSlug[];

// sha256 of the disclaimer block in wiy-operating-system
// content/lead-magnets/nurture/*.md (identical across all 12 files, 2026-09-15).
const CANONICAL_DISCLAIMER_SHA256 =
  "ce4ebbb04aab2624d6bf3683a21b6dbadbb6cdf3d012bd067cbfc66de2be7080";

/** Subject + body above the disclaimer: the part Category 1.b(iv) limits. */
function limitedContent(slug: DeliveryMagnetSlug): string {
  const text = deliveryTemplateText(slug);
  return `${DELIVERY_COPY[slug].subject}\n${text.slice(0, text.indexOf("\n\n---\n\n"))}`;
}

describe("lead-magnet delivery email (SR4 Category 1.b)", () => {
  it("uses the canonical lead-magnet disclaimer, byte for byte", () => {
    const hash = createHash("sha256").update(LEAD_MAGNET_EMAIL_DISCLAIMER).digest("hex");
    expect(hash).toBe(CANONICAL_DISCLAIMER_SHA256);
  });

  it("sends from josh@ with replies to josh@", () => {
    expect(DELIVERY_FROM).toContain("<josh@wealthinyourself.com>");
    expect(DELIVERY_REPLY_TO).toBe("josh@wealthinyourself.com");
  });

  for (const slug of SLUGS) {
    describe(slug, () => {
      it("carries no dollar figures, tax terms, fee language, 'free', urgency or em-dashes", () => {
        const content = limitedContent(slug);
        expect(content).not.toMatch(/\$/);
        expect(content).not.toMatch(/[—–]|--/);
        expect(content).not.toMatch(
          /1031|cost seg|depreciation|recapture|QBI|QSBS|199A|1202|IRC|section \d|bonus|deduction|exclusion/i
        );
        expect(content).not.toMatch(/\bfees?\b|flat|minimum|\bfree\b|complimentary|no sales pitch|no pitch/i);
        expect(content).not.toMatch(/great planning|quick wins|guarantee|\bsave|today|deadline|hurry/i);
        expect(content).not.toMatch(/\bmyself\b|personally/i);
        expect(content).not.toMatch(/%/);
      });

      it("includes the series line, reply-to-stop line, calendar link and disclaimer", () => {
        const { text, html, subject } = renderDeliveryEmail(slug, "Pat");
        expect(subject).toBe(DELIVERY_COPY[slug].subject);
        expect(text.startsWith("Hi Pat,\n\n")).toBe(true);
        expect(text).toContain("It's attached to this email");
        expect(text).toContain("This is the first of a few emails that go out on a schedule");
        expect(text).toContain('Reply with anything, even "stop," and the rest won\'t send.');
        expect(text).toContain(`Schedule a 15-minute call: ${INTRO_CALL_URL}`);
        expect(text.endsWith(LEAD_MAGNET_EMAIL_DISCLAIMER)).toBe(true);
        expect(html).toContain(`<a href="${INTRO_CALL_URL}" style="color:#1a4d5c;">Schedule a 15-minute call</a>`);
        expect(html).toContain("195 Highway 50 STE 205 | Zephyr Cove, NV 89448");
      });

      it("renders the link as an inline text link, not a button", () => {
        const { html } = renderDeliveryEmail(slug, "Pat");
        expect(html).not.toMatch(/display:\s*inline-block|padding:\s*12px|border-radius|→/);
      });

      it("escapes the first name in HTML and inserts it literally in text", () => {
        const { text, html } = renderDeliveryEmail(slug, '<b>$&"</b>');
        expect(html).toContain("Hi &lt;b&gt;$&amp;&quot;&lt;/b&gt;,");
        expect(text.startsWith('Hi <b>$&"</b>,')).toBe(true);
      });
    });
  }

  it("does not tell a 5 Questions reader that 'the checklist' is attached", () => {
    expect(deliveryTemplateText("five-questions")).not.toMatch(/checklist/i);
  });
});
