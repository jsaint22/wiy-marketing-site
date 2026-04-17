import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
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
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary">Blog</h1>
          <p className="mt-4 text-lg text-neutral-dark/70">
            Thinking out loud about money, life planning, and the advisory
            industry.
          </p>

          <div className="mt-12 space-y-10">
            {posts.length === 0 ? (
              <p className="text-neutral-dark/50">No posts yet. Check back soon.</p>
            ) : (
              posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <time className="text-sm text-neutral-dark/50">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h2 className="mt-1 text-xl font-bold text-primary group-hover:text-secondary transition-colors">
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
    </>
  );
}
