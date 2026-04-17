# Session Log: WIY Marketing Site Build

**Date:** 2026-04-17  
**Terminal:** wiy-marketing  
**Staging URL:** TBD (pending Vercel deploy)

## What Was Built

Full Next.js 15 marketing site for wealthinyourself.com, deployed to Vercel staging only.

### Pages Built (12 total)

| Route | Status | Notes |
|---|---|---|
| `/` (Home) | Final copy | Hero, VFO positioning, 3 client paths, fee overview, CTA |
| `/about` | Final copy | Josh story, Fidelity departure, GGU, FIAT, credentials, personal brand |
| `/services` | Final copy | 7 service areas, FAQ with schema markup |
| `/pricing` | Final copy | Fee tiers, examples, interactive calculator, FAQ with schema |
| `/contact` | Final copy | Book a call CTA, Calendly link (placeholder), email |
| `/virtual-family-office` | Final copy | VFO explainer, what's included, comparison to AUM |
| `/for-business-owners` | Final copy | SEO landing page, 6 pain points, FAQ |
| `/for-real-estate-investors` | Final copy | SEO landing page, 6 pain points, FAQ |
| `/for-fire-followers` | Final copy | SEO landing page, 5 pain points |
| `/case-studies` | Final copy | 4 anonymized cases with compliance disclaimer |
| `/blog` | Final | MDX-powered, 1 placeholder post |
| `/calculator` | Final | Standalone fee calculator |

### Components Built

- `Navigation` — responsive with mobile menu
- `Footer` — compliance disclosure, links, brand
- `FeeCalculator` — interactive slider, 30-year AUM comparison
- `FAQSection` — with JSON-LD FAQ schema markup
- `CTASection` — reusable CTA block
- `SectionHeading` — reusable section header

### What's Placeholder vs. Final

- **Placeholder:** Calendly link on Contact page (needs real URL)
- **Placeholder:** Form CRS and Privacy Policy links point to WordPress URLs
- **Placeholder:** "As seen in" section uses text only (no badge images)
- **Final:** All page copy written fresh per voice-and-brand.md
- **Final:** Fee calculator with full tier model
- **Final:** Compliance footer, disclaimers, case study disclosures

### SEO

- Per-page metadata with titles and descriptions
- Target keywords embedded in landing pages
- FAQ schema on Services and Pricing
- Sitemap at `/sitemap.xml`
- Robots.txt blocks indexing on staging (`NEXT_PUBLIC_ENVIRONMENT=staging`)
- Open Graph metadata

### Compliance

- Footer: "Wealth In Yourself is an Investment Adviser registered in Nevada..."
- Case studies include hypothetical disclaimer
- No testimonials
- No performance claims
- No forward-looking statements
- Forbes, MarketWatch, Advisorpedia only (no unverified publications)

## Outstanding Decisions for Josh

1. **Calendly URL** — Contact page uses placeholder `https://calendly.com/joshsanchez-wiy/intro-call`. Confirm or update.
2. **Fee calculator tiers** — Verify the declining percentage model matches your actual fee schedule.
3. **"As seen in" badges** — Need Forbes, MarketWatch, Advisorpedia logo files if you want visual badges vs. text.
4. **DNS migration** — When ready, follow README instructions. Do NOT switch before explicit approval.
5. **Blog migration** — WordPress posts not migrated yet. Follow-up task after DNS switch.
6. **GitHub repo + Vercel deploy** — Need `gh auth login` to create repo and connect Vercel.

## DNS Migration Checklist (For When Josh Approves)

- [ ] Add `wealthinyourself.com` as custom domain in Vercel
- [ ] Add `www.wealthinyourself.com` as custom domain in Vercel
- [ ] Set `NEXT_PUBLIC_ENVIRONMENT=production` in Vercel env vars
- [ ] Update A record at registrar → Vercel IP
- [ ] Update CNAME for www → `cname.vercel-dns.com`
- [ ] Verify SSL certificate
- [ ] Test robots.txt allows indexing
- [ ] Submit sitemap to Google Search Console
- [ ] Update Form CRS and Privacy Policy links to new URLs
- [ ] Set up redirect from WordPress URLs to new site
