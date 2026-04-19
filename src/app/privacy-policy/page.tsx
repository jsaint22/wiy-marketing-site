import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Wealth In Yourself privacy policy. How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Last updated: April 20, 2026
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral prose-lg">
          {/* Section 1 */}
          <h2>1. Firm Identification</h2>
          <p>
            Wealth In Yourself is a registered investment adviser with the State
            of Nevada. CRD #322123.
          </p>
          <ul>
            <li>
              <strong>Principal:</strong> Josh St. Laurent, MS, CFP&reg;,
              CFT&trade;, APFC&reg;, ACC
            </li>
            <li>
              <strong>Principal Office:</strong> Lake Tahoe, Nevada
            </li>
            <li>
              <strong>Contact:</strong>{" "}
              <a href="mailto:josh@wealthinyourself.com">
                josh@wealthinyourself.com
              </a>
            </li>
          </ul>

          {/* Section 2 */}
          <h2>2. Purpose and Scope</h2>
          <p>
            This Privacy Policy describes how Wealth In Yourself (&ldquo;the
            Firm,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) collects, uses, discloses, and protects the
            nonpublic personal information (&ldquo;NPI&rdquo;) and personal
            information (&ldquo;PI&rdquo;) of our clients, prospective clients,
            and website visitors. This policy is provided in accordance with
            Regulation S-P (17 CFR Part 248), the California Consumer Privacy
            Act (&ldquo;CCPA&rdquo;), and Nevada Revised Statutes Chapter 603A.
          </p>
          <p>
            This policy applies to all information collected through our advisory
            services, website (wealthinyourself.com), intake forms,
            communications, meeting recordings, and technology systems used in
            the delivery of advisory services.
          </p>

          {/* Section 3 */}
          <h2>3. Categories of Information We Collect</h2>

          <h3>3.1 Information You Provide Directly</h3>
          <ul>
            <li>
              Full legal name, date of birth, Social Security number, and
              government-issued identification
            </li>
            <li>
              Contact information including mailing address, email address, and
              phone number
            </li>
            <li>
              Marital and family status, dependents, and beneficiary designations
            </li>
            <li>Employment information, income, and compensation details</li>
            <li>Assets, liabilities, net worth, and account information</li>
            <li>Investment objectives, risk tolerance, and time horizons</li>
            <li>
              Tax returns, estate planning documents, and insurance policies
            </li>
            <li>
              Business ownership details, entity structures, and operating
              agreements
            </li>
            <li>Real estate holdings and related financial data</li>
            <li>Banking and brokerage account numbers and statements</li>
            <li>
              Values, life goals, and personal priorities shared during financial
              life planning sessions
            </li>
          </ul>

          <h3>3.2 Information We Collect Through Our Systems</h3>
          <ul>
            <li>
              Meeting recordings and transcripts from video conference sessions
            </li>
            <li>Email communications and correspondence</li>
            <li>Intake form responses and questionnaire data</li>
            <li>Website browsing data, cookies, and analytics</li>
            <li>Scheduling and calendar information</li>
            <li>Signed agreements and contracts</li>
            <li>Billing and payment information</li>
          </ul>

          <h3>3.3 Information We Receive From Third Parties</h3>
          <ul>
            <li>
              Account holdings, balances, and transaction data from custodians
            </li>
            <li>
              Credit and background information from reporting agencies (only
              with your consent)
            </li>
            <li>Account aggregation data from linked financial accounts</li>
            <li>
              Referral information from professionals in your service network
            </li>
          </ul>

          {/* Section 4 */}
          <h2>4. How We Use Your Information</h2>
          <ul>
            <li>
              Providing personalized financial planning and investment advisory
              services
            </li>
            <li>
              Preparing financial plans, projections, and recommendations
            </li>
            <li>
              Executing investment transactions through our custodian
            </li>
            <li>
              Managing your client dashboard with meeting notes, action items,
              and deliverables
            </li>
            <li>
              Processing and summarizing meeting recordings and transcripts
            </li>
            <li>
              Drafting and sending communications related to your advisory
              engagement
            </li>
            <li>Generating and managing billing and invoicing</li>
            <li>
              Complying with regulatory requirements, including recordkeeping
              obligations
            </li>
            <li>Improving our advisory processes and client experience</li>
            <li>
              Marketing our services (only with aggregated, de-identified data;
              never your personal details)
            </li>
          </ul>

          {/* Section 5 */}
          <h2>5. Artificial Intelligence and Technology Disclosure</h2>

          <h3>5.1 Categories of AI Usage</h3>
          <ul>
            <li>Meeting transcript summarization</li>
            <li>Email triage</li>
            <li>Content creation</li>
            <li>Dashboard management</li>
            <li>Scheduling automation</li>
            <li>Financial plan prep support</li>
          </ul>

          <h3>5.2 Human Oversight Commitment</h3>
          <p>
            All AI-generated outputs that are client-facing or that inform
            advisory recommendations are reviewed by Josh St. Laurent before
            delivery.
          </p>

          <h3>5.3 AI Data Handling</h3>
          <p>
            Client data processed by AI systems is subject to the same
            confidentiality protections. We do not use client data to train AI
            models.
          </p>

          {/* Section 6 */}
          <h2>6. Third-Party Service Providers</h2>
          <p>
            We engage the following third-party service providers in the
            delivery of our advisory services. Each provider receives only the
            minimum information necessary to perform its function.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-300 text-base">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-4 py-2 text-left font-semibold">
                    Category
                  </th>
                  <th className="border border-neutral-300 px-4 py-2 text-left font-semibold">
                    Provider
                  </th>
                  <th className="border border-neutral-300 px-4 py-2 text-left font-semibold">
                    Data Shared
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Custodian
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Altruist
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Assets, PII, account data, transaction instructions
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    CRM Platform
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    GoHighLevel
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Contact information, communications, pipeline status
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Client Dashboard
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Notion
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Meeting notes, action items, deliverables
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Financial Planning Software
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    RightCapital
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Financial data, goals, projections
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Cash Flow Management
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Monarch Money
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Budget data, linked account aggregation
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Cash Flow Automation
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Sequence
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Bank account details, automated transfer instructions
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Cloud Workspace
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Google Workspace
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Email, calendar, documents, file storage
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    AI Processing
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Anthropic (Claude)
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Transcript text, communication drafts, data organization
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Video Conferencing
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Zoom
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Meeting recordings, transcripts, calendar integration
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Digital Signatures
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Adobe Sign
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Contracts and agreements containing PII
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Accounting
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    QuickBooks Online
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Billing data, invoice records
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Intake Forms
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Involve.me
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Questionnaire responses containing financial data
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 7 */}
          <h2>7. Disclosure of Your Information</h2>

          <h3>7.1 We Do Not Sell Your Personal Information</h3>
          <p>
            We do not sell, rent, or trade your nonpublic personal information
            or personal information to any third party for any purpose.
          </p>

          <h3>7.2 Permitted Disclosures</h3>
          <p>We may disclose your information only in the following circumstances:</p>
          <ul>
            <li>
              To our custodian and service providers as necessary to deliver
              advisory services
            </li>
            <li>
              To comply with applicable laws, regulations, or legal proceedings
            </li>
            <li>
              To respond to regulatory examinations or investigations
            </li>
            <li>
              To protect our rights, privacy, safety, or property
            </li>
            <li>With your express written consent</li>
          </ul>

          <h3>7.3 Opt-Out Rights</h3>
          <p>
            You have the right to opt out of certain information sharing. To
            exercise this right, contact us at{" "}
            <a href="mailto:josh@wealthinyourself.com">
              josh@wealthinyourself.com
            </a>
            . We will process your request within 30 days.
          </p>

          {/* Section 8 */}
          <h2>8. California Consumer Privacy Act (CCPA) Disclosures</h2>

          <h3>8.1 Your Rights Under the CCPA</h3>
          <p>
            If you are a California resident, you have the following rights
            under the CCPA:
          </p>
          <ul>
            <li>
              <strong>Right to Know:</strong> You may request that we disclose
              the categories and specific pieces of personal information we have
              collected about you.
            </li>
            <li>
              <strong>Right to Delete:</strong> You may request that we delete
              personal information we have collected, subject to certain
              exceptions required by law or regulation.
            </li>
            <li>
              <strong>Right to Non-Discrimination:</strong> We will not
              discriminate against you for exercising any of your CCPA rights.
            </li>
          </ul>

          <h3>8.2 Categories of Personal Information Collected</h3>
          <p>
            We collect the categories of personal information described in
            Section 3 of this policy, including identifiers, financial
            information, professional information, and internet activity data.
          </p>

          <h3>8.3 Business Purpose for Collection</h3>
          <p>
            We collect personal information for the business purposes described
            in Section 4 of this policy.
          </p>

          <h3>8.4 Sale of Personal Information</h3>
          <p>
            We have not sold personal information in the preceding 12 months and
            do not sell personal information.
          </p>

          <h3>8.5 Exercising Your Rights</h3>
          <p>
            To exercise your CCPA rights, contact us at{" "}
            <a href="mailto:josh@wealthinyourself.com">
              josh@wealthinyourself.com
            </a>
            . We will verify your identity before processing your request and
            respond within 45 days.
          </p>

          <h3>8.6 Authorized Agents</h3>
          <p>
            You may designate an authorized agent to submit a request on your
            behalf. We may require proof of the agent&apos;s authorization and
            verify your identity directly.
          </p>

          {/* Section 9 */}
          <h2>9. Data Retention</h2>
          <p>
            We retain your information for the following minimum periods in
            accordance with regulatory requirements:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-neutral-300 text-base">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="border border-neutral-300 px-4 py-2 text-left font-semibold">
                    Record Type
                  </th>
                  <th className="border border-neutral-300 px-4 py-2 text-left font-semibold">
                    Retention Period
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Client advisory records
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Minimum 5 years
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Financial plans
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    6 years
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Meeting recordings
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Duration of engagement plus 5 years
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Marketing records
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    5 years
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Billing records
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    7 years
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 10 */}
          <h2>10. Data Security</h2>
          <p>
            We implement the following security measures to protect your
            information:
          </p>
          <ul>
            <li>
              Encryption of data in transit (TLS/SSL) and at rest where
              supported by our service providers
            </li>
            <li>
              Multi-factor authentication on all systems containing client data
            </li>
            <li>
              Role-based access controls limiting data access to authorized
              personnel
            </li>
            <li>
              Regular review of third-party service provider security practices
            </li>
            <li>
              Secure disposal of records containing personal information
            </li>
            <li>
              Password-protected and encrypted devices used for advisory
              operations
            </li>
            <li>
              Ongoing monitoring for unauthorized access or suspicious activity
            </li>
          </ul>

          {/* Section 11 */}
          <h2>11. Breach Notification</h2>

          <h3>11.1 What Constitutes a Breach</h3>
          <p>
            A data breach occurs when there is unauthorized access to, or
            acquisition of, unencrypted personal information that compromises
            the security, confidentiality, or integrity of the information.
          </p>

          <h3>11.2 Notification Commitment</h3>
          <p>
            In the event of a data breach affecting your personal information,
            we will notify you within 60 days of discovery. We will also notify
            the Nevada Attorney General as required by Nevada Revised Statutes
            Chapter 603A.
          </p>

          {/* Section 12 */}
          <h2>12. Annual Notice</h2>
          <p>
            We will provide you with a copy of this privacy policy annually, as
            required by Regulation S-P. The most current version is always
            available on our website at wealthinyourself.com/privacy-policy.
          </p>

          {/* Section 13 */}
          <h2>13. Website Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            improve your browsing experience and analyze website traffic. We use
            analytics tools to understand how visitors interact with our
            website. This data is collected in aggregate and does not identify
            individual visitors.
          </p>
          <p>
            When you submit your email address to receive a lead magnet or
            resource, your email is used solely to deliver the requested content
            and, if you opt in, to send periodic educational communications. You
            may unsubscribe at any time.
          </p>
          <p>
            You may disable cookies in your browser settings. Doing so may
            affect your experience on our website but will not affect your
            access to our advisory services.
          </p>

          {/* Section 14 */}
          <h2>14. Your Consent to AI Processing</h2>
          <p>
            By engaging our advisory services, you consent to the use of
            artificial intelligence tools as described in Section 5 of this
            policy. If you have questions or concerns about our use of AI, or if
            you wish to opt out of certain AI processing, please contact us at{" "}
            <a href="mailto:josh@wealthinyourself.com">
              josh@wealthinyourself.com
            </a>
            .
          </p>

          {/* Section 15 */}
          <h2>15. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, or regulatory requirements. We
            will notify you of material changes by posting the updated policy on
            our website and, for current clients, by providing notice through
            our regular communication channels. The &ldquo;Last updated&rdquo;
            date at the top of this page indicates when this policy was last
            revised.
          </p>

          {/* Section 16 */}
          <h2>16. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise
            any of your rights, please contact us:
          </p>
          <p>
            <strong>Wealth In Yourself</strong>
            <br />
            Josh St. Laurent, CFP&reg;, CFT&trade;, APFC&reg;, ACC
            <br />
            Email:{" "}
            <a href="mailto:josh@wealthinyourself.com">
              josh@wealthinyourself.com
            </a>
            <br />
            Website:{" "}
            <a
              href="https://wealthinyourself.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wealthinyourself.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
