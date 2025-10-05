# ✅ Render.com Deploy Checklist

## Pre-Deployment

- [ ] Node.js version set to 20.11.0 in `.node-version`
- [ ] All code changes committed to GitHub
- [ ] PostgreSQL database created on Render
- [ ] Internal Database URL copied

## Environment Variables (Required)

### Critical (Service won't start without these):
- [ ] `DATABASE_URL` = Internal PostgreSQL URL
- [ ] `NEXTAUTH_SECRET` = 32+ random characters
- [ ] `NEXTAUTH_URL` = https://your-app.onrender.com
- [ ] `GEMINI_API_KEY` = Google AI API key

### Optional (for features):
- [ ] `TELEGRAM_BOT_TOKEN` (for auto-posting)
- [ ] `TELEGRAM_CHANNEL_ID` (for auto-posting)
- [ ] `TELEGRAM_ADMIN_CHAT_ID` (for notifications)
- [ ] `ADMIN_EMAIL` (admin contact)
- [ ] `CRON_SECRET` (for cron jobs)
- [ ] `NODE_VERSION=20.11.0`

## Post-Deployment

- [ ] Build completed successfully (green checkmark)
- [ ] Service status shows "Live"
- [ ] Run database migration: `npx prisma db push` in Shell
- [ ] Check logs for errors
- [ ] Test homepage: https://your-app.onrender.com
- [ ] Test admin login: /admin/login
- [ ] Test blog page: /blog

## Troubleshooting 502 Error

1. **Check Render Logs First**
   - Look for: `PrismaClientInitializationError`, `NEXTAUTH_SECRET`, `ECONNREFUSED`

2. **Verify Environment Variables**
   - All 4 critical variables must be set
   - DATABASE_URL must be INTERNAL (not External)
   - NEXTAUTH_URL must match actual domain

3. **Run Database Migration**
   ```bash
   npx prisma db push
   ```

4. **Wait for Sleep Mode**
   - Free tier: 1-2 minutes to wake up
   - Refresh page after waiting

5. **Clear Cache & Redeploy**
   - Manual Deploy → Clear build cache & deploy

## Common Error Messages

| Error | Solution |
|-------|----------|
| `PrismaClientInitializationError` | Wrong DATABASE_URL or database not accessible |
| `NEXTAUTH_SECRET is not configured` | Add NEXTAUTH_SECRET to environment |
| `GEMINI_API_KEY is not set` | Add to environment (only needed at runtime) |
| `ECONNREFUSED` | Database offline or wrong connection string |
| `502 Bad Gateway` | Service crashed - check logs for specific error |

## Quick Commands

Generate secrets:
```bash
openssl rand -base64 32
```

Database migration:
```bash
npx prisma db push
```

Check Prisma status:
```bash
npx prisma studio
```

## Support

- 📧 Email: akramjon10000@gmail.com
- 💬 Telegram: @Innoweb_uz
- 📖 Full Guide: RENDER.md
