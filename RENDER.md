# 🚀 Render.com Deploy Guide

## 📋 Talab qilinadigan xizmatlar

### 1. **Web Service** - Next.js ilovasi
### 2. **PostgreSQL Database** - Ma'lumotlar bazasi
### 3. **Cron Jobs** (Optional) - Avtomatik post yaratish

---

## 🗄️ 1. PostgreSQL Database Yaratish

### Render.com'da:
1. Dashboard → **New** → **PostgreSQL**
2. Settings:
   - **Name:** `innoweb-db`
   - **Database:** `innoweb`
   - **User:** `innoweb_user`
   - **Region:** `Frankfurt` (EU) yoki `Oregon` (US)
   - **Plan:** Free

3. **Create Database** bosing
4. **Internal Database URL** ni nusxa oling

---

## 🌐 2. Web Service Yaratish

### Render.com'da:
1. Dashboard → **New** → **Web Service**
2. **GitHub repository** ni ulang
3. Settings:

#### Build Settings:
```
Name: innoweb-uz
Region: Frankfurt (EU)
Branch: main
Runtime: Node
Build Command: npm install && npm run build
Start Command: npm start
```

#### Environment Variables:
Quyidagilarni qo'shing:

```env
# Node
NODE_VERSION=18.17.0

# Database (Render'dan olgan URL)
DATABASE_URL=postgresql://innoweb_user:password@host/innoweb

# NextAuth
NEXTAUTH_URL=https://innoweb-uz.onrender.com
NEXTAUTH_SECRET=generate-random-secret-32-chars

# Google Gemini AI
GEMINI_API_KEY=AIzaSy...

# Telegram
TELEGRAM_BOT_TOKEN=7123456789:AAH...
TELEGRAM_CHANNEL_ID=@Innoweb_uz
TELEGRAM_ADMIN_CHAT_ID=123456789

# Admin
ADMIN_EMAIL=akramjon10000@gmail.com

# Cron Secret
CRON_SECRET=generate-random-secret
```

#### Auto-Deploy:
- ✅ **Auto-Deploy** - Enable

4. **Create Web Service** bosing

---

## 🔐 3. Database Migration

Service yaratilgandan keyin:

1. Render Dashboard → Web Service → **Shell**
2. Quyidagi buyruqni ishga tushiring:

```bash
npx prisma db push
```

Bu sizning database schema'ngizni yaratadi.

---

## ⏰ 4. Cron Jobs (Optional)

### AI Post Generator:

1. Dashboard → **New** → **Cron Job**
2. Settings:
```
Name: innoweb-post-generator
Command: npm run cron:generate
Schedule: 0 7-19 * * * (har soat 7:00-19:00)
```

### Telegram Sender:

1. Dashboard → **New** → **Cron Job**
2. Settings:
```
Name: innoweb-telegram-sender
Command: npm run cron:telegram
Schedule: 30 7-19 * * * (har soat 30-daqiqada)
```

---

## 🔧 5. Custom Domain (Optional)

1. Web Service → **Settings** → **Custom Domains**
2. **Add Custom Domain** → `innoweb.uz`
3. DNS settings:
```
Type: CNAME
Name: @
Value: innoweb-uz.onrender.com
```

---

## 📊 6. Health Check

Render avtomatik health check qiladi:
- URL: `https://innoweb-uz.onrender.com`
- Status: `200 OK` bo'lishi kerak

---

## 🔑 7. Secrets yaratish

### NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### CRON_SECRET:
```bash
openssl rand -base64 32
```

---

## 📱 8. Telegram Bot Setup

1. [@BotFather](https://t.me/BotFather) dan bot yarating
2. Token oling
3. Botingizni kanalga admin qiling
4. Channel ID ni oling:
   - Bot'ga `/start` yuboring
   - `https://api.telegram.org/bot<TOKEN>/getUpdates` oching
   - `chat.id` ni nusxa oling

---

## ✅ 9. Deploy Tekshirish

### Ishlaydigan URL'lar:
- ✅ https://innoweb-uz.onrender.com
- ✅ https://innoweb-uz.onrender.com/blog
- ✅ https://innoweb-uz.onrender.com/admin/login

### Admin Login:
```
Email: admin@innoweb.uz
Parol: Innoweb2025!
```

---

## 🐛 10. Troubleshooting

### Build xatosi:
```bash
# Render Shell'da:
npm install
npm run build
```

### Database xatosi:
```bash
# Prisma generate:
npx prisma generate

# Prisma push:
npx prisma db push
```

### Logs ko'rish:
- Render Dashboard → Web Service → **Logs**

### Service qayta ishga tushirish:
- Render Dashboard → Web Service → **Manual Deploy**

---

## 💰 11. Narxlar

### Free Plan:
- ✅ Web Service: 750 soat/oy
- ✅ PostgreSQL: 1GB storage
- ✅ Avtomatik SSL
- ⏸️ Inactivity keyin sleep mode

### Paid Plan ($7/oy):
- ✅ 24/7 uptime
- ✅ No sleep mode
- ✅ Custom domains
- ✅ More resources

---

## 🚀 12. Quick Deploy

### 1-qadamli deploy:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

1. **Import Git Repository** bosing
2. Environment variables kiriting
3. **Deploy** bosing

---

## 📞 Support

- 📧 Email: akramjon10000@gmail.com
- 💬 Telegram: @Innoweb_uz
- 🌐 Website: https://innoweb.uz

---

## 🎉 Deploy muvaffaqiyatli!

Saytingiz **https://innoweb-uz.onrender.com** manzilida ishlayapti!

### Keyingi qadamlar:
1. ✅ Custom domain qo'shing
2. ✅ SSL sertifikati tekshiring
3. ✅ Admin panel test qiling
4. ✅ Cron jobs sozlang
5. ✅ Google Analytics qo'shing
6. ✅ Telegram bot sozlang

**Happy Coding! 🚀**
