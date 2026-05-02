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
      "Our flat fee is based on the complexity of your financial life \u2014 measured by total net worth (excluding your primary residence). Fees start at $10,000 per year. Compare that to a traditional family office ($500K+/year) or an AUM advisor charging 1% on a $5M portfolio ($50,000/year for less scope). You get more coordination for less cost, with zero conflicts of interest.",
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
            The Model
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            The Virtual Family Office Approach
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            Wealthy families with hundreds of millions of dollars in assets
            often hire a family office &mdash; a dedicated team of professionals
            who coordinate every aspect of their financial life. Most clients we
            work with do not need that overhead. They need the coordination.
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

      {/* Client Portal */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Your Command Center"
            title="Everything lives in one place — your private client portal."
            subtitle="No chasing emails. No digging through PDFs. Your entire financial life — dashboard, journey map, action items, and wins — all in one secure portal you can access anytime."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Live Dashboard",
                desc: "See your net worth, upcoming meetings, and open action items at a glance. Updated in real time.",
                icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5",
              },
              {
                title: "Journey Map",
                desc: "Track your progress through every phase of your financial plan. Know exactly where you are and what comes next.",
                icon: "M9 6.75V15m0 0l3-3m-3 3l-3-3m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Wins Tracker",
                desc: "Every tax saved, every strategy implemented, every milestone hit — documented and visible so you can see the value compounding.",
                icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-neutral-bg rounded-xl p-6 border border-transparent hover:border-secondary/20 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-dark/70">
            Existing clients log in at{" "}
            <a href="https://portal.wealthinyourself.com" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-secondary transition-colors underline">portal.wealthinyourself.com</a>.
          </p>
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
