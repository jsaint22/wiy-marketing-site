# Wealth In Yourself — Marketing Site

Next.js 15 marketing site for [wealthinyourself.com](https://wealthinyourself.com).

**Staging URL:** `wiy-marketing-staging.vercel.app`

## Stack

- Next.js 15 (App Router)
- TailwindCSS v4
- MDX blog via `next-mdx-remote`
- Deployed to Vercel

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a Blog Post

1. Create a new `.mdx` file in `content/blog/`:

```
content/blog/your-post-slug.mdx
```

2. Add frontmatter at the top:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and previews."
date: "2026-04-20"
author: "Joshua St. Laurent"
tags: ["tax-strategy", "business-owners"]
---

Your markdown content here.
```

3. The post automatically appears at `/blog/your-post-slug`.

## Updating Copy

- All page content is in `src/app/[page-name]/page.tsx`
- Shared components (nav, footer, CTA, FAQ) are in `src/components/`
- Brand colors and design tokens are in `src/app/globals.css`

## Deployment

The site auto-deploys on push to `main` via Vercel.

### Environment Variables

| Variable | Purpose | Staging | Production |
|---|---|---|---|
| `NEXT_PUBLIC_ENVIRONMENT` | Controls robots.txt indexing and metadata base URL | `staging` | `production` |

### DNS Migration (When Approved)

1. In Vercel: add `wealthinyourself.com` and `www.wealthinyourself.com` as custom domains
2. Set `NEXT_PUBLIC_ENVIRONMENT=production` in Vercel environment variables
3. Update DNS records at registrar:
   - `A` record for `@` → Vercel IP (provided in Vercel dashboard)
   - `CNAME` record for `www` → `cname.vercel-dns.com`
4. Wait for DNS propagation (up to 48 hours)
5. Verify SSL certificate is issued by Vercel
6. Confirm robots.txt allows indexing: `curl https://wealthinyourself.com/robots.txt`
7. Submit sitemap to Google Search Console: `https://wealthinyourself.com/sitemap.xml`

**Do NOT change DNS until Josh explicitly approves.**

## Compliance Notes

- Footer includes required IA registration disclosure
- Form CRS and Privacy Policy link to existing WordPress URLs (update after DNS migration)
- No testimonials without compliance review
- No performance claims or forward-looking statements
- Case studies include required disclaimer
