# Session Log: WIY FAQ Page

**Date:** 2026-04-18
**Objective:** Build a comprehensive FAQ page addressing prospect objections and common questions

---

## What Was Built

### Route: `/faq`
A full FAQ page with 30 questions across 6 categories, accordion UI, sticky sidebar navigation, JSON-LD FAQPage schema, and a bottom CTA.

### Files Created
- `src/app/faq/page.tsx` — Full FAQ page component

### Files Modified
- `src/components/Navigation.tsx` — Added "FAQ" link after Blog
- `src/components/Footer.tsx` — Added "FAQ" link in Company column
- `src/app/sitemap.ts` — Added `/faq` to static pages

---

## All 30 Answers

### A. About Wealth In Yourself

**1. What exactly is Wealth In Yourself?**
Wealth In Yourself is a flat-fee, fiduciary financial life planning firm. We help entrepreneurs, real estate investors, and people pursuing FIRE design a financial structure around the life they actually want — not a retirement date 30 years from now. One advisor, one fee, a full team of specialists behind the scenes.

**2. Who do you work with?**
Business owners, real estate investors, W-2 professionals building toward something bigger, and people pursuing financial independence on their own terms. The common thread is people who take personal responsibility for their path and want a planning partner — not a product salesperson.

**3. What makes you different from other financial advisors?**
Three things. First, we charge a flat fee — not a percentage of your assets — so our income doesn't grow just because your portfolio does. Second, we start with your life, not your money. Financial therapy and values-based planning come before spreadsheets. Third, we operate as a Virtual Family Office — you get a coordinated team (CPA, estate attorney, insurance specialist) instead of one advisor trying to do everything alone.

**4. Are you a fiduciary?**
Yes. 100% of the time. We're a Registered Investment Adviser with the State of Nevada, legally required to act in your best interest. We don't sell products, earn commissions, or switch hats mid-conversation. That last part matters more than most people realize.

**5. Where are you located? Do you work with clients outside Nevada?**
We're based in Reno, Nevada but work with clients across the country. Everything is virtual — video calls, shared portals, and a tech stack built for remote collaboration. Where you live doesn't limit what we can do together.

### B. Fees & Pricing

**6. How does your flat fee work?**
Your annual fee is based on your net worth (excluding your primary residence), calculated using a declining tiered percentage. The more you build, the lower the effective rate. We reassess once a year on your anniversary date. No surprises, no add-ons. Check the fee calculator on our pricing page to see exactly what you'd pay.

**7. Why flat fee instead of AUM?**
AUM fees create a structural conflict of interest. When your advisor's income grows as your account grows — regardless of whether they did anything — the incentives are misaligned. A flat fee means we get paid for the advice, not for holding your assets. Run the math on what you're actually paying your current advisor — the numbers usually speak for themselves.

**8. What's the minimum net worth to work with you?**
Our minimum annual fee is $10,000, which typically makes sense for clients with a net worth of $1M or higher (excluding primary residence). We can work with clients starting at $500K, but below that threshold a flat-fee model likely isn't the most cost-effective option for you — and we'd rather be honest about that upfront.

**9. What happens to my fee as my net worth grows?**
The effective rate declines. Our tiered structure means the percentage drops as your net worth increases, so you're never penalized for building wealth. If your net worth decreases — because you retired, traveled the world, or made a major life change — your fee decreases too. We reassess every year based on your current situation.

**10. Is there a long-term contract?**
No. No lock-in contracts. No cancellation fees. No guilt trips. We earn your business every month. If we stop adding value, you should leave.

**11. What's included in the fee?**
Everything. Life planning, tax strategy, investment management, insurance review, estate coordination, business planning, and real estate investor planning. One fee covers it all — no add-ons, no surprise invoices. If it touches your financial life, it's covered.

### C. The Process

**12. What happens on the 15-minute intro call?**
We talk about your situation, what's on your mind, and whether there's a mutual fit. No pitch. No pressure. No awkward sales script. If it makes sense for both of us, we'll schedule a deeper Strategy & Vision meeting — also free. You get a full hour with us before you spend a dollar.

**13. What happens after the intro call if we're a fit?**
We schedule a 45-minute Strategy & Vision meeting where we go deeper — your goals, your concerns, and what your ideal life looks like. After that, you'll get access to a prospect portal where you can see exactly what the planning process looks like, meet the team, and review a proposal. No PDFs lost in your inbox — everything lives in one place.

**14. How long does onboarding take?**
Most clients are fully onboarded within 30 days. That includes linking accounts, gathering documents, and completing your first planning meetings. We move quickly because we respect your time — but we don't rush the life planning conversations. Those deserve space.

**15. How often will we meet once I'm a client?**
Our planning process is built around 13 structured meetings across four phases — Ground, Design, Build, and Evolve. After the initial planning year, most clients meet quarterly with ad-hoc calls whenever something comes up. You'll never feel like you're waiting for a scheduled meeting to get an answer.

**16. How do I access my plan and documents?**
Everything lives in your client portal — your plan, documents, action items, meeting notes, and financial dashboard. No digging through email threads or shared drives. One login, one place, always up to date.

### D. Services & Coordination

**17. Do you manage my investments directly?**
Yes. We build and manage evidence-based, low-cost portfolios across all your accounts — taxable, retirement, HSA, 529s. No proprietary products. No commissions. Your investments are custodied at Altruist, a modern RIA custodian, so your assets are always in your name and fully independent from us.

