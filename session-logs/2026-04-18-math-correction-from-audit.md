# Math Correction from April 18, 2026 Audit

## Summary
Applied 3 fixes identified by `audit/math-audit-2026-04-18.md`. All numbers verified via Python using the canonical fee-math.ts methodology (7% growth, fees deducted from portfolio annually).

---

## FIX 1 — Blog post: "Why AUM Fees Are a Structural Conflict of Interest"

**File:** `content/blog/why-aum-fees-are-a-structural-conflict-of-interest.mdx`

| Metric | Before (wrong) | After (verified) |
|--------|----------------|-------------------|
| Year-20 portfolio | "$19.3 million" (no fee deduction) | "$15.8 million" (fees deducted annually) |
| Year-20 AUM fee | "$193,000/year" | "$160,000/year" |
| 20-year fee delta | "$1.49 million" | "$1.35M in fees, $2.37M portfolio benefit" |
| 30-year fee delta | "$3.72 million" | "$3.10M in fees, $6.99M portfolio benefit" |
| Primary claim | Fee delta | Portfolio benefit (more honest, more compelling) |
| Footnote | Generic illustrative disclaimer | Specific methodology note with PDF link |

**Root cause:** Original numbers assumed portfolio grew at 7% without deducting fees — the $19.3M figure is the *no-fee* portfolio, not the AUM portfolio.

---

## FIX 2 — Pricing page AUM comparison

**File:** `src/app/pricing/page.tsx` (line ~305)

| Before | After |
|--------|-------|
| "At $5M, a typical AUM advisor costs $50K/year. Wealth In Yourself costs $21K. Over 20 years, that gap becomes $580K+." | "At $5M over 20 years: our flat fee costs ~$603K. A typical 1% AUM advisor costs ~$1.95M — a difference of $1.35M in fees alone, or $2.37M when you account for the growth those fees would have earned you." |

**Root cause:** $580K was naive math ($50K - $21K = $29K/year x 20 = $580K). Doesn't account for compounding or fee growth.

---

## FIX 3 — Agent fee range "3-5%"

**Status:** Not found in wiy-marketing-site repo. Grep for `3[-–]5%`, `agent.*commission`, and `commission.*agent` returned no matches. This fix applies to the TSPW repo (`tspw-marketing-site`). Documented as follow-up.

---

## Python Verification Output

```
Year 20 AUM fee: $159,851
Year 20 WIY fee: $39,234

=== 20 YEARS ===
AUM cumulative fees: $1,953,284
WIY cumulative fees: $603,447
Fee delta: $1,349,836
AUM ending portfolio: $15,825,209
WIY ending portfolio: $18,194,419
Portfolio benefit: $2,369,210

=== 30 YEARS ===
AUM cumulative fees: $4,177,861
WIY cumulative fees: $1,079,849
Fee delta: $3,098,011
AUM ending portfolio: $28,153,939
WIY ending portfolio: $35,146,187
Portfolio benefit: $6,992,247

WIY annual fee at $5M: $21,000
```

All numbers placed in content match Python output (rounded for readability: $1.35M, $2.37M, $3.10M, $6.99M, $15.8M, $160K, ~$603K, ~$1.95M).
