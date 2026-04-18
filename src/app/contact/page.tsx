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
            No pitch. No pressure. 15 minutes to see if we&rsquo;re a fit.
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
              <div className="mt-6 space-y-4 text-neutral-dark/80 text-lg leading-relaxed">
                <p>
                  The intro call is a conversation, not a sales pitch. We&rsquo;ll
                  spend 15 minutes talking about your life, your goals, and
                  what&rsquo;s on your mind financially.
                </p>
                <p>
                  We&rsquo;ll cover what&rsquo;s working in your current
                  situation and what isn&rsquo;t. You&rsquo;ll ask questions.
                  We&rsquo;ll ask questions. By the end, we&rsquo;ll both know
                  whether Wealth In Yourself is the right fit.
                </p>
                <p>
                  If it&rsquo;s not, that&rsquo;s fine. You&rsquo;ll still
                  leave with clarity you didn&rsquo;t have before.
                </p>
              </div>
            </div>

            {/* Right: CTA card */}
            <div className="bg-white rounded-2xl shadow-lg border border-neutral-bg p-8 sm:p-10 text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-primary">
                Book your intro call
              </h3>
              <p className="mt-3 text-neutral-dark/70">
                Pick a time that works for you. 15 minutes, no obligation.
              </p>
              <a
                href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 w-full sm:w-auto px-10 py-4 bg-secondary text-primary font-semibold text-lg rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Schedule a Call
              </a>
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