**18. Do you prepare my taxes?**
We don't prepare tax returns — that's your CPA's job. What we do is proactive tax strategy year-round: entity structuring, Roth conversions, tax-loss harvesting, multi-year projections, and coordinating with your CPA so nothing falls through the cracks. Most clients tell us we find money their CPA was leaving on the table.

**19. Do you handle estate planning documents?**
We don't draft estate documents — we coordinate with an estate attorney who does. We identify what you need (wills, trusts, beneficiary updates, titling), build the strategy, and make sure your estate plan actually reflects your current life. Most people have estate documents that are either outdated or don't exist. We fix that.

**20. Do you work with my existing CPA and attorney?**
Absolutely. That's the Virtual Family Office model — we coordinate across your entire team so everyone is working from the same playbook. If you don't have a CPA or estate attorney, we'll connect you with professionals we trust. No referral fees, no conflicts.

**21. What about insurance — do you sell policies?**
We don't sell insurance. We review what you have, identify gaps or overages, and recommend changes when they make sense. If you need a new policy, we'll connect you with an independent insurance specialist — not a captive agent trying to sell you the most expensive option.

### E. For Different Client Types

**22. I'm a business owner. What can you specifically help with?**
Entity structuring, retirement plan optimization (Solo 401k, SEP, defined benefit), cash flow management between business and personal, exit planning, and tax strategy that actually accounts for how business income works. Most advisors treat business owners like W-2 employees with higher income. We don't.

**23. I'm a real estate investor. What makes WIY good for me?**
We understand 1031 exchanges, cost segregation, depreciation strategy, entity structuring for rental portfolios, and how real estate fits into a broader financial plan. Your rental properties aren't just investments — they're a business — and we plan for them that way. We also coordinate with your property management and CPA to keep everything aligned.

**24. I want to reach FIRE. Can you help me get there faster?**
Yes — but we'll start with what FIRE actually means for your life, not just your spreadsheet. We build a plan around your target number, optimize your savings rate, tax strategy, and investment allocation, and give you a clear timeline. The difference is we also help you design what life looks like after you hit the number. That part matters more than most FIRE planners admit.

**25. I'm still a W-2 employee. Am I a good fit?**
If you're building toward something — whether that's entrepreneurship, real estate investing, early retirement, or just more control over your time — yes. Many of our clients start as W-2 professionals with a plan to transition. We help you build the financial foundation now so you can make the leap when you're ready.

**26. I have complex international or cross-border situations. Can you handle that?**
It depends on the specifics. We work with clients who have cross-border tax situations, foreign accounts, and international real estate. For complex expat or multi-country tax scenarios, we coordinate with specialized international tax professionals. We'll be upfront about what we can handle directly and where we bring in a specialist.

### F. Working Together

**27. What if I don't like it? Can I leave?**
Yes. Anytime. No cancellation fees, no lock-in contracts, no exit penalties. Your assets are in your name at an independent custodian — they go where you go. We believe if an advisor needs a contract to keep you, they're not doing a good enough job.

**28. How do I communicate with you between meetings?**
Email, phone, or your client portal — whatever works for you. We don't disappear between quarterly meetings. When something comes up — a tax question, a real estate opportunity, a life change — reach out. That's what the fee covers.

**29. What's your investment philosophy?**
Evidence-based, low-cost, globally diversified. We don't try to beat the market or chase hot stocks. We build portfolios designed to capture market returns efficiently while managing tax impact and aligning with your risk tolerance and timeline. Boring investing, exciting life — that's the goal.

**30. Do you share your clients' results or testimonials?**
We're compliance-conservative on this and don't publish client testimonials. What we can do is connect you with existing clients who are willing to share their experience directly — a real conversation beats a curated quote on a website. Just ask on your intro call.

---

## Design Choices

1. **Used native `<details>/<summary>` HTML elements** — same pattern as the existing FAQSection component. Zero JS for accordion behavior. Accessible by default with keyboard navigation.
2. **Sticky sidebar nav on desktop, horizontal scroll on mobile** — gives desktop users quick jump links without cluttering the mobile experience.
3. **Categories as section headers with anchor IDs** — enables deep linking to specific sections (e.g., `/faq#fees`).
4. **JSON-LD FAQPage schema covers all 30 questions** — placed in page head for SEO structured data.
5. **White accordion cards on beige background** — matches the site's existing card-on-bg pattern from pricing and other pages.
6. **Reused CTASection component** for the bottom CTA to maintain consistency.
7. **`scroll-mt-28` on sections** to offset for the sticky nav when using anchor links.

---

## Items for Josh to Review

1. **Q5 (Location):** Confirms "Reno, Nevada" as the stated location — verify this is still the preferred public answer given Portugal living situation.
2. **Q8 (Minimum net worth):** Matches pricing page language ($500K min, $10K annual floor). Confirm this is current.
3. **Q13 (Post-intro process):** References the prospect portal. Confirm this is live and ready for prospects to see, or if the answer should be adjusted.
4. **Q14 (Onboarding timeline):** States "30 days" — verify this matches actual experience.
5. **Q17 (Custodian):** Names Altruist as custodian. Confirm still current.
6. **Q26 (Cross-border):** Intentionally hedged with "it depends" — this felt appropriate given the complexity and compliance sensitivity.
7. **Q30 (Testimonials):** Mentions connecting prospects with existing clients. Confirm Josh is comfortable with this offer and that it's compliant.
8. **Nav placement:** FAQ is placed after Blog in the main nav. With 8 nav items + Book a Call button, the nav is getting full — Josh may want to consider whether any items should be consolidated.
