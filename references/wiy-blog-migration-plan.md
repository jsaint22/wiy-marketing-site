# WIY Blog Migration Plan

**Date:** April 17, 2026
**Source:** WordPress REST API at wealthinyourself.com

---

## Published Posts (20 total)

### Articles (Migrate as MDX)

| # | Date | Title | Slug | Action |
|---|---|---|---|---|
| 1 | 2024-09-10 | The Power of Financial Life Planning: Designing Your Ideal Life | the-power-of-financial-life-planning | **Migrate as MDX** — core WIY content, aligns with brand |
| 2 | 2025-02-07 | What We Do and How We Can Help | what-we-do-and-how-we-can-help | **301 redirect** → /services |
| 3 | 2025-02-07 | See a Sample Financial Plan | see-a-sample-financial-plan | **301 redirect** → /virtual-family-office |
| 4 | 2025-02-01 | The Human Side of Wealth: How Emotions Impact Financial Decisions | the-human-side-of-money | **Migrate as MDX** — financial therapy angle, strong brand content |
| 5 | 2025-01-07 | Tax Strategies for Real Estate Investors: Grow Your Wealth and Save More | tax-strategies-for-real-estate-investors | **Migrate as MDX** — core RE investor content |
| 6 | 2024-12-31 | 3 Money Mindset Tips That Will Up Your Financial Game | 3-money-mindset-tips | **Migrate as MDX** — general audience content |

### Podcast Episodes (301 Redirect or Archive)

| # | Date | Title | Slug | Action |
|---|---|---|---|---|
| 7 | 2023-08-03 | Ep01: Eric Cooper — Business Exits | ep01-eric-cooper | **301 redirect** → /blog |
| 8 | 2023-08-14 | Ep02: Mando Sallavanti III — Gen-Z Advisor | ep02-financial-mastery-across-generations... | **301 redirect** → /blog |
| 9 | 2023-08-24 | Ep03: Jason Brown — RE Development | ep03-real-estate-development... | **301 redirect** → /blog |
| 10 | 2023-08-29 | Ep04: Gus Kristoferson — Psychiatric NPs | ep04-gus-kristoferson | **301 redirect** → /blog |
| 11 | 2023-08-31 | Ep05: Diana Yanez — Women of Color Entrepreneurs | ep05-diana-yanez | **301 redirect** → /blog |
| 12 | 2023-09-27 | Ep06: Dr. Joaquin Wallace — Generational Wealth | ep06-dr-joaquin-wallace | **301 redirect** → /blog |
| 13 | 2023-10-11 | Ep07: Josh St. Laurent — Josh's Story | ep07-josh-stlaurent | **301 redirect** → /about |
| 14 | 2023-10-01 | Ep07: Alex Shapiro — CanMonkey for STRs | ep07-alex-shapiro | **301 redirect** → /blog |
| 15 | 2023-10-18 | Ep12: Amanda Han — RE Tax Secrets | ep12-amanda-han | **301 redirect** → /blog |
| 16 | 2023-10-25 | Ep13: Deborah Goldstein — Philanthropy | ep13-deborah-goldstein | **301 redirect** → /blog |
| 17 | 2023-10-31 | Ep08: Nate Astle — Financial Trauma | ep08-nate-astle | **301 redirect** → /blog |
| 18 | 2023-11-01 | Ep14: Brenna Baucum — Values-Centered Planning | ep14-brenna-baucum | **301 redirect** → /blog |
| 19 | 2023-11-08 | Ep15: Derek Hagan — Financial Psychology | ep15-derek-hagan | **301 redirect** → /blog |
| 20 | 2025-01-04 | Ep10: Aaron Ameen — Hybrid RE Professional | ep10-aaron-ameen | **301 redirect** → /blog |

---

## Published Pages (16 total)

| # | Title | Slug | URL | Action |
|---|---|---|---|---|
| 1 | Home | home | / | Already handled — redirect /home → / |
| 2 | Privacy Policy | privacy-policy | /privacy-policy/ | **Need to create page or redirect** |
| 3 | Services | services | /services/ | Already exists on new site |
| 4 | Pricing | pricing | /pricing/ | Already exists on new site |
| 5 | Disclosures, Terms, and Conditions | disclosures-terms-and-conditions | /disclosures-terms-and-conditions/ | **301 redirect** → SEC Form ADV link |
| 6 | Real Fiduciary | real-fiduciary | /real-fiduciary/ | **301 redirect** → /about |
| 7 | FAQ | faq | /faq/ | **301 redirect** → /pricing (has FAQ section) |
| 8 | About Us | about-us | /about-us/ | **301 redirect** → /about |
| 9 | Contact Us | contact-us | /contact-us/ | **301 redirect** → /contact |
| 10 | Podcast | podcast | /podcast/ | **301 redirect** → /blog |
| 11 | Blog | blog | /blog/ | Already exists on new site |
| 12 | Cancellation Policy | cancellation-policy | /cancellation-policy/ | **301 redirect** → / or create page |
| 13 | Real Estate Investors | real-estate-investors | /real-estate-investors/ | **301 redirect** → /for-real-estate-investors |
| 14 | What's Included | whats-included | /whats-included/ | **301 redirect** → /services |
| 15 | Escape Your W2 | escape-your-w2 | /escape-your-w2/ | **301 redirect** → /for-fire-followers |
| 16 | Entrepreneurs | entrepreneurs | /entrepreneurs/ | **301 redirect** → /for-business-owners |

---

## Migration Priority

### Phase 1: Pre-Launch (add to next.config.ts)
Add redirects for all WordPress pages and podcast episodes. These ensure no 404s from Google-indexed URLs.

### Phase 2: Post-Launch Week 1
Migrate 4 article blog posts as MDX files:
1. `the-power-of-financial-life-planning`
2. `the-human-side-of-money`
3. `tax-strategies-for-real-estate-investors`
4. `3-money-mindset-tips`

### Phase 3: Post-Launch Month 1
- Decide on podcast archive strategy (redirect vs. rebuild)
- Create Privacy Policy and Cancellation Policy pages
- Monitor 404s in Vercel logs for missed redirects

---

## Additional Redirects Needed (add to next.config.ts)

```typescript
// WordPress blog post redirects
{ source: "/what-we-do-and-how-we-can-help", destination: "/services", permanent: true },
{ source: "/what-we-do-and-how-we-can-help/", destination: "/services", permanent: true },
{ source: "/see-a-sample-financial-plan", destination: "/virtual-family-office", permanent: true },
{ source: "/see-a-sample-financial-plan/", destination: "/virtual-family-office", permanent: true },
{ source: "/ep07-josh-stlaurent", destination: "/about", permanent: true },
{ source: "/ep07-josh-stlaurent/", destination: "/about", permanent: true },

// WordPress page redirects
{ source: "/about-us", destination: "/about", permanent: true },
{ source: "/about-us/", destination: "/about", permanent: true },
{ source: "/real-fiduciary", destination: "/about", permanent: true },
{ source: "/real-fiduciary/", destination: "/about", permanent: true },
{ source: "/faq", destination: "/pricing", permanent: true },
{ source: "/faq/", destination: "/pricing", permanent: true },
{ source: "/podcast", destination: "/blog", permanent: true },
{ source: "/podcast/", destination: "/blog", permanent: true },
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

// Podcast episode catch-all
{ source: "/ep:num-:slug*", destination: "/blog", permanent: true },
```
