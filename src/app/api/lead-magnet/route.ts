import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { appendSubscriber } from "@/lib/subscribers";
import {
  REInvestorChecklistPDF,
  BusinessOwnerRoadmapPDF,
  W2EscapePlanPDF,
} from "@/lib/pdf/lead-magnet-pdf";

export const dynamic = "force-dynamic";

const LEAD_MAGNETS: Record<
  string,
  {
    subject: string;
    tag: string;
    description: string;
    filename: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pdf: () => React.ReactElement<any>;
  }
> = {
  "re-investor-checklist": {
    subject: "Your Real Estate Investor's Tax Strategy Checklist",
    tag: "re-investor-checklist-download",
    description:
      "The Real Estate Investor's Tax Strategy Checklist — 16 questions your advisory team should be answering about 1031 exchanges, cost segregation, entity structure, depreciation recapture, QBI, and more.",
    filename: "RE-Investor-Tax-Strategy-Checklist-WIY.pdf",
    pdf: () => React.createElement(REInvestorChecklistPDF),
  },
  "business-owner-roadmap": {
    subject: "Your Entrepreneur's Wealth Extraction Roadmap",
    tag: "business-owner-roadmap-download",
    description:
      "The Entrepreneur's Wealth Extraction Roadmap — covering valuation, entity structure, QSBS, cash flow modeling, succession planning, and the full advisory team you need before you exit.",
    filename: "Entrepreneurs-Wealth-Extraction-Roadmap-WIY.pdf",
    pdf: () => React.createElement(BusinessOwnerRoadmapPDF),
  },
  "w2-escape-plan": {
    subject: "Your W-2 Escape Plan Checklist",
    tag: "w2-escape-plan-download",
    description:
      "The W-2 Escape Plan — a financial readiness checklist covering runway math, health insurance, entity setup, retirement accounts, income replacement, and the timeline to go independent.",
    filename: "W2-Escape-Plan-Financial-Checklist-WIY.pdf",
    pdf: () => React.createElement(W2EscapePlanPDF),
  },
};

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, magnet } = await request.json();

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

    const config = LEAD_MAGNETS[magnet];
    if (!config) {
      return NextResponse.json(
        { error: "Unknown lead magnet." },
        { status: 400 }
      );
    }

    // Generate PDF
    const pdfBuffer = await renderToBuffer(config.pdf());

    // Send email with PDF attached
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error: emailError } = await resend.emails.send({
      from: "Josh at WIY <josh@go.wealthinyourself.com>",
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
          content: Buffer.from(pdfBuffer),
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
