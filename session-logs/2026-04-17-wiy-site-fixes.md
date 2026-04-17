# WIY Marketing Site — Fixes Session Log
**Date:** 2026-04-17
**Scope:** Factual corrections, design fixes, copy updates, fee calculator rebuild, compliance review

---

## Fixes Applied

### Identity & Name Corrections
- [x] "Josh Sanchez" → "Joshua St. Laurent" everywhere (about page, home page alt text, contact page metadata, blog.ts default author, blog post frontmatter, README)
- [x] "The Secure Path to Wealth" → "Top Shelf Private Wealth (TSPW)" on about page
- [x] "Portugal" → "Zephyr Cove, Nevada" on about page
- [x] "partner Amanda" → "wife Amanda"
- [x] "Amanda's daughter" → "Our daughter"
- [x] "Tahoe Motorcycle Rentals" → "Lake Tahoe Motorcycle Rentals"

### Credentials
- [x] CFP® (with registered trademark symbol)
- [x] CFT™ (with trademark symbol — NOT CFT-I)
- [x] APFC® (Accredited Personal Financial Coach — added)
- [x] ACC (Associate Certified Coach — added)
- [x] MS Financial Life Planning (kept)
- [x] EA in progress (Enrolled Agent — added)
- [x] Series 65 — REMOVED
- [x] CFT-I — REMOVED (replaced with CFT™)
- [x] RIA line — REMOVED (covered by footer disclosure)

### FIAT Acronym — KILLED
- Removed all references to "FIAT" as a branded acronym
- The four principles (Fee-only, Independent, Always a fiduciary, Transparent) are kept but presented as "What we stand for" — no acronym, no letter-by-letter styling
- **Decision rationale:** Josh has a pre-existing association with George Kinder's "FIAT — Fiduciary In All Things" used in his thought leadership. Creating a competing FIAT acronym on the marketing site would confuse his brand.

### About Page — Personal Section Rewrite
- Replaced incorrect paragraph with corrected version mentioning:
  - Two advisory firms: WIY and Top Shelf Private Wealth
  - Zephyr Cove, Nevada (not Portugal)
  - Wife Amanda, son Cole, daughter due September 2026
  - Lake Tahoe Motorcycle Rentals and CA Homes In The Pines
  - The "advisors should build wealth, not just manage it" framing

### CTA Wordsmithing
- About page CTA: "Want to work with someone who actually gives a damn?" → "Looking for an advisor who lives the work, not just sells it?"
  - **Decision:** This option ties naturally to the personal section about Josh owning businesses and building wealth himself. It's direct without being crude.

### Services Page
- [x] Headline: "Everything you need. Nothing you don't." → "Everything a family office delivers. Without the family office minimums."
  - **Decision:** Directly reinforces VFO positioning and flat-fee advantage. Clearer differentiator.
- [x] Added 2 new service cards (9 total, 3×3 grid):
  - "Financial Therapy & Behavioral Coaching" — leverages Josh's CFT™ credential
  - "Cross-Border Planning" — relevant for TSPW tie-in (US-Canada hockey players)
- [x] Intro call step: "30 minutes" → "15 minutes"

### Services FAQ Edits
- [x] "Do you manage investments directly?" — added Altruist custodian detail
- [x] "Do you sell insurance?" — rewritten with VFO coordination language, no commissions
- [x] "What does 'flat fee' mean exactly?" → "How does the flat fee work?" — rewritten to clarify net worth basis, anniversary reassessment, primary residence exclusion
- [x] "How often do we meet?" — rewritten with 13-meeting onboarding detail (Ground/Design/Build/Evolve phases), quarterly ongoing

### Pricing Page
- [x] Primary residence exclusion callout — prominent banner section
- [x] Fee transparency differentiator — dark callout box about publishing fees
- [x] Added 2 more included service cards (9 total, 3×3 grid):
  - "Unlimited Meetings"
  - "VFO Partner Network"
- [x] Fee tiers updated to correct rates: 1.00%, 0.35%, 0.20%, 0.10%
- [x] Milestones updated with correct math
- [x] $10,000 minimum fee noted under tier table

### Pricing FAQ Edits
- [x] "How is net worth calculated?" — added primary residence exclusion, anniversary date reassessment
- [x] "Is there a minimum net worth requirement?" — rewritten with $10K minimum fee, $1M sweet spot, $500K floor, honest about below $500K
- [x] "Do fees change if markets drop?" → "Do fees change if my net worth decreases?" — rewritten with anniversary reassessment, downside honesty (retirement, philanthropy, life phase)
- [x] "How does this compare to a typical AUM advisor?" — fixed math: $3M = $17,000/yr (was incorrectly $9,350), savings = $13,000/yr vs $30,000 AUM
- [x] Intro call FAQ: "30-minute" → "15-minute"

### Fee Calculator — Complete Rebuild
- [x] New tier structure: First $1M @ 1.00%, next $2M @ 0.35%, next $7M @ 0.20%, above $10M @ 0.10%
- [x] $10,000 annual minimum enforced
- [x] Below $500K: shows "Below our minimum" message instead of fee
- [x] Slider range: $250K–$25M (was $500K–$25M)
- [x] Label: "Your Net Worth (excluding primary residence)"
- [x] 30-year AUM comparison maintained

