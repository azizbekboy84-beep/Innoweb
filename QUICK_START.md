# ⚡ Innoweb.uz - Quick Start (5 Minutes)

## 🎯 Goal
Get the website running on `http://localhost:3000` in 5 minutes.

---

## ✅ Prerequisites Check

Before starting, make sure you have:
- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Code editor open (VS Code recommended)

---

## 🚀 Steps

### 1. Install Dependencies (2 min)

Open terminal in project folder:

```bash
cd e:\loyihalarim\Innoweb.uz
npm install
```

Wait for installation to complete...

### 2. Create Environment File (1 min)

Copy the example file:

```bash
# Windows PowerShell
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

**Open `.env` and add:**

```env
DATABASE_URL="postgresql://neondb_owner:npg_xxxxxxxx@ep-xxxxx.us-east-2.aws.neon.tech/neondb?sslmode=require"
OPENAI_API_KEY="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
TELEGRAM_BOT_TOKEN="7123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxx"
TELEGRAM_CHANNEL_ID="@Innoweb_uz"
TELEGRAM_ADMIN_CHAT_ID="123456789"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-using-openssl-or-use-any-random-string"
ADMIN_EMAIL="akramjon10000@gmail.com"
CRON_SECRET="any-random-secret-string"
```

**Don't have these yet?** Use temporary values for now:

```env
DATABASE_URL="postgresql://temp:temp@localhost:5432/temp"
OPENAI_API_KEY="sk-temp"
TELEGRAM_BOT_TOKEN="temp"
TELEGRAM_CHANNEL_ID="@temp"
TELEGRAM_ADMIN_CHAT_ID="temp"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="temp-secret-key-replace-me"
ADMIN_EMAIL="akramjon10000@gmail.com"
CRON_SECRET="temp-cron-secret"
```

> ⚠️ **Note:** With temp values, AI features won't work, but you can see the website design.

### 3. Generate Prisma Client (30 sec)

```bash
npx prisma generate
```

### 4. Start Development Server (30 sec)

```bash
npm run dev
```

### 5. Open Browser

Visit: **http://localhost:3000**

---

## 🎉 Success!

You should see:
- ✅ Beautiful hero section with gradient
- ✅ Services cards (4 services)
- ✅ Contact form at bottom
- ✅ Chat widget in bottom-right corner

---

## 🧪 Test Features

### Test 1: Chat Widget (Without OpenAI Key)
1. Click chat button (bottom-right)
2. Widget opens
3. Type message
4. **Will fail if no OpenAI key** ❌

### Test 2: Contact Form (Without Telegram)
1. Scroll to contact section
2. Fill form:
   - Name: "Test User"
   - Phone: "+998901234567"
   - Service: "Web Sayt"
3. Click "Yuborish"
4. **Will save to DB but won't send Telegram** ⚠️

---

## 📝 To Make Everything Work

You need to get:

### 1. Database (Neon.tech) - FREE
- Go to [neon.tech](https://neon.tech)
- Sign up (GitHub/Google)
- Create project: "innoweb-uz"
- Copy connection string
- Paste in `.env` as `DATABASE_URL`
- Run: `npx prisma db push`

### 2. OpenAI API Key - PAID (need credits)
- Go to [platform.openai.com](https://platform.openai.com)
- Create account
- Add payment method (minimum $5)
- Go to API Keys
- Create new key
- Copy and paste in `.env` as `OPENAI_API_KEY`

### 3. Telegram Bot - FREE
- Open Telegram
- Search: `@BotFather`
- Send: `/newbot`
- Follow instructions
- Copy token to `.env` as `TELEGRAM_BOT_TOKEN`

---

## 🆘 Troubleshooting

### Port 3000 already in use

```bash
# Find and kill process
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Prisma errors

```bash
# Regenerate client
npx prisma generate
```

### Build errors

```bash
# Check Node version (needs 18+)
node --version

# Update if needed
```

---

## 📚 What's Next?

1. **Read Full Setup:** See `SETUP_GUIDE.md`
2. **Understand Project:** See `PROJECT_SUMMARY.md`
3. **Deploy:** See `README.md` deployment section

---

## 💡 Pro Tips

### Hot Reload
- Edit any file in `src/`
- Browser auto-refreshes
- See changes instantly

### View Database
```bash
npx prisma studio
```

### Generate Test Post (needs OpenAI key)
```bash
npm run cron:generate
```

### Check Logs
Watch terminal output for errors

---

## 📞 Need Help?

**Contact Innoweb.uz:**
- Email: akramjon10000@gmail.com
- Telegram: @Innoweb_uz
- Phone: +998 99 644 84 44

---

## ✅ Quick Start Complete!

**Current Status:**
- ✅ Project installed
- ✅ Running on localhost:3000
- ✅ Can see UI and design
- ⏳ Waiting for API keys for full functionality

**Time Taken:** ~5 minutes ⚡

---

**Next Step:** Get API keys from services above to enable all features!
