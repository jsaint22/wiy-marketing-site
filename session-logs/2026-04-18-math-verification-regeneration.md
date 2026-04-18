# Session Log: Math Verification & Regeneration

**Date:** April 18, 2026
**Task:** Regenerate all financial projections using verified math

## Problem

The fee projection engine (`fee-math.ts`) had two critical bugs:
1. **Fees were not deducted from the portfolio** — projections assumed fees were paid from an external source, overstating both portfolio growth and cumulative fees
2. **WIY fee used a 3% annual escalation** on the initial fee instead of recalculating the tiered formula on the current portfolio value each year

These bugs affected: the AUM Math PDF, the /vs-aum page, and the FeeCalculator component.

## Verified Numbers (Python audit, April 18, 2026)

All numbers verified via `python3` with exact looping calculations. The TypeScript implementation (`fee-math.ts`) was then verified to produce identical results.

### $5M Starting Portfolio

| Metric | 20 Years | 30 Years |
|--------|----------|----------|
| AUM cumulative fees | $1,953,284 | $4,177,861 |
| WIY cumulative fees | $603,447 | $1,079,849 |
| Fee delta | $1,349,836 | $3,098,011 |
| AUM ending portfolio | $15,825,209 | $28,153,939 |
| WIY ending portfolio | $18,194,419 | $35,146,187 |
| **Portfolio benefit** | **$2,369,210** | **$6,992,247** |

### $1M Starting Portfolio
- 20yr: fee delta $121,181 | portfolio benefit $187,585
- 30yr: fee delta $359,240 | portfolio benefit $683,161

### $10M Starting Portfolio
- 20yr: fee delta $3,059,696 | portfolio benefit $5,428,885
- 30yr: fee delta $6,754,669 | portfolio benefit $15,617,906

### $25M Starting Portfolio
- 20yr: fee delta $8,269,207 | portfolio benefit $14,848,583
- 30yr: fee delta $17,801,032 | portfolio benefit $41,963,608

## Changes Made

### A. `src/lib/pdf/fee-math.ts` — Core engine rewrite
- Rewrote `projectFees()` to track two independent portfolio paths (AUM and WIY)
- Fees deducted from portfolio each year
- WIY fee recalculated on current WIY portfolio value (not escalated from initial)
- Removed `wiyEscalation` parameter
- New return type `ProjectionSummary` includes `portfolioBenefit`, `feeDelta`, ending portfolios
- Verified output matches Python audit exactly for all 8 scenarios

### B. `src/lib/pdf/aum-math.tsx` — PDF regeneration
- Updated to use new `ProjectionSummary` data structure
- Bar charts now show portfolio benefit (not just cumulative fees)
- Shows both fee delta and portfolio benefit with portfolio benefit as primary
- Added Page 9: Methodology & Assumptions page with:
  - All assumptions listed
  - Explanation of why portfolio benefit > fee delta
  - Summary of key results
- Total pages: 11 (was 10)

### C. `src/app/vs-aum/page.tsx` — Website page update
- Now imports and uses `projectFees` from fee-math.ts (was inline buggy math)
- Hero headline: "$2.37M in portfolio value over 20 years" (was "$1 million")
- Sub-headline references $6.99M 30-year number
- Summary cards lead with portfolio benefit, fee delta shown as supporting detail
- Removed all "3% annual reassessment" language
- Table shows AUM portfolio value (tracked with fee deductions)
- Added proper footnote about assumptions

### D. `src/app/api/subscribe/route.ts` — Email body
- Updated to reference verified portfolio benefit numbers:
  "$2.37M more in portfolio value" (20yr) and "$6.99M" (30yr)

### E. `src/components/FeeCalculator.tsx` — Pricing calculator
- Fixed 30-year projection to use dual portfolio paths with fee deduction
- Display now shows "Portfolio benefit" as primary number
- Fee delta shown as supporting detail below

### F. `src/lib/pdf/MATH-METHODOLOGY.md` — Documentation
- Documents exact assumptions, formulas, compounding approach
- Contains all verified results
- Lists all implementation files
- Source of truth for future math on the site

## Verification

- ✅ Python audit: all 8 scenarios (4 wealth levels × 2 time horizons) verified
- ✅ TypeScript `fee-math.ts`: output matches Python exactly for all scenarios
- ✅ `npm run build`: passes with zero errors
- ✅ No stale numbers found in codebase (grep for old values returns no matches)
- ✅ No references to "3% reassessment" or `wiyEscalation` remain
