# WIY Pre-Launch QA Report

**Date:** April 17, 2026
**Build:** `npm run build` — Next.js 16.2.4 (Turbopack)

---

## Build Status

| Check | Result |
|---|---|
| `npm run build` | PASS — zero errors, zero warnings |
| TypeScript compilation | PASS |
| Static page generation | PASS — 20/20 pages generated |
| API routes | PASS — /api/subscribe (Dynamic) |

### Pages Generated
- `/` (Static)
- `/_not-found` (Static)
- `/about` (Static)
- `/api/subscribe` (Dynamic/Function)
- `/blog` (Static)
- `/blog/welcome` (SSG)
- `/calculator` (Static)
- `/case-studies` (Static)
- `/contact` (Static)
- `/for-business-owners` (Static)
- `/for-fire-followers` (Static)
- `/for-real-estate-investors` (Static)
- `/pricing` (Static)
- `/robots.txt` (Static)
- `/services` (Static)
- `/sitemap.xml` (Static)
- `/virtual-family-office` (Static)
- `/vs-aum` (Static)

---

## Page-by-Page QA

### Homepage (/)
- [ ] Hero section loads with new headline
- [ ] Josh headshot renders
- [ ] "Book Your Intro Call" → GHL booking widget
- [ ] "See What You'd Pay" → /pricing#calculator
- [ ] Email capture form renders and submits
- [ ] "Why This Exists" section with Fidelity quote
- [ ] Press section with Forbes, MarketWatch, Advisorpedia links
- [ ] VFO section with 6 service cards
- [ ] Client paths section with case study links
- [ ] Portal preview section (Dashboard, Journey, Wins mockups)
- [ ] Partner ecosystem grid (8 partner logos)
- [ ] Fee model overview section
- [ ] CTA section at bottom

### About (/about)
- [ ] Page loads correctly
- [ ] Headshot renders
- [ ] Credentials display
- [ ] As Seen In section

### Services (/services)
- [ ] Page loads correctly
- [ ] All 9 services displayed
- [ ] FAQ section functional (accordions open/close)

### Pricing (/pricing)
- [ ] Page loads correctly
- [ ] Fee tiers table renders
- [ ] Milestone examples display
- [ ] Interactive calculator functions (slider + calculations)
- [ ] 30-year comparison calculates correctly
- [ ] "Compare to AUM advisors" link → /vs-aum
- [ ] FAQ section functional

### WIY vs AUM (/vs-aum) — NEW
- [ ] Page loads correctly
- [ ] Comparison table renders (desktop and mobile)
- [ ] Fee math calculation table renders
- [ ] Summary cards display correct totals
- [ ] "Who this is for" sections render
- [ ] "Open the Fee Calculator" → /pricing#calculator
- [ ] CTA section at bottom

### Case Studies (/case-studies) — UPDATED
- [ ] Page loads correctly
- [ ] Tech Founder case study with $47K highlight
- [ ] RE Investor case study with $62K highlight
- [ ] FIRE Couple case study with 7 years highlight
- [ ] Each has Situation / Challenge / What We Did / Outcome
- [ ] Compliance disclaimer at bottom
- [ ] Links to calculator and vs-aum

### Virtual Family Office (/virtual-family-office)
- [ ] Page loads correctly
- [ ] DO NOT MODIFY (approved)

### For Business Owners (/for-business-owners)
- [ ] Page loads correctly
- [ ] Case study link section added
- [ ] CTA button works

### For RE Investors (/for-real-estate-investors)
- [ ] Page loads correctly
- [ ] Case study link section added
- [ ] CTA button works

### For FIRE Followers (/for-fire-followers)
- [ ] Page loads correctly
- [ ] Case study link section added
- [ ] CTA button works

### Blog (/blog)
- [ ] Page loads correctly
- [ ] Blog listing shows posts

### Calculator (/calculator)
- [ ] Page loads correctly
- [ ] Calculator functions independently

### Contact (/contact)
- [ ] Page loads correctly
- [ ] Booking link works

---

## CTA Verification

All CTAs should point to: `https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call`

| Location | Status |
|---|---|
| Homepage hero | Verified |
| Navigation (desktop) | Verified |
| Navigation (mobile) | Verified |
| CTASection component (default) | Verified |
| Contact page | Verified |

---

## Form Testing

| Form | Endpoint | Status |
|---|---|---|
| Email capture (AUM Teardown) | POST /api/subscribe | Functional (stub — logs to console) |

---

## Responsive Breakpoints

Test at these widths:
- [ ] 375px (iPhone SE / small mobile)
- [ ] 768px (iPad / tablet)
- [ ] 1440px (desktop)

Key areas to check:
- [ ] Navigation collapses to hamburger on mobile
- [ ] Hero section stacks vertically on mobile
- [ ] Fee calculator slider works on touch devices
- [ ] Portal preview cards stack on mobile
- [ ] Partner grid adjusts (4 cols → 3 → 2)
- [ ] Comparison table on /vs-aum stacks to cards on mobile
- [ ] Case study cards remain readable on mobile

---

## Lighthouse Targets

| Page | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| / | 90+ | 95+ | 95+ | 95+ |
| /pricing | 85+ | 95+ | 95+ | 95+ |
| /vs-aum | 90+ | 95+ | 95+ | 95+ |
| /case-studies | 90+ | 95+ | 95+ | 95+ |

*Run Lighthouse on deployed staging URL for accurate results.*

---

## Broken Link Check

### Internal Links — All verified in build
All internal `<Link>` components reference routes that exist in the build output.

### External Links to Verify
- [ ] GHL booking: https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call
- [ ] SEC Form ADV: https://adviserinfo.sec.gov/firm/summary/322123
- [ ] Form CRS: https://wealthinyourself.com/form-crs/
- [ ] Privacy Policy: https://wealthinyourself.com/privacy-policy/
- [ ] Forbes: https://councils.forbes.com/profile/Joshua-St-Laurent-Wealth-In-Yourself-LLC/a3e46f14-c5ee-4e33-b5e9-0f5c8e6bd2ef
- [ ] MarketWatch: https://www.marketwatch.com/guides/financial-advisors/best-financial-advisors-in-reno-nv/
- [ ] Advisorpedia: https://www.advisorpedia.com/author/joshua-st-laurent/

---

## Redirects Configured

WordPress redirects added to `next.config.ts`:
- `/home` → `/`
- `/about-2` → `/about`
- `/contact-us` → `/contact`
- `/financial-planning` → `/services`
- `/tax-planning` → `/services`
- `/investment-management` → `/services`
- `/retirement-planning` → `/services`
- `/estate-planning` → `/services`
- `/form-crs` → SEC.gov
- `/category/*` → `/blog`
- `/tag/*` → `/blog`
- `/author/*` → `/about`
- `/feed` → `/blog`
- `/wp-admin` → `/`
- `/wp-login.php` → `/`

---

## Known Issues / Follow-Ups

1. **Email capture is a stub** — currently logs to console. Needs Resend integration before sending actual reports.
2. **AUM Teardown PDF does not exist yet** — placeholder needed or follow-up email workflow.
3. **Blog has only 1 post** — WordPress blog migration pending.
4. **Form CRS and Privacy Policy** redirect to WordPress URLs — need to be migrated or created.
5. **Partner logos** — copied from client portal, verify display quality at all sizes.
6. **BiggerPockets not included in press** — voice-and-brand.md only verifies Forbes, MarketWatch, Advisorpedia. Do not add unverified press credentials.
