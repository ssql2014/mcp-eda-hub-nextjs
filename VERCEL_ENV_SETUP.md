# Vercel Environment Variables Setup Guide

## Steps to Configure Environment Variables in Vercel:

### 1. Go to your Vercel Dashboard
Visit: https://vercel.com/ssql2014/mcp-eda-hub-nextjs/settings/environment-variables

### 2. Add the Following Environment Variables:

#### DATABASE_URL (Required)
- **Key**: `DATABASE_URL`
- **Value**: Your PostgreSQL connection string
- **Example**: `postgresql://user:password@host:5432/database?sslmode=require`
- **Environment**: Production, Preview, Development

For a free PostgreSQL database, you can use:
- **Supabase**: https://supabase.com (Recommended)
- **Neon**: https://neon.tech
- **Aiven**: https://aiven.io

#### EMAIL_USER (Required for email notifications)
- **Key**: `EMAIL_USER`
- **Value**: `ssql2014@gmail.com`
- **Environment**: Production, Preview, Development

#### EMAIL_PASS (Required for email notifications)
- **Key**: `EMAIL_PASS`
- **Value**: Your Gmail App Password (NOT your regular password)
- **Environment**: Production, Preview, Development

To get a Gmail App Password:
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification if not already enabled
3. Search for "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password

#### NEXTAUTH_SECRET (Required for authentication)
- **Key**: `NEXTAUTH_SECRET`
- **Value**: Generate a random string (32+ characters)
- **Environment**: Production, Preview, Development

To generate a secret, run:
```bash
openssl rand -base64 32
```

#### NEXTAUTH_URL (Required for authentication)
- **Key**: `NEXTAUTH_URL`
- **Value**: `https://mcp-eda-hub-latest.vercel.app`
- **Environment**: Production

#### NEXT_PUBLIC_URL (Required for email links)
- **Key**: `NEXT_PUBLIC_URL`
- **Value**: `https://mcp-eda-hub-latest.vercel.app`
- **Environment**: Production, Preview, Development

### 3. After Adding Environment Variables:
1. Click "Save" for each variable
2. Redeploy your application for changes to take effect
3. You can trigger a redeploy from the Deployments tab

## Database Setup

### Option 1: Using Supabase (Recommended)
1. Sign up at https://supabase.com
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string (use the "Connection string" tab)
5. Replace `[YOUR-PASSWORD]` with your database password

### Option 2: Run Migration
After setting up the DATABASE_URL, run:
```bash
npx prisma migrate deploy
```

Or if you're developing locally:
```bash
npx prisma migrate dev
```

## Testing the Setup
1. Visit https://mcp-eda-hub-latest.vercel.app/submit
2. Submit a test entry
3. Check your email (ssql2014@gmail.com) for the notification
4. Visit https://mcp-eda-hub-latest.vercel.app/admin/submissions to see submissions

## Troubleshooting
- If emails aren't sending, check the Vercel function logs
- Ensure your Gmail account has "Less secure app access" or use App Passwords
- Make sure all environment variables are set correctly
- Check that the database migration has run successfully