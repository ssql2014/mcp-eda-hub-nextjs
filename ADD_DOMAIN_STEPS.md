# How to Add www.mcp4eda.cn to Vercel

## Method 1: Direct Link (Easiest)

Click this direct link to go to your domain settings:
👉 **https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest/settings/domains**

Then:
1. Click the **"Add"** button (or "Add Domain")
2. In the text box that appears, type: `www.mcp4eda.cn`
3. Click **"Add"** button

## Method 2: Step by Step Navigation

1. **Go to Vercel Dashboard**
   - https://vercel.com/dashboard

2. **Click on your project**
   - Look for "mcp-eda-hub-latest"
   - Click on it

3. **Go to Settings**
   - Click the "Settings" tab at the top

4. **Find Domains**
   - In the left sidebar, click "Domains"

5. **Add Domain**
   - Click "Add" or "Add Domain" button
   - Type: `www.mcp4eda.cn`
   - Click "Add"

## What Happens Next

After adding the domain, Vercel will show you a screen with:

1. **Domain Status**: Will show "Invalid Configuration" (this is normal!)
2. **Required DNS Settings**: Will show something like:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **What to do**: 
   - Copy the `cname.vercel-dns.com` value
   - Go to your DNS provider (where mcp4eda.cn is registered)
   - Update the CNAME record

## Screenshot Guide

The page will look like this:

```
┌─────────────────────────────────────┐
│ Domains                             │
│                                     │
│ [Add Domain]                        │
│                                     │
│ Your domains:                       │
│ • mcp-eda-hub-latest.vercel.app ✓  │
│                                     │
└─────────────────────────────────────┘
```

After clicking "Add Domain":

```
┌─────────────────────────────────────┐
│ Add Domain                          │
│                                     │
│ Domain name:                        │
│ [ www.mcp4eda.cn        ]          │
│                                     │
│ [Cancel]  [Add]                     │
└─────────────────────────────────────┘
```

## Quick Link Summary

Just click here and add the domain:
👉 **https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest/settings/domains**

Type: `www.mcp4eda.cn`
Click: Add

That's it!