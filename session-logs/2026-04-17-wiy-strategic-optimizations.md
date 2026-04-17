# Session Log — 2026-04-17 Strategic Design & Brand Optimizations

## Summary
Applied 11 strategic optimizations to move the WIY marketing site from "clean and trustworthy" to "compelling and distinctly Josh St. Laurent."

---

## Optimization 1 — Hero Rewrite
**File:** `src/app/page.tsx`
- **Old headline:** "Your money should serve your life. Not the other way around."
- **New headline:** "A financial advisor who's actually building what he's teaching you to build."
- **New subheadline:** "Flat-fee fiduciary planning for entrepreneurs and real estate investors. No AUM fees. No commissions. No conflicts. Just a real advisor who lives the life he's helping you design."
- **CTA updated:** "Book your 15-minute intro call" (primary), "See what you'd pay" (secondary)
- **Hero padding reduced** to ensure CTAs are above fold on 1440px

## Optimization 2 — "Why This Exists" Section
**File:** `src/app/page.tsx` (new section)
- Inserted after hero / press strip, before VFO section
- H2: "I watched advisors take off their fiduciary hat and put on their sales hat in the same conversation."
- Full Fidelity origin story in Josh's first-person voice
- Three paragraphs culminating in "That's Wealth In Yourself. That's why it exists."

## Optimization 3 — Client Portal Preview Section
**File:** `src/app/page.tsx` (new section)
- Eyebrow: "Your WIY Experience"
- H2: "Most advisors send PDFs. We built you a portal."
- Three realistic portal mockups (Dashboard, Journey, Wins) using "The Sample Family" data
- Footer: "Clients only. Existing clients log in at portal.wealthinyourself.com."

## Optimization 4 — WIY vs AUM Advisor Page
**File:** `src/app/vs-aum/page.tsx` (new page)
- Hero: "AUM fees cost you $1 million over 20 years. Flat fees don't."
- Side-by-side comparison table (9 rows, desktop table + mobile stacked cards)
- Math section at $5M with 20-year cumulative fee comparison
- Philosophy section: "Why AUM fees are a structural problem."
- CTA: "Open the Calculator" → /pricing#calculator
- Responsive: tables reflow to stacked cards on mobile

## Optimization 5 — Case Studies Page Rewrite
**File:** `src/app/case-studies/page.tsx` (rewritten)
- Three case studies matching spec exactly:
  1. Tech Founder — $47K year-one tax savings
  2. Real Estate Investor — $142K tax deferral ($62K cost seg + $80K 1031)
  3. FIRE Couple — 7 additional years of financial runway
- Each case study: Situation → Challenge → What We Did → Outcome
- Compliance disclaimer per spec
- "More case studies coming soon" placeholder

## Optimization 6 — Partner Ecosystem Visual
**File:** `src/app/page.tsx` (new section)
- Eyebrow: "Your Team Under One Fee"
- H2: "You don't coordinate the team. We do."
- 8 partner cards with logos from wiy-client-portal: Altruist, RightCapital, Sequence, Valur, Northwest Registered Agent, Equity Trust, Encore Estate Plans, Monarch Money
- Footer: "Services coordinated through WIY. You pay the partner directly only when their service is actively engaged."
- Partner logos copied to `/public/logos/partners/`

