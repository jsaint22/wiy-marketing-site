import type { Metadata } from "next";
import LeadMagnetCapture from "@/components/LeadMagnetCapture";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Free: The W-2 Escape Plan — Financial Readiness Checklist",
  description:
    "Runway math, health insurance planning, entity setup, retirement account strategy, and income replacement planning. Free checklist for professionals going independent.",
};

const checklistSections = [
  {
    category: "The Runway",
    items: [
      "Do you know your monthly burn rate — the real one?",
      "Do you have 12-18 months of living expenses in liquid savings?",
      "Have you stress-tested your runway against a delayed revenue scenario?",
    ],
  },
  {
    category: "Health Insurance",
    items: [
      "Do you have a post-employment health insurance plan?",
      "Have you factored the full annual cost into your runway math?",
    ],
  },
  {
    category: "Entity Setup & Tax Architecture",
    items: [
      "Have you decided on your business entity structure?",
      "Do you understand the self-employment tax impact?",
      "Have you set up quarterly estimated tax payments?",
    ],
  },
  {
    category: "Retirement Accounts",
    items: [
      "Do you have a plan for your employer 401(k)?",
      "Have you evaluated a Solo 401(k) or SEP-IRA?",
    ],
  },
  {
    category: "Income Replacement",
    items: [
      "Do you have your first client or revenue source identified?",
      "Have you calculated your break-even number?",
      "Do you have a non-compete or non-solicitation agreement?",
    ],
  },
];

export default function W2EscapePlan() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-secondary font-semibold text-sm tracking-wide uppercase">
            Free Download
          </p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-primary tracking-tight">
            The W-2 Escape Plan
          </h1>
          <p className="mt-3 text-2xl font-semibold text-secondary">
            A Financial Readiness Checklist
          </p>
          <p className="mt-6 text-xl text-neutral-dark/80 leading-relaxed max-w-3xl">
            You&apos;ve been thinking about it for months — maybe years. Leaving
            the W-2, going independent, building something of your own. The
            dream is clear. What&apos;s usually missing is the financial
            architecture underneath it.
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
            {checklistSections.map((section) => (
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
            ...plus personal financial architecture review, emergency fund
            separation strategy, partner alignment framework, and a
            milestone-based departure timeline.
          </p>
        </div>
      </section>

      {/* Email capture */}
      <LeadMagnetCapture
        magnet="w2-escape-plan"
        headline="Get the full checklist — free."
        subheadline="The financial plan your employer won't build for you."
        description="Enter your name and email and we'll send the complete W-2 Escape Plan to your inbox."
        buttonText="Send me the escape plan"
        successMessage="Sent! Check your inbox for the W-2 Escape Plan."
      />

      <CTASection />
    </main>
  );
}
