import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32 text-center">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-lg text-neutral-dark/70">
          This page doesn&apos;t exist. Maybe it never did. Maybe it moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
