import type { Metadata } from "next";
import PolicyContent from "./policy.mdx";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Wealth In Yourself privacy policy. How we collect, use, and protect your personal information.",
};

// Legal copy lives in ./policy.mdx (attested RIA legal surface — rendered
// text must not change without compliance review). This file is only the
// layout shell: hero banner + prose container.
export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-primary py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Posted: June 8, 2026 &middot; Effective: June 8, 2026
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral prose-lg">
          <PolicyContent />
        </div>
      </section>
    </>
  );
}
