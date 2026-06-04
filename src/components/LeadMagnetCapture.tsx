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
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const canSubmit =
    email.length > 0 && firstName.length > 0 && status !== "loading";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !firstName) return;

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
                href="https://cal.com/jsaint/intro-call"
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
            </div>
            {status === "error" && (
              <p className="mt-3 text-warning text-sm">{message}</p>
            )}
            {/*
              Privacy Policy notice — CCPA §1798.100(b) notice-at-collection
              pattern. Compliance Officer attestation 2026-05-22 confirmed
              lead-magnet capture is OUT of scope of the 2026-05-20
              booking-gate LOCK; SMS consent remains scoped to booking
              surfaces only. See compliance-log.md 2026-05-22 entry
              "Lead-magnet capture forms — SCOPE CLARIFICATION."
            */}
            <p className="mt-4 text-white/70 text-xs leading-relaxed">
              By submitting this form, you agree to our{" "}
              <a
                href="https://wealthinyourself.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-secondary hover:text-white"
              >
                Privacy Policy
              </a>
              . You&apos;ll receive the requested resource and occasional emails
              from Josh. Unsubscribe anytime. This is not financial advice.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
