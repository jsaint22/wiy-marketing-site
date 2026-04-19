import type { MetadataRoute } from "next";

const isStaging = process.env.NEXT_PUBLIC_ENVIRONMENT !== "production";

export default function robots(): MetadataRoute.Robots {
  if (isStaging) {
    return {
      rules: { userAgent: "*", allow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://wealthinyourself.com/sitemap.xml",
  };
}
