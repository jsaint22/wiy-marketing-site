import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 15-minute intro call with Joshua St. Laurent, CFP®, CFT-I, APFC®, ACC. Flat-fee fiduciary financial planning from Lake Tahoe, Nevada. No pitch, no pressure.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            15 minutes. No pitch. Just a real conversation.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            You&rsquo;ll talk with Josh directly. If we&rsquo;re not a fit,
            you&rsquo;ll still leave with more clarity than you walked in with.
          </p>
        </div>
      </section>

      {/* Two-column content */}
      <section className="py-10 sm:py-14 bg-neutral-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: What to expect */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                What to expect
              </h2>
              <div className="mt-6 space-y-5">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">You book a time</p>
                    <p className="text-neutral-dark/70 text-sm mt-1">Pick any open slot. Calls are via Zoom or phone &mdash; your choice.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">We talk about your life</p>
                    <p className="text-neutral-dark/70 text-sm mt-1">What you&rsquo;re building, what&rsquo;s working, what isn&rsquo;t. No questionnaires. No pre-work.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-secondary">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">We both decide if it&rsquo;s a fit</p>
                    <p className="text-neutral-dark/70 text-sm mt-1">If it is, we&rsquo;ll walk you through next steps. If it isn&rsquo;t, you&rsquo;ll still leave with clarity you didn&rsquo;t have before.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-bg p-8 sm:p-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                Book your intro call
              </h3>
              <p className="mt-3 text-neutral-dark/70">
                Pick any open slot. 15 minutes, no obligation, no follow-up
                spam.
              </p>
              <a
                href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 w-full sm:w-auto px-10 py-4 bg-secondary text-primary font-semibold text-lg rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Pick a Time
              </a>
              <p className="mt-4 text-xs text-neutral-dark/40">
                Typical response within 1 business day if your preferred time
                isn&rsquo;t available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-dark/70 text-lg">
            Prefer email? Send us a message and we&rsquo;ll respond within one
            business day.
          </p>
          <a
            href="mailto:josh@wealthinyourself.com"
            className="inline-block mt-4 text-primary font-semibold text-lg hover:text-secondary transition-colors"
          >
            josh@wealthinyourself.com
          </a>
          <div className="mt-8 pt-8 border-t border-neutral-bg">
            <p className="text-neutral-dark/50 text-sm">
              195 Highway 50, Suite 205 &middot; Zephyr Cove, NV 89448 &middot; (415) 915-5948
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
