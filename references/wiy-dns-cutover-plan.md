# WIY DNS Cutover Plan

## Overview
Migrate wealthinyourself.com from Bluehost/WordPress to Vercel.

## Pre-Cutover Checklist
- [ ] Verify Vercel project is linked and deploying correctly from `main` branch
- [ ] Confirm staging site (wiy-marketing-staging.vercel.app) is fully functional
- [ ] Run Lighthouse audit on staging — all pages passing
- [ ] All redirects from WordPress URLs are configured in next.config.ts
- [ ] Form CRS and Privacy Policy pages have redirect or equivalent content
- [ ] Backup WordPress site (full export via WP Admin > Tools > Export)
- [ ] Download wp-content folder via SFTP as additional backup

## Current DNS (Document Before Changing)

### Step 1: Record Current DNS
1. Log in to Bluehost at https://my.bluehost.com
2. Go to **Domains** > **wealthinyourself.com** > **DNS**
3. Screenshot or record ALL existing records:
   - A records (likely pointing to Bluehost IP)
   - CNAME records
   - MX records (email — DO NOT CHANGE THESE)
   - TXT records (SPF, DKIM, DMARC — DO NOT CHANGE THESE)

**CRITICAL: Do not modify MX, SPF, DKIM, or DMARC records. These control email delivery for josh@wealthinyourself.com.**

## Target DNS Configuration

### Step 2: Add Vercel Domain
1. Go to https://vercel.com/dashboard
2. Select the WIY marketing site project
3. Go to **Settings** > **Domains**
4. Add `wealthinyourself.com` and `www.wealthinyourself.com`
5. Vercel will display the required DNS records

### Step 3: Update DNS at Bluehost
1. Log in to Bluehost: https://my.bluehost.com
2. Navigate to **Domains** > **wealthinyourself.com** > **DNS** > **DNS Records**
3. Update the following records:

**For root domain (wealthinyourself.com):**
- Delete existing A record(s) pointing to Bluehost
- Add A record: `76.76.21.21` (Vercel's IP)
- *Alternative:* If Bluehost supports ALIAS/ANAME at root, use `cname.vercel-dns.com`

**For www subdomain:**
- Delete existing CNAME for `www` (if any)
- Add CNAME: `www` → `cname.vercel-dns.com`

**DO NOT TOUCH:**
- MX records
- TXT records (SPF, DKIM, DMARC)
- Any other subdomains (e.g., links.wealthinyourself.com for GHL)

### Step 4: Verify in Vercel
1. Go to Vercel project > Settings > Domains
2. Wait for DNS propagation (usually 5-30 minutes, can take up to 48 hours)
3. Vercel will show a green checkmark when verified
4. SSL certificate will be automatically provisioned

## Timing Recommendation
- **When:** Saturday or Sunday evening (lowest traffic period)
- **Recommended window:** Saturday 8:00 PM PT
- **Expected propagation:** 5-30 minutes for most users
- **Full propagation:** Up to 48 hours (edge cases)

## Verification Checklist (Post-Cutover)
- [ ] Visit https://wealthinyourself.com — loads Vercel site
- [ ] Visit https://www.wealthinyourself.com — redirects to root domain
- [ ] SSL certificate active (green lock icon)
- [ ] Check https://dnschecker.org for propagation across regions
- [ ] Test all pages load correctly
- [ ] Test booking link (links.wealthinyourself.com) still works
- [ ] Test email delivery (send test email to/from josh@wealthinyourself.com)
- [ ] Verify GHL integrations still function
- [ ] Run Lighthouse on live domain

## Rollback Procedure
If something goes wrong:
1. Log in to Bluehost DNS
2. Restore the original A record(s) pointing to Bluehost IP
3. Remove the CNAME for www pointing to Vercel
4. DNS will revert within 5-30 minutes
5. WordPress site will be live again

**Rollback trigger conditions:**
- Site doesn't load within 1 hour of DNS change
- SSL certificate fails to provision within 2 hours
- Email delivery is disrupted
- GHL booking links stop working
- Critical page returns 404 or 500

## Post-Launch (First 24 Hours)
- [ ] Monitor Vercel dashboard for errors
- [ ] Check Google Search Console for crawl errors
- [ ] Verify all forms submit correctly
- [ ] Test from mobile device on cellular (different DNS resolver)
- [ ] Submit updated sitemap to Google Search Console
- [ ] Update any hardcoded staging URLs to production
