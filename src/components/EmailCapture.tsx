"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
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
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="bg-primary py-10 sm:py-14">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          What AUM fees actually cost you.
        </h2>
        <p className="mt-2 text-lg text-secondary font-semibold">(Free PDF.)</p>
        <p className="mt-4 text-white/80 text-lg leading-relaxed">
          The AUM Teardown shows exactly how 1% per year compounds into $1M+ over
          a career. No email bait. Just the math.
        </p>

        {status === "success" ? (
          <div className="mt-8 bg-white/10 rounded-xl p-6">
            <p className="text-white font-semibold text-lg">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg text-neutral-dark placeholder:text-neutral-dark/40 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === "loading" ? "Sending..." : "Send me the teardown"}
              </button>
            </div>
            {status === "error" && (
              <p className="mt-3 text-warning text-sm">{message}</p>
            )}
            <p className="mt-4 text-white/50 text-xs">
              We don&apos;t share your email. Unsubscribe anytime. This is not financial advice.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
