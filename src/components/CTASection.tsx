import Link from "next/link";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "primary" | "light";
}

export default function CTASection({
  headline = "Ready to design the life this money is supposed to fund?",
  subtext = "Book a 15-minute intro call. No pitch. No pressure. Just a conversation about what matters to you.",
  buttonText = "Book Your Intro Call",
  buttonHref = "https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call",
  variant = "primary",
}: CTASectionProps) {
  const isPrimary = variant === "primary";
  const isExternal = buttonHref.startsWith("http");

  const linkClasses = `inline-block mt-8 px-8 py-3.5 font-semibold rounded-lg transition-colors ${
    isPrimary
      ? "bg-secondary text-primary hover:bg-secondary/90"
      : "bg-primary text-white hover:bg-primary/90"
  }`;

  return (
    <section
      className={`py-10 sm:py-14 ${
        isPrimary ? "bg-primary text-white" : "bg-neutral-bg"
      }`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold ${
            isPrimary ? "text-white" : "text-primary"
          }`}
        >
          {headline}
        </h2>
        <p
          className={`mt-4 text-lg ${
            isPrimary ? "text-white/80" : "text-neutral-dark/70"
          }`}
        >
          {subtext}
        </p>
        {isExternal ? (
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClasses}
          >
            {buttonText}
          </a>
        ) : (
          <Link href={buttonHref} className={linkClasses}>
            {buttonText}
          </Link>
        )}
      </div>
    </section>
  );
}
