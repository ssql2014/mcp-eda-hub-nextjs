# Quick Steps to Connect GitHub to Vercel (< 2 minutes)

## Direct Link to Your Settings
Click this link to go directly to the Git settings:
👉 **https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest/settings/git**

## 3 Simple Steps:

### 1. Click "Connect Git Repository"
Look for a button that says "Connect Git Repository" or similar

### 2. Choose GitHub
- Click on "GitHub" 
- If asked, authorize Vercel

### 3. Find and Import Your Repo
- In the search box, type: **mcp-eda-hub-nextjs**
- Click "Import" or "Connect" next to it

## That's it! ✅

Once connected, every `git push` will automatically deploy.

---

## Test Your Connection:

```bash
cd /Users/qlss/Documents/mcp-eda-hub-new/nextjs-app

# Make a small change
echo "# Last updated: $(date)" >> README.md

# Push to GitHub
git add .
git commit -m "Test automatic deployment"
git push

# Watch it deploy at:
# https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest
```

## Alternative: Using Vercel Dashboard

1. Go to: https://vercel.com/dashboard
2. Click on "mcp-eda-hub-latest"
3. Click "Settings" → "Git"
4. Follow steps above

---

## If You Need to Login First:
https://vercel.com/login

Then go to the settings link above.