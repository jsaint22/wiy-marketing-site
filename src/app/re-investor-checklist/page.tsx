import type { Metadata } from "next";
import LeadMagnetCapture from "@/components/LeadMagnetCapture";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free: The 16-Point Tax Strategy Checklist for RE Investors",
  description:
    "16 questions your advisory team should be answering about 1031 exchanges, cost segregation, entity structure, depreciation recapture, and STR tax strategy. Free checklist for serious RE investors.",
};

const checklistItems = [
  {
    category: "1031 Exchanges",
    items: [
      "Do you have a 1031 exchange strategy mapped for your next property sale — before you list?",
      "Have you evaluated a Reverse 1031 exchange to lock in your replacement property first?",
      "Do you have a Qualified Intermediary relationship established (not your title company)?",
    ],
  },
  {
    category: "Cost Segregation",
    items: [
      "Have you run a cost segregation study on every property you own — including ones you bought years ago?",
      "Are you tracking the current bonus depreciation phase-down and how it affects your next acquisition?",
    ],
  },
  {
    category: "Entity Structure",
    items: [
      "Is each property held in the right entity for liability protection and tax efficiency?",
      "Have you evaluated a holding company structure as your portfolio crosses 5+ doors?",
    ],
  },
  {
    category: "STR Tax Strategies",
    items: [
      "Are you leveraging the STR loophole for material participation — and do you qualify?",
      "Do you have contemporaneous documentation proving your material participation hours?",
    ],
  },
  {
    category: "Depreciation & Recapture",
    items: [
      "Do you have a depreciation recapture plan for when you eventually sell?",
      "Have you modeled the tax impact of a sale vs. a refinance-and-hold strategy?",
    ],
  },
  {
    category: "Advisory Team",
    items: [
      "Do you have both a CPA and a financial planner — and are they talking to each other?",
      "Is your CPA proactively suggesting strategies — or just filing what you hand them?",
    ],
  },
];

export default function REInvestorChecklist() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary font-semibold text-sm tracking-wide uppercase">
            Free Download
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            16 Tax Questions Your Advisory Team Should Be Answering Right Now
          </h1>
          <p className="mt-6 text-xl text-neutral-dark/80 leading-relaxed max-w-3xl">
            Most RE investors have a CPA who files and an advisor who allocates.
            Neither one is running the numbers on 1031 timing, cost segregation
            studies, or depreciation recapture. This checklist is the gap
            between &ldquo;good enough&rdquo; and keeping an extra $50K–$200K
            on every transaction.
          </p>
          <p className="mt-4 text-sm text-neutral-dark/50 font-medium">
            Built for investors with 3+ properties and $1M+ in real estate equity.
          </p>
        </div>
      </section>

      {/* Preview of what's inside */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">
            What&apos;s inside
          </h2>
          <div className="space-y-8">
            {checklistItems.map((section) => (
              <div key={section.category}>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-5 w-5 rounded border-2 border-secondary/50 shrink-0" />
                      <span className="text-neutral-dark/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-neutral-dark/60 text-sm">
            ...plus QBI deduction strategies, state tax considerations, and
            a one-page action plan template.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <LeadMagnetCapture
        magnet="re-investor-checklist"
        headline="Get the full checklist — free."
        subheadline="16 questions. Zero fluff. Built for investors who actually run the numbers."
        description="Enter your name and email. You'll get the complete Tax Strategy Checklist in your inbox within 60 seconds. No spam, no sales pitch — just the checklist."
        buttonText="Send me the checklist"
        successMessage="Sent! Check your inbox for the Tax Strategy Checklist."
      />

      <CTASection />
    </main>
  );
}
