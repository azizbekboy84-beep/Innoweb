# 🚀 Innoweb.uz Setup Guide

Complete step-by-step guide to set up and run the project.

## 📋 Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)
- [ ] Neon.tech account (for database)
- [ ] OpenAI account with API access
- [ ] Telegram account

## Step 1: Install Dependencies

```bash
# Navigate to project directory
cd e:\loyihalarim\Innoweb.uz

# Install all packages
npm install
```

## Step 2: Database Setup (Neon.tech)

1. Go to [neon.tech](https://neon.tech)
2. Create free account
3. Create new project: "innoweb-uz"
4. Copy connection string

Example connection string:
```
postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/innoweb?sslmode=require
```

## Step 3: OpenAI API Key

1. Go to [platform.openai.com](https://platform.openai.com)
2. Sign up / Login
3. Go to API Keys section
4. Create new API key
5. Copy the key (starts with `sk-proj-...`)

**Important:** Add credits to your OpenAI account for API usage.

## Step 4: Telegram Bot Setup

### Create Bot

1. Open Telegram
2. Search for [@BotFather](https://t.me/botfather)
3. Send `/newbot`
4. Choose name: "Innoweb Assistant"
5. Choose username: "@innoweb_assistant_bot"
6. Copy bot token (looks like: `7123456789:AAH...`)

### Create Channel

1. Create new public channel in Telegram
2. Name: "Innoweb.uz"
3. Username: "@Innoweb_uz"
4. Add your bot as admin

### Get Your Chat ID

1. Message your bot
2. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
3. Find your chat ID in the response

## Step 5: Configure Environment Variables

Create `.env` file in project root:

```env
# Database (from Neon.tech)
DATABASE_URL="postgresql://user:password@ep-xxx.us-east-2.aws.neon.tech/innoweb?sslmode=require"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# OpenAI (from platform.openai.com)
OPENAI_API_KEY="sk-proj-xxxxxxxxxxxx"

# Telegram
TELEGRAM_BOT_TOKEN="7123456789:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw"
TELEGRAM_CHANNEL_ID="@Innoweb_uz"
TELEGRAM_ADMIN_CHAT_ID="123456789"

# Admin
ADMIN_EMAIL="akramjon10000@gmail.com"

# CRON Secret (generate random string)
CRON_SECRET="your-cron-secret-key"
```

**Generate NEXTAUTH_SECRET:**
```bash
# On Windows (PowerShell)
[Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes((New-Guid).ToString()))

# On Mac/Linux
openssl rand -base64 32
```

## Step 6: Initialize Database

```bash
# Generate Prisma Client
npx prisma generate

# Create database tables
npx prisma db push

# (Optional) Open Prisma Studio to view database
npx prisma studio
```

## Step 7: Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 8: Test Features

### Test Chatbot

1. Click chat widget in bottom-right corner
2. Send a message: "Salom, web sayt qancha turadi?"
3. Should receive AI response with pricing info

### Test Contact Form

1. Go to homepage
2. Scroll to contact section
3. Fill out form
4. Submit
5. Check your Telegram (admin chat) for notification

### Test AI Post Generation (Optional)

```bash
# Generate a test post
npm run cron:generate

# Check database in Prisma Studio
npx prisma studio
```

## Step 9: Verify Telegram Integration

```bash
# Send test post to Telegram
npm run cron:telegram

# Check your Telegram channel for the post
```

## ⚠️ Troubleshooting

### Database Connection Error

```bash
# Verify DATABASE_URL format
# Should include ?sslmode=require at the end
```

### OpenAI API Error

```bash
# Check if API key is valid
# Verify you have credits in your OpenAI account
# Check rate limits
```

### Telegram Not Sending

```bash
# Test bot token
curl https://api.telegram.org/bot<YOUR_TOKEN>/getMe

# Test channel access
curl https://api.telegram.org/bot<YOUR_TOKEN>/sendMessage -d "chat_id=@Innoweb_uz&text=Test"
```

### Port Already in Use

```bash
# On Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# On Mac/Linux
lsof -ti:3000 | xargs kill
```

## 🎯 Next Steps

1. **Customize Content:**
   - Edit dictionaries (`src/dictionaries/*.json`)
   - Update company info in `src/services/company-knowledge.ts`

2. **Add Services:**
   - Create services in database via Prisma Studio
   - Update homepage services list

3. **Deploy to Production:**
   - See deployment guide in README.md

## 📞 Need Help?

- **Email:** akramjon10000@gmail.com
- **Telegram:** @Innoweb_uz
- **Phone:** +998 99 644 84 44

## ✅ Setup Complete!

Your Innoweb.uz website is now ready for development! 🎉
