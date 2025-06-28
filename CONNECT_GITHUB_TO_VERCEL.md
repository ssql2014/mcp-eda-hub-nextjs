# Connect GitHub to Vercel for Automatic Deployments

## Your Repository Information
- **GitHub Repository**: https://github.com/ssql2014/mcp-eda-hub-nextjs
- **Vercel Project**: mcp-eda-hub-latest

## Steps to Connect

### 1. Open Vercel Dashboard
1. Go to: https://vercel.com/dashboard
2. Find and click on your project: **"mcp-eda-hub-latest"**

### 2. Connect GitHub Repository
1. Click on **"Settings"** tab
2. In the left sidebar, click on **"Git"**
3. Click on **"Connect Git Repository"**
4. Choose **"GitHub"**
5. If prompted, authorize Vercel to access your GitHub account
6. Search for **"mcp-eda-hub-nextjs"**
7. Click **"Import"** next to the repository

### 3. Configure Git Integration
After connecting, configure these settings:

1. **Production Branch**: `main`
2. **Automatically deploy from branches**: ✅ Enabled
3. **Preview Deployments**: ✅ Enabled (optional, for pull requests)

### 4. Environment Variables
Make sure your environment variables are set in Vercel:
- Go to Settings → Environment Variables
- Verify these are set:
  - `DATABASE_URL`
  - `NEXTAUTH_SECRET`
  - `NEXTAUTH_URL`

## How to Update After Connection

Once connected, updating is simple:

```bash
# 1. Navigate to your project
cd /Users/qlss/Documents/mcp-eda-hub-new/nextjs-app

# 2. Edit your data file
code src/lib/data.ts

# 3. Add your new server to the mcpServers array

# 4. Commit and push
git add .
git commit -m "Add new MCP server: [server name]"
git push origin main

# Vercel will automatically deploy within minutes!
```

## Check Deployment Status

After pushing:
1. Go to: https://vercel.com/ssql2014s-projects/mcp-eda-hub-latest
2. You'll see the deployment in progress
3. Once complete, your site will be updated

## Manual Deploy (Still Works)

You can still deploy manually anytime:
```bash
vercel --prod
```

## Troubleshooting

If automatic deployment doesn't work:
1. Check Vercel dashboard for deployment logs
2. Ensure GitHub integration is active in Settings → Git
3. Verify the branch name matches (should be `main`)

## Your Live Sites
- Production: https://mcp-eda-hub-latest.vercel.app
- GitHub Repo: https://github.com/ssql2014/mcp-eda-hub-nextjs