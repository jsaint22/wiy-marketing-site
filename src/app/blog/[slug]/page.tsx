import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
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

  return (
    <article className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm text-neutral-dark/50 hover:text-primary transition-colors"
        >
          &larr; Back to blog
        </Link>

        <header className="mt-6 mb-10">
          <time className="text-sm text-neutral-dark/50">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-primary">
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-dark/60">
            By {post.author}
          </p>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-a:text-primary prose-a:font-semibold hover:prose-a:text-secondary prose-strong:text-neutral-dark">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
