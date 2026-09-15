/**
 * Lead-magnet delivery email (email 1 of each lead-magnet follow-up series).
 *
 * Rewritten 2026-09-15 as plain fulfilment to meet Standing Rule 4
 * Category 1.b (references/compliance-rules.md) and Standing Rule 8:
 * no dollar figures, no tax-code terms, no service-quality claims, no
 * "free", no em-dashes, no buttons. It carries the scheduled-series line,
 * the reply-to-stop line, and the canonical "this email" disclaimer with
 * the firm's postal address (byte-identical to the footer of the attested
 * lead-magnet nurture files in wiy-operating-system
 * content/lead-magnets/nurture/).
 *
 * Source review: wiy-operating-system
 * references/nurture-copy-compliance-review-2026-09-15.md, finding F1.
 *
 * Any change to a subject, body, link, or the disclaimer is a material
 * change under 1.b(vii) and needs Compliance re-attestation before it ships.
 */

export const INTRO_CALL_URL = "https://cal.com/jsaint/intro-call";
export const INTRO_CALL_LINK_TEXT = "Schedule a 15-minute call";

export const DELIVERY_FROM = "Josh St. Laurent <josh@wealthinyourself.com>";
export const DELIVERY_REPLY_TO = "josh@wealthinyourself.com";

/** Merge token for the recipient's first name (same token the nurture files use). */
export const FIRST_NAME_TOKEN = "{firstName}";

/**
 * Canonical lead-magnet email disclaimer. Must stay byte-identical to the
 * disclaimer block at the bottom of the nurture files. sha256 is pinned in
 * lead-magnet-delivery-email.test.ts.
 */
export const LEAD_MAGNET_EMAIL_DISCLAIMER = `Wealth In Yourself LLC is a registered investment adviser with the State of Nevada. Registration does not imply a certain level of skill or training.

This material is for informational purposes only. Nothing in this email or related communications constitutes personalized investment advice, a recommendation to buy or sell any security, or an offer to provide advisory services. Advisory services are provided pursuant to a written agreement.

Past results, when referenced, are not indicative of future outcomes. All investment strategies involve risk of loss. The strategies and approaches described are illustrative; the specific work, scope, and any quantitative analysis for your engagement is provided in your written advisory agreement after engagement.

A copy of our Form ADV Part 2A (firm brochure) is available upon request by emailing josh@wealthinyourself.com or by visiting our regulatory filing at adviserinfo.sec.gov.

Wealth In Yourself LLC | 195 Highway 50 STE 205 | Zephyr Cove, NV 89448`;

export type DeliveryMagnetSlug =
  | "re-investor-checklist"
  | "business-owner-roadmap"
  | "w2-escape-plan"
  | "five-questions";

type DeliveryCopy = {
  subject: string;
  /** Opening line naming what's attached. */
  opening: string;
  /** One line on how to use it, taken from the guide's own instructions. */
  usage: string;
};

export const DELIVERY_COPY: Record<DeliveryMagnetSlug, DeliveryCopy> = {
  "re-investor-checklist": {
    subject: "Your Real Estate Investor's Tax Strategy Checklist",
    opening:
      "Here's the Real Estate Investor's Tax Strategy Checklist you asked for. It's attached to this email as a PDF.",
    usage:
      "Check each box you can answer \"yes\" to. The boxes you can't check are the questions to bring to your CPA and the rest of your team.",
  },
  "business-owner-roadmap": {
    subject: "Your Wealth Extraction Roadmap",
    opening:
      "Here's the Wealth Extraction Roadmap you asked for. It's attached to this email as a PDF.",
    usage:
      "Work through it with your CPA and anyone else who'd be part of a sale. The questions you can't answer yet are the ones to start with.",
  },
  "w2-escape-plan": {
    subject: "Your W-2 Escape Plan",
    opening:
      "Here's the W-2 Escape Plan you asked for. It's attached to this email as a PDF.",
    usage:
      "Go through it before you pick a date to give notice. The boxes you can't check yet are your to-do list.",
  },
  "five-questions": {
    subject: "Your 5 Questions PDF",
    opening:
      "Here's the 5 Questions PDF you asked for. It's attached to this email.",
    usage:
      "Use it before your next review meeting, with your current advisor or with anyone else.",
  },
};

const CALENDAR_INTRO = "If you'd like to go through it with me, here's my calendar:";
const SERIES_AND_STOP_LINE =
  'This is the first of a few emails that go out on a schedule after a download. Reply with anything, even "stop," and the rest won\'t send.';
const SIGNATURE_LINES = [
  "Josh St. Laurent, MS, CFP®, CFT™, APFC®, ACC",
  "Wealth In Yourself",
];

/**
 * The locked template text for one magnet, with the literal {firstName}
 * token (no personalization). This is the byte substrate a 1.b(vi) copy
 * lock should hash once Compliance attests it.
 */
export function deliveryTemplateText(slug: DeliveryMagnetSlug): string {
  const c = DELIVERY_COPY[slug];
  return [
    `Hi ${FIRST_NAME_TOKEN},`,
    c.opening,
    c.usage,
    CALENDAR_INTRO,
    `${INTRO_CALL_LINK_TEXT}: ${INTRO_CALL_URL}`,
    SERIES_AND_STOP_LINE,
    "Josh",
    SIGNATURE_LINES.join("\n"),
    "---",
    LEAD_MAGNET_EMAIL_DISCLAIMER,
  ].join("\n\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Render subject, plain-text body, and HTML body for one recipient.
 * The HTML mirrors the text paragraph for paragraph. The booking link is an
 * ordinary inline text link (no button styling).
 */
export function renderDeliveryEmail(
  slug: DeliveryMagnetSlug,
  firstName: string
): { subject: string; text: string; html: string } {
  const c = DELIVERY_COPY[slug];
  const name = firstName.trim();
  // Function replacer so a name containing "$&" etc. is inserted literally.
  const text = deliveryTemplateText(slug).replace(FIRST_NAME_TOKEN, () => name);

  const p = (inner: string) => `<p style="margin:0 0 14px;">${inner}</p>`;
  const disclaimerHtml = LEAD_MAGNET_EMAIL_DISCLAIMER.split("\n\n")
    .map(
      (para) =>
        `<p style="margin:0 0 10px;font-size:12px;color:#5d6b70;">${escapeHtml(para)}</p>`
    )
    .join("\n  ");

  const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1f2a2e;line-height:1.6;font-size:15px;">
  ${p(`Hi ${escapeHtml(name)},`)}
  ${p(escapeHtml(c.opening))}
  ${p(escapeHtml(c.usage))}
  ${p(escapeHtml(CALENDAR_INTRO))}
  ${p(`<a href="${INTRO_CALL_URL}" style="color:#1a4d5c;">${escapeHtml(INTRO_CALL_LINK_TEXT)}</a>`)}
  ${p(escapeHtml(SERIES_AND_STOP_LINE))}
  ${p("Josh")}
  ${p(SIGNATURE_LINES.map(escapeHtml).join("<br>"))}
  <hr style="border:none;border-top:1px solid #dfe6e7;margin:18px 0;">
  ${disclaimerHtml}
</div>`;

  return { subject: c.subject, text, html };
}
