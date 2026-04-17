# Session Log: AUM Teardown PDF + Email Delivery

**Date:** 2026-04-17
**Task:** Build AUM Teardown PDF and wire /api/subscribe to deliver it via Resend

## What was built

### Part A — PDF (`src/lib/pdf/aum-teardown.tsx`)
- 10-page letter-size PDF using `@react-pdf/renderer`
- Brand-matched: Playfair Display + Inter, teal/navy/gold palette
- Content: cover, intro, AUM mechanics, Year 1 fee table, 20-year charts, 30-year charts, savings alternatives, industry critique, CTAs, about/contact
- Compliance footer on every page
- Fee math extracted to shared module: `src/lib/pdf/fee-math.ts`
- PDF API endpoint: `GET /api/aum-teardown` generates and returns the PDF

### Part B — Email delivery (`src/app/api/subscribe/route.ts`)
- Validates email
- Generates PDF on-the-fly via @react-pdf/renderer
- Sends via Resend with PDF attached
- Logs subscriber to `data/subscribers.csv` (gitignored)
- FROM: josh@go.wealthinyourself.com
- Subject: "Your AUM Teardown (and the math your advisor probably won't show you)"

### Part C — EmailCapture component
- Loading state: "Generating your report..."
- Success: "Sent! Check your inbox for The AUM Teardown."
- Error: fallback to email josh@wealthinyourself.com

## Files created/modified
- `src/lib/pdf/aum-teardown.tsx` (new) — PDF component
- `src/lib/pdf/fee-math.ts` (new) — shared fee calculation logic
- `src/lib/subscribers.ts` (new) — CSV subscriber storage
- `src/app/api/aum-teardown/route.ts` (new) — PDF generation endpoint
- `src/app/api/subscribe/route.ts` (modified) — now sends PDF via Resend
- `src/components/EmailCapture.tsx` (modified) — better feedback states
- `.gitignore` (modified) — added data/subscribers.csv
- `package.json` (modified) — added @react-pdf/renderer, resend

## Dependencies added
- `@react-pdf/renderer` — server-side PDF generation
- `resend` — email delivery

## Flags for Josh

### RESEND_API_KEY required
The `/api/subscribe` endpoint needs `RESEND_API_KEY` in the environment.
- **Local:** Add to `.env.local`: `RESEND_API_KEY=re_xxxxx`
- **Vercel:** Add via dashboard or `vercel env add RESEND_API_KEY`
- Use the same key as wiy-prospect-portal (from: josh@go.wealthinyourself.com)

### Subscriber list
- Location: `data/subscribers.csv` (gitignored, lives on server filesystem)
- Format: `email,subscribed_at,source`
- **Important:** On Vercel, the filesystem is ephemeral — this CSV resets on each deploy. When ready for production, migrate to a proper store (Vercel KV, database, or CRM webhook).
- For now, Resend itself keeps a log of all sent emails in its dashboard.

### Math verification
- Fee calculations use the same tiered formula as the website calculator
- 7% annual growth, 3% WIY fee escalation per year
- At $5M: 20yr delta = ~$1.49M, 30yr delta = ~$3.72M
- These are higher than the rough estimates in the task spec because the math is exact

## Testing checklist
- [x] PDF generates without errors (10 pages, ~79KB)
- [x] Typography matches WIY brand
- [x] Bar charts readable with values outside bars
- [x] Compliance footer on every page
- [x] Production build passes
- [ ] End-to-end email test (requires RESEND_API_KEY)
