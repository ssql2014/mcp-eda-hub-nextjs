# Redirect www.mcp4eda.cn to Vercel

## Current Setup
- **Domain**: www.mcp4eda.cn
- **Vercel Site**: https://mcp-eda-hub-latest.vercel.app

## Step 1: Add Domain to Vercel

1. Go to your Vercel project: https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest/settings/domains
2. Click "Add Domain"
3. Enter: `www.mcp4eda.cn`
4. Click "Add"

Vercel will show you the DNS records you need to add.

## Step 2: Update DNS Records

You'll need to update your DNS settings where mcp4eda.cn is registered. Vercel will show you one of these options:

### Option A: CNAME Record (for www subdomain)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Option B: A Records (if you want to use root domain too)
```
Type: A
Name: @ (or leave empty for root)
Value: 76.76.21.21
```

## Step 3: Configure in Your Domain Provider

### If using Cloudflare:
1. Login to Cloudflare
2. Select your domain mcp4eda.cn
3. Go to DNS settings
4. Add/Update the CNAME record for www
5. Make sure proxy status is "DNS only" (gray cloud)

### If using Alibaba Cloud (万网):
1. Login to Alibaba Cloud console
2. Go to Domain Management
3. Find mcp4eda.cn
4. Click "DNS Settings" or "解析设置"
5. Add CNAME record:
   - Host: www
   - Type: CNAME
   - Value: cname.vercel-dns.com

### If using another provider:
Look for DNS Management or DNS Settings and add the CNAME record as shown above.

## Step 4: Add Root Domain Redirect (Optional)

If you also want mcp4eda.cn (without www) to redirect:

1. In Vercel, also add `mcp4eda.cn` as a domain
2. Add these A records in your DNS:
   ```
   Type: A
   Name: @ (or empty)
   Value: 76.76.21.21
   ```

## Step 5: Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours to propagate
- Usually it's ready within 30 minutes

## Step 6: Verify

Check if it's working:
1. Visit: www.mcp4eda.cn
2. It should show your new Next.js site with authentication

## SSL Certificate

Vercel automatically provides SSL certificates for your domain. Once DNS is verified, HTTPS will work automatically.

## Troubleshooting

If it's not working after an hour:
1. Check DNS propagation: https://www.whatsmydns.net/
2. Enter "www.mcp4eda.cn" and verify it points to cname.vercel-dns.com
3. In Vercel, check if the domain shows "Valid Configuration" ✓

## Current Static Site

If you want to keep the current static site accessible:
1. You could move it to a subdomain like `static.mcp4eda.cn`
2. Or archive it at a different domain

## Quick Command to Test

Once DNS is updated:
```bash
# Check DNS resolution
nslookup www.mcp4eda.cn

# Test the site
curl -I https://www.mcp4eda.cn
```