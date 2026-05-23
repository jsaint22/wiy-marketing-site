import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Client portal shortcut
      { source: "/portal", destination: "https://portal.wealthinyourself.com", permanent: false },
      { source: "/login", destination: "https://portal.wealthinyourself.com", permanent: false },
      // WordPress core page redirects
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
      { source: "/about-2", destination: "/about", permanent: true },
      { source: "/about-2/", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/financial-planning", destination: "/services", permanent: true },
      { source: "/financial-planning/", destination: "/services", permanent: true },
      { source: "/tax-planning", destination: "/services", permanent: true },
      { source: "/tax-planning/", destination: "/services", permanent: true },
      { source: "/investment-management", destination: "/services", permanent: true },
      { source: "/investment-management/", destination: "/services", permanent: true },
      { source: "/retirement-planning", destination: "/services", permanent: true },
      { source: "/retirement-planning/", destination: "/services", permanent: true },
      { source: "/estate-planning", destination: "/services", permanent: true },
      { source: "/estate-planning/", destination: "/services", permanent: true },
      // Legal pages
      { source: "/form-crs", destination: "https://adviserinfo.sec.gov/firm/summary/322123", permanent: true },
      { source: "/form-crs/", destination: "https://adviserinfo.sec.gov/firm/summary/322123", permanent: true },
      // WordPress category/tag/archive patterns
      { source: "/category/:path*", destination: "/blog", permanent: true },
      { source: "/tag/:path*", destination: "/blog", permanent: true },
      { source: "/author/:path*", destination: "/about", permanent: true },
      // WordPress feed
      { source: "/feed", destination: "/blog", permanent: true },
      { source: "/feed/", destination: "/blog", permanent: true },
      // Block old WordPress admin paths
      { source: "/wp-admin", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      // WordPress page redirects (from live API audit)
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/", destination: "/about", permanent: true },
      { source: "/real-fiduciary", destination: "/fiduciary", permanent: true },
      { source: "/real-fiduciary/", destination: "/fiduciary", permanent: true },
      // /faq and /podcast now have their own pages — redirects removed
      { source: "/whats-included", destination: "/services", permanent: true },
      { source: "/whats-included/", destination: "/services", permanent: true },
      { source: "/real-estate-investors", destination: "/for-real-estate-investors", permanent: true },
      { source: "/real-estate-investors/", destination: "/for-real-estate-investors", permanent: true },
      { source: "/escape-your-w2", destination: "/for-fire-followers", permanent: true },
      { source: "/escape-your-w2/", destination: "/for-fire-followers", permanent: true },
      { source: "/entrepreneurs", destination: "/for-business-owners", permanent: true },
      { source: "/entrepreneurs/", destination: "/for-business-owners", permanent: true },
      { source: "/disclosures-terms-and-conditions", destination: "https://adviserinfo.sec.gov/firm/summary/322123", permanent: true },
      { source: "/disclosures-terms-and-conditions/", destination: "https://adviserinfo.sec.gov/firm/summary/322123", permanent: true },
      { source: "/cancellation-policy", destination: "/", permanent: true },
      { source: "/cancellation-policy/", destination: "/", permanent: true },
      // WordPress blog post redirects
      { source: "/what-we-do-and-how-we-can-help", destination: "/services", permanent: true },
      { source: "/what-we-do-and-how-we-can-help/", destination: "/services", permanent: true },
      { source: "/see-a-sample-financial-plan", destination: "/virtual-family-office", permanent: true },
      { source: "/see-a-sample-financial-plan/", destination: "/virtual-family-office", permanent: true },
      { source: "/ep07-josh-stlaurent", destination: "/about", permanent: true },
      { source: "/ep07-josh-stlaurent/", destination: "/about", permanent: true },
      // Lead-magnet swap 2026-05-22: /aum-math retired in favor of /5-questions
      // (positive-framed advisor-diagnostic lead magnet). 301 preserves any
      // existing inbound links / SEO juice.
      { source: "/aum-math", destination: "/5-questions", permanent: true },
      { source: "/aum-math/", destination: "/5-questions", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Apply security headers to every route. Adjust CSP as needed when
        // adding new external script/style/image sources (analytics, fonts).
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
