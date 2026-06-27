# Math Methodology — AUM vs. WIY Fee Projections

**Source of truth for all financial projections on the WIY site and in the AUM Math PDF.**

Verified via Python audit on April 18, 2026.

## Assumptions

- **Portfolio growth rate:** 7% annually
- **AUM fee:** 1% of current portfolio value, charged at end of year
- **WIY fee:** Tiered formula (see below), recalculated on current portfolio value each year
- **Fee payment:** Fees are paid FROM the portfolio each year, reducing the base for future growth
- **Two portfolio paths:** One portfolio paying AUM fees, one paying WIY fees — tracked independently

## WIY Tiered Fee Formula

| Tier | Range | Rate |
|------|-------|------|
| 1 | First $1,000,000 | 1.00% |
| 2 | Next $2,000,000 ($1M–$3M) | 0.35% |
| 3 | Next $7,000,000 ($3M–$10M) | 0.20% |
| 4 | Above $10,000,000 | 0.10% |

**Annual minimum:** $15,000
**Below $500K:** Not eligible (fee = $0)

Example at $5M:
- First $1M × 1.00% = $10,000
- Next $2M × 0.35% = $7,000
- Next $2M × 0.20% = $4,000
- **Total: $21,000/year**

## AUM Fee Formula

Simple: `portfolio_value × 0.01` each year.

## Compounding Approach

Each year, for each portfolio path:

1. Grow portfolio by 7%: `portfolio *= 1.07`
2. Calculate fee on end-of-year value
3. Deduct fee from portfolio: `portfolio -= fee`
4. Track cumulative fees paid

The "portfolio benefit" = WIY ending portfolio − AUM ending portfolio.
This captures both the direct fee savings AND the lost compounding on those fees.

## Verified Results

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

Note: WIY's $15K annual minimum is HIGHER than 1% AUM at $1M ($10K). WIY becomes
cheaper only after the portfolio grows past ~$1.5M. Long-term the lower tiers win,
but year-1 cost is higher for WIY at this level.

| Metric | 20 Years | 30 Years |
|--------|----------|----------|
| Fee delta (AUM − WIY cumulative) | $82,993 | $324,164 |
| Portfolio benefit | $81,314 | $478,253 |

### $10M Starting Portfolio

| Metric | 20 Years | 30 Years |
|--------|----------|----------|
| Fee delta | $3,059,696 | $6,754,669 |
| Portfolio benefit | $5,428,885 | $15,617,906 |

### $25M Starting Portfolio

| Metric | 20 Years | 30 Years |
|--------|----------|----------|
| Fee delta | $8,269,207 | $17,801,032 |
| Portfolio benefit | $14,848,583 | $41,963,608 |

## Implementation

- **Core engine:** `src/lib/pdf/fee-math.ts` — `projectFees()` function
- **PDF:** (no dedicated AUM math PDF; projections surface via /vs-aum page)
- **Website /vs-aum:** `src/app/vs-aum/page.tsx` — uses `projectFees()` for all projections
- **Calculator:** `src/components/FeeCalculator.tsx` — inline implementation of same algorithm
- **Email:** `src/app/api/subscribe/route.ts` — references portfolio benefit numbers

## Important Notes

- "Portfolio benefit" is the primary metric shown to clients — it includes lost growth on fees, making it both more accurate and more compelling than raw fee delta.
- Fee delta is shown as supporting detail.
- All figures are pre-tax and illustrative.
- The 7% growth rate is a long-term historical average for diversified portfolios, not a guarantee.
