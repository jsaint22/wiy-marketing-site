"use client";

import { useState } from "react";
import { trackLeadCapture } from "@/lib/analytics";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        trackLeadCapture("aum_math");
        setMessage(
          data.message || "Sent! Check your inbox for The AUM Math."
        );
        setEmail("");
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
          What AUM fees actually cost you.
        </h2>
        <p className="mt-2 text-lg text-secondary font-semibold">(Free PDF)</p>
        <p className="mt-4 text-white/80 text-lg leading-relaxed">
          A 1% AUM fee looks small. Over 20 years it compounds into
          six figures — sometimes seven. This PDF shows you the exact math.
        </p>

        {status === "success" ? (
          <div className="mt-8 bg-white/10 rounded-xl p-6 sm:p-8 border border-white/10">
            <p className="text-white font-semibold text-lg">{message}</p>
            <p className="mt-3 text-white/70 text-sm">
              It should arrive within a minute. Check spam if you don&apos;t see it.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/80 text-sm">
                Want to see what flat-fee planning looks like for your net worth?
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
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-center justify-center">
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
                disabled={status === "loading"}
                className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading"
                  ? "Generating your report..."
                  : "Show me the math"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 text-warning text-sm">{message}</p>
            )}
            <p className="mt-4 text-white/50 text-xs">
              We don&apos;t share your email. Unsubscribe anytime. This is not
              financial advice.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
