import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to the most common questions about Wealth In Yourself — our flat-fee model, fiduciary commitment, services, and what it's like to work with us.",
};

interface FAQ {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  faqs: FAQ[];
}

const categories: FAQCategory[] = [
  {
    id: "about",
    label: "About WIY",
    faqs: [
      {
        question: "What exactly is Wealth In Yourself?",
        answer:
          "Wealth In Yourself is a flat-fee, fiduciary financial life planning firm. We help entrepreneurs, real estate investors, and people pursuing FIRE design a financial structure around the life they actually want — not a retirement date 30 years from now. One advisor, one fee, a full team of specialists behind the scenes.",
      },
      {
        question: "Who do you work with?",
        answer:
          "Business owners, real estate investors, W-2 professionals building toward something bigger, and people pursuing financial independence on their own terms. The common thread is people who take personal responsibility for their path and want a planning partner — not a product salesperson.",
      },
      {
        question: "What makes you different from other financial advisors?",
        answer:
          "Three things. First, we charge a flat fee — not a percentage of your assets — so our incentive is the quality of our advice, not the size of your account. Second, we start with your life, not your money. Values-based planning and financial therapy come before spreadsheets. Third, we operate as a Virtual Family Office — you get a coordinated team (CPA, estate attorney, insurance specialist) instead of one advisor trying to do everything alone.",
      },
      {
        question: "Are you a fiduciary?",
        answer:
          "Yes. 100% of the time. We're a Registered Investment Adviser with the State of Nevada, legally required to act in your best interest. We don't sell products, earn commissions, or switch hats mid-conversation. That last part matters more than most people realize.",
      },
      {
        question:
          "Where are you located? Do you work with clients outside Nevada?",
        answer:
          "We're based at Lake Tahoe, Nevada — our office is walking distance from Nevada Beach on the lake. We work with clients nationwide, virtually. Location doesn't constrain our service — what we do scales just as well for a business owner in Boston as for an investor in Miami. If you're ever in Tahoe, come visit — the view alone is worth it.",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees & Pricing",
    faqs: [
      {
        question: "How does your flat fee work?",
        answer:
          "Your annual fee is based on your net worth (excluding your primary residence), calculated using a declining tiered percentage. The more you build, the lower the effective rate. We reassess once a year on your anniversary date. No surprises, no add-ons. Check the fee calculator on our pricing page to see exactly what you'd pay.",
      },
      {
        question: "Why flat fee instead of AUM?",
        answer:
          "AUM fees create a structural conflict of interest. When your advisor's income grows as your account grows — regardless of whether they did anything — the incentives are misaligned. A flat fee means we get paid for the advice, not for holding your assets. Run the math on what you're actually paying your current advisor — the numbers usually speak for themselves.",
      },
      {
        question: "What's the minimum net worth to work with you?",
        answer:
          "Our minimum annual fee is $10,000, which typically makes sense for clients with a net worth of $1M or higher (excluding primary residence). Below that threshold, a flat-fee model likely isn't cost-effective for you yet — and we'd rather tell you that upfront than sign you up anyway.",
      },
      {
        question: "What happens to my fee as my net worth grows?",
        answer:
          "The effective rate declines. Our tiered structure means the percentage drops as your net worth increases, so you're never penalized for building wealth. If your net worth decreases — because you retired, traveled the world, or made a major life change — your fee decreases too. We reassess every year based on your current situation.",
      },
      {
        question: "Is there a long-term contract?",
        answer:
          "No. No lock-in contracts. No cancellation fees. No guilt trips. We earn your business every month. If we stop adding value, you should leave.",
      },
      {
        question: "What's included in the fee?",
        answer:
          "Everything. Life planning, tax strategy, investment management, insurance review, estate coordination, business planning, and real estate investor planning. One fee covers it all — no add-ons, no surprise invoices. If it touches your financial life, it's covered.",
      },
    ],
  },
  {
    id: "process",
    label: "The Process",
    faqs: [
      {
        question: "What happens on the 15-minute intro call?",
        answer:
          "We talk about your situation, what's on your mind, and whether there's a mutual fit. No pitch. No pressure. No awkward sales script. If it makes sense for both of us, we'll schedule a deeper Strategy & Vision meeting — also free. You get a full hour with us before you spend a dollar.",
      },
      {
        question: "What happens after the intro call if we're a fit?",
        answer:
          "If we're a fit, we build a prospect portal customized to you and your family's situation. You get immediate access — your own dashboard showing the scope of work we'd do, your estimated fee, your onboarding timeline, and what Year One together would look like. From there we schedule a Strategy & Vision call to go deeper. The portal means you don't leave the intro call with 'I'll follow up' — you leave with a clear picture of what working together actually involves.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Most clients are fully onboarded within 30 days. That includes linking accounts, gathering documents, and completing your first planning meetings. We move quickly because we respect your time — but we don't rush the life planning conversations. Those deserve space.",
      },
      {
        question: "How often will we meet once I'm a client?",
        answer:
          "Our planning process is built around 13 structured meetings across four phases — Ground, Design, Build, and Evolve. After the initial planning year, most clients meet quarterly with ad-hoc calls whenever something comes up. You'll never feel like you're waiting for a scheduled meeting to get an answer.",
      },
      {
        question: "How do I access my plan and documents?",
        answer:
          "Everything lives in your client portal — your plan, documents, action items, meeting notes, and financial dashboard. No digging through email threads or shared drives. One login, one place, always up to date.",
      },
    ],
  },
  {
    id: "services",
    label: "Services & Coordination",
    faqs: [
      {
        question: "Do you manage my investments directly?",
        answer:
          "Yes — investment management is fully included in your flat fee. No separate AUM charge, no performance fee, no trading commissions. Our primary custodian is Altruist, who I selected specifically because their fee structure and technology align with how we work. For edge cases that Altruist can't accommodate, I'm also set up on Interactive Brokers as a secondary platform. You always know where your money is and what's being done with it — our fee doesn't change whether you have $1M or $20M invested with us.",
      },
      {
        question: "Do you prepare my taxes?",
        answer:
          "We don't prepare tax returns — that's your CPA's job. What we do is proactive tax strategy year-round: entity structuring, Roth conversions, tax-loss harvesting, multi-year projections, and coordinating with your CPA so nothing falls through the cracks. Most clients tell us we find money their CPA was leaving on the table.",
      },
      {
        question: "Do you handle estate planning documents?",
        answer:
          "We don't draft estate documents — we coordinate with an estate attorney who does. We identify what you need (wills, trusts, beneficiary updates, titling), build the strategy, and make sure your estate plan actually reflects your current life. Most people have estate documents that are either outdated or don't exist. We fix that.",
      },
      {
        question: "Do you work with my existing CPA and attorney?",
        answer:
          "Absolutely. That's the Virtual Family Office model — we coordinate across your entire team so everyone is working from the same playbook. If you don't have a CPA or estate attorney, we'll connect you with professionals we trust. No referral fees, no conflicts.",
      },
      {
        question:
          "What about insurance — do you sell policies?",
        answer:
          "We don't sell insurance. We review what you have, identify gaps or overages, and recommend changes when they make sense. If you need a new policy, we'll connect you with an independent insurance specialist — not a captive agent trying to sell you the most expensive option.",
      },
    ],
  },
  {
    id: "client-types",
    label: "Client Types",
    faqs: [
      {
        question:
          "I'm a business owner. What can you specifically help with?",
        answer:
          "Entity structuring, retirement plan optimization (Solo 401k, SEP, defined benefit), cash flow management between business and personal, exit planning, and tax strategy that actually accounts for how business income works. Most advisors treat business owners like W-2 employees with higher income. We don't.",
      },
      {
        question:
          "I'm a real estate investor. What makes WIY good for me?",
        answer:
          "We understand 1031 exchanges, cost segregation, depreciation strategy, entity structuring for rental portfolios, and how real estate fits into a broader financial plan. Your rental properties aren't just investments — they're a business — and we plan for them that way. We also coordinate with your property management and CPA to keep everything aligned.",
      },
      {
        question: "I want to reach FIRE. Can you help me get there faster?",
        answer:
          "Yes — but we'll start with what FIRE actually means for your life, not just your spreadsheet. We build a plan around your target number, optimize your savings rate, tax strategy, and investment allocation, and give you a clear timeline. The difference is we also help you design what life looks like after you hit the number. That part matters more than most FIRE planners admit.",
      },
      {
        question: "I'm still a W-2 employee. Am I a good fit?",
        answer:
          "If you're building toward something — whether that's entrepreneurship, real estate investing, early retirement, or just more control over your time — yes. Many of our clients start as W-2 professionals with a plan to transition. We help you build the financial foundation now so you can make the leap when you're ready.",
      },
      {
        question:
          "I have complex international or cross-border situations. Can you handle that?",
        answer:
          "It depends on the specifics. We work with clients who have cross-border tax situations, foreign accounts, and international real estate. For complex expat or multi-country tax scenarios, we coordinate with specialized international tax professionals. We'll be upfront about what we can handle directly and where we bring in a specialist.",
      },
    ],
  },
  {
    id: "working-together",
    label: "Working Together",
    faqs: [
      {
        question: "What if I don't like it? Can I leave?",
        answer:
          "Yes. Anytime. No cancellation fees, no lock-in contracts, no exit penalties. Your assets are in your name at an independent custodian — they go where you go. We believe if an advisor needs a contract to keep you, they're not doing a good enough job.",
      },
      {
        question: "How do I communicate with you between meetings?",
        answer:
          "Email, phone, or your client portal — whatever works for you. We don't disappear between quarterly meetings. When something comes up — a tax question, a real estate opportunity, a life change — reach out. That's what the fee covers.",
      },
      {
        question: "What's your investment philosophy?",
        answer:
          "Evidence-based, low-cost, globally diversified. We don't try to beat the market or chase hot stocks. We build portfolios designed to capture market returns efficiently while managing tax impact and aligning with your actual timeline — not a generic risk questionnaire. Boring investing, exciting life.",
      },
      {
        question: "Do you share your clients' results or testimonials?",
        answer:
          "We don't publish client testimonials. As a fiduciary, we take client privacy seriously. The illustrative scenarios on our site are composites — real planning strategies applied to representative situations, not specific client accounts. What we can offer instead: book a 15-minute intro call. You'll get a direct sense of whether we're a fit and walk away knowing exactly how we work — whether or not you become a client. That's a better measure than anyone else's testimonial.",
      },
    ],
  },
];

const allFaqs = categories.flatMap((cat) => cat.faqs);

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Common Questions
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Straight answers. No fine print.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-2xl mx-auto">
            Everything you want to know about working with Wealth In Yourself —
            fees, process, services, and what makes us different.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
            {/* Sidebar nav */}
            <nav className="lg:w-56 flex-shrink-0">
              <div className="lg:sticky lg:top-28">
                {/* Mobile: horizontal scroll */}
                <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 -mx-1 px-1 lg:mx-0 lg:px-0">
                  {categories.map((cat) => (
                    <a
                      key={cat.id}
                      href={`#${cat.id}`}
                      className="flex-shrink-0 px-4 py-2 text-sm font-medium text-neutral-dark/70 hover:text-primary hover:bg-white rounded-lg transition-colors whitespace-nowrap"
                    >
                      {cat.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            {/* Questions */}
            <div className="flex-1 max-w-3xl space-y-12">
              {categories.map((cat) => (
                <div key={cat.id} id={cat.id} className="scroll-mt-28">
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
                    {cat.label}
                  </h2>
                  <div className="space-y-3">
                    {cat.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group bg-white border border-neutral-bg rounded-xl overflow-hidden"
                      >
                        <summary className="flex items-center justify-between p-5 font-semibold text-neutral-dark hover:bg-neutral-bg/50 transition-colors cursor-pointer">
                          <span className="pr-4">{faq.question}</span>
                          <svg
                            className="w-5 h-5 text-neutral-dark/40 transition-transform group-open:rotate-180 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </summary>
                        <div className="px-5 pb-5 text-neutral-dark/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Still have questions?"
        subtext="Book a 15-minute intro call. No pitch. No pressure. Just a conversation about what matters to you."
        buttonText="Book Your Intro Call"
      />
    </>
  );
}
