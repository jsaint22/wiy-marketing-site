import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on flat-fee financial planning, tax strategy, real estate investing, and designing your life on your own terms.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">Blog</h1>
          <p className="mt-4 text-lg text-neutral-dark/70 max-w-2xl">
            Thinking out loud about money, life planning, and the advisory
            industry. No jargon walls. No clickbait. Just the stuff worth
            reading twice.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {posts.length === 0 ? (
              <p className="text-neutral-dark/50">No posts yet. Check back soon.</p>
            ) : (
              posts.map((post, idx) => (
                <article
                  key={post.slug}
                  className={`group py-8 ${idx !== 0 ? "border-t border-neutral-dark/10" : ""}`}
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="flex items-center gap-3 mb-2">
                      <time className="text-sm text-neutral-dark/50">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {post.tags.length > 0 && (
                        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
                          {post.tags[0]}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-neutral-dark/70 leading-relaxed">
                      {post.description}
                    </p>
                    <span className="inline-block mt-3 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                      Read more &rarr;
                    </span>
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <CTASection variant="light" />
    </>
  );
}
