import type { Metadata } from "next";
import LeadMagnetCapture from "@/components/LeadMagnetCapture";
import CTASection from "@/components/CTASection";
import { LEAD_MAGNET_CTA_SUBTEXT } from "@/lib/lead-magnet-page-copy";


export const metadata: Metadata = {
  title: "The Business Owner's Wealth Extraction Roadmap",
  description:
    "Business valuation, QSBS exclusion, entity structuring, cash flow optimization, and exit timing strategies. A roadmap for entrepreneurs building real wealth from their business.",
};

// "What's inside" preview. Every item below is a question in the PDF
// (src/lib/pdf/lead-magnet-pdf.tsx BusinessOwnerRoadmapPDF), so the page
// doesn't promise content the roadmap doesn't contain.
const roadmapSections = [
  {
    category: "Business Valuation",
    items: [
      "Do you have a current, independent business valuation?",
      "Have you identified the value drivers a buyer will care about most?",
    ],
  },
  {
    category: "Entity Structure & Tax Positioning",
    items: [
      "Is your entity structured to minimize the tax impact of a sale?",
      "Have you evaluated Qualified Small Business Stock (QSBS, Section 1202)?",
      "Are you using an IDGT or estate vehicle to transfer interests?",
    ],
  },
  {
    category: "Cash Flow & Income Replacement",
    items: [
      "Do you know your post-exit income need?",
      "Have you modeled the after-tax proceeds?",
    ],
  },
  {
    category: "Succession & Continuity",
    items: [
      "Do you have a written succession plan?",
      "Do you have a buy-sell agreement with your partners?",
    ],
  },
  {
    category: "The Advisory Team",
    items: [
      "Do you have all four: financial planner, CPA, estate attorney, and M&A advisor?",
      "Are all four working from the same playbook, or operating in silos?",
    ],
  },
];

export default function BusinessOwnerRoadmap() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-neutral-bg py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary font-semibold text-sm tracking-wide uppercase">
            Roadmap
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            The Business Owner&apos;s Wealth Extraction Roadmap
          </h1>
          <p className="mt-6 text-xl text-neutral-dark/80 leading-relaxed max-w-3xl">
            Your business generates revenue. The question is how much of it
            actually becomes your wealth, and how much disappears to taxes,
            poor entity structure, or an exit you never planned for. This
            roadmap covers the decisions that shape how much of it you keep.
          </p>
          <p className="mt-4 text-sm text-neutral-dark/70 font-medium">
            For entrepreneurs doing $500K+ in annual revenue or planning a transition within 5 years.
          </p>
        </div>
      </section>

      {/* Preview */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mb-8">
            What&apos;s inside
          </h2>
          <div className="space-y-8">
            {roadmapSections.map((section) => (
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
          <p className="mt-8 text-neutral-dark/70 text-sm">
            ...plus valuation methods, internal vs. external sale vs. ESOP,
            installment sales, charitable remainder trusts, and a plan for the
            proceeds.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <LeadMagnetCapture
        magnet="business-owner-roadmap"
        headline="Get the full roadmap."
        subheadline="The wealth extraction plan your advisor should have built on day one."
        description="Enter your name and email. You'll get the complete Wealth Extraction Roadmap in your inbox within 60 seconds."
        buttonText="Send me the roadmap"
        successMessage="Sent! Check your inbox for the Wealth Extraction Roadmap."
      />

      <CTASection subtext={LEAD_MAGNET_CTA_SUBTEXT} />
    </main>
  );
}
