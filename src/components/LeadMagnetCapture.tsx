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
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !firstName) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName, magnet }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        trackLeadCapture(magnet);
        setMessage(data.message || successMessage);
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
          <div className="mt-8 bg-white/10 rounded-xl p-6">
            <p className="text-white font-semibold text-lg">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex flex-col gap-3 max-w-md mx-auto">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                aria-label="First name"
                required
                disabled={status === "loading"}
                className="email-input px-4 py-3 rounded-lg bg-[#F5F5F0] text-gray-900 placeholder:text-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-60"
                style={{ backgroundColor: "#FFFFFF", color: "#1A1A1A" }}
              />
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
                  disabled={status === "loading"}
                  className="px-6 py-3 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
                >
                  {status === "loading" ? "Sending..." : buttonText}
                </button>
              </div>
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
