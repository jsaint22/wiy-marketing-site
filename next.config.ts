import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // ─────────────────────────────────────────────────────────────────────
      // links.wealthinyourself.com — rescuing a live lead-loss path (2026-08-19)
      // ─────────────────────────────────────────────────────────────────────
      // That subdomain CNAMEs to brand.ludicrous.cloud (LeadConnector's
      // white-label domain host) and still serves GHL booking widgets. Three
      // legacy URLs verified returning 200 on 2026-08-19:
      //   /widget/bookings/wiy-15-min-call
      //   /widget/bookings/getting-acquainted
      //   /widget/survey/oeCwZwhjBpEuGzJHkmsL
      // They are in lead-magnet emails already delivered and in
      // compliance-logged marketing copy, so they cannot be recalled.
      //
      // WHY THIS IS URGENT, not exit-prep: the inbound GHL webhook receiver
      // last fired 2026-05-13 (audit_log service_account=webhook_receiver_ghl;
      // Cal.com fired the same day this was written). A booking made through
      // those widgets TODAY lands in a GHL calendar and reaches nothing —
      // no prospect row, no stage, no notification. Every one of those links
      // is a silent lead-loss path that has been open for three months.
      //
      // Repointing the CNAME here converts them into working redirects instead
      // of 404s-at-exit, and closes the drop in the meantime. Scoped by host so
      // these paths do nothing on the apex domain.
      //
      // 307 (permanent:false) on purpose — same reasoning as the /terms
      // aliases below: reversible without poisoning browser caches while the
      // mapping is still being refined.
      ...[
        // 15-minute fit call — the lead-magnet delivery email's CTA.
        { path: "/widget/bookings/wiy-15-min-call", to: "https://cal.com/jsaint/intro-call" },
        { path: "/widget/booking/wiy-15-min-call", to: "https://cal.com/jsaint/intro-call" },
        // Canonical GHL-internal ID form, per brands/CLAUDE.md "Canonical
        // Booking Links" — used in nurture copy because the ID was evergreen.
        { path: "/widget/booking/3Djf0scr1zO8hIkq6HxT", to: "https://cal.com/jsaint/intro-call" },
        // Getting Acquainted.
        { path: "/widget/bookings/getting-acquainted", to: "https://cal.com/jsaint/getting-acquainted" },
        { path: "/widget/booking/getting-acquainted", to: "https://cal.com/jsaint/getting-acquainted" },
        // Intake survey → the live intake form (portal /intake verified 200
        // on 2026-08-19, which also settles the "assumed public" note in
        // ops-portal prospect-post-intro-call-invite.ts).
        { path: "/widget/survey/oeCwZwhjBpEuGzJHkmsL", to: "https://portal.wealthinyourself.com/intake" },
      ].flatMap(({ path, to }) =>
        // Both with and without a trailing slash. Measured 2026-08-19: Next
        // normalizes the slash away first (308) and the slashless rule then
        // matches, so the trailing-slash entries are belt-and-braces rather
        // than load-bearing — they only start mattering if trailingSlash is
        // ever turned on. Old copy is inconsistent about the slash and a
        // near-miss here is another silent 404, so they stay.
        [path, `${path}/`].map((source) => ({
          source,
          has: [{ type: "host" as const, value: "links.wealthinyourself.com" }],
          destination: to,
          permanent: false,
        })),
      ),
      // Catch-all for every other legacy links.* path. Deliberately lands on
      // the booking PAGE rather than a raw Cal.com event: someone arriving via
      // a link we can no longer identify did not choose a meeting type, and
      // dropping them into an arbitrary booking form is worse than a page that
      // orients them first.
      {
        source: "/:path*",
        has: [{ type: "host", value: "links.wealthinyourself.com" }],
        destination: "https://wealthinyourself.com/get-acquainted",
        permanent: false,
      },

      // Client portal shortcut
      { source: "/portal", destination: "https://portal.wealthinyourself.com", permanent: false },
      { source: "/login", destination: "https://portal.wealthinyourself.com", permanent: false },
      // A2P 30882/30908 fix 2026-07-06: alias /terms + /terms-and-conditions to the
      // existing approved disclosures page (same content, no new legal copy — no
      // Jake gate). Non-permanent (307) so it's reversible without cache poisoning.
      { source: "/terms", destination: "/disclosures", permanent: false },
      { source: "/terms-and-conditions", destination: "/disclosures", permanent: false },
      // A2P hardening 2026-07-07: additional conventional-path aliases TCR/carrier
      // reviewers may probe. Same-domain, non-permanent (307), no new legal copy.
      { source: "/terms-of-service", destination: "/disclosures", permanent: false },
      { source: "/tos", destination: "/disclosures", permanent: false },
      { source: "/privacy", destination: "/privacy-policy", permanent: false },
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
