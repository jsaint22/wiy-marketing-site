import type { Metadata } from "next";

import IntakeForm from "@/components/IntakeForm";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Five-minute intake. Six short questions. Then book your 60-minute Getting Acquainted call with Joshua St. Laurent, CFP®, CFT™, APFC®, ACC — flat-fee fiduciary financial planning from Lake Tahoe, Nevada.",
};

export default function GetStartedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Five minutes now. A real conversation next.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 leading-relaxed">
            The more I know going in, the better the first conversation. Walk
            me through your picture below, and I&rsquo;ll come prepared.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16 bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <IntakeForm brand="wiy" gaPath="/get-acquainted" />
        </div>
      </section>

      {/* What happens next */}
      <section className="py-12 bg-white border-t border-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">
            What happens next
          </h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <Step
              n={1}
              title="You submit"
              body="Takes about 5 minutes. The financial picture, the human picture, and consent."
            />
            <Step
              n={2}
              title="You book a 60-min call"
              body="Pick any open slot. This is the Getting Acquainted call — we go deeper, and we both decide if working together is the right move."
            />
            <Step
              n={3}
              title="I come prepared"
              body="By the time we talk, I've read everything you shared. No questionnaires on the call. We use the hour for the real conversation."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex w-12 h-12 rounded-full bg-secondary/10 items-center justify-center mb-4">
        <span className="text-xl font-bold text-secondary">{n}</span>
      </div>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-neutral-dark/70 leading-relaxed">{body}</p>
    </div>
  );
}
