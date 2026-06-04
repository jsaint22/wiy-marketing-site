import type { Metadata } from "next";

import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Book Your Getting Acquainted Call",
  description:
    "Book a 60-minute Getting Acquainted call with Joshua St. Laurent, CFP®, CFT™, APFC®, ACC. We go deeper on what you're building and decide if working together makes sense.",
};

/**
 * Cal.com event-type ID 5717685 · slug `getting-acquainted` · 60 min ·
 * minimumBookingNotice 120 min. Replaces the GHL widget at
 * links.wealthinyourself.com/widget/bookings/getting-acquainted per P2
 * of references/migration-phase-2-4-5-wireframe-brief-2026-06-04.md.
 *
 * Cal.com username confirmed via /v2/event-types/5717685 lookup
 * 2026-06-04: jsaint (Josh St Laurent, userId 2455600). Booking URL is
 * therefore https://cal.com/jsaint/getting-acquainted. Override via
 * NEXT_PUBLIC_CAL_GA_LINK if Josh switches usernames.
 */
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_GA_LINK ?? "jsaint/getting-acquainted";

export default function GetAcquaintedPage() {
  return (
    <>
      <section className="bg-primary py-12 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Pick a time. I&rsquo;ll come prepared.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            60 minutes. We go deeper than the intake. You leave knowing
            whether this is the right fit.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-neutral-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-bg p-3 sm:p-6">
            <CalEmbed calLink={CAL_LINK} namespace="ga-inline" />
          </div>
          <p className="mt-6 text-center text-sm text-neutral-dark/60">
            Calendar not loading?{" "}
            <a
              href={`https://cal.com/${CAL_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-primary hover:text-secondary"
            >
              Open the booking page directly
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
