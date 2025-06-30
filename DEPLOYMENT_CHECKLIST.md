# Deployment Checklist for www.mcp4eda.cn

## Authentication Configuration
- ✅ Using credentials-only authentication (email/password)
- ✅ No OAuth providers required
- ✅ Simplified deployment process

## Environment Variables

### Required for Production:
```bash
# NextAuth Configuration
NEXTAUTH_SECRET=your_production_secret_here
NEXTAUTH_URL=https://www.mcp4eda.cn

# Database (if using Prisma)
DATABASE_URL=your_production_database_url
```

## Pre-Deployment Checklist

- [ ] Generate production NEXTAUTH_SECRET
- [ ] Set up production database
- [ ] Run database migrations
- [ ] Test authentication locally
- [ ] Build production bundle

## Deployment Steps

1. **Generate Production Secret**:
   ```bash
   openssl rand -base64 32
   ```

2. **Configure Database**:
   - Set up your production database (PostgreSQL, MySQL, etc.)
   - Update DATABASE_URL in production environment

3. **Run Migrations**:
   ```bash
   npx prisma migrate deploy
   ```

4. **Build Application**:
   ```bash
   npm run build
   ```

5. **Deploy to Hosting Platform**:
   - Upload built application
   - Set environment variables
   - Start the application

## Testing Production

1. Visit https://www.mcp4eda.cn
2. Test user registration at `/register`
3. Test user login at `/login`
4. Verify session persistence

## Security Checklist

- [ ] NEXTAUTH_SECRET is unique for production
- [ ] Database credentials are secure
- [ ] HTTPS is enabled
- [ ] Environment variables are not exposed
- [ ] No secrets in code repository

## Common Issues & Solutions

### Issue: "NEXTAUTH_URL is not set"
**Solution**: Set `NEXTAUTH_URL=https://www.mcp4eda.cn` in production environment

### Issue: Database connection fails
**Solution**: 
- Verify DATABASE_URL is correct
- Check database is accessible from production server
- Ensure SSL is configured if required

### Issue: Sessions not persisting
**Solution**: 
- Verify NEXTAUTH_SECRET is set
- Check cookie settings for your domain
- Ensure HTTPS is properly configured