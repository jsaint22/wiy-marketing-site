import type { Metadata } from "next";
import LeadMagnetCapture from "@/components/LeadMagnetCapture";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free: The Real Estate Investor's Tax Strategy Checklist",
  description:
    "14 questions your advisory team should be answering about 1031 exchanges, cost segregation, entity structure, depreciation, QBI, and state tax strategy. Free checklist for RE investors.",
};

const checklistItems = [
  {
    category: "1031 Exchanges",
    items: [
      "Do you have a 1031 exchange strategy for your next property sale?",
      "Have you evaluated a Reverse 1031 exchange?",
      "Do you have a Qualified Intermediary relationship established?",
    ],
  },
  {
    category: "Cost Segregation",
    items: [
      "Have you run a cost segregation study on every property you own?",
      "Are you tracking the current bonus depreciation percentage?",
    ],
  },
  {
    category: "Entity Structure",
    items: [
      "Is your entity structure optimized for liability protection and tax efficiency?",
      "Have you evaluated a holding company structure for your portfolio size?",
    ],
  },
  {
    category: "STR Tax Strategies",
    items: [
      "Are you leveraging the STR loophole for material participation?",
      "Do you have documentation proving your material participation hours?",
    ],
  },
  {
    category: "Advisory Team",
    items: [
      "Do you have both a CPA and a financial planner — and are they talking to each other?",
      "Is your CPA proactively suggesting strategies — or just filing?",
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
            The Real Estate Investor&apos;s Tax Strategy Checklist
          </h1>
          <p className="mt-6 text-xl text-neutral-dark/80 leading-relaxed max-w-3xl">
            Most real estate investors are leaving money on the table — and they
            don&apos;t know it until someone runs the numbers. This checklist
            covers the tax strategies that separate sophisticated investors from
            everyone else.
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
            depreciation recapture planning.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <LeadMagnetCapture
        magnet="re-investor-checklist"
        headline="Get the full checklist — free."
        subheadline="14 questions. Zero fluff."
        description="Enter your name and email and we'll send the complete Tax Strategy Checklist to your inbox. No spam, no sales pitch — just the checklist."
        buttonText="Send me the checklist"
        successMessage="Sent! Check your inbox for the Tax Strategy Checklist."
      />

      <CTASection />
    </main>
  );
}
