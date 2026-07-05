"use client";

import { useState } from "react";
import { trackLeadCapture } from "@/lib/analytics";

const SUBSTACK_URL = "https://joshstlaurent.substack.com/subscribe";

/**
 * Compliance-cleared to publish 2026-07-04 (CLEAR WITH CHANGES — Reg S-P
 * privacy notice added to opt-in #1's form below). Backs the /three-questions
 * route. Open NV exam CIC26-050.
 *
 * Two SEPARATED, optional, post-value opt-ins per
 * references/content-factory-audit-and-plan-2026-07-04.md §4b:
 *   1. "Email me my copy" — transactional only, POSTs to
 *      /api/three-questions/email-copy (no GHL, no nurture drip).
 *   2. "Josh's occasional notes" — a plain link out to the existing
 *      Substack newsletter. Unchecked, independent of #1. Substack's own
 *      platform mechanics (unsubscribe, physical address) handle CAN-SPAM,
 *      so no new nurture infra is built here.
 * Neither opt-in gates the worksheet itself — the worksheet is free and
 * ungated (see the direct PDF download link elsewhere on the page).
 */
export default function ThreeQuestionsCapture() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/three-questions/email-copy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, website }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        trackLeadCapture("three-questions-email-copy");
        setMessage(data.message || "Sent! Check your inbox.");
        setEmail("");
        setFirstName("");
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
    <div className="grid gap-6 sm:grid-cols-2">
      {/* Opt-in #1 — transactional, email me my copy */}
      <div className="bg-neutral-bg rounded-xl p-6 sm:p-8 border border-neutral-dark/5">
        <h3 className="text-lg font-bold text-primary">
          Want it emailed to you instead?
        </h3>
        <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
          Optional — the PDF above is already yours, free, no email required.
          This just sends the same file to your inbox.
        </p>

        {status === "success" ? (
          <p className="mt-4 text-sm font-semibold text-primary">{message}</p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
            {/* Honeypot — hidden from real users */}
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              name="website"
              autoComplete="off"
              tabIndex={-1}
              className="hidden"
              aria-hidden="true"
            />
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name (optional)"
              aria-label="First name"
              disabled={status === "loading"}
              className="px-4 py-2.5 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-60 text-sm"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                required
                disabled={status === "loading"}
                className="flex-1 px-4 py-2.5 rounded-lg bg-white text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-60 text-sm"
              />
              <button
                type="submit"
                disabled={!email || status === "loading"}
                className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60 text-sm whitespace-nowrap"
              >
                {status === "loading" ? "Sending..." : "Email me the PDF"}
              </button>
            </div>
            {status === "error" && (
              <p className="text-warning text-xs">{message}</p>
            )}
            <p className="text-neutral-dark/50 text-xs leading-relaxed">
              One email, one PDF. No newsletter, no drip sequence — that&apos;s
              the separate option to the right, if you want it.
            </p>
            <p className="text-neutral-dark/50 text-xs leading-relaxed">
              By submitting this form, you agree to our{" "}
              <a
                href="https://wealthinyourself.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Privacy Policy
              </a>
              . This is a one-time email — no newsletter, no nurture sequence.
              This is not financial advice.
            </p>
          </form>
        )}
      </div>

      {/* Opt-in #2 — fully separate, unchecked, existing newsletter */}
      <div className="bg-neutral-bg rounded-xl p-6 sm:p-8 border border-neutral-dark/5">
        <h3 className="text-lg font-bold text-primary">
          Josh&apos;s occasional notes
        </h3>
        <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
          A separate, unrelated thing. One idea about money, planning, or the
          advisory industry — written by Josh, not a marketing team. Not
          required to get the worksheet.
        </p>
        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2.5 bg-white border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors text-sm"
        >
          Subscribe on Substack
        </a>
        <p className="mt-3 text-neutral-dark/50 text-xs">
          Free. Unsubscribe anytime, right from Substack.
        </p>
      </div>
    </div>
  );
}
