import type { Metadata } from "next";
import LeadMagnetCapture from "@/components/LeadMagnetCapture";


export const metadata: Metadata = {
  title: "Free: The W-2 Escape Plan — Financial Readiness Checklist",
  description:
    "Runway math, health insurance planning, entity setup, retirement account strategy, and income replacement planning. Free checklist for professionals going independent.",
};

const checklistSections = [
  {
    category: "The Runway",
    items: [
      "Do you know your actual monthly burn rate — not your guess, your real number?",
      "Do you have 12-18 months of living expenses in liquid savings (not retirement accounts)?",
      "Have you stress-tested your runway against a 6-month delayed revenue scenario?",
    ],
  },
  {
    category: "Health Insurance",
    items: [
      "Do you have a specific post-employment health insurance plan — COBRA, marketplace, or spouse's plan?",
      "Have you factored the full annual cost ($12K-$30K+ for a family) into your runway math?",
    ],
  },
  {
    category: "Entity Setup & Tax Architecture",
    items: [
      "Have you decided on your business entity — and do you know why LLC vs. S-Corp matters?",
      "Do you understand how self-employment tax changes your effective rate by 7-15%?",
      "Have you set up quarterly estimated tax payments before your first invoice?",
    ],
  },
  {
    category: "Retirement Accounts",
    items: [
      "Do you have a plan for your employer 401(k) — rollover, leave, or Roth convert?",
      "Have you evaluated a Solo 401(k) to shelter $60K+ per year from day one?",
    ],
  },
  {
    category: "Income Replacement",
    items: [
      "Do you have your first client or revenue source identified — not hypothetical, signed?",
      "Have you calculated your personal break-even number (not your business break-even)?",
      "Have you reviewed your non-compete or non-solicitation agreement with an attorney?",
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
            Know Your Number Before You Give Notice
          </p>
          <p className="mt-6 text-xl text-neutral-dark/80 leading-relaxed max-w-3xl">
            You&apos;ve run the mental math a hundred times. You know you want
            out. But &ldquo;I think I have enough saved&rdquo; isn&apos;t a
            plan — it&apos;s a hope. This checklist turns the leap into a
            calculated decision: your real runway, your real burn rate, and the
            exact financial architecture you need before you give notice.
          </p>
          <p className="mt-4 text-sm text-neutral-dark/50 font-medium">
            For W-2 professionals earning $150K+ who are 6-18 months from going independent.
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
        headline="Get the full escape plan — free."
        subheadline="13 questions that separate a calculated leap from an expensive mistake."
        description="Enter your name and email. You'll get the complete W-2 Escape Plan in your inbox within 60 seconds."
        buttonText="Send me the escape plan"
        successMessage="Sent! Check your inbox for the W-2 Escape Plan."
      />

    </main>
  );
}
