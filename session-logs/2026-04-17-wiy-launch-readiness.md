# Session Log: WIY Launch Readiness & Strategic Enhancements

**Date:** April 17, 2026
**Goal:** Prepare WIY marketing site for Monday production launch + strategic enhancements

---

## Part A — Strategic Enhancements (Completed)

### A1: "Why This Exists" Section
- Added between hero and VFO section on homepage
- Features the Fidelity hat-trick quote directly from voice-and-brand.md
- First-person narrative: leaving Fidelity, dual-registered advisors switching hats, why flat fee exists
- **File:** `src/app/page.tsx`

### A2: "Your WIY Experience" — Client Portal Preview
- Added 3 mock portal screenshots rendered as styled UI components (not images):
  - **Dashboard:** Welcome message, net worth, action items, next meeting
  - **Journey:** 4-phase timeline (Ground → Design → Build → Evolve) with progress
  - **Wins:** S-Corp savings, Roth conversion, estate plan completion
- Copy: "Most advisors send PDFs. We built you a portal."
- **File:** `src/app/page.tsx`

### A3: "WIY vs AUM Advisor" Comparison Page
- New page at `/vs-aum`
- Side-by-side comparison table (9 comparison rows)
- Fee math over 20 years ($5M starting portfolio, 7% growth)
- Summary cards showing ~$1M AUM vs ~$420K WIY fees
- Conflict of interest narrative section
- "Who it's for" and "Who AUM might be fine for" sections
- CTA back to fee calculator
- Added to nav, footer, pricing page, and homepage fee section
- **File:** `src/app/vs-aum/page.tsx`

### A4: Case Studies (Enhanced)
- Rewrote existing case studies page with 3 detailed scenarios:
  - **Tech Founder:** $4M NW, S-Corp + Solo 401(k) + cost seg = $47K Year 1 savings
  - **RE Investor:** 14 properties, REPS + cost seg + 1031 = $62K tax deferral
  - **FIRE Couple:** $2.8M, Roth ladder + ACA optimization + Portugal NHR = 7 extra years
- Each includes: Situation / Challenge / What We Did (checklist) / Outcome (highlighted)
- Compliance disclaimer per requirements
- Cross-links from each segment page (/for-business-owners, /for-real-estate-investors, /for-fire-followers)
- **File:** `src/app/case-studies/page.tsx`

### A5: Partner Ecosystem Visual
- Copied 8 partner logos from wiy-client-portal `/public/tools/`
- Grid on homepage with logo + one-sentence description per partner
- Partners: Altruist, RightCapital, Sequence, Valur, Northwest Registered Agent, Equity Trust, Encore Estate Plans, Monarch Money
- Header: "Your team, under one fee."
- **File:** `src/app/page.tsx`, logos at `public/logos/partners/`

### A6: Homepage Hero Rewrite
- Changed from "Your money should serve your life" to "A financial advisor who's actually building what he's teaching you to build."
- Aligns with Josh's "walk the walk" core conviction from voice-and-brand.md
- Updated subtext to reference two businesses, real estate, family
- **File:** `src/app/page.tsx`

### A7: Mid-Funnel Email Capture
- Added EmailCapture component below hero
- Offer: "Get the AUM Teardown" — free PDF on AUM fee costs
- Form submits to `/api/subscribe` (stub — logs to console)
- Returns: "Your AUM Teardown is on the way. Josh will send the full report within 48 hours."
- **Files:** `src/components/EmailCapture.tsx`, `src/app/api/subscribe/route.ts`

### A8: Press Credentials Amplified
- Moved from small badge on hero image to dedicated section
- Three clickable cards: Forbes, MarketWatch, Advisorpedia
- Each links to actual profile/article URL
- Note: BiggerPockets NOT added — voice-and-brand.md only verifies 3 outlets
- **File:** `src/app/page.tsx`

---

## Part B — Launch Prep (Completed)

### B1: DNS Cutover Plan
- Step-by-step Bluehost → Vercel migration
- Current DNS documentation steps
- Target A record (76.76.21.21) and CNAME (cname.vercel-dns.com)
- Timing recommendation: Saturday/Sunday evening
- Verification checklist and rollback procedure
- **File:** `references/wiy-dns-cutover-plan.md`

