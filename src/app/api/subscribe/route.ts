import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import AumTeardownPDF from "@/lib/pdf/aum-teardown";
import { appendSubscriber } from "@/lib/subscribers";

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
      React.createElement(AumTeardownPDF)
    );

    // Send email with PDF attached
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Josh at WIY <josh@go.wealthinyourself.com>",
      to: email,
      subject:
        "Your AUM Teardown (and the math your advisor probably won't show you)",
      text: `Hey,

Thanks for requesting the AUM Teardown.

The math is in the attached PDF. It shows what 1% of your assets actually costs over 20 and 30 years — at $1M, $5M, $10M, and $25M net worth.

Spoiler: it's more than you think.

If you want to see your specific numbers, use the calculator at wealthinyourself.com/pricing.

If you want to talk about what flat-fee planning could look like for you, here's my calendar: https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call

Josh`,
      attachments: [
        {
          filename: "The-AUM-Teardown-WIY.pdf",
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

    return NextResponse.json({
      success: true,
      message: "Sent! Check your inbox for The AUM Teardown.",
    });
  } catch (err) {
    console.error("[Subscribe] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
