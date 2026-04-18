import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = process.env.NEXT_PUBLIC_ENVIRONMENT === "production"
  ? "https://wealthinyourself.com"
  : "https://wiy-marketing-staging.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/calculator",
    "/contact",
    "/virtual-family-office",
    "/for-business-owners",
    "/for-real-estate-investors",
    "/for-fire-followers",
    "/case-studies",
    "/vs-aum",
    "/blog",
    "/faq",
  ];

  const posts = getAllPosts();

  return [
    ...staticPages.map((page) => ({
      url: `${BASE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    })),
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
