---
name: WIY Fee Model Tiers
description: Declining percentage flat fee structure used in calculator and pricing page
type: project
---

Fee tiers (annual, calculated on net worth excluding primary residence), per
`src/lib/fee-canon.ts`, which mirrors `wiy-client-portal/lib/fees.ts` (the source of truth):
- First $1M: 1.00%
- $1M–$3M: 0.35%
- $3M–$10M: 0.20%
- Above $10M: 0.10%
- Minimum annual fee: $15,000 (applies at every net worth; there is no $0 tier)

Billed as a monthly flat fee. Examples:
- $1M NW → $15,000/yr (~$1,250/mo; the minimum binds)
- $3M NW → $17,000/yr (~$1,417/mo)
- $5M NW → $21,000/yr (~$1,750/mo)
- $10M NW → $31,000/yr (~$2,583/mo)
- $30M NW → $51,000/yr (~$4,250/mo)

Target client range (Josh, 2026-09-24): households with roughly $3 million to $30 million in
net worth. Site copy states that range and the $15,000 minimum fee; it does not state a
net-worth floor below the range. The filed ADV Part 2A (2026-06-26) Item 7 recommends a
$1,000,000 minimum net worth, negotiable at the firm's discretion, and Item 5 carries the
$15,000 minimum annual fee. Site copy must never contradict either.

**History:** until 2026-09-24 this note carried stale tiers (0.50% on the first $1M, $417/mo at
$1M) that never matched the published schedule.
**How to apply:** never hardcode tiers or 15_000 in a page or component; import from
`src/lib/fee-canon.ts`. `src/lib/fee-canon.test.ts` and `src/lib/pdf/fee-math.test.ts` fail on
drift; `src/lib/pdf/free-and-fee-wording-guard.test.ts` fails if sub-range floor copy returns.
