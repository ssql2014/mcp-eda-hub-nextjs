# Quick Database Setup with Supabase

## Option 1: Supabase (Recommended - Free Tier)

1. **Visit**: https://supabase.com
2. **Sign up** with your GitHub account or email
3. **Create a new project**:
   - Project name: `mcp-eda-hub`
   - Database Password: (save this password!)
   - Region: Choose closest to you
4. **Wait for project to be ready** (about 2 minutes)
5. **Get your connection string**:
   - Go to Settings → Database
   - Look for "Connection string" section
   - Copy the "URI" connection string
   - It looks like: `postgresql://postgres.[project-ref]:[password]@aws-0-[region].pooler.supabase.com:6543/postgres`

## Option 2: Neon (Alternative - Free Tier)

1. **Visit**: https://neon.tech
2. **Sign up** with GitHub or email
3. **Create a project**
4. **Copy the connection string** from dashboard

## Running Database Migration

Once you have your DATABASE_URL:

```bash
# Set the environment variable locally
export DATABASE_URL="your-connection-string-here"

# Generate Prisma client
npx prisma generate

# Run migration
npx prisma migrate deploy
```

Or create a `.env.local` file:
```
DATABASE_URL="your-connection-string-here"
```

Then run:
```bash
npx prisma migrate deploy
```

## Verify Database Setup

After migration, you can check your database:
```bash
npx prisma studio
```

This will open a web interface to view your database tables.