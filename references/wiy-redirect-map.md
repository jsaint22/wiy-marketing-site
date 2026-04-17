# WIY Redirect Map

## Overview
Redirects from existing WordPress URLs to new Next.js site URLs.
These should be added to `next.config.ts` before DNS cutover.

## Known WordPress URLs

### Core Pages
| Old WordPress URL | New URL | Type |
|---|---|---|
| /home/ | / | 301 |
| /about/ | /about | 301 |
| /about-2/ | /about | 301 |
| /services/ | /services | 301 |
| /pricing/ | /pricing | 301 |
| /contact/ | /contact | 301 |
| /contact-us/ | /contact | 301 |
| /case-studies/ | /case-studies | 301 |
| /blog/ | /blog | 301 |

### Legal / Compliance Pages
| Old WordPress URL | New URL | Type |
|---|---|---|
| /form-crs/ | External: maintain or redirect to SEC link | 301 |
| /privacy-policy/ | /privacy-policy (needs creation or external redirect) | 301 |
| /terms-of-service/ | /terms (needs creation or external redirect) | 301 |

### Service Pages
| Old WordPress URL | New URL | Type |
|---|---|---|
| /financial-planning/ | /services | 301 |
| /tax-planning/ | /services | 301 |
| /investment-management/ | /services | 301 |
| /retirement-planning/ | /services | 301 |
| /estate-planning/ | /services | 301 |

### Blog Posts (to be updated after WordPress API audit)
Blog posts will need individual redirects. See `wiy-blog-migration-plan.md`.

## next.config.ts Redirects Block

Add to `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // ... existing config
  async redirects() {
    return [
      // WordPress core page redirects
      { source: '/home', destination: '/', permanent: true },
      { source: '/home/', destination: '/', permanent: true },
      { source: '/about-2', destination: '/about', permanent: true },
      { source: '/about-2/', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/contact-us/', destination: '/contact', permanent: true },
      { source: '/financial-planning', destination: '/services', permanent: true },
      { source: '/financial-planning/', destination: '/services', permanent: true },
      { source: '/tax-planning', destination: '/services', permanent: true },
      { source: '/tax-planning/', destination: '/services', permanent: true },
      { source: '/investment-management', destination: '/services', permanent: true },
      { source: '/investment-management/', destination: '/services', permanent: true },
      { source: '/retirement-planning', destination: '/services', permanent: true },
      { source: '/retirement-planning/', destination: '/services', permanent: true },
      { source: '/estate-planning', destination: '/services', permanent: true },
      { source: '/estate-planning/', destination: '/services', permanent: true },
      // WordPress trailing slash normalization
      { source: '/about/', destination: '/about', permanent: true },
      { source: '/services/', destination: '/services', permanent: true },
      { source: '/pricing/', destination: '/pricing', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/blog/', destination: '/blog', permanent: true },
      { source: '/case-studies/', destination: '/case-studies', permanent: true },
      // Legal pages — redirect to external or create pages
      { source: '/form-crs', destination: 'https://adviserinfo.sec.gov/firm/summary/322123', permanent: true },
      { source: '/form-crs/', destination: 'https://adviserinfo.sec.gov/firm/summary/322123', permanent: true },
      // WordPress category/tag/archive patterns
      { source: '/category/:path*', destination: '/blog', permanent: true },
      { source: '/tag/:path*', destination: '/blog', permanent: true },
      { source: '/author/:path*', destination: '/about', permanent: true },
      // WordPress feed
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/feed/', destination: '/blog', permanent: true },
      // WordPress admin (block indexing of old admin paths)
      { source: '/wp-admin', destination: '/', permanent: true },
      { source: '/wp-admin/:path*', destination: '/', permanent: true },
      { source: '/wp-login.php', destination: '/', permanent: true },
      { source: '/wp-content/:path*', destination: '/', permanent: true },
    ];
  },
};
```

## Notes
- Blog post redirects will be added after the WordPress API audit completes
- Privacy Policy and Terms of Service pages may need to be created on the new site
- Form CRS currently redirects to SEC.gov — may want a dedicated page later
- All redirects use 301 (permanent) to preserve SEO equity
- Monitor Vercel logs post-launch for 404s to catch any missed redirects
