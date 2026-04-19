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
            Last updated: April 19, 2026
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral prose-lg">
          <h2>Privacy Notice</h2>
          <p>
            Investment advisers are required by law to inform their clients of
            their policies regarding privacy of client information. We are bound
            by professional standards of confidentiality that are even more
            stringent than those required by law. Federal law gives customers the
            right to limit some but not all sharing of personal information. It
            also requires us to tell you how we collect, share, and protect your
            personal information.
          </p>

          <h2>Types of Nonpublic Personal Information (NPI) We Collect</h2>
          <p>
            We collect NPI about you that is either provided to us by you or
            obtained by us with your authorization. This can include but is not
            limited to your Social Security Number, Date of Birth, Banking
            Information and Financial Account Numbers and/or Balances, Sources of
            Income, Credit Card Numbers, or other information. When you are no
            longer our customer, we may continue to share your information only
            as described in this notice.
          </p>

          <h2>Parties to Whom We Disclose Information</h2>
          <p>
            All Investment Advisers may need to share NPI to run their everyday
            business. We may share your personal information:
          </p>
          <ul>
            <li>
              For everyday business purposes — such as processing your
              transactions, maintaining your account(s), responding to court
              orders and legal investigations, or reporting to credit bureaus.
            </li>
            <li>For our marketing — to offer our products and services to you.</li>
          </ul>
          <p>
            If you are a new customer, we may begin sharing your information on
            the day you sign our agreement. When you are no longer our customer,
            we may continue to share your information as described in this
            notice. However, you can contact us at any time to limit our sharing.
          </p>

          <h2>Protecting Confidentiality</h2>
          <p>
            To protect your personal information from unauthorized access and
            use, we use security measures that comply with federal law, including
            computer safeguards and secured files and buildings.
          </p>

          <h2>Your Rights — Opting In and Opting Out</h2>
          <p>
            Federal law allows you the right to limit the sharing of your NPI by
            &ldquo;opting out&rdquo; of the following: sharing for
            affiliates&apos; everyday business purposes, sharing information about
            your creditworthiness, or sharing with affiliates or non-affiliates
            who use your information to market to you.
          </p>
          <p>
            To limit our sharing or for questions, contact us at{" "}
            <a href="mailto:josh@wealthinyourself.com">
              josh@wealthinyourself.com
            </a>{" "}
            or call (415) 915-5948.
          </p>

          <h2>Website Data Collection</h2>
          <p>
            When you visit our website, we may collect information about your
            browser type, IP address, and pages visited. This information is used
            to improve our website and is not shared with third parties for
            marketing purposes.
          </p>
          <p>
            When you submit your email address to receive a lead magnet or
            resource, your email is used solely to deliver the requested content
            and, if you opt in, to send periodic educational communications. You
            may unsubscribe at any time.
          </p>

          <h2>Contact</h2>
          <p>
            Wealth In Yourself
            <br />
            195 Highway 50, Suite 205
            <br />
            Zephyr Cove, NV 89448
            <br />
            (415) 915-5948
            <br />
            <a href="mailto:josh@wealthinyourself.com">
              josh@wealthinyourself.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
