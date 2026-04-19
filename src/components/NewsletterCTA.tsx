import Link from "next/link";

interface NewsletterCTAProps {
  variant?: "inline" | "section";
}

const SUBSTACK_URL = "https://joshstlaurent.substack.com/subscribe";

export default function NewsletterCTA({ variant = "section" }: NewsletterCTAProps) {
  if (variant === "inline") {
    return (
      <div className="bg-neutral-bg rounded-xl p-6 sm:p-8 border border-neutral-dark/5">
        <h3 className="text-lg font-bold text-primary">
          Get this in your inbox every week
        </h3>
        <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
          One idea about money, planning, or the advisory industry — written by
          Josh, not a marketing team. No spam. Unsubscribe anytime.
        </p>
        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
        >
          Subscribe on Substack
        </a>
      </div>
    );
  }

  return (
    <section className="bg-primary py-10 sm:py-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold text-secondary uppercase tracking-widest mb-3">
          Newsletter
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          One real idea, every week
        </h2>
        <p className="mt-4 text-lg text-white/80 leading-relaxed max-w-xl mx-auto">
          Money, life planning, and what the advisory industry doesn&apos;t want
          you to know. Written by Josh — not a marketing team. No spam. No fluff.
        </p>
        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-8 py-3.5 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
        >
          Subscribe on Substack
        </a>
        <p className="mt-3 text-white/40 text-xs">
          Free. Unsubscribe anytime. Your email stays between us.
        </p>
      </div>
    </section>
  );
}
