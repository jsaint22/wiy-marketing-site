import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Virtual Family Office",
  description:
    "The Virtual Family Office approach delivers coordinated financial planning through one flat-fee advisor who brings in outside specialists when your situation calls for them. One point of contact. The complexity stays on our side.",
};

const faqs = [
  {
    question: "What exactly is a Virtual Family Office?",
    answer:
      "A traditional family office is a private firm that manages every aspect of a wealthy family\u2019s financial life with a dedicated team under one roof. They typically require $50M\u2013$100M+ in assets and cost $500K\u2013$1M+ per year. A Virtual Family Office delivers the same coordinated approach through one advisor who serves as the single point of contact and brings in outside specialists when the situation calls for them \u2014 for a flat fee that\u2019s a fraction of the cost.",
  },
  {
    question: "How is this different from a regular financial advisor?",
    answer:
      "Most advisors manage investments and call it a day. They don\u2019t coordinate with your CPA on tax strategy. They don\u2019t review your estate documents. They don\u2019t make sure every decision is coordinated across domains. A VFO approach covers all of those areas and ensures your tax strategy informs your investment plan, your estate plan reflects your business structure, and nothing operates in isolation.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our flat fee is based on the complexity of your financial life \u2014 measured by total net worth (excluding your primary residence). Fees start at $15,000 per year. Compare that to a traditional family office ($500K+/year) or an AUM advisor charging 1% on a $5M portfolio ($50,000/year for less scope). You get more coordination for less cost, with zero conflicts of interest.",
  },
  {
    question: "Do you replace my CPA and attorney?",
    answer:
      "No. We work alongside them. Your CPA handles tax compliance. Your attorney handles legal documents. We sit in the middle and make sure every professional on your team is working from the same strategy. Think of us as the general contractor for your financial life \u2014 we coordinate so nothing falls through the cracks.",
  },
  {
    question: "What if I don\u2019t have a CPA or estate attorney yet?",
    answer:
      "We\u2019ll help you find the right ones. Part of the VFO model is building your team \u2014 not just managing it. We have relationships with tax professionals and estate attorneys who work well in a coordinated model, and we\u2019ll make introductions based on your specific needs. If your situation calls for someone outside our existing relationships, we say so and help you find the right fit.",
  },
  {
    question: "Is this only for business owners?",
    answer:
      "No. The VFO model works for anyone whose financial life has real complexity \u2014 business owners, real estate investors, FIRE pursuers, executives with stock compensation, and families who\u2019ve simply outgrown their current advisor. If you have decisions that span tax, investments, estate, and business structure, this model was built for you.",
  },
];

export default function VirtualFamilyOfficePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            The Model — The Life Architecture
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            The Virtual Family Office Approach
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            Wealthy families with hundreds of millions of dollars in assets
            often hire a family office &mdash; a dedicated team of professionals
            who coordinate every aspect of their financial life. Most clients we
            work with do not need that overhead. They need the coordination.
            That coordinated system is <em>The Life Architecture</em>.
          </p>
        </div>
      </section>

      {/* The Model */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Approach"
            title="Coordination at the right wealth tier."
          />
          <div className="mt-10 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              Most clients we work with have built real wealth &mdash; typically
              in the $3&nbsp;million to $30&nbsp;million range &mdash; and the
              complexity that comes with it. They need the coordination a family
              office provides without the staffing and overhead a real family
              office requires.
            </p>
            <p>
              The Virtual Family Office approach is how we deliver that
              coordination at this wealth tier. Rather than building an in-house
              team across every specialty, we serve as the single point of
              contact for your financial life and bring in outside specialists
              when your situation calls for them. You work with us. We work with
              the specialists. The complexity stays on our side.
            </p>
          </div>
        </div>
      </section>

      {/* What It Looks Like */}
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="In Practice"
            title="What that looks like."
            dark
          />
          <div className="mt-10 space-y-6 text-white/80 text-lg leading-relaxed">
            <p>
              When tax planning gets complex enough that strategy needs to
              translate into specialized preparation and filing, we coordinate
              with experienced tax professionals who handle the implementation.
              When you need estate documents drafted or reviewed, we coordinate
              with estate attorneys whose work we know. When you&apos;re forming
              an entity, we coordinate with the entity formation services that
              fit your situation. When you&apos;re contemplating an exit from a
              business, we bring exit planning expertise into the conversation.
            </p>
            <p>
              The coordination is the work. We brief the specialist before
              introductions. We sit in on the relevant conversations. We follow
              through on what&apos;s decided. You don&apos;t manage the team.
              You don&apos;t repeat yourself across professionals. You
              don&apos;t have to wonder whether the right hand knows what the
              left hand is doing. That&apos;s our job.
            </p>
          </div>
        </div>
      </section>

      {/* What We Are Not */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Honest Framing"
            title="What we are not."
          />
          <div className="mt-10 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              We are not a traditional family office. Real family offices serve
              clients at much higher wealth tiers and offer concierge services,
              lifestyle management, and full investment management under one
              roof. We are a financial planning firm that coordinates with
              outside specialists when your situation benefits from outside
              expertise.
            </p>
            <p>
              We do not have formal referral arrangements with the specialists
              we coordinate with. The relationships are based on our direct
              experience working with each professional, not on a financial
              arrangement between us. When a specialist&apos;s work is right for
              you, we make the introduction. If your situation calls for someone
              outside our existing relationships, we say so and help you find
              the right fit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        faqs={faqs}
        title="Questions About the Virtual Family Office"
      />

      <CTASection
        headline="Ready for an advisor who sees the whole picture?"
        subtext="Book a 15-minute intro call. No pitch. No pressure. Just a conversation about what\u2019s working, what\u2019s not, and whether this model fits your life."
      />
    </>
  );
}
