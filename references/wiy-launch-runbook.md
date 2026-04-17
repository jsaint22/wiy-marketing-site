# WIY Launch Day Runbook

## Launch Target: Monday, April 21, 2026
**Recommended cutover: Saturday April 19, 8:00 PM PT or Sunday April 20, 8:00 PM PT**

This gives 24-48 hours of buffer before the "official" Monday launch.

---

## T-2 Hours: Pre-Launch

### WordPress Backup
- [ ] Log in to WordPress admin (wealthinyourself.com/wp-admin)
- [ ] Go to Tools > Export > All Content > Download Export File
- [ ] Download wp-content folder via SFTP (optional but recommended)
- [ ] Verify backup file is complete and accessible

### Content Freeze
- [ ] No more changes to the Next.js site after this point
- [ ] Verify latest commit on `main` is the intended launch version
- [ ] Confirm Vercel auto-deployed the latest commit successfully
- [ ] Visit staging URL and do a final visual check of homepage

### Final Checks
- [ ] Run `npm run build` locally — zero errors
- [ ] All environment variables confirmed on Vercel (Settings > Environment Variables)
- [ ] `NEXT_PUBLIC_ENVIRONMENT` is set to `production` on Vercel production environment
- [ ] Redirects from WordPress URLs are in next.config.ts

---

## T-0: DNS Change

### Execute DNS Cutover
Follow the steps in `wiy-dns-cutover-plan.md`:
1. Log in to Bluehost
2. Update A record for root domain to `76.76.21.21`
3. Update CNAME for `www` to `cname.vercel-dns.com`
4. **Do NOT touch MX, TXT, or other subdomain records**
5. Save changes
6. Note the exact time of change: ____:____ PT

---

## T+5 Minutes: Verify Propagation

- [ ] Check https://dnschecker.org/?domain=wealthinyourself.com&type=A
- [ ] Verify at least some regions show the new IP (76.76.21.21)
- [ ] Visit https://wealthinyourself.com in a browser
- [ ] If site loads — you're live. If not, wait another 5-10 minutes.
- [ ] Check https://www.wealthinyourself.com redirects to root

---

## T+15 Minutes: Functional Tests

### Page Load Tests
- [ ] Homepage loads correctly
- [ ] /about page loads
- [ ] /services page loads
- [ ] /pricing page loads
- [ ] /pricing#calculator — calculator functions
- [ ] /vs-aum page loads
- [ ] /case-studies page loads
- [ ] /virtual-family-office page loads
- [ ] /for-business-owners page loads
- [ ] /for-real-estate-investors page loads
- [ ] /for-fire-followers page loads
- [ ] /blog page loads
- [ ] /blog/welcome post loads
- [ ] /contact page loads
- [ ] /calculator page loads

### CTA and Form Tests
- [ ] "Book Your Intro Call" button → opens GHL booking widget
- [ ] "Book a Call" nav button → opens GHL booking widget
- [ ] Email capture form submits successfully
- [ ] Contact page booking link works
- [ ] All internal links navigate correctly

### External Links
- [ ] Form ADV link (SEC.gov) opens
- [ ] Form CRS link works
- [ ] Privacy Policy link works
- [ ] Press links (Forbes, MarketWatch, Advisorpedia) open correct pages

### Lighthouse Audit
- [ ] Run Lighthouse on homepage — target 90+ performance
- [ ] Run Lighthouse on /pricing — check calculator doesn't tank scores
- [ ] Run Lighthouse on /vs-aum — new page baseline

---

## T+1 Hour: Smoke Test

- [ ] Visit site from mobile device on cellular data (different DNS)
- [ ] Test site in Safari, Chrome, and Firefox
- [ ] Verify SSL certificate is active (green lock)
- [ ] Send test email to josh@wealthinyourself.com — verify delivery
- [ ] Send test email FROM josh@wealthinyourself.com — verify delivery
- [ ] Check GHL booking link (links.wealthinyourself.com) still works
- [ ] Submit email capture form and verify API logs in Vercel dashboard

---

## First 24 Hours: Monitoring

### Vercel Dashboard
- [ ] Check Vercel project > Analytics for traffic
- [ ] Check Vercel project > Logs for any errors (especially 404s and 500s)
- [ ] Monitor function logs for /api/subscribe calls

### Google Search Console
- [ ] Log in to Google Search Console for wealthinyourself.com
- [ ] Submit updated sitemap: https://wealthinyourself.com/sitemap.xml
- [ ] Check for crawl errors
- [ ] Request indexing of key new pages (/vs-aum, /case-studies)

### WordPress Cleanup (Do NOT rush this)
- [ ] After 48 hours of stable operation, consider disabling WordPress
- [ ] Keep WordPress backup files for at least 30 days
- [ ] Do NOT cancel Bluehost hosting until email migration is planned

---

## Rollback Trigger Conditions
Immediately rollback if any of these occur:
1. Site does not load within 1 hour of DNS change
2. SSL certificate fails within 2 hours
3. Email to/from josh@wealthinyourself.com stops working
4. GHL booking links break
5. Google reports significant crawl errors

### Rollback Steps
1. Log in to Bluehost DNS
2. Revert A record to original Bluehost IP (recorded pre-launch)
3. Remove CNAME pointing to Vercel
4. Wait 5-30 minutes for propagation
5. Verify WordPress site is live again

---

## Post-Launch Cleanup (Week 1)
- [ ] Monitor 404 errors in Vercel logs — add missing redirects
- [ ] Update Google My Business listing if URL changed
- [ ] Update any third-party profiles with new pages (LinkedIn, Forbes bio, etc.)
- [ ] Plan blog migration timeline
- [ ] Plan email migration from Bluehost (separate project)
