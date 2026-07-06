import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import NewsletterCTA from "@/components/NewsletterCTA";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Founder & Financial Planner",
      worksFor: {
        "@type": "Organization",
        name: "Wealth In Yourself",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Wealth In Yourself",
      url: "https://wealthinyourself.com",
    },
  };

  // FAQPage structured data — populated by the blog pipeline's faqs
  // frontmatter (Google + AI search read this).
  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="bg-white py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-sm text-neutral-dark/70 hover:text-primary transition-colors"
          >
            &larr; Back to blog
          </Link>

          <header className="mt-6 mb-10">
            <div className="flex items-center gap-3 mb-3">
              <time className="text-sm text-neutral-dark/70">
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
            <h1 className="text-3xl sm:text-4xl font-bold text-primary leading-tight">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-primary prose-a:font-semibold hover:prose-a:text-secondary prose-strong:text-neutral-dark">
            <MDXRemote source={post.content} />
          </div>

          {/* Compliance footer */}
          <footer className="mt-12 pt-6 border-t border-neutral-bg">
            <p className="text-xs text-neutral-dark/70 italic leading-relaxed">
              Educational content only. Not financial, tax, or legal advice. This
              post reflects the views of Joshua St. Laurent as of the publish date
              and is not a recommendation to buy, sell, or hold any security.
              Illustrations and numbers are hypothetical; your situation is unique.
              Consult a qualified fiduciary advisor before making financial
              decisions. Wealth In Yourself LLC is a Registered Investment Adviser
              with the State of Nevada.
            </p>
          </footer>

          {/* Author bio */}
          <div className="mt-14 pt-8 border-t border-neutral-dark/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
                J
              </div>
              <div>
                <p className="font-semibold text-primary">{post.author}, MS, CFP®, CFT™, APFC®, ACC</p>
                <p className="text-sm text-neutral-dark/70 mt-1">
                  Founder of Wealth In Yourself. Flat-fee fiduciary for
                  entrepreneurs, RE investors, and people building life on their
                  own terms. Based at Lake Tahoe.
                </p>
              </div>
            </div>
          </div>

          {/* Conversion bridge */}
          <div className="mt-10 pt-8 border-t border-neutral-dark/10 bg-neutral-bg rounded-xl p-6 sm:p-8 text-center">
            <p className="text-lg font-bold text-primary">
              Want to talk about how this applies to your situation?
            </p>
            <p className="mt-2 text-sm text-neutral-dark/70">
              15 minutes. No pitch. Just a real conversation about what you&rsquo;re building.
            </p>
            <a
              href="https://cal.com/jsaint/intro-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book your free intro call
            </a>
          </div>

          {/* Prev / Next */}
          {(prevPost || nextPost) && (
            <nav className="mt-10 pt-8 border-t border-neutral-dark/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group"
                >
                  <p className="text-xs text-neutral-dark/70 mb-1">Previous</p>
                  <p className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                    &larr; {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group sm:text-right"
                >
                  <p className="text-xs text-neutral-dark/70 mb-1">Next</p>
                  <p className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                    {nextPost.title} &rarr;
                  </p>
                </Link>
              )}
            </nav>
          )}
        </div>
      </article>

      {/* Newsletter subscribe */}
      <section className="bg-neutral-bg py-10 sm:py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterCTA variant="inline" />
        </div>
      </section>
    </>
  );
}
