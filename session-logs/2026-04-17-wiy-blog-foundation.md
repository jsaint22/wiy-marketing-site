# Session Log — Blog Foundation Content
**Date:** 2026-04-17
**Scope:** Three foundational thought leadership blog posts for WIY

## Posts Written

### 1. "The Hat Trick Nobody Talks About" (~1,400 words)
- **Slug:** `/blog/the-hat-trick-nobody-talks-about`
- **Hook:** Opens with the Fidelity conference room scene — advisors literally saying "take off your IA hat, put on your BD hat"
- **Core argument:** Dual registration (IA + BD) lets the same advisor switch between fiduciary and suitability standards mid-conversation. Most clients never know.
- **CTA:** Book 15-min call or learn about flat-fee model

### 2. "Why AUM Fees Are a Structural Conflict of Interest" (~1,800 words)
- **Slug:** `/blog/why-aum-fees-are-a-structural-conflict-of-interest`
- **Hook:** "It's just one percent" — the line designed to sound small
- **Core argument:** AUM fees compound with portfolio growth, creating a structural incentive against advice that moves money out of managed accounts (mortgages, real estate, business investment, gifting, charity)
- **CTA:** Download AUM Math PDF

### 3. "What the W-2 Actually Costs You" (~1,500 words)
- **Slug:** `/blog/what-the-w2-actually-costs-you`
- **Hook:** The W-2 as concentration risk, not safety
- **Core argument:** W-2 employment = single point of failure with zero control over taxes, benefits, pricing, and equity. Entrepreneurship and real estate are the alternative — with practical steps for transition.
- **CTA:** Book 15-min call (targeted at entrepreneurs/aspiring entrepreneurs)

## Strategic Decisions

### Fee math numbers
The task brief referenced "$490K delta at $5M over 20 years" and "$1.85M delta over 30 years." The actual numbers from the codebase's `fee-math.ts` calculations are significantly larger:
- **$5M / 20yr:** ~$1.49M cumulative fee difference (AUM $2.05M vs WIY $564K)
- **$5M / 30yr:** ~$3.72M cumulative fee difference (AUM $4.72M vs WIY $999K)

Used the real calculated numbers with "illustrative" language and a pointer to the AUM Math PDF for full methodology. The discrepancy likely stems from the task brief using rough estimates vs. the actual compounding model.

### Compliance approach
- All math labeled "illustrative" with assumptions stated
- No specific performance claims
- No testimonials or client references
- AUM Math PDF referenced as the detailed source
- Each post ends with a soft CTA (no hard sell)

### Voice calibration
- Checked every paragraph against the one-sentence test from voice doc
- Used forbidden phrase list as a filter (no "holistic," "synergy," "wealth management solutions," etc.)
- First person throughout, Boston-direct tone
- Short sentences for emphasis, conviction without arrogance
- Concrete examples (mortgage payoff, rental property purchase, S-Corp election) over abstract principles
- Referenced Josh's Fidelity story, GGU degree, and personal business ownership where authentic

### Blog index
No changes needed — the existing `src/app/blog/page.tsx` uses `getAllPosts()` which reads all `.mdx` files from `content/blog/` and sorts by date. All three posts automatically appear on the blog index page.

## Technical Details
- Format: MDX with YAML frontmatter (title, description, date, author, tags)
- Location: `content/blog/`
- Rendering: `next-mdx-remote/rsc` via `src/app/blog/[slug]/page.tsx`
- Build: Passes. All three routes statically generated.
