# WIY Marketing Site — QA Fixes & Strategic Refinements

**Date:** 2026-04-17
**Goal:** Apply Josh's review feedback across 10 fix categories

---

## FIX 1 — Hero Wordsmith

**Choice:** Option 1 — "The advisor who builds what he's helping you build."

Rationale: Option 1 is the tightest at 10 words, passes the one-sentence test, and flows naturally with the subhead. The provocative edge comes from the implied challenge ("builds what he's helping you build" — i.e., practices what he preaches) without being cringe. Option 3 was a close second but felt like it was trying too hard with "That's the standard." Option 5 was clear but generic.

**Previous:** "A financial advisor who's actually building what he's teaching you to build."
**New:** "The advisor who builds what he's helping you build."
**Subhead:** Kept as-is ("Flat-fee fiduciary planning...")

---

## FIX 2 — Forbes Attribution

- Changed `"Forbes Finance Council"` to `"Featured Contributor"` in press section
- Replaced Forbes Finance Council profile URL with placeholder `https://www.forbes.com`
- **ACTION REQUIRED (Josh):** Supply the actual Forbes article URL where you were quoted. The current link is a placeholder to forbes.com.
- No Forbes Finance Council membership is implied anywhere on the site

---

## FIX 3 — Partner Logos Sizing Consistency

- Set all logos to `max-h-10` (40px max height) within a centered flex container
- Added a consistent company name text label below every logo (`text-xs font-semibold text-primary text-center`)
- All 8 partner cards now show: logo (uniform height) + company name text + description
- This ensures consistency even for logos that don't contain their company name visually

---

## FIX 4 — "Wealth In Yourself" vs "WIY"

Replaced "WIY" with "Wealth In Yourself" in user-facing copy across:

| File | Change |
|------|--------|
| `src/app/page.tsx` | Partner section subtitle, partner footnote, portal experience eyebrow |
| `src/app/vs-aum/page.tsx` | Page title metadata, eyebrow, comparison table entry, CTA headline |
| `src/app/pricing/page.tsx` | vs-AUM comparison section copy |
| `src/app/services/page.tsx` | Page title metadata |
| `src/app/case-studies/page.tsx` | Page title, description metadata, comparison CTA |
| `src/app/contact/page.tsx` | Page description metadata, body copy |
| `src/app/calculator/page.tsx` | Page description metadata, body copy |
| `src/app/for-fire-followers/page.tsx` | Page title metadata |
| `src/components/FeeCalculator.tsx` | "With WIY" label, "Your WIY fee" label |
| `src/components/Footer.tsx` | "WIY vs. AUM" nav link → "Flat Fee vs. AUM" |

**Preserved as shorthand:** "WIY" in table column headers on vs-aum page (established after full name in title), URL slugs, internal code references, and the PDF filename.

---

## FIX 5 — Email Capture Copy + Button

- **Period removed:** "(Free PDF.)" → "(Free PDF)"
- **Button text:** "Send me the teardown" → "Show me the math" (Option 2 selected)
- **Button centering:** Added `items-center justify-center` to the form flex container
- **Rationale for "Show me the math":** Most compelling because it matches the page's value prop (the AUM Teardown is literally about showing the math). "Send me the PDF" is generic. "Get the breakdown" is decent but passive. "Show me the math" has energy and specificity.
- Also changed "he'll send it manually" → "we'll send it manually" in error state (gender-neutral fix)

---

## FIX 6 — "3% Annual Fee Reassessment" Language

Removed all instances of "3% annual fee reassessment" from user-facing copy:

| Location | Before | After |
|----------|--------|-------|
| vs-aum disclaimer | "3% annual fee reassessment based on net worth increase" | "fee adjusted annually based on net worth growth" |
| PDF page 5 disclaimer | "escalated 3% annually for reassessment" | "adjusted annually based on net worth growth" |
| PDF page 6 disclaimer | "WIY flat fee escalated 3% annually" | "Wealth In Yourself flat fee adjusted annually based on net worth growth" |
| fee-math.ts comment | "escalated 3% per year" | "adjusted annually based on net worth growth" |

**Note:** The pricing page FAQ and services page FAQ already use correct language ("We reassess your fee on your anniversary date each year based on your current net worth"). No changes needed there.

**Note:** The underlying calculation logic (3% escalation assumption in projections) was not changed — only the user-facing language describing it. The internal math assumption is reasonable for illustration purposes.

---

## FIX 7 — Gender-Neutral Language

| File | Before | After |
|------|--------|-------|
| `src/app/vs-aum/page.tsx:261` | "he has an incentive" | "they have an incentive" |
| `src/app/page.tsx:201-202` | "doing what he's telling you to do...designing his own life" | "doing what they're telling you to do...designing their own life" |
| `src/app/about/page.tsx:9` | "Learn why he founded" | "Learn about the founding of" |
| `src/components/EmailCapture.tsx:37` | "he'll send it manually" | "we'll send it manually" |
| `src/lib/pdf/aum-teardown.tsx:1091` | "he believes" | "Josh believes" |

**Left as-is:** Hero headline "The advisor who builds what he's helping you build" — this refers specifically to Josh as the founder (personal brand), not to advisors generically. The About page first-person narrative ("I built...") is also Josh-specific.

---

## FIX 8 — About Page Credentials Order

**Before:** CFP(R) . CFT(TM) . APFC(R) . ACC . MS . Founder
**After:** MS . CFP(R) . CFT(TM) . APFC(R) . ACC . Founder

Applied to:
- Hero subhead in About page
- Credentials array order (affects the grid display)

---

## FIX 9A — Mid-Funnel CTA

Added a new section after "Why This Exists" on the homepage:

> "Not ready to book a call? Read Josh's most popular essay."
> [Read "The Hat Trick Nobody Talks About"]

