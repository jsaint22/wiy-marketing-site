---
name: WIY Fee Model Tiers
description: Declining percentage flat fee structure used in calculator and pricing page
type: project
---

Fee tiers (annual, calculated on net worth):
- First $1M: 0.50%
- $1M–$3M: 0.35%
- $3M–$5M: 0.25%
- $5M–$10M: 0.15%
- Above $10M: 0.10%

Billed as monthly flat fee. Examples:
- $1M NW → ~$417/mo
- $3M NW → ~$779/mo
- $5M NW → ~$1,029/mo
- $10M NW → ~$1,654/mo

**Why:** Josh needs to verify these tiers match his actual fee schedule.
**How to apply:** Used in FeeCalculator component and Pricing page examples. Update src/components/FeeCalculator.tsx if tiers change.
