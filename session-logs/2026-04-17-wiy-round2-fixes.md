# WIY Marketing Site — Round 2 QA Fixes

**Date:** 2026-04-17
**Session:** Round 2 corrections based on Josh's live-site QA review

---

## Changes Made

### Correction 1 — URL Fixes
- **Navigation.tsx:** Desktop and mobile "Book a Call" buttons now link to `https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call` (was `/contact`). Changed from `<Link>` to `<a>` with `target="_blank"`.
- **CTASection.tsx:** Default `buttonHref` changed from `/contact` to the booking URL. Added external link detection — external URLs render as `<a target="_blank">`, internal URLs use Next.js `<Link>`.
- **Home page hero:** "Book Your Intro Call" button now links directly to booking URL (was `/contact`).
- **Footer:** Form ADV link already correct from previous session (points to SEC IAPD `322123`). No change needed.
- **Contact page:** Already had correct booking URL from previous session. No change needed.

### Correction 2 — Header and Footer Logo Sizes
- **Header logo:** Increased from `h-10 sm:h-12` (40px/48px) to `h-12 sm:h-[52px]` (48px/52px). ~20% increase.
- **Footer logo:** Already at `h-28` (112px) from previous session — within/above Josh's 80-100px target.

### Correction 3 — Page Load Scroll Position
- **Created `ScrollToTop.tsx`:** Client component that listens for pathname changes via `usePathname()` and calls `window.scrollTo(0, 0)` on every route change.
- **Added to `layout.tsx`:** Renders before Navigation so scroll resets on every page navigation.

### Correction 4 — Home Page
- **4a:** Removed hover effect from 6 VFO cards. Stripped `transition-colors`, `hover:bg-primary`, `hover:text-white`, `hover:border-primary`, `group`, `cursor-default`, and all `group-hover:` classes from children. Cards are now static.
- **4b:** Reduced hero section top padding from `py-10 sm:py-16 lg:py-20` to `py-6 sm:py-10 lg:py-12`. CTA buttons should now be visible above fold on 1440px desktop.
- **4c:** "Book Your Intro Call" button now links to booking URL (see Correction 1).
- **4d:** "See What You'd Pay" button changed from `/calculator` to `/pricing#calculator`. Added `id="calculator"` and `scroll-mt-24` to the calculator section on the pricing page so anchor lands at the section title.

### Correction 5 — About Page
- **5a:** Credentials line updated from `CFP® · CFT™ · APFC® · Founder` to `CFP® · CFT™ · APFC® · ACC · MS · Founder`.
- **5b:** Changed "Zephyr Cove, Nevada" to "Lake Tahoe, Nevada" in the personal section.
- **5c:** Added description for CA Homes In The Pines: "a luxury short-term rental business creating world-class vacation experiences in the Sierra Nevada."
- **5d:** Reduced hero image size — changed aspect ratio from `4/5` to `3/4`, added `max-w-sm mx-auto`, reduced image dimensions from 600x750 to 420x560. Reduced hero section padding from `py-10 sm:py-14 lg:py-16` to `py-6 sm:py-10 lg:py-12`.

### Correction 6 — Services Page
- **6a:** Removed "Cross-Border Planning" service card (TSPW-specific). Replaced with "Charitable Giving & Philanthropy Coordination" — covers DAFs, CRTs, QCDs, and strategic giving. Chose this over Exit Planning (already partially covered by Entity & Business Owner Planning) and Financial Therapy (already exists as its own card).
- **6b:** Added transitional paragraph between hero "What We Do" section and the Services grid. New paragraph explains how services work together under the VFO model, bridging the two sections.
- **6c:** Expanded "Do I need all these services?" FAQ from a simple "No" response to a detailed answer covering business owners with complex needs, FIRE-track clients, and the flat-fee-covers-all model.

### Correction 7 — Pricing Page
- **7a:** Fee calculator slider min changed from $250K to $500K, max from $25M to $35M.
- **7b:** Fixed display bug at round-million increments. Root cause: `formatNetWorth()` used `toFixed(1)` which rounded $1.95M to display as "$2.0M" while actual $2M displayed as "$2M" — different fees, confusingly similar labels. Fix: show 2 decimal places with trailing zero stripping (e.g., $1.95M shows as "$1.95M", $2M shows as "$2M").
- **7c:** Updated "Do you charge for the intro call?" FAQ to mention the 45-minute Strategy & Vision meeting that follows. New copy matches Josh's exact wording.

### Correction 8 — FIRE Page
- Added 6th card: "Geographic Arbitrage Planning" — covers state income tax, cost of living, property tax differences, and international relocation modeling. Chose this over Healthcare (overlaps with existing card #5), Coast-FI (overlaps with card #3), and Passive Income (less FIRE-specific). Grid now has 6 cards for visual symmetry (2x3).

### Correction 9 — Real Estate Investors Page
- **9a:** Changed FAQ property range from "between 3 and 15 properties" to "between 3 and 100 properties."

### Correction 10 — Contact Page
- Header "Book a Call" button updated via Navigation.tsx changes (Correction 1). Contact page CTA card already had correct booking URL from previous session.

---

## Files Modified
- `src/components/ScrollToTop.tsx` (new)
- `src/app/layout.tsx`
- `src/components/Navigation.tsx`
- `src/components/CTASection.tsx`
- `src/components/FeeCalculator.tsx`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/services/page.tsx`
- `src/app/pricing/page.tsx`
- `src/app/for-fire-followers/page.tsx`
- `src/app/for-real-estate-investors/page.tsx`

## Build Status
- `npm run build` passes cleanly (18 routes, all static)

## Fee Calculator Verification (formula outputs)
| Net Worth | Annual Fee | Monthly Fee |
|-----------|-----------|-------------|
| $500K | $10,000 | $833 |
| $1M | $10,000 | $833 |
| $2M | $13,500 | $1,125 |
| $3M | $17,000 | $1,417 |
| $4M | $19,000 | $1,583 |
| $5M | $21,000 | $1,750 |
| $10M | $31,000 | $2,583 |
| $20M | $41,000 | $3,417 |
| $35M | $56,000 | $4,667 |
