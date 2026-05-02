import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "For Professional Partners",
  description:
    "Partner with Wealth In Yourself to provide your clients with coordinated, flat-fee, fiduciary financial planning. Direct relationships. No referral fees. Your clients stay your clients.",
};

export default function ForPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            For Professional Partners
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            For Professional Partners
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
            We work with a small set of trusted professionals &mdash; tax
            preparers, estate attorneys, exit planning specialists, entity
            formation services &mdash; to deliver coordinated financial planning
            to our clients. The relationships are direct, informal, and based on
            our experience working with each professional rather than formal
            referral arrangements.
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Clients"
            title="Who we serve."
          />
          <div className="mt-10 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              If you&apos;re a professional who serves clients with overlap in
              our space &mdash; first-generation entrepreneurs, real estate
              investors, professionals building toward financial independence
              &mdash; we&apos;d be glad to learn about your work and explore
              whether collaboration makes sense.
            </p>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collaboration"
            title="What we look for in collaborators."
          />
          <div className="mt-10 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              Direct, practitioner-level expertise in your specialty. A track
              record with clients in our wealth tier. A communication style that
              matches ours &mdash; clear, unhurried, decisive. The willingness
              to coordinate rather than compete for client attention.
            </p>
          </div>
        </div>
      </section>

      {/* What Collaboration Looks Like */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Process"
            title="What collaboration looks like."
          />
          <div className="mt-10 space-y-6 text-neutral-dark/80 text-lg leading-relaxed">
            <p>
              Our clients come to you with the financial context already
              prepared. You handle the specialty work. We coordinate the
              introduction, brief you in advance, and stay involved throughout
              the engagement so the client experiences a single coordinated
              process rather than a handoff between disconnected professionals.
            </p>
            <p>
              We do not currently maintain formal referral arrangements with our
              collaborators. Compensation does not flow between us in either
              direction. If your firm structure would benefit from a more formal
              arrangement, we&apos;re open to the conversation, but it&apos;s
              not the default.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Get in Touch"
            title="If this resonates, let\u2019s talk."
          />
          <div className="mt-8 space-y-4">
            <p className="text-lg text-neutral-dark/70 leading-relaxed">
              Email Josh directly at{" "}
              <a
                href="mailto:josh@wealthinyourself.com"
                className="text-primary font-semibold hover:text-secondary transition-colors"
              >
                josh@wealthinyourself.com
              </a>{" "}
              or book a 15-minute call to discuss how we can work together.
            </p>
            <a
              href="https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>

      <CTASection
        headline="Let&apos;s build a better experience for your clients."
        subtext="No referral fees. No competition. Just coordinated planning that makes everyone&apos;s work better."
        buttonText="Book a Partner Call"
      />
    </>
  );
}
