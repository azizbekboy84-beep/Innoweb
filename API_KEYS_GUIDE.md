# 🔑 API Keys Setup Guide

Complete guide to get all necessary API keys and credentials.

---

## 📋 What You Need

- [ ] Neon Database URL (FREE)
- [ ] OpenAI API Key (PAID - ~$5 minimum)
- [ ] Telegram Bot Token (FREE)
- [ ] Telegram Channel ID (FREE)
- [ ] Your Telegram Chat ID (FREE)

---

## 1️⃣ Neon Database (FREE) ⏱️ 3 minutes

### Step-by-Step:

1. **Go to [neon.tech](https://neon.tech)**

2. **Sign Up**
   - Click "Sign Up"
   - Use GitHub or Google account
   - No credit card required! ✅

3. **Create Project**
   - Click "New Project"
   - Name: `innoweb-uz`
   - Region: Choose closest (e.g., US East)
   - Click "Create"

4. **Get Connection String**
   - Click on your project
   - Go to "Connection Details"
   - Copy **Connection String**
   - Should look like:
   ```
   postgresql://neondb_owner:npg_xxxx@ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

5. **Add to .env**
   ```env
   DATABASE_URL="postgresql://neondb_owner:npg_xxxx@ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require"
   ```

6. **Initialize Database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

### ✅ Done! Free forever tier includes:
- 3 GB storage
- 100 hours compute/month
- Unlimited queries

---

## 2️⃣ OpenAI API Key (PAID) ⏱️ 5 minutes

### Pricing:
- **GPT-4 Turbo:** ~$0.01-0.03 per post
- **DALL-E 3:** ~$0.04-0.08 per image
- **Chatbot:** ~$0.001 per message
- **Minimum deposit:** $5
- **Recommended:** $20 for 1 month

### Step-by-Step:

1. **Go to [platform.openai.com](https://platform.openai.com)**

2. **Create Account**
   - Click "Sign Up"
   - Use email or Google
   - Verify email

3. **Add Payment Method**
   - Go to "Settings" → "Billing"
   - Click "Add payment method"
   - Add credit card
   - Purchase credits ($5 minimum)

4. **Create API Key**
   - Go to "API Keys" (left sidebar)
   - Click "Create new secret key"
   - Name it: "innoweb-uz"
   - **IMPORTANT:** Copy key immediately!
   - Format: `sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
   - You can't see it again! ⚠️

5. **Add to .env**
   ```env
   OPENAI_API_KEY="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
   ```

6. **Set Usage Limits** (Recommended)
   - Go to "Settings" → "Limits"
   - Set monthly budget: $20
   - Set email alerts at 75% usage

### ✅ Done! You can now:
- Generate AI blog posts
- Create images with DALL-E
- Use AI chatbot

### 💡 Cost Estimate (per month):
- 50 blog posts: ~$2.50
- 50 images: ~$3.00
- 1000 chatbot messages: ~$1.00
- **Total:** ~$6.50/month

---

## 3️⃣ Telegram Bot Token (FREE) ⏱️ 2 minutes

### Step-by-Step:

1. **Open Telegram**
   - On phone or desktop

2. **Find BotFather**
   - Search: `@BotFather`
   - Start conversation

3. **Create Bot**
   - Send: `/newbot`
   - BotFather asks: "Alright, a new bot. How are we going to call it?"
   - Reply: `Innoweb Assistant`
   - BotFather asks: "Now choose a username"
   - Reply: `innoweb_assistant_bot` (must end with 'bot')

4. **Get Token**
   - BotFather sends: "Use this token to access HTTP API:"
   - Copy the token
   - Format: `7123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw`

5. **Add to .env**
   ```env
   TELEGRAM_BOT_TOKEN="7123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw"
   ```

### ✅ Done! Your bot is created.

---

## 4️⃣ Telegram Channel ID (FREE) ⏱️ 2 minutes

### Step-by-Step:

1. **Create Public Channel**
   - Open Telegram
   - Click "New Channel"
   - Name: `Innoweb.uz`
   - Description: "Professional digital solutions"
   - Make it **PUBLIC**
   - Username: `@Innoweb_uz`

2. **Add Bot as Admin**
   - Go to channel settings
   - Click "Administrators"
   - Click "Add Admin"
   - Search your bot: `@innoweb_assistant_bot`
   - Add it with "Post messages" permission

3. **Add to .env**
   ```env
   TELEGRAM_CHANNEL_ID="@Innoweb_uz"
   ```

### ✅ Done! Posts will be sent to this channel.

---

## 5️⃣ Your Telegram Chat ID (FREE) ⏱️ 1 minute

This is for receiving lead notifications.

### Method 1: Using userinfobot (Easiest)

1. **Open Telegram**
2. **Search:** `@userinfobot`
3. **Start conversation**
4. Bot replies with your info:
   ```
   Id: 123456789
   First name: Your Name
   ...
   ```
5. **Copy the ID number**

6. **Add to .env**
   ```env
   TELEGRAM_ADMIN_CHAT_ID="123456789"
   ```

### Method 2: Using API

1. **Message your bot** (the one you created)
2. **Visit in browser:**
   ```
   https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
   ```
   Replace `<YOUR_BOT_TOKEN>` with your actual token

3. **Find in response:**
   ```json
   "chat": {
     "id": 123456789,
     ...
   }
   ```

4. **Copy the ID**

### ✅ Done! You'll receive notifications here.

---

## 6️⃣ NextAuth Secret (FREE) ⏱️ 30 seconds

Generate a random secret key.

### Windows PowerShell:
```powershell
[Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((New-Guid).ToString()))
```

### Mac/Linux:
```bash
openssl rand -base64 32
```

### Or use online:
- Go to [generate-secret.vercel.app](https://generate-secret.vercel.app)
- Copy generated secret

### Add to .env:
```env
NEXTAUTH_SECRET="your-generated-secret-here"
```

---

## 7️⃣ CRON Secret (FREE) ⏱️ 10 seconds

Just make up any random string:

```env
CRON_SECRET="my-super-secret-cron-key-12345"
```

---

## 📝 Final .env File

Your complete `.env` should look like:

```env
# Database (from neon.tech)
DATABASE_URL="postgresql://neondb_owner:npg_xxxx@ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-generated-secret-here"

# OpenAI (from platform.openai.com)
OPENAI_API_KEY="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# Telegram
TELEGRAM_BOT_TOKEN="7123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw"
TELEGRAM_CHANNEL_ID="@Innoweb_uz"
TELEGRAM_ADMIN_CHAT_ID="123456789"

# Admin
ADMIN_EMAIL="akramjon10000@gmail.com"

# CRON Secret
CRON_SECRET="my-super-secret-cron-key-12345"
```

---

## ✅ Verification Checklist

After setting up, verify each service:

### Test Database
```bash
npx prisma studio
# Should open database viewer at http://localhost:5555
```

### Test OpenAI
```bash
npm run cron:generate
# Should generate a blog post (check console output)
```

### Test Telegram Bot
```bash
# Send message to your bot
# Then visit:
# https://api.telegram.org/bot<TOKEN>/getUpdates
# Should see your message
```

### Test Telegram Channel
```bash
npm run cron:telegram
# Should send test post to channel
```

### Test Contact Form
1. Open http://localhost:3000
2. Fill contact form
3. Submit
4. Check your Telegram for notification

---

## 💰 Total Cost Summary

| Service | Cost | Frequency |
|---------|------|-----------|
| Neon Database | **FREE** | Forever |
| OpenAI API | **$5-20** | One-time |
| Telegram | **FREE** | Forever |
| Domain (optional) | **$10-15** | Per year |
| Hosting (Vercel) | **FREE** | Forever |

**Total to start:** $5-20 (just for OpenAI)

---

## 🆘 Troubleshooting

### OpenAI: "Insufficient quota"
- **Cause:** No credits in account
- **Fix:** Add payment method and purchase $5+ credits

### Telegram: "Chat not found"
- **Cause:** Bot not added to channel
- **Fix:** Make bot admin of channel

### Database: "Connection refused"
- **Cause:** Wrong connection string
- **Fix:** Copy exact string from Neon dashboard

### Prisma: "Environment variable not found"
- **Cause:** `.env` file not loaded
- **Fix:** Make sure `.env` is in root folder

---

## 📞 Still Need Help?

**Contact Innoweb.uz:**
- Email: akramjon10000@gmail.com
- Telegram: @Innoweb_uz
- Phone: +998 99 644 84 44

---

## 🎉 Setup Complete!

Once all API keys are added:
1. Restart dev server: `npm run dev`
2. Test all features
3. Check logs for any errors
4. Deploy to production!

**Total Time:** ~15 minutes
**Total Cost:** $5-20 (OpenAI only)

---

**Next:** Return to `QUICK_START.md` and test everything!