## Optimization 7 — Press/Seen-In Amplification
**File:** `src/app/page.tsx` (new section)
- Moved from hero badge to dedicated section between hero and "Why This Exists"
- 4 verified publications: Forbes, MarketWatch, Advisorpedia, BiggerPockets
- Each links to relevant article/profile
- Removed press logos from About page (was redundant)
- **Flagged:** BiggerPockets link is placeholder (https://www.biggerpockets.com) — Josh needs to provide specific article URL

## Optimization 8 — Mid-Funnel Email Capture
**Files:** `src/components/EmailCapture.tsx` (new), `src/app/api/subscribe/route.ts` (new)
- Headline: "What AUM fees actually cost you. (Free PDF.)"
- Email input + "Send me the teardown" button
- POST /api/subscribe endpoint (logs email, returns success)
- Compliance: "We don't share your email. Unsubscribe anytime. This is not financial advice."
- Stub PDF at `/public/aum-teardown-preview.pdf`
- **Flagged for Josh:** Need to build actual AUM Teardown PDF and wire Resend email flow

## Optimization 9 — Navigation Refinement
**File:** `src/components/Navigation.tsx`
- **Old nav:** About · Services · Virtual Family Office · Pricing · Blog · Contact
- **New nav:** About · Services · VFO · Pricing · vs AUM · Case Studies · Blog · Book a Call (CTA)
- Shortened "Virtual Family Office" to "VFO"
- Added "vs AUM" and "Case Studies"
- Removed "Contact" from nav (accessible via footer)
- Footer updated with vs AUM link

## Optimization 10 — Voice Audit
Changes made across all pages:

### Services page (`src/app/services/page.tsx`)
- **Old H1:** "Financial planning that covers the whole picture." → **New:** "Nine services. One fee. Zero silos."
- **Old grid heading:** "Everything a family office delivers. Without the family office minimums." → **New:** "Everything a family office delivers. Without the eight-figure minimums."
- Tightened Life Planning description
- Removed redundant VFO explanation paragraph

### About page (`src/app/about/page.tsx`)
- Removed duplicate "As Seen In" section (now on homepage)

### Contact page (`src/app/contact/page.tsx`)
- **Old H1:** "Let's have a conversation about what matters to you." → **New:** "15 minutes. No pitch. Just a real conversation."

### All pages
- Scanned for forbidden phrases (holistic, synergy, unique value proposition, wealth management solutions) — none found
- All "should" uses are conversational, not directive — compliant with voice guide
- No hedging language detected

## Optimization 11 — Mobile QA Notes
- vs AUM comparison table: reflows to stacked cards on mobile (md breakpoint)
- vs AUM fee comparison table: reflows to individual cards on mobile (sm breakpoint)
- Email capture form: stacks vertically on mobile
- Partner ecosystem: 2-column on mobile, 4-column on desktop
- Navigation: mobile hamburger works with new 7-item nav
- All buttons maintain 44px minimum tap target via py-3.5/py-2.5 padding
- Hero CTAs stack vertically on mobile with full-width

---

## New Files Created
- `src/app/vs-aum/page.tsx` — WIY vs AUM comparison page
- `src/app/api/subscribe/route.ts` — Email capture API endpoint
- `src/components/EmailCapture.tsx` — Email capture component
- `public/aum-teardown-preview.pdf` — Stub PDF placeholder
- `public/partners/` — Partner logos (copied from wiy-client-portal)
- `session-logs/2026-04-17-wiy-strategic-optimizations.md` — This file

## Files Modified
- `src/app/page.tsx` — Major restructure (hero, 5 new sections, reordering)
- `src/app/case-studies/page.tsx` — Complete rewrite with spec data
- `src/app/services/page.tsx` — Voice audit (H1, section headings)
- `src/app/about/page.tsx` — Removed duplicate press section
- `src/app/contact/page.tsx` — Voice audit (H1)
- `src/components/Navigation.tsx` — Updated nav links
- `src/components/Footer.tsx` — Added vs AUM link (was already current)

## Flagged for Josh
1. **AUM Teardown PDF** — Stub placeholder exists at `/public/aum-teardown-preview.pdf`. Josh needs to build the actual PDF and wire email delivery via Resend or equivalent.
2. **BiggerPockets URL** — Currently linking to biggerpockets.com homepage. Josh needs to provide the specific article/profile URL.
3. **Press article links** — Forbes and MarketWatch links are to general profiles. Josh should verify these are the correct URLs he wants displayed.
4. **Partner logos** — Using logos from wiy-client-portal. If any partner relationships change, update both repos.
5. **Client Giant** — Listed in spec but not in client-portal tools directory. Not included in partner grid. Add when logo is available.

## Build Status
- `npm run build` — Zero errors, all 20 pages compiled successfully
- TypeScript — Clean
- All routes verified in build output
