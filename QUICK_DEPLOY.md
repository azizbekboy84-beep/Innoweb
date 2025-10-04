# ⚡ Quick Deploy Guide - Innoweb.uz

## 🚀 5 Daqiqada Deploy!

### 1️⃣ Render.com Accounti
1. [render.com](https://render.com) ga kiring
2. GitHub ulang

### 2️⃣ Database Yaratish
```
Dashboard → New → PostgreSQL
Name: innoweb-db
Plan: Free
Region: Frankfurt
Create!
```

### 3️⃣ Web Service Yaratish
```
Dashboard → New → Web Service
Repository: innoweb-uz
Name: innoweb-uz
Runtime: Node
Build: npm install && npx prisma generate && npm run build
Start: npm start
Create!
```

### 4️⃣ Environment Variables
Settings → Environment → Add:

```env
NODE_VERSION=18.17.0
DATABASE_URL=[Render database URL]
NEXTAUTH_URL=https://innoweb-uz.onrender.com
NEXTAUTH_SECRET=[Generate: openssl rand -base64 32]
GEMINI_API_KEY=[Your Gemini API key]
TELEGRAM_BOT_TOKEN=[Your bot token]
TELEGRAM_CHANNEL_ID=@Innoweb_uz
TELEGRAM_ADMIN_CHAT_ID=[Your Telegram ID]
ADMIN_EMAIL=akramjon10000@gmail.com
CRON_SECRET=[Generate: openssl rand -base64 32]
```

### 5️⃣ Deploy!
```
Manual Deploy → Deploy Latest Commit
```

---

## ✅ Deploy Tayyor!

Site: **https://innoweb-uz.onrender.com**

### Login:
```
URL: /admin/login
Email: admin@innoweb.uz
Parol: Innoweb2025!
```

---

## 🔧 Post-Deploy

### Database Migration:
Render Shell'da:
```bash
npx prisma db push
```

### Test:
- ✅ Homepage
- ✅ Admin panel
- ✅ Contact form
- ✅ Chatbot

---

## 📊 Alternative: Vercel

### 1-Click Deploy:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables:
Same as Render (4️⃣ yuqorida)

---

## 🐛 Troubleshooting

### Build xatosi:
```bash
npm run build
```

### Database xatosi:
```bash
npx prisma generate
npx prisma db push
```

### Logs:
Render → Service → Logs

---

## 📞 Yordam

- 📧 akramjon10000@gmail.com
- 💬 @Innoweb_uz
- 📖 RENDER.md - To'liq qo'llanma

**Muvaffaqiyatli Deploy! 🎉**
