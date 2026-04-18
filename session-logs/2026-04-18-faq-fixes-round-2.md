# Session Log: FAQ Fixes Round 2

**Date:** 2026-04-18
**Scope:** 5 targeted fixes based on Josh's review decisions

## Changes Made

### FIX 1 — Q5: Location Question
- **File:** `src/app/faq/page.tsx`
- Replaced "Reno, Nevada" framing with "Lake Tahoe, Nevada" as the anchor location
- Added detail about Nevada Beach proximity, nationwide virtual service, and an invitation to visit

### FIX 2 — Q13: What Happens After the Intro Call
- **File:** `src/app/faq/page.tsx`
- Sharpened answer to lead with the prospect portal as the compelling deliverable
- Repositioned Strategy & Vision call as a follow-up step, not the immediate next action
- Added "you don't leave with 'I'll follow up'" framing

### FIX 3 — Q17: Do You Manage My Investments Directly
- **File:** `src/app/faq/page.tsx`
- Made investment management inclusion in flat fee explicit
- Named Altruist as primary custodian with rationale for selection
- Added Interactive Brokers as secondary platform for edge cases
- Reinforced fee consistency regardless of portfolio size

### FIX 4 — Q30: Public Testimonials
- **File:** `src/app/faq/page.tsx`
- Removed "we can connect you with existing clients" offer (compliance review decision)
- Replaced with intro call redirect as the alternative to testimonials
- Framed as fiduciary privacy commitment, not just compliance constraint

### FIX 5 — Nav Consolidation
- **File:** `src/components/Navigation.tsx`
- Removed FAQ from main header nav (was 8 items, now 7 + CTA)
- FAQ page still exists at `/faq` and remains in footer
- Contact was not in header nav (already footer-only), confirmed no change needed

## Footer (No Changes Needed)
- Footer already contains: About, Services, Pricing, FAQ, Contact, Blog, Case Studies, VFO, privacy/legal links
- No modifications required

## Build
- `npm run build` passes cleanly with all routes intact
- `/faq` route confirmed in build output
