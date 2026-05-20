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
            Posted: May 20, 2026 &middot; Effective: May 20, 2026
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral prose-lg">
          {/* Section 1 */}
          <h2>1. Firm Identification</h2>
          <p>
            Wealth In Yourself LLC is a registered investment adviser with the
            State of Nevada. CRD #322123.
          </p>
          <ul>
            <li>
              <strong>Principal:</strong> Josh St. Laurent, MS, CFP&reg;,
              CFT&trade;, APFC&reg;, ACC
            </li>
            <li>
              <strong>Principal Office:</strong> 195 Highway 50 STE 205, Zephyr
              Cove, NV 89448
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
            This Privacy Policy describes how Wealth In Yourself LLC (&ldquo;the
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
            communications, meeting recordings, technology systems used in the
            delivery of advisory services, and automated and
            artificial-intelligence-assisted systems used in our planning and
            operational workflows.
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
            <li>
              Structured data fields and signal patterns extracted automatically
              from your communications and meeting transcripts &mdash; these
              include action items, scheduling commitments, and financial figures
              referenced in conversation; life-event details and personal
              preferences mentioned during sessions (for example, family
              milestones, recreational interests, or personal details that
              support relationship care); and financial life planning signals
              (for example, the specific language you use when discussing money,
              values-related statements, planning-relevant disclosures, and
              behavioral patterns that inform our advisory methodology). Where
              the precise language matters for planning purposes, verbatim quotes
              may be preserved alongside the structured signal. These signals are
              classified by type, stored in your client record, and subject to
              access controls limiting downstream use to advisory and
              relationship management functions.
            </li>
            <li>
              Operational context derived from interaction patterns (for example,
              frequency and timing of communications, response patterns, and
              engagement indicators that inform service delivery)
            </li>
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
            <li>
              Account aggregation and transaction data from financial accounts
              you authorize through Plaid-enabled services such as Monarch Money
              (you authorize the data connection directly with the aggregation
              service; we receive the resulting financial information for your
              planning)
            </li>
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
            <li>
              Aggregating context across our systems before client meetings to
              support thorough preparation (for example, surfacing prior
              conversations, prior decisions, and current account state in a
              single advisor view)
            </li>
            <li>
              Extracting structured information from communications and meetings
              to populate client records and reduce manual entry (for example,
              capturing action items, dates, and decisions in your client record
              automatically)
            </li>
            <li>
              Surfacing relationship-care moments based on patterns and personal
              details we observe in your communications and meetings &mdash;
              including life milestones, personal preferences, and relationship
              details you share &mdash; to support thoughtful, personalized
              advisory service and, where appropriate, relationship-care
              gestures. This includes an automated process that queues candidate
              relationship-care moments for advisor review before any action is
              taken; no gesture is sent without Josh&apos;s direct authorization.
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
          <p>
            We use artificial intelligence systems, primarily Anthropic&apos;s
            Claude, to support the following advisory and operational functions:
          </p>
          <ul>
            <li>
              <strong>Meeting transcript summarization</strong> &mdash;
              generating summaries of recorded meetings for advisor review and
              client deliverables
            </li>
            <li>
              <strong>Action item and structured data extraction</strong>{" "}
              &mdash; identifying commitments, dates, decisions, and other
              structured information from meeting transcripts and
              communications, then populating your client record
            </li>
            <li>
              <strong>Email triage and drafting</strong> &mdash; categorizing
              inbound communications and drafting response options for advisor
              review
            </li>
            <li>
              <strong>Content creation and review support</strong> &mdash;
              drafting marketing communications, blog posts, and educational
              content for advisor review prior to publication
            </li>
            <li>
              <strong>Dashboard and workflow management</strong> &mdash;
              automating routine record-keeping operations and surfacing tasks
              for advisor attention
            </li>
            <li>
              <strong>Scheduling and calendar automation</strong> &mdash;
              facilitating meeting coordination
            </li>
            <li>
              <strong>Financial plan preparation support</strong> &mdash;
              drafting components of financial plans and analyses for advisor
              review and refinement
            </li>
            <li>
              <strong>Pre-meeting context aggregation</strong> &mdash;
              assembling relevant prior context from across firm systems to
              support advisor preparation for upcoming client meetings
            </li>
            <li>
              <strong>Real-time in-meeting advisory query</strong> &mdash; during
              live client meetings, Josh may query an AI system with short,
              advisor-facing questions to surface relevant prior signals,
              planning angles, and methodology prompts from your client record.
              This surface is operator-facing only (displayed on Josh&apos;s
              secondary device or screen, not visible to you); you do not
              interact with the AI system directly. Queries are limited in
              number per meeting session, and each query generates an audit log
              entry recording that the query occurred and the volume of client
              data referenced (no raw query text or response text is retained in
              audit logs). This surface processes data for clients with active
              advisory engagements per the AI processing consent described in
              Section 14. A request to opt out of AI processing under Section
              14 initiates service termination as described therein.
            </li>
            <li>
              <strong>Hospitality moment surfacing</strong> &mdash; identifying
              opportunities for relationship-care gestures based on patterns
              observed in our interactions with you
            </li>
          </ul>

          <h3>5.2 Human Oversight Commitment</h3>
          <p>
            All AI-generated outputs that are client-facing or that inform
            advisory recommendations are reviewed by Josh St. Laurent before
            delivery to you. AI systems do not autonomously send communications,
            execute transactions, or render advice without advisor review.
          </p>

          <h3>5.3 AI Data Handling</h3>
          <p>
            Client data processed by AI systems is subject to the same
            confidentiality protections that apply to all client data under this
            policy. Our AI processing relationship with Anthropic operates under
            contractual terms that prohibit use of customer inputs and outputs
            for AI model training. Anthropic&apos;s commercial terms also limit
            retention of inputs and outputs to a brief period for safety review,
            after which the data is deleted from Anthropic&apos;s systems.
          </p>
          <p>
            We do not use client data to train AI models. We do not sell, share,
            or otherwise disclose client data to third parties for AI training or
            development purposes.
          </p>

          {/* Section 6 */}
          <h2>6. Third-Party Service Providers</h2>
          <p>
            We engage the following third-party service providers in the
            delivery of our advisory services. Each provider receives only the
            minimum information necessary to perform its function. We
            periodically review the security and privacy practices of our
            service providers, and we maintain written agreements with service
            providers who handle nonpublic personal information that include
            contractual data protection requirements consistent with applicable
            regulations, including amended Regulation S-P.
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
                    Custodian (Primary)
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
                    Custodian (Secondary)
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Interactive Brokers
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Assets, PII, account data, transaction instructions for
                    clients with accounts at this custodian
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Customer Relationship Management
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    GoHighLevel
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Contact information, communication history, custom fields
                    containing financial context, pipeline status, call
                    recordings, SMS and email content
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Internal Workspace
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Notion
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Client names, meeting notes, action items, dashboard data
                    used for advisor-internal record-keeping
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Cloud Workspace
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Google Workspace (Gmail, Calendar, Drive)
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Email communications, calendar events, document storage,
                    file storage
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Database and Authentication Platform
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Supabase
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    All client data, including PII, financial records, meeting
                    records, action items, and audit logs
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
                    Financial data, goals, projections, financial plan
                    deliverables
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
                    Bank and credit account data, income, expenses,
                    transaction-level activity
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
                    AI Processing
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Anthropic (Claude)
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Meeting transcripts, communication content, financial
                    context provided in prompts, content drafts, structured data
                    extraction inputs and outputs
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Video Conferencing and Transcription
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Zoom
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Meeting recordings (audio and video), VTT transcripts,
                    participant identifiers, meeting metadata
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Digital Signatures (transitioning)
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Adobe Sign
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Historical signed agreements containing PII; new agreements
                    transitioning to GoHighLevel Documents
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
                    Questionnaire responses containing financial and personal
                    data
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Newsletter Distribution
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Substack
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Email address and subscription engagement data for clients
                    and prospects who subscribe to firm communications
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Web Hosting and Operational Portal Infrastructure
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Vercel
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Hosting infrastructure for firm websites, client portal
                    session data, and operational portal infrastructure; client
                    data flows through Vercel infrastructure when client portal
                    is in active use
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Authentication Session Storage
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Upstash Redis
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Authentication session tokens for portal access; no client
                    financial data stored
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Transactional and Workflow Email
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Resend
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Email addresses, email subject lines, and email content for
                    firm-originated communications, including transactional
                    alerts and automated workflow communications routed from our
                    CRM (GoHighLevel) infrastructure
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Content Delivery and DNS
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Cloudflare
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    DNS resolution, web property uptime monitoring; request
                    metadata only, no client financial data
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Workflow Automation
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Zapier
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Limited transient data flow between firm systems and
                    connected services
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Website Analytics
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Google Analytics (GA4)
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Aggregated website visitor data including IP address and
                    pages viewed; visitor data is anonymized and does not
                    identify individual visitors
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
          <p>
            We may disclose your information only in the following
            circumstances:
          </p>
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
            <li>
              <strong>Right to Opt Out of AI Processing:</strong> You may
              request that we suspend AI-assisted processing of your
              information. Because AI processing is structurally integral to
              our advisory methodology, this request is operationalized as
              service termination per the engagement letter, as further
              described in Section 14 of this policy.
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
                    Minimum 5 years from last activity
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
                    Meeting recordings and transcripts
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Duration of engagement plus 5 years
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Marketing records and advertisements
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    5 years from last use
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
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    Communications (email, CRM-recorded interactions)
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    5 years from creation, with first 2 years easily accessible
                    per Books and Records Rule 204-2
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    System audit logs
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    5 years from creation
                  </td>
                </tr>
                <tr>
                  <td className="border border-neutral-300 px-4 py-2">
                    AI processing inputs and outputs (Anthropic)
                  </td>
                  <td className="border border-neutral-300 px-4 py-2">
                    Brief retention period per Anthropic&apos;s commercial terms
                    (typically 30 days for safety review), then deleted from
                    Anthropic&apos;s systems; firm-side retention applies to any
                    AI outputs we incorporate into client deliverables,
                    communications, or records
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
              Encryption at rest within our primary database (Supabase) using
              industry-standard encryption protocols
            </li>
            <li>
              Multi-factor authentication on all systems containing client data,
              mandatory for all firm personnel
            </li>
            <li>
              Role-based access controls limiting data access to authorized
              personnel
            </li>
            <li>
              Database-level row-level security policies on client-data tables,
              ensuring data is accessible only to authorized parties at the
              database query layer
            </li>
            <li>
              Application-level audit logging on read and write operations
              affecting client data, with logs retained for compliance and
              security review
            </li>
            <li>
              Regular review of third-party service provider security practices
            </li>
            <li>
              Designed data residency: client data stored in Supabase
              infrastructure in the United States; AI processing inputs and
              outputs handled per Anthropic&apos;s contractual terms
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
            <li>
              An incident response plan that specifies detection, containment,
              notification, and remediation procedures in the event of a
              security incident
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
            we will notify you as promptly as practicable and in no case later
            than 30 days after we determine a breach has occurred that requires
            notification, in accordance with the SEC&apos;s amended Regulation
            S-P (effective June 3, 2026) and Nevada Revised Statutes Chapter
            603A. This notification obligation extends to prospective clients
            whose nonpublic personal information may have been affected by a
            breach, consistent with amended Regulation S-P coverage of customer
            information. We will also notify the Nevada Attorney General as
            required by Nevada Revised Statutes Chapter 603A and any other
            regulators with notification rights.
          </p>

          {/* Section 12 */}
          <h2>12. Annual Notice</h2>
          <p>
            We will provide you with a copy of this privacy policy annually, as
            required by Regulation S-P. The most current version is always
            available on our website at{" "}
            <a
              href="https://wealthinyourself.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              wealthinyourself.com/privacy-policy
            </a>
            .
          </p>

          {/* Section 13 */}
          <h2>13. Website Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to
            improve your browsing experience and analyze website traffic. We use
            Google Analytics (GA4) and similar analytics tools to understand how
            visitors interact with our website. This data is collected in
            aggregate and does not identify individual visitors.
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
            Wealth In Yourself&apos;s advisory methodology depends on
            artificial intelligence-assisted processing as described in Section
            5 of this policy. AI processing is integral to the planning
            workflow, deliverable preparation, meeting documentation, and
            Books-and-Records retention discipline that comprise our service.
          </p>
          <p>
            When you engage our advisory services &mdash; beginning with
            booking a consultation through our intake surfaces &mdash; you
            consent to the AI processing described in Section 5. Acceptance of
            this Privacy Policy is a prerequisite to scheduling a consultation;
            the advisory relationship does not begin without this consent.
          </p>

          <h3>Your Right to Limit AI Processing and Operational Consequence</h3>
          <p>
            You retain your statutory right under the California Consumer
            Privacy Act and Nevada Revised Statutes Chapter 603A to request
            that we suspend AI-assisted processing of your data at any time by
            contacting us at{" "}
            <a href="mailto:josh@wealthinyourself.com">
              josh@wealthinyourself.com
            </a>
            . We will honor this request promptly.
          </p>
          <p>
            Because AI processing is structurally integral to our advisory
            methodology, a request to suspend AI processing is operationalized
            as a request to end the advisory relationship under the termination
            clause of your engagement letter. We do not maintain a parallel
            manual-only service path. Upon receipt of an opt-out request:
          </p>
          <ul>
            <li>
              We will confirm receipt within five business days
            </li>
            <li>
              Your client record will be flagged to exclude AI processing
              across our systems
            </li>
            <li>
              Service termination procedures will commence per the termination
              clause of your engagement letter, without fee or penalty upon
              written notice
            </li>
            <li>
              Manual handling will replace automated processing during the
              thirty-day operational implementation window required to close
              out any in-flight work and arrange the orderly transition of your
              records
            </li>
            <li>
              We will confirm operational implementation within thirty days
            </li>
            <li>
              Your right to non-discrimination under the CCPA is preserved: the
              decision to opt out does not affect any other right you hold,
              including your rights to know, access, and request deletion of
              your information
            </li>
          </ul>
          <p>
            You may revoke an opt-out request at any time prior to the
            completion of service termination by contacting us. We will resume
            AI processing of your data only after explicit confirmation from
            you that the opt-out is withdrawn. If service termination has
            completed, re-engagement requires a new engagement letter and a
            fresh acceptance of this Privacy Policy.
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
            <strong>Wealth In Yourself LLC</strong>
            <br />
            Josh St. Laurent, MS, CFP&reg;, CFT&trade;, APFC&reg;, ACC
            <br />
            195 Highway 50 STE 205
            <br />
            Zephyr Cove, NV 89448
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

          {/* Section 17 */}
          <h2>17. Automated Decisioning and Data Subject Rights</h2>
          <p>
            Our advisory services are delivered by Josh St. Laurent personally.
            While AI systems support our operations as described in Section 5,
            no decision affecting your account, your investments, your fees, or
            your advisory relationship is rendered by an AI system without human
            review and approval. AI systems extract structured information,
            draft communications, summarize meetings, and surface tasks for
            advisor attention; advisor judgment determines how to act on those
            outputs in your interest.
          </p>
          <p>
            You have the following rights with respect to AI-assisted processing
            of your data:
          </p>
          <ul>
            <li>
              <strong>Right to know how AI is used:</strong> Section 5 of this
              policy describes the categories of AI usage in our practice. You
              may request additional detail by contacting us.
            </li>
            <li>
              <strong>Right to opt out:</strong> You may exercise the AI
              opt-out described in Section 14 at any time. Because AI
              processing is structurally integral to our methodology, an
              opt-out request is operationalized as service termination, as
              described in Section 14.
            </li>
            <li>
              <strong>Right to human review:</strong> Any output that an AI
              system produces about your account is reviewed by Josh St. Laurent
              before it informs advisory recommendations or is delivered to you.
              You may request additional information about the human review
              process for any specific deliverable.
            </li>
            <li>
              <strong>Right to challenge AI outputs:</strong> If you believe an
              AI-generated output (for example, a meeting summary, a financial
              plan draft, or a communication) inaccurately reflects your
              situation or our discussion, you may request correction; we will
              review and respond.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
