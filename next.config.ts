import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
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
