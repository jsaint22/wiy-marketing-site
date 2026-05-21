import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";
import { randomUUID } from "node:crypto";
import { appendSubscriber } from "@/lib/subscribers";
import {
  emitLeadMagnetWebhook,
  type LeadMagnetSlug,
} from "@/lib/lead-magnet-webhook";

export const dynamic = "force-dynamic";

/**
 * Privacy Policy consent version stamped onto every webhook emit.
 *
 * Mirrors the "Effective" / "Last updated" date displayed on the published
 * Privacy Policy page (src/app/privacy-policy/page.tsx). Bump in lockstep
 * with any Privacy Policy amendment so the receiver-side audit row records
 * which policy version the prospect consented to.
 *
 * Locked 2026-05-20 per the Privacy Policy §14 amendment + booking-gate
 * supersession (op-debt AI-CONSENT-BOOKING-GATE-ENFORCEMENT-1).
 */
const PRIVACY_POLICY_CONSENT_VERSION = "2026-05-20";

const LEAD_MAGNETS: Record<
  string,
  {
    subject: string;
    tag: string;
    description: string;
    filename: string;
  }
> = {
  "re-investor-checklist": {
    subject: "Your Real Estate Investor's Tax Strategy Checklist",
    tag: "re-investor-checklist-download",
    description:
      "The Real Estate Investor's Tax Strategy Checklist — 16 questions your advisory team should be answering about 1031 exchanges, cost segregation, entity structure, depreciation recapture, QBI, and more.",
    filename: "RE-Investor-Tax-Strategy-Checklist-WIY.pdf",
  },
  "business-owner-roadmap": {
    subject: "Your Entrepreneur's Wealth Extraction Roadmap",
    tag: "business-owner-roadmap-download",
    description:
      "The Entrepreneur's Wealth Extraction Roadmap — covering valuation, entity structure, QSBS, cash flow modeling, succession planning, and the full advisory team you need before you exit.",
    filename: "Entrepreneurs-Wealth-Extraction-Roadmap-WIY.pdf",
  },
  "w2-escape-plan": {
    subject: "Your W-2 Escape Plan Checklist",
    tag: "w2-escape-plan-download",
    description:
      "The W-2 Escape Plan — a financial readiness checklist covering runway math, health insurance, entity setup, retirement accounts, income replacement, and the timeline to go independent.",
    filename: "W2-Escape-Plan-Financial-Checklist-WIY.pdf",
  },
};

export async function POST(request: NextRequest) {
  try {
    const {
      email,
      firstName,
      lastName,
      magnet,
      privacyPolicyConsent,
    } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!firstName || typeof firstName !== "string") {
      return NextResponse.json(
        { error: "First name is required." },
        { status: 400 }
      );
    }

    // SERVER-SIDE Privacy Policy + SMS consent gate.
    // Per Josh 2026-05-20 booking-gate lock + amended Privacy Policy: client-
    // side validation is insufficient — must re-verify server-side per
    // ai-consent-booking-gate-LOCKED-2026-05-19.md §3 ("server-side check
    // that the consent flag is true on submission").
    if (privacyPolicyConsent !== true) {
      return NextResponse.json(
        {
          error:
            "Privacy Policy and SMS consent acceptance is required to download.",
        },
        { status: 400 }
      );
    }

    const config = LEAD_MAGNETS[magnet];
    if (!config) {
      return NextResponse.json(
        { error: "Unknown lead magnet." },
        { status: 400 }
      );
    }

    // Load pre-generated static PDF (verified by test suite, not generated at runtime)
    const pdfPath = join(process.cwd(), "public", "pdfs", config.filename);
    const pdfBuffer = readFileSync(pdfPath);

    // Send email with PDF attached
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: emailError } = await resend.emails.send({
      from: process.env.LEAD_MAGNET_FROM ?? "Josh at WIY <josh@wealthinyourself.com>",
      to: email,
      subject: config.subject,
      text: `Hey ${firstName},

Thanks for requesting ${config.description}

The checklist is attached to this email. Take your time with it — these aren't quick wins, they're the conversations that separate good planning from great planning.

If you want to talk about how any of these apply to your specific situation, here's my calendar: https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call

Josh
Wealth In Yourself
josh@wealthinyourself.com

---
This is educational content and is not tax, legal, or investment advice. Discuss all items with your qualified advisory team before taking action.`,
      attachments: [
        {
          filename: config.filename,
          content: pdfBuffer,
        },
      ],
    });

    if (emailError) {
      console.error("[LeadMagnet] Resend error:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    // Log subscriber
    await appendSubscriber(email, magnet);

    // Create GHL contact with tag (fire-and-forget — don't block response)
    createGhlContact(email, firstName, config.tag).catch((err) =>
      console.error("[LeadMagnet] GHL contact creation failed:", err)
    );

    // Fire-and-forget HMAC-signed POST to ops-portal webhook receiver.
    // Powers Spec 1 (lead-magnet Inngest nurture). The receiver dedupes on
    // external_request_id; emitter is fire-and-forget per spec §1 so a
    // receiver outage does NOT block the user's PDF download (which already
    // succeeded above).
    const sourceIp = extractSourceIp(request);
    const sourceUserAgent = request.headers.get("user-agent") ?? "";
    const consentTimestamp = new Date().toISOString();
    const externalRequestId = randomUUID();

    emitLeadMagnetWebhook({
      email,
      first_name: typeof firstName === "string" ? firstName : undefined,
      last_name: typeof lastName === "string" && lastName ? lastName : undefined,
      magnet_slug: magnet as LeadMagnetSlug,
      download_source: "wiy-marketing-site",
      privacy_policy_consent_version: PRIVACY_POLICY_CONSENT_VERSION,
      privacy_policy_consent_timestamp: consentTimestamp,
      source_ip: sourceIp,
      source_user_agent: sourceUserAgent,
      external_request_id: externalRequestId,
    }).catch((err) =>
      // Belt-and-suspenders — emitLeadMagnetWebhook already catches internally,
      // but a defensive .catch ensures any unexpected sync-thrown error never
      // bubbles to block the user's response.
      console.error("[LeadMagnet] ops-portal emit threw unexpectedly:", err)
    );

    return NextResponse.json({
      success: true,
      message: "Sent! Check your inbox.",
    });
  } catch (err) {
    console.error("[LeadMagnet] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

/**
 * Best-effort source IP extraction. Vercel sets `x-forwarded-for`; fall back
 * to `x-real-ip` then "unknown". The receiver records this in the
 * lead_magnet_downloaded audit row for Books-and-Records (ARCH-6).
 */
function extractSourceIp(request: NextRequest): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    // x-forwarded-for can be a comma-separated chain; first entry is the client.
    return xff.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Create or update a GHL contact and add a lead magnet tag.
 * Uses the WIY PIT token. Fire-and-forget — failures are logged, not thrown.
 */
async function createGhlContact(
  email: string,
  firstName: string,
  tag: string
) {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) {
    console.warn("[GHL] GHL_API_TOKEN or GHL_LOCATION_ID not set — skipping contact creation");
    return;
  }

  const res = await fetch(
    "https://services.leadconnectorhq.com/contacts/upsert",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        firstName,
        email,
        locationId,
        tags: [tag],
        source: "Website Lead Magnet",
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error(`[GHL] Contact upsert failed (${res.status}):`, text);
  }
}