### B2: Blog Migration Audit
- Fetched WordPress REST API: 20 published posts, 16 published pages
- Classified each post: 4 migrate-as-MDX, 2 redirect to service pages, 14 podcast episodes redirect to /blog
- Classified each page: mapped to new site equivalents
- Phase 1/2/3 migration timeline
- **File:** `references/wiy-blog-migration-plan.md`

### B3: Redirect Map
- Documented all WordPress URLs → New URLs
- Added 40+ redirects to `next.config.ts` including:
  - Core page redirects (about-us, contact-us, faq, etc.)
  - Service page redirects (entrepreneurs, real-estate-investors, escape-your-w2, whats-included)
  - Legal page redirects (form-crs, disclosures)
  - Blog/podcast redirects
  - WordPress infrastructure redirects (wp-admin, wp-login, feed, category, tag, author)
- **Files:** `references/wiy-redirect-map.md`, `next.config.ts`

### B4: Pre-Launch QA
- Build passes: zero errors, zero warnings, 20/20 pages generated
- All CTAs verified pointing to GHL booking URL
- Page-by-page QA checklist produced
- Responsive breakpoint test plan (375px, 768px, 1440px)
- Lighthouse targets documented
- Known issues documented (email stub, AUM PDF placeholder, blog migration pending)
- **File:** `references/wiy-pre-launch-qa.md`

### B5: Launch Day Runbook
- T-2 hours through first 24 hours timeline
- WordPress backup steps
- DNS change execution
- Propagation verification (dnschecker.org)
- Functional test checklist
- Rollback trigger conditions and procedure
- Post-launch monitoring and cleanup
- **File:** `references/wiy-launch-runbook.md`

---

## Files Modified

### New Files Created
- `src/app/vs-aum/page.tsx` — WIY vs AUM comparison page
- `src/components/EmailCapture.tsx` — Email capture form component
- `public/logos/partners/` — 8 partner logos (copied from wiy-client-portal)
- `references/wiy-dns-cutover-plan.md`
- `references/wiy-blog-migration-plan.md`
- `references/wiy-redirect-map.md`
- `references/wiy-pre-launch-qa.md`
- `references/wiy-launch-runbook.md`

### Files Modified
- `src/app/page.tsx` — Complete homepage rewrite (hero, origin story, press, portal preview, partners)
- `src/app/case-studies/page.tsx` — Enhanced with 3 detailed quantified case studies
- `src/app/pricing/page.tsx` — Added vs-aum link
- `src/app/for-business-owners/page.tsx` — Added case study link
- `src/app/for-real-estate-investors/page.tsx` — Added case study link
- `src/app/for-fire-followers/page.tsx` — Added case study link
- `src/components/Navigation.tsx` — Added vs-aum to nav
- `src/components/Footer.tsx` — Added vs-aum to footer
- `src/app/sitemap.ts` — Added /vs-aum
- `next.config.ts` — Added 40+ WordPress redirects

### Not Modified (per instructions)
- `src/components/FeeCalculator.tsx` — Fee calculator logic untouched
- `src/app/virtual-family-office/page.tsx` — VFO page untouched

---

## Build Status
```
npm run build — PASS
- Zero errors, zero warnings
- 20 static pages + 1 dynamic API route
- TypeScript compilation clean
```

---

## Known Follow-Ups for Josh

1. **Email service integration:** Wire `/api/subscribe` to Resend (or preferred provider)
2. **AUM Teardown PDF:** Create the actual report, or set up auto-reply workflow
3. **Blog migration:** Migrate 4 article posts as MDX (see blog-migration-plan.md)
4. **Privacy Policy page:** Currently redirects to WordPress — need standalone page
5. **DNS cutover:** Follow wiy-dns-cutover-plan.md on Saturday/Sunday
6. **Lighthouse audit:** Run on deployed staging URL for accurate scores
7. **Partner logo quality:** Verify partner logos display well at all sizes on staging
