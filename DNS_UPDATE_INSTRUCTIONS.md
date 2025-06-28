# DNS Update Instructions for mcp4eda.cn

Based on your Vercel configuration, you need to update these DNS records:

## Current Setup in Vercel
- Domain: **mcp4eda.cn** (root domain)
- Status: Invalid Configuration (this is normal until DNS is updated)

## Required DNS Records

### For Root Domain (mcp4eda.cn):
```
Type: A
Name: @ (or leave empty)
Value: 216.198.79.193
```

### For WWW Subdomain (www.mcp4eda.cn):
You'll need to add www.mcp4eda.cn separately in Vercel, then add:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Where to Update DNS

Since your current DNS points to GitHub Pages, you're likely using one of these:

### Option 1: Cloudflare
1. Go to: https://dash.cloudflare.com
2. Select your domain: mcp4eda.cn
3. Click on "DNS" in the sidebar
4. Delete or modify existing records:
   - Find the CNAME record for "www" pointing to "ssql2014.github.io"
   - Delete it or edit it
5. Add new records as shown above

### Option 2: Alibaba Cloud (阿里云/万网)
1. Login: https://dc.console.aliyun.com
2. Find domain: mcp4eda.cn
3. Click 解析设置 (DNS Settings)
4. Add/modify records as shown above

### Option 3: Namecheap, GoDaddy, or other
Look for "DNS Management" or "Advanced DNS"

## Steps to Complete:

1. **First, add www.mcp4eda.cn to Vercel:**
   - Go back to: https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest/settings/domains
   - Click "Add"
   - Type: `www.mcp4eda.cn`
   - Click "Add"

2. **Update DNS at your provider:**
   - Add the A record for root domain
   - Add/update the CNAME record for www

3. **Wait for propagation:**
   - Usually takes 5-30 minutes
   - Can take up to 48 hours in rare cases

## Verify DNS Change

Run these commands to check:
```bash
# Check root domain
nslookup mcp4eda.cn

# Check www subdomain  
nslookup www.mcp4eda.cn
```

The www should show `cname.vercel-dns.com`
The root should show `216.198.79.193`

## After DNS Updates

Once DNS propagates:
- ✅ mcp4eda.cn will work
- ✅ www.mcp4eda.cn will work
- ✅ Both will show your Next.js app with authentication
- ✅ HTTPS will be automatically enabled

## Keep GitHub Pages Site?

If you want to keep the old static site accessible:
- You could use a subdomain like `old.mcp4eda.cn`
- Point it to `ssql2014.github.io`