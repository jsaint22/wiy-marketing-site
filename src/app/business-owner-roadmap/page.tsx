import type { Metadata } from "next";
import LeadMagnetCapture from "@/components/LeadMagnetCapture";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free: The Entrepreneur's Exit Planning Roadmap",
  description:
    "Business valuation, QSBS exclusion, entity structuring, succession planning, and tax timing strategies. Free roadmap for business owners planning their exit.",
};

const roadmapSections = [
  {
    category: "Business Valuation",
    items: [
      "Do you have a current, independent business valuation?",
      "Have you identified the 3-5 value drivers a buyer will care about most?",
    ],
  },
  {
    category: "Entity Structure & Tax Positioning",
    items: [
      "Is your entity structured to minimize the tax impact of a sale?",
      "Have you evaluated a Qualified Small Business Stock (QSBS) exclusion?",
      "Are you using estate planning vehicles to transfer business interests at today's valuation?",
    ],
  },
  {
    category: "Cash Flow & Income Replacement",
    items: [
      "Do you know your post-exit income need — not want, need?",
      "Have you modeled the after-tax proceeds of your sale?",
      "Do you have a wealth management plan for the proceeds?",
    ],
  },
  {
    category: "Succession & Continuity",
    items: [
      "Have you evaluated internal sale vs. external sale vs. ESOP?",
      "Do you have a buy-sell agreement with your partners?",
    ],
  },
  {
    category: "The Advisory Team",
    items: [
      "Do you have all four: financial planner, CPA, estate attorney, M&A advisor?",
      "Are all four talking to each other?",
    ],
  },
];

export default function BusinessOwnerRoadmap() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary font-semibold text-sm tracking-wide uppercase">
            Free Download
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            The Entrepreneur&apos;s Exit Planning Roadmap
          </h1>
          <p className="mt-6 text-xl text-neutral-dark/80 leading-relaxed max-w-3xl">
            Most business owners build incredible companies — and then leave
            millions on the table when it&apos;s time to step away. Whether
            you&apos;re five years out or five months, this roadmap covers the
            decisions that determine whether your exit builds generational wealth
            or just pays the tax bill.
          </p>
        </div>
      </section>

      {/* Preview */}
      <section className="py-16 bg-white">
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
          <p className="mt-8 text-neutral-dark/60 text-sm">
            ...plus installment sale strategies, Charitable Remainder Trusts,
            key person insurance, and post-exit health insurance planning.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <LeadMagnetCapture
        magnet="business-owner-roadmap"
        headline="Get the full roadmap — free."
        subheadline="The exit plan your advisor should have given you years ago."
        description="Enter your name and email and we'll send the complete Exit Planning Roadmap to your inbox."
        buttonText="Send me the roadmap"
        successMessage="Sent! Check your inbox for the Exit Planning Roadmap."
      />

      <CTASection />
    </main>
  );
}
