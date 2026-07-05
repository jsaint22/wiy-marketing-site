import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { readFileSync } from "fs";
import { join } from "path";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * DRAFT — compliance review required before publish (Play-4 funnel plumbing,
 * open NV exam CIC26-050). This route backs the /three-questions dark route,
 * which is not linked or indexed. Do not wire this endpoint to any
 * publicly-reachable surface until Josh + compliance clear the page.
 *
 * Per references/content-factory-audit-and-plan-2026-07-04.md §4b, the
 * Three Questions worksheet is a FREE, UNGATED download — this endpoint is
 * the separate, optional "email me my copy" opt-in (opt-in #1). It is
 * intentionally TRANSACTIONAL ONLY:
 *   - Sends the worksheet PDF via Resend. Nothing else.
 *   - Does NOT create/tag a GHL contact.
 *   - Does NOT fire the ops-portal lead-magnet webhook (which would
 *     auto-enroll the contact in the Inngest Day 3/7/14 nurture drip built
 *     for the GATED lead magnets). Bundling that drip into a single
 *     "email me a copy" click would collapse the two-separated-opt-in design
 *     the CMO/Compliance/Board Room /consult approved (78/78/82%,
 *     Josh 2026-07-04) back into one implicit consent.
 * Opt-in #2 (the newsletter) is a fully separate, unchecked action —
 * the existing NewsletterCTA component linking out to Substack — and is
 * never touched by this route.
 */

export const dynamic = "force-dynamic";

// Same abuse-defense shape as /api/lead-magnet: 5 req / 15 min per IP.
// No-ops if Upstash KV env vars aren't present (e.g. local dev).
const ratelimit =
  process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN
    ? new Ratelimit({
        redis: new Redis({
          url: process.env.KV_REST_API_URL,
          token: process.env.KV_REST_API_TOKEN,
        }),
        limiter: Ratelimit.slidingWindow(5, "15 m"),
        analytics: false,
        prefix: "three-questions-email-copy",
      })
    : null;

function getClientIp(request: NextRequest): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  const real = request.headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;

const PDF_FILENAME = "The-Three-Questions-Worksheet-WIY.pdf";

export async function POST(request: NextRequest) {
  try {
    if (ratelimit) {
      const ip = getClientIp(request);
      try {
        const { success } = await ratelimit.limit(ip);
        if (!success) {
          return NextResponse.json(
            { error: "Too many requests. Please try again later." },
            { status: 429 }
          );
        }
      } catch (e) {
        console.error("[three-questions/email-copy] rate-limit check failed:", e);
      }
    }

    const body = await request.json();
    const { email: rawEmail, firstName: rawFirstName, website } = body;

    // Honeypot — hidden field legitimate humans never fill.
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const email =
      typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";
    const firstName =
      typeof rawFirstName === "string" && rawFirstName.trim()
        ? rawFirstName.trim()
        : "there";

    if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    const pdfPath = join(process.cwd(), "public", "pdfs", PDF_FILENAME);
    const pdfBuffer = readFileSync(pdfPath);

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.error(
        "[three-questions/email-copy] RESEND_API_KEY not set — skipping send. Returning success for downstream validation only; no email delivered."
      );
      return NextResponse.json({
        success: true,
        message: "Sent! Check your inbox.",
      });
    }

    const safeFirstName = firstName
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const resend = new Resend(resendKey);
    const { error: emailError } = await resend.emails.send({
      from:
        process.env.LEAD_MAGNET_FROM ?? "Josh at WIY <josh@wealthinyourself.com>",
      to: email,
      subject: "Your copy of The Three Questions",
      text: `Hey ${firstName},

Here's your copy of The Three Questions worksheet — attached as a PDF.

Twenty quiet minutes, three questions, no advisor in the room. Find an hour where no one needs you, and write in real sentences.

If you want to talk through what came up, here's my calendar: https://cal.com/jsaint/intro-call?utm_source=three_questions_worksheet&utm_medium=lead_magnet&utm_campaign=play4_funnel

Josh
Wealth In Yourself
josh@wealthinyourself.com

---
This worksheet is a self-reflection exercise, not financial, tax, or legal advice, and does not describe or recommend any specific investment strategy or outcome.`,
      html: `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1f2a2e;line-height:1.6;font-size:15px;">
  <p>Hey ${safeFirstName},</p>
  <p>Here&#39;s your copy of The Three Questions worksheet — attached as a PDF.</p>
  <p>Twenty quiet minutes, three questions, no advisor in the room. Find an hour where no one needs you, and write in real sentences.</p>
  <p>If you want to talk through what came up:</p>
  <p><a href="https://cal.com/jsaint/intro-call?utm_source=three_questions_worksheet&utm_medium=lead_magnet&utm_campaign=play4_funnel" style="display:inline-block;background:#1a4d5c;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:6px;font-weight:600;">Book a 15-minute call &rarr;</a></p>
  <p>Josh<br>Wealth In Yourself<br>josh@wealthinyourself.com</p>
  <hr style="border:none;border-top:1px solid #dfe6e7;margin:18px 0;">
  <p style="font-size:12px;color:#5d6b70;">This worksheet is a self-reflection exercise, not financial, tax, or legal advice, and does not describe or recommend any specific investment strategy or outcome.</p>
</div>`,
      attachments: [
        {
          filename: PDF_FILENAME,
          content: pdfBuffer,
        },
      ],
    });

    if (emailError) {
      console.error("[three-questions/email-copy] Resend error:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Sent! Check your inbox.",
    });
  } catch (err) {
    console.error("[three-questions/email-copy] Error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
