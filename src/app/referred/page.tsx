import type { Metadata } from "next";

import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "You were referred",
  description:
    "Someone you trust suggested we talk. Book a 15-minute intro call with Joshua St. Laurent, CFP®, CFT™, APFC®, ACC.",
  // A referral link is private between the referrer and the person; it has no
  // business in search results.
  robots: { index: false, follow: false },
};

/**
 * /referred — the landing page a referred household actually arrives on.
 *
 * WHY THIS EXISTS. The demand-generation review found four funnel stages with
 * nothing in them, and this was the worst: `/for-partners` is a pitch page
 * aimed at the PARTNER, so a household that a CPA or attorney actually sent
 * had no destination of its own. They landed on marketing written for someone
 * else, and were asked to self-identify as a cold lead — the referrer's
 * endorsement, the most valuable thing in the whole funnel, evaporated at the
 * door.
 *
 * Three things this page does differently from every other entry point:
 *
 *  1. It NAMES THE REFERRER (`?from=Ashley+Quinn`). The single highest-value
 *     signal available, and it costs a query parameter.
 *  2. It SKIPS THE LEAD MAGNET. Someone arriving on a colleague's
 *     recommendation does not need to be convinced to download a checklist.
 *     Sending them through nurture would be slower and faintly insulting.
 *  3. It GOES STRAIGHT TO THE 15-MINUTE INTRO CALL, embedded, no intermediate
 *     click.
 *
 * SOURCE ATTRIBUTION. `?from=` is passed through to Cal.com so the booking
 * carries its origin, which is what lets `client_data.funnel_conversion`
 * report referral conversion separately from cold flow. Without it a referred
 * booking is indistinguishable from an organic one and the highest-converting
 * pipeline in the business stays invisible.
 *
 * COMPLIANCE. The page deliberately makes NO claim about the referrer and
 * quotes nobody. Under NAC 90.32934 a Nevada adviser may not use testimonials
 * at all, and "Ashley Quinn recommends Josh" published on a web page is
 * exactly that. Naming who sent you is a fact about the visit; a statement
 * about the firm's quality would not be. Keep that line — it is the whole
 * reason this page can exist.
 *
 * Next 16: `searchParams` is a Promise and must be awaited (see
 * node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/page.md).
 */
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_INTRO_LINK ?? "jsaint/intro-call";

/** Keep a referrer name display-safe without mangling ordinary punctuation. */
function cleanReferrer(raw: string | string[] | undefined): string | null {
  const value = Array.isArray(raw) ? raw[0] : raw;
  if (!value) return null;
  const trimmed = value.trim().replace(/\s+/g, " ").slice(0, 60);
  // Letters, spaces and the punctuation that appears in real firm and person
  // names — O'Brien, Smith-Jones, "Ashley Quinn CPAs, Ltd."
  if (!/^[\p{L}\p{N} .,'&()-]+$/u.test(trimmed)) return null;
  return trimmed.length > 0 ? trimmed : null;
}

export default async function ReferredPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const referrer = cleanReferrer(params.from);

  return (
    <>
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/60">
            By introduction
          </p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold text-white">
            {referrer ? (
              <>
                {referrer} thought we
                <br className="hidden sm:block" /> should talk.
              </>
            ) : (
              <>Someone you trust thought we should talk.</>
            )}
          </h1>
          <p className="mt-5 text-lg text-white/80">
            Fifteen minutes. No pitch, no preparation needed. You tell me what
            you&rsquo;re building and what&rsquo;s in the way, and I&rsquo;ll
            tell you honestly whether I&rsquo;m the right person for it.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-neutral-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-bg p-3 sm:p-6">
            <CalEmbed calLink={CAL_LINK} namespace="referred-inline" />
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

      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-neutral-dark">
            What happens next
          </h2>
          <ol className="mt-6 space-y-5">
            <li className="flex gap-4">
              <span className="flex-none w-7 h-7 rounded-full bg-primary text-white text-sm font-semibold grid place-items-center">
                1
              </span>
              <p className="text-neutral-dark/80">
                <strong className="text-neutral-dark">
                  A fifteen-minute call.
                </strong>{" "}
                Mostly me listening. If it isn&rsquo;t a fit, I&rsquo;ll say so
                on this call and point you somewhere better.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex-none w-7 h-7 rounded-full bg-primary text-white text-sm font-semibold grid place-items-center">
                2
              </span>
              <p className="text-neutral-dark/80">
                <strong className="text-neutral-dark">
                  If it is a fit, a longer conversation.
                </strong>{" "}
                Sixty minutes, and you&rsquo;ll get something useful out of it
                whether or not we work together.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="flex-none w-7 h-7 rounded-full bg-primary text-white text-sm font-semibold grid place-items-center">
                3
              </span>
              <p className="text-neutral-dark/80">
                <strong className="text-neutral-dark">You decide.</strong> A
                flat fee based on your net worth, not a percentage of what you
                invest. No product sales, ever.
              </p>
            </li>
          </ol>

          <p className="mt-10 text-sm text-neutral-dark/60">
            Wealth In Yourself LLC is a Nevada state-registered investment
            adviser. Nothing on this page is investment, tax, or legal advice.
          </p>
        </div>
      </section>
    </>
  );
}
