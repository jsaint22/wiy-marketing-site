"use client";

import { useState } from "react";
import { trackLeadCapture } from "@/lib/analytics";

interface LeadMagnetCaptureProps {
  magnet: string;
  headline: string;
  subheadline: string;
  description: string;
  buttonText: string;
  successMessage: string;
}

export default function LeadMagnetCapture({
  magnet,
  headline,
  subheadline,
  description,
  buttonText,
  successMessage,
}: LeadMagnetCaptureProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // Privacy Policy + SMS consent — required, unchecked by default per the
  // 2026-05-20 booking-gate lock supersession (op-debt
  // AI-CONSENT-BOOKING-GATE-ENFORCEMENT-1). Submit button is disabled until
  // checked. Server-side re-verification in
  // src/app/api/lead-magnet/route.ts guards against any DOM bypass.
  const [privacyPolicyConsent, setPrivacyPolicyConsent] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const canSubmit =
    email.length > 0 &&
    firstName.length > 0 &&
    privacyPolicyConsent &&
    status !== "loading";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !firstName || !privacyPolicyConsent) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          magnet,
          privacyPolicyConsent,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        trackLeadCapture(magnet);
        setMessage(data.message || successMessage);
        setEmail("");
        setFirstName("");
        setLastName("");
        setPrivacyPolicyConsent(false);
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage(
        "Something went wrong. Email josh@wealthinyourself.com and we'll send it manually."
      );
    }
  }

  return (
    <section className="bg-primary py-10 sm:py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          {headline}
        </h2>
        <p className="mt-2 text-lg text-secondary font-semibold">
          {subheadline}
        </p>
        <p className="mt-4 text-white/80 text-lg leading-relaxed">
          {description}
        </p>

        {status === "success" ? (
          <div className="mt-8 bg-white/10 rounded-xl p-6 sm:p-8">
            <p className="text-white font-semibold text-lg">{message}</p>
            <p className="mt-3 text-white/70 text-sm">
              It should arrive within a minute. Check spam if you don&apos;t see it.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/80 text-sm">
                Want to talk through how this applies to your situation?
              </p>
              <a
                href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-6 py-2.5 bg-secondary text-primary text-sm font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Book a free 15-min call
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  aria-label="First name"
                  required
                  disabled={status === "loading"}
                  className="email-input flex-1 px-4 py-3 rounded-lg bg-[#F5F5F0] text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-60"
                  style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name (optional)"
                  aria-label="Last name"
                  disabled={status === "loading"}
                  className="email-input flex-1 px-4 py-3 rounded-lg bg-[#F5F5F0] text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-60"
                  style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  required
                  disabled={status === "loading"}
                  className="email-input flex-1 px-4 py-3 rounded-lg bg-[#F5F5F0] text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-60"
                  style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
                />
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
                >
                  {status === "loading" ? "Sending..." : buttonText}
                </button>
              </div>
              {/*
                Privacy Policy + SMS consent gate.

                LOCKED 2026-05-20 — verbatim copy from
                op-debt AI-CONSENT-BOOKING-GATE-ENFORCEMENT-1 (Status update
                2026-05-20) which supersedes the LOCK doc §4 explicit-AI
                language. Required, unchecked by default. Submit button is
                disabled until checked. Standing Rule 8 99% Compliance
                Confidence applies — any edit to this string requires
                Compliance Officer re-attestation.
              */}
              <label className="mt-2 flex items-start gap-3 text-left text-white/80 text-xs sm:text-sm">
                <input
                  type="checkbox"
                  checked={privacyPolicyConsent}
                  onChange={(e) => setPrivacyPolicyConsent(e.target.checked)}
                  required
                  aria-required="true"
                  disabled={status === "loading"}
                  className="mt-1 h-4 w-4 flex-shrink-0 rounded border-white/40 bg-white/10 text-secondary focus:ring-2 focus:ring-secondary focus:ring-offset-0"
                />
                <span>
                  By checking this box, I agree to Wealth In Yourself&apos;s
                  Privacy Policy (
                  <a
                    href="https://wealthinyourself.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-secondary hover:text-white"
                  >
                    https://wealthinyourself.com/privacy-policy
                  </a>
                  ). I also consent to receive text messages from Wealth In
                  Yourself, including appointment reminders, responses to my
                  questions, event announcements, and financial education
                  resources. Message frequency varies. Message and data rates
                  may apply. Text HELP for help or STOP to opt out.
                </span>
              </label>
            </div>
            {status === "error" && (
              <p className="mt-3 text-warning text-sm">{message}</p>
            )}
            <p className="mt-4 text-white/70 text-xs">
              We don&apos;t share your email. Unsubscribe anytime. This is not
              financial advice.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
