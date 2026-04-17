import type { Metadata } from "next";
import Link from "next/link";
import FeeCalculator from "@/components/FeeCalculator";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Fee Calculator",
  description:
    "See exactly what you would pay with WIY's declining flat-fee model — and how it compares to a traditional 1% AUM advisor over 30 years.",
};

export default function CalculatorPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            What would you actually pay?
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            Most people are shocked when they see how much AUM fees cost over a
            lifetime. Use the calculator to compare.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 sm:py-24 bg-neutral-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeeCalculator standalone={false} />
        </div>
      </section>

      {/* How the fee works */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary">
            How the fee works
          </h2>
          <div className="mt-6 space-y-4 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              WIY uses a declining percentage model. The rate you pay drops as
              your net worth grows. Your first $1M is charged at 0.50%. The next
              $2M at 0.35%. The next $2M at 0.25%. The next $5M at 0.15%. And
              everything above $10M at 0.10%.
            </p>
            <p>
              That means the more wealth you build, the less you pay as a
              percentage. Your fee never scales against you the way a flat 1%
              AUM fee does.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/pricing"
              className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-center"
            >
              See Full Pricing Details
            </Link>
            <a
              href="https://calendly.com/joshsanchez-wiy/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-secondary text-primary font-semibold rounded-lg hover:bg-secondary/90 transition-colors text-center"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
