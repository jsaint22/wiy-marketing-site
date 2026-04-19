import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Flat-Fee Financial Planner in Lake Tahoe & Zephyr Cove, NV",
  description:
    "Fee-only, flat-fee financial planner in Lake Tahoe and Zephyr Cove, NV. Fiduciary financial advisor serving entrepreneurs, real estate investors, and FIRE followers in Northern Nevada, California, and nationwide.",
};

const audiences = [
  {
    title: "Entrepreneurs & Business Owners",
    description:
      "Tax strategy, entity structuring, exit planning, and retirement plan design for founders running $200K\u2013$5M+ in revenue.",
    href: "/for-business-owners",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Real Estate Investors",
    description:
      "Cost segregation, 1031 exchanges, entity structuring, depreciation strategy, and passive income planning.",
    href: "/for-real-estate-investors",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "FIRE Followers",
    description:
      "Tax-efficient withdrawal planning, Roth conversion ladders, healthcare bridge strategies, and portfolio design for early independence.",
    href: "/for-fire-followers",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
  },
];

const differentiators = [
  {
    title: "Flat Fee",
    description:
      "No AUM percentages. Your fee is based on the complexity of your situation, not the size of your portfolio. Your success doesn\u2019t increase our cost.",
  },
  {
    title: "Real Fiduciary\u2122",
    description:
      "We adhere to the highest fiduciary standard in the industry. No commissions, no product sales, no conflicts of interest. Ever.",
  },
  {
    title: "Virtual Family Office",
    description:
      "A coordinated team of specialists \u2014 tax, legal, insurance, investments \u2014 working from the same playbook. One flat fee covers the full scope.",
  },
];

const faqs = [
  {
    question: "Do I need to be local to work with you?",
    answer:
      "No. We serve clients nationwide. While Josh lives near Lake Tahoe and has an office in Zephyr Cove, NV, most client meetings happen virtually. You get the same quality of planning whether you\u2019re across the street or across the country.",
  },
  {
    question: "Do you serve clients in California?",
    answer:
      "Yes. Wealth In Yourself is registered to serve clients in multiple states, including California and Nevada. Many of our clients are in the greater Tahoe, Reno, and Sacramento areas, as well as the Bay Area.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We work with clients in Lake Tahoe, Zephyr Cove, Incline Village, Reno, Carson City, South Lake Tahoe, Truckee, and throughout Northern Nevada and California. We also serve clients in all 50 states.",
  },
  {
    question: "Can we meet in person?",
    answer:
      "Absolutely. Our office is at 195 Highway 50 STE 205, Zephyr Cove, NV 89448 \u2014 right on the east shore of Lake Tahoe. In-person meetings are available by appointment. Most ongoing meetings happen virtually for convenience.",
  },
  {
    question: "How is a flat fee different from what most advisors charge?",
    answer:
      "Most advisors charge a percentage of the assets they manage (AUM), typically around 1%. That means the more money you have, the more you pay \u2014 even if the work doesn\u2019t change. Our flat fee is based on the complexity of your financial life, not your portfolio balance.",
  },
  {
    question: "What types of clients do you typically work with?",
    answer:
      "First-generation entrepreneurs, real estate investors, and people pursuing financial independence \u2014 typically with a net worth of $1M or more. If your financial life has outgrown basic advice and you need real planning, we\u2019re built for you.",
  },
];

export default function FinancialPlannerLakeTahoePage() {
  return (
    <>
      {/* LocalBusiness + FinancialService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "FinancialService"],
            name: "Wealth In Yourself",
            description:
              "Flat-fee fiduciary financial planning firm serving entrepreneurs, real estate investors, and FIRE followers in Lake Tahoe, Zephyr Cove, NV, and nationwide.",
            url: "https://wealthinyourself.com/financial-planner-lake-tahoe",
            logo: "https://wealthinyourself.com/logos/wiy-logo-stacked.png",
            image: "https://wealthinyourself.com/logos/wiy-logo-stacked.png",
            telephone: "+14159155948",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "195 Highway 50 STE 205",
              addressLocality: "Zephyr Cove",
              addressRegion: "NV",
              postalCode: "89448",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 38.9988,
              longitude: -119.9483,
            },
            areaServed: [
              { "@type": "State", name: "Nevada" },
              { "@type": "State", name: "California" },
              { "@type": "Country", name: "United States" },
            ],
            founder: {
              "@type": "Person",
              name: "Josh St. Laurent",
              jobTitle: "Founder & Financial Life Planner",
            },
            sameAs: [
              "https://joshstlaurent.com",
              "https://www.linkedin.com/in/joshstlaurent/",
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Lake Tahoe &bull; Zephyr Cove, NV
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Flat-Fee Financial Planning in Lake Tahoe
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
            Fiduciary financial planning for entrepreneurs, real estate
            investors, and people designing their lives on their own terms.
            Based on the east shore of Lake Tahoe. Serving clients in Northern
            Nevada, California, and nationwide.
          </p>
        </div>
      </section>

      {/* Local Section */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Locally Based"
            title="Your advisor lives here."
          />
          <div className="mt-8 max-w-2xl mx-auto text-center">
            <p className="text-lg text-neutral-dark/70 leading-relaxed">
              Josh St. Laurent, CFP&reg;, CFT&trade;, lives near Lake Tahoe and
              operates out of an office in Zephyr Cove, NV. Whether you prefer
              meeting in person on the east shore or virtually from anywhere in
              the country, you get the same comprehensive, flat-fee planning.
            </p>
            <div className="mt-6 inline-block bg-white rounded-xl px-6 py-4 border border-neutral-bg text-sm text-neutral-dark/80">
              <p className="font-semibold text-primary">Wealth In Yourself</p>
              <p>195 Highway 50 STE 205</p>
              <p>Zephyr Cove, NV 89448</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for people building something."
            subtitle="Our clients aren&apos;t looking for a robo-advisor or a generic retirement plan. They need real planning for real complexity."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {audiences.map((audience) => (
              <Link
                key={audience.title}
                href={audience.href}
                className="group bg-neutral-bg rounded-xl p-6 border border-neutral-bg hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={audience.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">
                  {audience.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes WIY Different */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Wealth In Yourself"
            title="What makes us different."
          />
          <div className="mt-10 space-y-6 max-w-2xl mx-auto">
            {differentiators.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-success"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-primary">{item.title}</h3>
                  <p className="mt-1 text-neutral-dark/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Questions About Working with a Lake Tahoe Financial Planner"
        faqs={faqs}
      />

      {/* CTA */}
      <CTASection
        headline="Ready to work with a local, flat-fee fiduciary?"
        subtext="Book a 15-minute intro call. No pitch. No pressure. Just a conversation about what matters to you."
      />
    </>
  );
}
