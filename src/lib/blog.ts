import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  draft?: boolean;
  /** Optional FAQ pairs from frontmatter — rendered as FAQPage JSON-LD on the post page. */
  faqs?: BlogFaq[];
}

// Fail CLOSED: drafts are hidden if ANY signal says we're in production.
// VERCEL_ENV is reliably "production" on Vercel prod deploys even when
// NEXT_PUBLIC_ENVIRONMENT is unset — so an un-cleared draft can never leak to
// the public site by relying on a single env var being configured.
const isProduction =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ||
  process.env.VERCEL_ENV === "production" ||
  process.env.NODE_ENV === "production";
// Preview deployments build with NODE_ENV=production, which used to hide
// drafts there too. VERCEL_ENV === "preview" is set by Vercel ONLY on
// preview deploys (never on production promotions), so this keeps prod
// fail-closed while letting PR previews render draft posts for review
// (blog-pipeline review flow, 2026-07-06).
const showDrafts = process.env.VERCEL_ENV === "preview" || !isProduction;

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    // nosemgrep: javascript.lang.security.audit.path-traversal.path-join-resolve-traversal.path-join-resolve-traversal -- file from readdirSync of fixed BLOG_DIR, filtered to .mdx; not user input
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      author: data.author || "Joshua St. Laurent",
      tags: data.tags || [],
      content,
      draft: data.draft === true,
      faqs: Array.isArray(data.faqs)
        ? data.faqs.filter(
            (f: BlogFaq) =>
              f && typeof f.question === "string" && typeof f.answer === "string"
          )
        : undefined,
    };
  });

  return posts
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}
