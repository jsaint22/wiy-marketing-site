import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllEpisodes } from "@/lib/podcast";

const BASE_URL = process.env.NEXT_PUBLIC_ENVIRONMENT === "production"
  ? "https://wealthinyourself.com"
  : "https://wiy-marketing-site.vercel.app";

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
    "/podcast",
    "/re-investor-checklist",
    "/business-owner-roadmap",
    "/w2-escape-plan",
    "/fiduciary",
    "/for-partners",
    "/financial-planner-lake-tahoe",
    "/our-process",
    "/aum-math",
    "/disclosures",
    "/privacy-policy",
    "/w2-escape-plan",
  ];

  const posts = getAllPosts();
  const episodes = getAllEpisodes();

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
    ...episodes.map((ep) => ({
      url: `${BASE_URL}/podcast/${ep.slug}`,
      lastModified: new Date(ep.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
