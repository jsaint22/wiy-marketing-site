import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import AumMathPDF from "@/lib/pdf/aum-math";
import { appendSubscriber } from "@/lib/subscribers";

async function createGhlContact(email: string) {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!token || !locationId) return;

  await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify({
      email,
      locationId,
      tags: ["aum-math-download"],
      source: "AUM Math PDF Download",
    }),
  });
}

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // Generate PDF
    const pdfBuffer = await renderToBuffer(
      React.createElement(AumMathPDF)
    );

    // Send email with PDF attached
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Josh at WIY <josh@go.wealthinyourself.com>",
      to: email,
      subject:
        "Your AUM Math (and what your advisor probably won't show you)",
      text: `Hey,

Thanks for requesting the AUM Math. It's attached — and the numbers are real.

At $5M over 20 years, AUM fees can cost you $2.37M more in portfolio value than a flat-fee structure. At 30 years, that gap grows to $6.99M. The PDF breaks it down at $1M, $5M, $10M, and $25M so you can see where you fall.

If you want to see your specific numbers, use the calculator at wealthinyourself.com/pricing.

If you want to talk about what flat-fee planning could look like for you, here's my calendar: https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call

Josh`,
      attachments: [
        {
          filename: "aum-math.pdf",
          content: Buffer.from(pdfBuffer),
        },
      ],
    });

    if (error) {
      console.error("[Subscribe] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    // Log subscriber for future reference
    await appendSubscriber(email);

    // Create GHL contact with aum-math-download tag (fire-and-forget)
    createGhlContact(email).catch((err) =>
      console.error("[Subscribe] GHL contact creation failed:", err)
    );

    return NextResponse.json({
      success: true,
      message: "Sent! Check your inbox for The AUM Math.",
    });
  } catch (err) {
    console.error("[Subscribe] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
