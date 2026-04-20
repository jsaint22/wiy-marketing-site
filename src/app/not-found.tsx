import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-secondary font-semibold text-sm tracking-wide uppercase">
          Page Not Found
        </p>
        <h1 className="mt-2 text-5xl sm:text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-lg text-neutral-dark/70">
          This page doesn&apos;t exist. But you&apos;re here, so let&apos;s
          get you somewhere useful.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto">
          <Link
            href="/our-process"
            className="block p-4 bg-neutral-bg rounded-lg hover:bg-neutral-bg/80 transition-colors"
          >
            <p className="font-semibold text-primary text-sm">How We Work</p>
            <p className="text-xs text-neutral-dark/70 mt-1">
              Flat-fee, fiduciary, Virtual Family Office.
            </p>
          </Link>
          <Link
            href="/pricing"
            className="block p-4 bg-neutral-bg rounded-lg hover:bg-neutral-bg/80 transition-colors"
          >
            <p className="font-semibold text-primary text-sm">Pricing</p>
            <p className="text-xs text-neutral-dark/70 mt-1">
              See exactly what you&apos;d pay. No surprises.
            </p>
          </Link>
          <Link
            href="/blog"
            className="block p-4 bg-neutral-bg rounded-lg hover:bg-neutral-bg/80 transition-colors"
          >
            <p className="font-semibold text-primary text-sm">Blog</p>
            <p className="text-xs text-neutral-dark/70 mt-1">
              Thinking out loud about money and life planning.
            </p>
          </Link>
          <Link
            href="/faq"
            className="block p-4 bg-neutral-bg rounded-lg hover:bg-neutral-bg/80 transition-colors"
          >
            <p className="font-semibold text-primary text-sm">FAQ</p>
            <p className="text-xs text-neutral-dark/70 mt-1">
              Straight answers. No fine print.
            </p>
          </Link>
        </div>

        <p className="mt-8 text-sm text-neutral-dark/70">
          Existing client?{" "}
          <a
            href="https://portal.wealthinyourself.com"
            className="text-primary font-medium hover:text-secondary transition-colors"
          >
            Log in to your portal &rarr;
          </a>
        </p>

        <Link
          href="/"
          className="inline-block mt-10 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