#### Fee Calculator Test Cases
| Net Worth | Annual Fee | Monthly Fee | Effective Rate |
|-----------|-----------|-------------|---------------|
| $250K     | Below minimum | — | — |
| $500K     | $10,000   | $833        | 2.00%         |
| $1M       | $10,000   | $833        | 1.00%         |
| $2M       | $13,500   | $1,125      | 0.68%         |
| $3M       | $17,000   | $1,417      | 0.57%         |
| $5M       | $21,000   | $1,750      | 0.42%         |
| $10M      | $31,000   | $2,583      | 0.31%         |
| $20M      | $41,000   | $3,417      | 0.21%         |

### Calculator Page
- [x] Fee tier text updated to match new rates
- [x] Calendly link → changed to internal /contact link (avoiding hardcoded Calendly URL)
- [x] Primary residence exclusion mentioned
- [x] $10K minimum mentioned

### Contact Page
- [x] "30 minutes" → "15 minutes" everywhere
- [x] "Josh Sanchez" → "Joshua St. Laurent" in metadata
- [x] Calendly URL updated placeholder: joshstlaurent-wiy (was joshsanchez-wiy)

### Site-Wide CTA
- [x] Default CTA subtext: "30-minute" → "15-minute"
- [x] All page-specific CTA overrides updated to 15-minute

### Design Fixes
- [x] **Header logo:** increased from h-8/h-10 to h-10/h-12 (~20% increase)
- [x] **Footer logo:** increased from h-16 to h-28 (significant increase)
- [x] **Headshot:** all references updated to `josh-headshot-v2.jpg`
- [x] **VFO 6-card grid hover:** added teal accent color transition on hover (bg-primary with white text)
- [x] **Padding reduction (site-wide):** all section padding reduced from `py-16 sm:py-24 lg:py-32` → `py-10 sm:py-14 lg:py-20` (heroes) and `py-16 sm:py-24` → `py-10 sm:py-14` (sections). Applied across ALL pages:
  - Home, About, Services, Pricing, Contact, VFO, Calculator, Blog, Case Studies, For Business Owners, For Real Estate Investors, For FIRE Followers
  - CTA sections, FAQ sections

### Footer Compliance
- [x] Extended compliance disclosure with full advisory disclaimer
- [x] Added Form ADV Part 2A link (placeholder URL: wealthinyourself.com/form-adv-part-2a/)
- [x] Confirmed Form CRS (ADV Part 3) link present
- [x] Confirmed Privacy Policy link present
- [x] Registration disclosure present (State of Nevada)
- [x] Added secondary disclaimer paragraph re: tax/legal/investment advice

### Lighthouse Scores
- **Performance:** 89 (LCP 2.6s — acceptable for local test; image optimization would push to 90+)
- **Accessibility:** 96
- **Best Practices:** 96
- **SEO:** 66 (expected — staging has noindex/nofollow; would score 90+ in production)

---

## Items Flagged for Josh

### Action Required
1. **New headshot upload needed:** Site now references `josh-headshot-v2.jpg` — please upload the high-quality headshot to `public/team/josh-headshot-v2.jpg`. Until uploaded, the image will show a broken state.
2. **Calendly URL:** Contact page uses `joshstlaurent-wiy/intro-call` — confirm this matches your actual Calendly. The old `joshsanchez-wiy` has been removed.
3. **Form ADV Part 2A:** Footer now links to `wealthinyourself.com/form-adv-part-2a/` — this page needs to exist on the WordPress site (or be created as a PDF upload). Currently a placeholder URL.

### Compliance Review Items
4. **Fee calculator disclaimer:** Consider adding a disclaimer below the calculator: "This calculator provides estimates only. Your actual fee will be determined during onboarding based on a comprehensive review of your financial situation."
5. **"As seen in" block:** Verify Forbes, MarketWatch, and Advisorpedia references are accurate and can be substantiated.
6. **Case studies disclaimer:** Currently present ("hypothetical examples for illustrative purposes only") — no changes needed.

### Nice-to-Have
7. **Performance → 90+:** Optimize hero headshot image (WebP format, proper sizing) once `josh-headshot-v2.jpg` is uploaded. This would push Lighthouse performance above 90.
8. **SEO meta descriptions:** Some SEO landing pages could benefit from unique meta descriptions once content stabilizes.

---

## Copy Decisions Made

| Decision | Choice | Rationale |
|----------|--------|-----------|
| About CTA headline | "Looking for an advisor who lives the work, not just sells it?" | Connects to personal section about owning businesses; direct without being crude |
| Services headline | "Everything a family office delivers. Without the family office minimums." | Directly reinforces VFO positioning and flat-fee advantage |
| New service cards | Financial Therapy + Cross-Border Planning | Leverages CFT™ credential; supports TSPW cross-border work |
| FIAT replacement | "What we stand for" (no acronym) | Preserves values, avoids conflict with Kinder's FIAT |
| Pricing new cards | Unlimited Meetings + VFO Partner Network | Reinforces comprehensive value; common prospect questions |
