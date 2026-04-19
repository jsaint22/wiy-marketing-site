import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Real Fiduciary\u2122 Standard",
  description:
    "Wealth In Yourself adheres to the Real Fiduciary\u2122 standard \u2014 the highest fiduciary commitment in financial planning. No commissions, no product sales, always acting in clients\u2019 best interests.",
};

const practices = [
  {
    number: 1,
    title: "Act as a fiduciary at all times. Affirm this commitment to the client in writing.",
    description:
      "Affirm that the fiduciary standard under common law and the Investment Advisers Act of 1940 (and when applicable, ERISA) governs all professional advisory client relationships at all times at both the advisor and the firm level.",
    duty: "loyalty",
  },
  {
    number: 2,
    title: "Decline any sales-related compensation.",
    description:
      "Accept compensation that is paid by the client in the form of a percentage of assets under management, retainers, fixed fees, or hourly fees. Decline any compensation associated with transactions and product sales such as commissions, shelf space payments, and 12b-1 fees.",
    duty: "loyalty",
  },
  {
    number: 3,
    title: "Avoid conflicts of interest.",
    description:
      "Understand that a conflict of interest occurs when the interests of the advisor or the advisor\u2019s firm interfere with the advisor\u2019s fiduciary duties to clients. A conflict is material when it could reasonably be deemed to affect how a client who understands the conflict decides to act. Material conflicts are inherently harmful. Eliminating or avoiding these conflicts when possible has been the cornerstone of fiduciary law for centuries.",
    duty: "loyalty",
  },
  {
    number: 4,
    title: "Mitigate unavoidable conflicts.",
    description:
      "Mitigating material conflicts means, at minimum, receiving appropriate client consent before executing the recommendation. The advisor will: Explain the conflict in sufficient detail, both orally and in writing, so the client fully understands the conflict. Ensure that the client understands the implications of the conflict. Receive informed, intelligent and independent consent from the client in writing before any advice is implemented. Document and be prepared to demonstrate that the conflicted advice remains reasonable and fair and consistent with the client\u2019s best interest.",
    duty: "loyalty",
  },
  {
    number: 5,
    title: "Maintain professional knowledge and competence.",
    description:
      "Demonstrate baseline competence by holding a recognized designation that requires significant study and knowledge, experience, and ongoing continuing education requirements, such as the CFP\u00AE, CPA/PFS, or CFA designations. Decline to provide advice, regardless of its scope, unless the advisor possesses the appropriate expertise.",
    duty: "care",
  },
  {
    number: 6,
    title: "Explain agreements and disclosures clearly and truthfully, both orally and in writing.",
    description:
      "Put all important client agreements and disclosures in writing. Do not make oral or written statements that are misleading. Client understanding of the advisor\u2019s actions is important in relationships of trust and confidence.",
    duty: "care",
  },
  {
    number: 7,
    title: "Establish and document a reasonable basis for advice.",
    description:
      "Document relevant facts and circumstances supporting the advisor\u2019s advice in a manner that is appropriate for the scope and nature of the client engagement and for the client\u2019s goals and overall circumstances. Upon client request, provide a brief summary written in plain language of each recommendation and its respective reasonable basis.",
    duty: "care",
  },
  {
    number: 8,
    title: "Follow and document a prudent due diligence process for rendering investment advice.",
    description:
      "Research and analyze investment vehicles in a responsible manner. Use an investment policy statement that is based on a clear understanding of the client\u2019s circumstances and preferences and that clearly specifies assumptions regarding objectives, risk, and performance. Report performance based on data supplied by an independent third party and calculated using industry-standard methods.",
    duty: "care",
  },
  {
    number: 9,
    title:
      "Decline gifts or entertainment or other benefits unless minimal in value, occasional in frequency, and consistent with the advisory firm\u2019s gift and vendor relation policies.",
    description:
      "Decline any gifts or third-party compensation or other benefits received by the advisor or the advisor\u2019s firm that could impair advisor objectivity. Upon request, provide the firm\u2019s policy on gifts and entertainment.",
    duty: "faith",
  },
  {
    number: 10,
    title: "Charge reasonable fees and incur reasonable investment costs. Disclose and fully explain.",
    description:
      "Provide in writing at the outset of the advisory relationship, and upon request throughout the client engagement, a good faith description and estimate of anticipated fees, investment costs, and tax implications. Have procedures to check that client expenses are reasonable.",
    duty: "faith",
  },
];

