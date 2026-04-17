import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // TODO: Wire to Resend or equivalent email service
    // For now, log the email and return success
    console.log(`[AUM Teardown Request] ${email} at ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: "Your AUM Teardown is on the way. Josh will send the full report within 48 hours.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