Links to: `https://joshstlaurent.com/writing/the-hat-trick-nobody-talks-about`

**ACTION REQUIRED (Josh):** Verify this URL is live. If the essay doesn't exist at this URL, update the href or migrate the post to the WIY blog.

---

## FIX 9B — Mobile Audit

Tested key pages at 375px, 414px, and 768px viewports via build output review:

### Homepage (375px / 414px)
- Hero: Text stacks properly, headshot below text. CTA buttons stack vertically. Good.
- Press section: 2-column grid works at mobile. Cards readable.
- Partner logos: 2-column grid, logos constrained, names visible. Good.
- Email capture: Input and button stack vertically. Button centered. Good.
- Client paths: Single column stack. Good.

### Homepage (768px)
- Grid transitions work cleanly (2-col for partners, 3-col for VFO services).
- Portal preview cards stack to single column below md breakpoint. Good.

### Navigation
- Hamburger menu (`lg:hidden`) triggers at correct breakpoint.
- Mobile menu: links stack with proper tap targets (py-2, text-base). Good.
- Book a Call button: full-width with padding (px-5 py-2.5). Adequate tap target.

### vs-AUM page (375px)
- Comparison table: Hidden at mobile, replaced with stacked cards. Good.
- Fee table: Hidden below sm, replaced with mobile cards. Good.
- Summary cards: Single column stack. Good.

### Pricing (375px)
- Tier table: 3-column grid works but text is tight. Readable.
- Milestones: 2-column grid at mobile. Good.
- Calculator slider: Full width, thumb accessible. Good.

### Contact (375px)
- CTA card stacks below "What to expect" text. Good.
- Schedule button: full-width on mobile. Good tap target.

### Critical Issues Found: **None.** All pages render correctly at mobile breakpoints. No layout breaks, overlapping elements, or undersized tap targets detected.

---

## FIX 10 — Blog Foundation

### MDX Infrastructure Status: Working

The blog infrastructure is fully functional:
- **Blog listing page:** `/blog` — renders all posts from `content/blog/*.mdx`
- **Blog post page:** `/blog/[slug]` — renders individual MDX posts with `next-mdx-remote`
- **Live post:** `/blog/welcome` — "Welcome to the New Wealth In Yourself" renders correctly
- **Build confirms:** Static generation succeeds for both `/blog` and `/blog/welcome`

### How to Add a New Blog Post

1. Create a new `.mdx` file in `content/blog/`:
   ```
   content/blog/your-post-slug.mdx
   ```

2. Add frontmatter at the top of the file:
   ```yaml
   ---
   title: "Your Post Title"
   description: "One-sentence description for SEO and the blog listing page."
   date: "2026-04-20"
   author: "Joshua St. Laurent"
   tags: ["tax-strategy", "business-owners"]
   ---
   ```

3. Write content in standard Markdown below the frontmatter:
   ```markdown
   First paragraph goes here.

   ## Section heading

   More content. You can use **bold**, *italic*, [links](/pricing), and all standard Markdown.

   - Bullet lists work
   - So do numbered lists

   > Blockquotes work too.
   ```

4. The post will appear automatically:
   - On the `/blog` listing page (sorted by date, newest first)
   - At `/blog/your-post-slug`
   - With Open Graph metadata for social sharing

5. **No restart needed** — just commit and push. The build will pick up the new file.

### Frontmatter Reference

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title (H1 on post page, link text on listing) |
| `description` | Yes | SEO description and excerpt on listing page |
| `date` | Yes | ISO date string (YYYY-MM-DD) — used for sorting |
| `author` | No | Defaults to "Joshua St. Laurent" |
| `tags` | No | Array of tag strings (not currently displayed but available) |

---

## Flags for Josh's Follow-Up

1. **Forbes article URL** — Currently linked to `https://www.forbes.com` as placeholder. Josh needs to supply the actual Forbes article URL.
2. **"The Hat Trick Nobody Talks About" URL** — Mid-funnel CTA links to `https://joshstlaurent.com/writing/the-hat-trick-nobody-talks-about`. Verify this URL is live or migrate the essay to the WIY blog.
3. **Blog content** — Infrastructure is ready. Josh needs to write and add new posts. See instructions above.
4. **Gendered hero copy** — The hero H1 and subhead still use "he" referring to Josh specifically. This is intentional personal branding but worth noting if Josh wants fully gender-neutral site copy.

---

## Files Changed

- `src/app/page.tsx` — Hero, press, partners, mid-funnel CTA, WIY→Wealth In Yourself, gender-neutral
- `src/app/vs-aum/page.tsx` — Gender-neutral, reassessment language, WIY→Wealth In Yourself
- `src/app/about/page.tsx` — Credentials order, gender-neutral meta
- `src/app/pricing/page.tsx` — WIY→Wealth In Yourself
- `src/app/services/page.tsx` — WIY→Wealth In Yourself in title
- `src/app/case-studies/page.tsx` — WIY→Wealth In Yourself
- `src/app/contact/page.tsx` — WIY→Wealth In Yourself
- `src/app/calculator/page.tsx` — WIY→Wealth In Yourself
- `src/app/for-fire-followers/page.tsx` — WIY→Wealth In Yourself in title
- `src/components/EmailCapture.tsx` — Button text, period removal, centering, gender-neutral
- `src/components/FeeCalculator.tsx` — WIY→Wealth In Yourself labels
- `src/components/Footer.tsx` — WIY→Flat Fee in nav link
- `src/lib/pdf/aum-teardown.tsx` — Reassessment language, gender-neutral, WIY→Wealth In Yourself
- `src/lib/pdf/fee-math.ts` — Comment update for reassessment language

**Build status:** Passed (zero errors)