const boardMembers = [
  "Christopher W. Cannon, CFA, FirsTrust",
  "Paula H. Hogan, CFP\u00AE, CFA, Hogan Financial",
  "Stephen D. Johnson, MBA, CFP\u00AE, Johnson Lyman Wealth Advisors",
  "William C. Prewitt, M.S., CFP\u00AE, Charleston Financial Advisors",
  "Knut A. Rostad, MBA, Institute for the Fiduciary Standard",
  "Daniel Bernstein, JD, Associate General Counsel",
  "Clark M. Blackman II, CFA, CPA/PFS, AIF\u00AE, Alpha Wealth Strategies (Emeritus)",
];

const duties = [
  {
    name: "Duty of Loyalty",
    description:
      "An advisor must act solely in the interest of the client and must not place their own interests ahead of the client\u2019s. This means no conflicts, no self-dealing, and no compensation structures that could compromise objectivity.",
    practices: "Practices 1\u20134",
  },
  {
    name: "Duty of Due Care",
    description:
      "An advisor must act with the competence, diligence, and good judgment of a professional. This means maintaining expertise, documenting the basis for advice, and following a disciplined investment process.",
    practices: "Practices 5\u20138",
  },
  {
    name: "Duty of Utmost Good Faith",
    description:
      "An advisor must act honestly and transparently in all dealings with clients. This means declining gifts that could impair objectivity and charging fees that are reasonable and fully disclosed.",
    practices: "Practices 9\u201310",
  },
];

function getDutyLabel(duty: string): string {
  switch (duty) {
    case "loyalty":
      return "Demonstrate Loyalty";
    case "care":
      return "Act With Due Care";
    case "faith":
      return "Act In Utmost Good Faith";
    default:
      return "";
  }
}

function getDutyColor(duty: string): string {
  switch (duty) {
    case "loyalty":
      return "bg-primary/10 text-primary";
    case "care":
      return "bg-secondary/20 text-primary";
    case "faith":
      return "bg-emerald-50 text-emerald-800";
    default:
      return "";
  }
}

export default function FiduciaryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Commitment
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Real Fiduciary&trade;
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-dark/70 leading-relaxed max-w-3xl mx-auto">
            We hold ourselves to the highest fiduciary standard because we
            believe it&apos;s the single most important element when choosing any
            professional. This is our code of conduct.
          </p>
        </div>
      </section>

      {/* Three Duties */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Foundation"
            title="Three Fiduciary Duties"
            subtitle="Every decision we make is governed by these three duties &mdash; the legal and ethical bedrock of fiduciary responsibility."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {duties.map((duty) => (
              <div
                key={duty.name}
                className="bg-white rounded-xl p-6 border border-neutral-bg"
              >
                <h3 className="text-lg font-bold text-primary">{duty.name}</h3>
                <p className="mt-3 text-sm text-neutral-dark/70 leading-relaxed">
                  {duty.description}
                </p>
                <p className="mt-4 text-xs font-semibold text-secondary uppercase tracking-wider">
                  {duty.practices}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 Practices */}
      <section className="bg-white py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The Standard"
            title="The 10 Real Fiduciary&trade; Practices"
            subtitle="Established by the Institute for the Fiduciary Standard. We adhere to every one."
          />
          <div className="mt-12 space-y-6">
            {practices.map((practice, i) => {
              const showDutyHeader =
                i === 0 || practices[i - 1].duty !== practice.duty;
              return (
                <div key={practice.number}>
                  {showDutyHeader && (
                    <h3 className="text-xl font-bold text-primary mt-8 mb-4 first:mt-0">
                      {getDutyLabel(practice.duty)}
                    </h3>
                  )}
                  <div className="bg-neutral-bg rounded-xl p-6 border border-neutral-bg">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                        {practice.number}
                      </span>
                      <div>
                        <h4 className="font-bold text-primary leading-snug">
                          {practice.title}
                        </h4>
                        <span
                          className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-xs font-semibold ${getDutyColor(
                            practice.duty
                          )}`}
                        >
                          {getDutyLabel(practice.duty)}
                        </span>
                        <p className="mt-3 text-sm text-neutral-dark/70 leading-relaxed">
                          {practice.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Governance"
            title="Real Fiduciary&trade; Practices Board"
            subtitle="The individuals who established and oversee the Real Fiduciary&trade; standard."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {boardMembers.map((member) => (
              <div
                key={member}
                className="bg-white rounded-lg px-5 py-3 border border-neutral-bg text-sm text-neutral-dark/80"
              >
                {member}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Work with a firm held to the highest fiduciary standard."
        subtext="No commissions. No product sales. No conflicts. Just advice built entirely around your best interest."
      />
    </>
  );
}
