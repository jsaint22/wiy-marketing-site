# SEO Keyword Map — Wealth In Yourself
Generated: 2026-06-27 | Branch: feat/seo-aeo-growth-2026-06-27

This map tracks target keywords → canonical page, plus supporting and long-tail
terms that should appear in content and meta copy. Serves as the single reference
for on-page optimization alignment.

---

## Tier 1 — Primary Commercial Intent Keywords

| Keyword | Target Page | Status |
|---------|-------------|--------|
| flat-fee financial planner | `/` (homepage) | In title + description |
| flat-fee fiduciary financial planning | `/` | In H1 + description |
| flat fee financial advisor | `/pricing`, `/vs-aum` | In metadata + copy |
| fee-only financial planner | `/services` | In page copy |
| flat fee vs AUM advisor | `/vs-aum` | Page title + H1 |
| financial planner Lake Tahoe | `/financial-planner-lake-tahoe` | Page title optimized |
| financial planner Zephyr Cove NV | `/financial-planner-lake-tahoe` | In schema + copy |
| financial planning for business owners | `/for-business-owners` | Metadata title |
| financial planning for real estate investors | `/for-real-estate-investors` | Metadata title |
| financial planning FIRE | `/for-fire-followers` | Metadata title |
| virtual family office | `/virtual-family-office` | Metadata title updated |

---

## Tier 2 — Comparison / Evaluation Keywords

| Keyword | Target Page | Status |
|---------|-------------|--------|
| 1% AUM fee alternative | `/vs-aum` | Core topic of page |
| how much does a financial advisor cost | `/pricing`, `/calculator` | Calculator answers this |
| financial advisor cost calculator | `/calculator` | Title updated |
| fiduciary financial advisor | `/fiduciary` | Page dedicated to topic |
| fee-only vs fee-based advisor | `/faq`, `/fiduciary` | FAQ has answer |
| is flat fee better than AUM | `/vs-aum` | Page answers question |
| financial planning minimum net worth $1 million | `/pricing`, `/faq` | In FAQ + pricing |
| $15,000 financial planning minimum fee | `/pricing`, `/faq` | In FAQ copy |

---

## Tier 3 — Long-Tail / AEO (Answer Engine Optimization) Keywords

These are questions users ask AI assistants and voice search. Covered in FAQ,
blog, and llms.txt.

| Question | Coverage | Format |
|----------|----------|--------|
| What does a flat-fee financial planner charge at $1M net worth? | `/pricing`, `/calculator`, `llms.txt` | Table + calculator |
| Is 1% AUM fee worth it? | `/vs-aum` | Comparison page |
| What is a fiduciary financial advisor? | `/fiduciary`, `/faq` | Definition + FAQ |
| What is a virtual family office? | `/virtual-family-office`, `/faq` | Page + FAQ |
| How does declining fee structure work? | `/pricing`, `/faq` | Tier table + FAQ |
| Can I pay a flat fee for financial planning instead of AUM? | `/vs-aum`, `/pricing` | Comparison |
| How many meetings does financial planning require? | `/our-process`, `/faq` | 9-meeting process |
| What is the difference between fee-only and fee-based? | `/faq`, `/fiduciary` | FAQ + fiduciary page |
| Financial planner for FIRE (Financial Independence Retire Early) | `/for-fire-followers` | Dedicated page |
| Tax planning for business owners with S-corps | `/for-business-owners`, `/blog` | Page + future blog |
| Real estate investor financial planning | `/for-real-estate-investors` | Dedicated page |
| REPS qualification planning | `/for-real-estate-investors` | In case study |

---

## Tier 4 — Local / Brand Keywords

| Keyword | Target Page | Status |
|---------|-------------|--------|
| Wealth In Yourself | `/` | Brand; schema.org org name |
| Joshua St. Laurent CFP | `/about` | Metadata + schema Person |
| Josh St. Laurent financial planner | `/about` | Schema Person + social |
| WIY financial planning | `/` | Brand abbreviation |
| financial advisor near Lake Tahoe | `/financial-planner-lake-tahoe` | Page + schema address |
| Nevada registered investment adviser | `/fiduciary`, `/disclosures` | Compliance copy |

---

## Schema.org Coverage (as of 2026-06-27)

| Schema Type | Location | Status |
|-------------|----------|--------|
| FinancialService + Organization | `layout.tsx` (sitewide) | LIVE — upgraded 2026-06-27 |
| Person (Josh St. Laurent) | `layout.tsx` (sitewide) | LIVE |
| WebSite | `layout.tsx` (sitewide) | LIVE — added 2026-06-27 |
| FAQPage | `/faq` page | LIVE |
| BreadcrumbList | `/pricing`, `/faq`, `/about`, `/vs-aum`, `/for-business-owners`, `/for-real-estate-investors` | LIVE — added 2026-06-27 |

---

## Pages Missing Structured Data (Future Opportunities)

- `/services` — could use Service schema
- `/our-process` — could use HowTo or Service schema
- `/blog/[slug]` — could use Article schema (author, datePublished, etc.)
- `/podcast/[slug]` — could use PodcastEpisode schema

---

## AEO / GEO Coverage

`public/llms.txt` created 2026-06-27. Covers:
- Firm identity + registration status
- Full fee schedule with examples
- Service description
- Process overview
- What WIY is NOT (important for AI disambiguation)
- Permissions grant for AI citation

---

## Priority Content Gaps (Blog Opportunities)

1. "Is a 1% AUM fee worth it for a $5M portfolio?" — high search + AEO value; `/vs-aum` already
   has data; a blog post would capture long-form ranking + build E-E-A-T
2. "Financial planning for S-corp business owners" — high intent; `/for-business-owners` pillar
   exists but blog post could target specific entity/tax angle
3. "What does real estate professional status (REPS) actually mean?" — tax strategy; supports
   `/for-real-estate-investors` pillar with SERP-rankable content
4. "How to think about fees when interviewing a financial advisor" — middle-funnel; links to
   `/pricing`, `/vs-aum`, `/faq`
5. "Virtual family office vs. traditional wealth management" — targets HNW evaluation keywords

---

## Notes

- Template pattern: page title shows as "{title} | Wealth In Yourself" per `layout.tsx`
- All financial figures in content and schema must match published ADV Part 2A (SR8)
- AggregateRating / Review schema are PROHIBITED per task guardrails (no testimonials)
- Stale `memory/project_fees.md` (0.50%/$417/mo tiers) is NOT a public file; internal only
- `llms.txt` is the authoritative AI reference; keep synced when fee schedule changes
