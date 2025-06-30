# Complete Setup Guide for MCP EDA Hub

## 🚀 Quick Setup Steps

### 1. Database Setup (Choose One)

#### Option A: Supabase (Recommended - Free)
1. Visit https://supabase.com and sign up
2. Click "New project"
3. Fill in:
   - Name: `mcp-eda-hub`
   - Database Password: (save this!)
   - Region: Choose nearest
4. Wait ~2 minutes for setup
5. Go to Settings → Database
6. Copy the "Connection string" URI

#### Option B: Neon (Alternative - Free)
1. Visit https://neon.tech and sign up
2. Create new project
3. Copy connection string from dashboard

### 2. Gmail App Password
1. Go to https://myaccount.google.com/security
2. Turn on 2-Step Verification (if not already)
3. Search "App passwords"
4. Create new → Select "Mail"
5. Copy the 16-character password

### 3. Vercel Environment Variables

Go to: https://vercel.com/ssql2014/mcp-eda-hub-nextjs/settings/environment-variables

Add these variables:

| Variable | Value | Environment |
|----------|-------|-------------|
| DATABASE_URL | Your PostgreSQL connection string | All |
| EMAIL_USER | ssql2014@gmail.com | All |
| EMAIL_PASS | Your Gmail app password | All |
| NEXTAUTH_SECRET | Run: `openssl rand -base64 32` | All |
| NEXTAUTH_URL | https://mcp-eda-hub-latest.vercel.app | Production |
| NEXT_PUBLIC_URL | https://mcp-eda-hub-latest.vercel.app | All |

### 4. Local Testing (Optional)

Create `.env.local`:
```bash
DATABASE_URL="your-connection-string"
EMAIL_USER="ssql2014@gmail.com"
EMAIL_PASS="your-app-password"
NEXTAUTH_SECRET="your-generated-secret"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_URL="http://localhost:3000"
```

### 5. Run Database Migration

After setting DATABASE_URL:

```bash
# Generate Prisma client
npx prisma generate

# Run migration
npx prisma migrate deploy

# Or for development
npx prisma migrate dev --name initial
```

### 6. Verify Setup

1. Check database:
   ```bash
   npx prisma studio
   ```

2. Test locally:
   ```bash
   npm run dev
   ```

3. After Vercel deploy:
   - Visit: https://mcp-eda-hub-latest.vercel.app/submit
   - Submit test entry
   - Check email notification
   - View at: https://mcp-eda-hub-latest.vercel.app/admin/submissions

## 📝 Environment Variables Summary

```env
# Database (Required)
DATABASE_URL="postgresql://..."

# Email (Required for notifications)
EMAIL_USER="ssql2014@gmail.com"
EMAIL_PASS="your-16-char-app-password"

# Authentication (Required)
NEXTAUTH_SECRET="32+ character random string"
NEXTAUTH_URL="https://mcp-eda-hub-latest.vercel.app"

# Public URL (Required)
NEXT_PUBLIC_URL="https://mcp-eda-hub-latest.vercel.app"
```

## 🎯 Next Steps

1. Set up database (Supabase/Neon)
2. Get Gmail app password
3. Add all env vars to Vercel
4. Redeploy on Vercel
5. Run database migration
6. Test the submission system

## 🐛 Troubleshooting

- **Emails not sending**: Check Vercel function logs
- **Database errors**: Ensure migration ran successfully
- **Auth issues**: Verify NEXTAUTH_SECRET is set
- **Can't see submissions**: Check admin page permissions