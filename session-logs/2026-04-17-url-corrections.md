# Session Log: URL Corrections — 2026-04-17

## Summary
Two targeted URL fixes across the WIY marketing site.

## Changes Made

### 1. Booking URL (Contact Page)
- **File:** `src/app/contact/page.tsx`
- **Old:** `https://calendly.com/joshstlaurent-wiy/intro-call`
- **New:** `https://links.wealthinyourself.com/widget/bookings/wiy-15-min-call`
- **Scope:** This was the only direct Calendly link in the codebase. All other "Book a Call" CTAs (nav, home, about, services, pricing, VFO, niche pages) link to `/contact`, which now points to the correct booking URL.

### 2. Form ADV Link (Footer)
- **File:** `src/components/Footer.tsx`
- **Old:** `https://wealthinyourself.com/form-adv-part-2a/` (broken — page does not exist)
- **New:** `https://adviserinfo.sec.gov/firm/summary/322123` (SEC IAPD page with Part 2A, Part 2B, and firm summary)
- **Link text updated:** "Form ADV Part 2A" → "Form ADV & firm disclosures on SEC.gov"

## Verification
- Grep confirmed zero remaining references to `calendly.com` or `form-adv-part-2a` in `src/`.
- `next build` completed successfully with no errors.
- Pushed to `origin/main` — Vercel auto-deploy triggered via GitHub integration.

## Commit
`d375c1b` — "Fix booking URL and Form ADV link"
