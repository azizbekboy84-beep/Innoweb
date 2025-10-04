# 🚀 Innoweb.uz - Professional Digital Solutions

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com)

> Modern web saytlar, Telegram botlar, AI chatbotlar va biznes avtomatlashtirish xizmatlari Website

Modern, AI-powered digital solutions website with automated content generation and Telegram integration.

## 🎯 Features
- ✅ **Bilingual Support** (Uzbek & Russian)
- ✅ **Hourly Automation** (7 AM - 7 PM)
- ✅ **Telegram Bot Integration**
- ✅ **AI Chatbot** (24/7 customer support)
- ✅ **Lead Management System**
- ✅ **Responsive Design** (Mobile-first)
- ✅ **SEO Optimized**

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon.tech recommended)
- OpenAI API key
- Telegram Bot Token

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Configure your .env file with:
# - DATABASE_URL (from neon.tech)
# - OPENAI_API_KEY
# - TELEGRAM_BOT_TOKEN
# - TELEGRAM_CHANNEL_ID
# - TELEGRAM_ADMIN_CHAT_ID

# Initialize database
npx prisma generate
npx prisma db push

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
innoweb-uz/
├── src/
│   ├── app/              # Next.js pages & API routes
│   ├── components/       # React components
│   │   ├── ui/          # Base UI components
│   │   ├── homepage/    # Homepage sections
│   │   ├── chatbot/     # AI Chatbot
│   │   ├── contact/     # Contact form
│   │   └── layout/      # Navigation & Footer
│   ├── lib/             # Utilities
│   ├── services/        # Business logic
│   ├── dictionaries/    # i18n translations
│   └── types/           # TypeScript types
├── prisma/              # Database schema
├── scripts/             # CRON scripts
└── public/              # Static assets
```

## 🤖 AI Features

### Automated Blog Posts

```bash
# Generate post manually
npm run cron:generate

# Send to Telegram manually
npm run cron:telegram
```

### AI Chatbot

The chatbot uses company knowledge base to answer questions about:
- Services and pricing
- Technologies used
- Project timelines
- Contact information

## 📮 Telegram Integration

### Setup Bot

1. Create bot via [@BotFather](https://t.me/botfather)
2. Get bot token
3. Add to `.env` as `TELEGRAM_BOT_TOKEN`

### Setup Channel

1. Create public channel
2. Add bot as admin
3. Add channel ID to `.env` as `TELEGRAM_CHANNEL_ID`

## 🗄️ Database

Uses Prisma ORM with PostgreSQL. Main models:

- **Post** - Blog posts (AI-generated)
- **Lead** - Customer inquiries
- **Service** - Services catalog
- **Portfolio** - Project showcase
- **ChatHistory** - Chatbot conversations
- **Analytics** - Usage tracking

## 🔧 Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# OpenAI
OPENAI_API_KEY="sk-..."

# Telegram
TELEGRAM_BOT_TOKEN="..."
TELEGRAM_CHANNEL_ID="@Innoweb_uz"
TELEGRAM_ADMIN_CHAT_ID="123456789"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."

# Admin
ADMIN_EMAIL="akramjon10000@gmail.com"
```

## 📱 Contact Information

- **Phone:** +998 99 644 84 44
- **Email:** akramjon10000@gmail.com
- **Telegram:** @Innoweb_uz
- **Address:** Toshkent shahri, Nurafshon yo'li 12

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI + shadcn/ui
- **Database:** PostgreSQL (Prisma ORM)
- **AI:** OpenAI (GPT-4 + DALL-E 3)
- **Automation:** Node.js CRON scripts
- **Deployment:** Vercel / Ubuntu Server

## 📊 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database schema
- `npm run db:studio` - Open Prisma Studio
- `npm run cron:generate` - Generate AI post
- `npm run cron:telegram` - Send to Telegram

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add environment variables in Vercel dashboard.

### Ubuntu Server

See deployment guide in blueprint document.

## 📝 License

© 2024 Innoweb.uz. All rights reserved.

## 🤝 Support

For questions or support:
- Email: akramjon10000@gmail.com
- Telegram: @Innoweb_uz
- Phone: +998 99 644 84 44
