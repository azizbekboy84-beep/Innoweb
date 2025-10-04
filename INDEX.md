# 📚 Innoweb.uz - Documentation Index

Welcome! This is your complete guide to the Innoweb.uz automation website project.

---

## 🚀 Getting Started (Choose Your Path)

### For Quick Testing (5 minutes)
👉 **Start here:** [`QUICK_START.md`](QUICK_START.md)
- Install and run in 5 minutes
- See the website without API keys
- Test basic functionality

### For Full Setup (20 minutes)
👉 **Start here:** [`SETUP_GUIDE.md`](SETUP_GUIDE.md)
- Complete step-by-step setup
- Configure all services
- Get everything working

### For API Keys Only
👉 **Start here:** [`API_KEYS_GUIDE.md`](API_KEYS_GUIDE.md)
- Detailed guide for each API key
- Screenshots and examples
- Troubleshooting tips

---

## 📖 Documentation Files

### Core Documentation

| File | Purpose | Time to Read |
|------|---------|--------------|
| [`README.md`](README.md) | Project overview, features, tech stack | 5 min |
| [`QUICK_START.md`](QUICK_START.md) | Get running in 5 minutes | 3 min |
| [`SETUP_GUIDE.md`](SETUP_GUIDE.md) | Complete setup instructions | 10 min |
| [`API_KEYS_GUIDE.md`](API_KEYS_GUIDE.md) | How to get all API keys | 15 min |
| [`PROJECT_SUMMARY.md`](PROJECT_SUMMARY.md) | What's been built, features | 10 min |
| **This file** | Documentation index | 2 min |

---

## 🗂️ Quick Reference

### Installation Commands
```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Run development server
npm run dev

# Open database viewer
npx prisma studio
```

### Testing Commands
```bash
# Generate AI blog post
npm run cron:generate

# Send post to Telegram
npm run cron:telegram

# Run linter
npm run lint

# Build for production
npm run build
```

### Useful Links
- **Database:** [neon.tech](https://neon.tech) (Free PostgreSQL)
- **AI API:** [platform.openai.com](https://platform.openai.com) (GPT-4 + DALL-E)
- **Telegram:** [@BotFather](https://t.me/botfather) (Bot creation)
- **Deployment:** [vercel.com](https://vercel.com) (Free hosting)

---

## 🎯 By Use Case

### I want to...

#### ...see the website locally
1. Read: [`QUICK_START.md`](QUICK_START.md)
2. Run: `npm install && npm run dev`
3. Visit: http://localhost:3000

#### ...understand what's been built
1. Read: [`PROJECT_SUMMARY.md`](PROJECT_SUMMARY.md)
2. Explore: `src/` folder structure

#### ...get all API keys
1. Read: [`API_KEYS_GUIDE.md`](API_KEYS_GUIDE.md)
2. Follow each service guide
3. Add to `.env` file

#### ...deploy to production
1. Read: [`README.md`](README.md) (Deployment section)
2. Choose: Vercel or Ubuntu Server
3. Follow deployment steps

#### ...customize the content
- Edit dictionaries: `src/dictionaries/*.json`
- Edit company info: `src/services/company-knowledge.ts`
- Edit colors: `tailwind.config.ts`

#### ...add new features
- Add components: `src/components/`
- Add API routes: `src/app/api/`
- Add database models: `prisma/schema.prisma`

---

## 🏗️ Project Structure

```
innoweb-uz/
│
├── 📄 Configuration Files
│   ├── package.json          # Dependencies
│   ├── tsconfig.json         # TypeScript config
│   ├── next.config.js        # Next.js config
│   ├── tailwind.config.ts    # Tailwind CSS theme
│   └── .env                  # Environment variables (create this!)
│
├── 📚 Documentation
│   ├── README.md             # Project overview
│   ├── QUICK_START.md        # 5-minute start guide
│   ├── SETUP_GUIDE.md        # Complete setup
│   ├── API_KEYS_GUIDE.md     # API keys help
│   ├── PROJECT_SUMMARY.md    # What's been built
│   └── INDEX.md              # This file
│
├── 🗄️ Database
│   └── prisma/
│       └── schema.prisma     # Database schema (11 models)
│
├── 💻 Source Code
│   └── src/
│       ├── app/              # Pages & API routes
│       ├── components/       # React components
│       ├── lib/              # Utilities
│       ├── services/         # Business logic
│       ├── dictionaries/     # Translations
│       └── types/            # TypeScript types
│
├── 🤖 Automation
│   └── scripts/
│       ├── cron-generate-hourly.ts
│       └── cron-send-telegram.ts
│
└── 🎨 Assets
    └── public/               # Static files
```

---

## 🎓 Learning Path

### Beginner (Never used Next.js)
1. **Day 1:** Read `QUICK_START.md` → Install → Run locally
2. **Day 2:** Read `PROJECT_SUMMARY.md` → Understand structure
3. **Day 3:** Read `API_KEYS_GUIDE.md` → Get API keys
4. **Day 4:** Read `SETUP_GUIDE.md` → Configure everything
5. **Day 5:** Test all features → Deploy to Vercel

### Intermediate (Know Next.js basics)
1. **Hour 1:** Install and run (`QUICK_START.md`)
2. **Hour 2:** Get API keys (`API_KEYS_GUIDE.md`)
3. **Hour 3:** Test all features
4. **Hour 4:** Deploy to production

### Advanced (Experienced developer)
1. **15 min:** Install and configure
2. **15 min:** Review code structure
3. **30 min:** Deploy and test

---

## 🔧 Technologies Used

### Frontend
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5.3
- **Styling:** Tailwind CSS 3.4
- **Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js 20+
- **Database:** PostgreSQL (Neon)
- **ORM:** Prisma 5.9
- **API:** Next.js API Routes

### AI & Integrations
- **AI:** OpenAI (GPT-4 + DALL-E 3)
- **Messaging:** Telegram Bot API
- **i18n:** Next.js Internationalization

### DevOps
- **Deployment:** Vercel (recommended) or Ubuntu Server
- **Database:** Neon.tech (serverless PostgreSQL)
- **Version Control:** Git

---

## ✨ Key Features

### Implemented ✅
- AI-powered blog post generation (GPT-4)
- AI image generation (DALL-E 3)
- AI chatbot (24/7 customer support)
- Telegram bot integration
- Automated Telegram channel posting
- Lead management system
- Contact form with validation
- Bilingual support (Uzbek & Russian)
- Responsive design (mobile-first)
- SEO optimization
- Dark mode ready

### Ready to Add 🔜
- Admin dashboard UI
- Portfolio management UI
- Blog post editor UI
- Analytics dashboard
- User authentication
- Payment integration

---

## 📊 File Count

- **Total Files:** 60+
- **Components:** 15+
- **API Routes:** 5+
- **Services:** 6+
- **Documentation:** 6 files
- **Lines of Code:** ~5,000+

---

## 💰 Cost Breakdown

| Service | Free Tier | Paid Tier | Recommended |
|---------|-----------|-----------|-------------|
| **Neon DB** | 3 GB storage | $19/month | Free ✅ |
| **OpenAI** | None | $20/month | Paid 💰 |
| **Telegram** | Unlimited | N/A | Free ✅ |
| **Vercel** | 100 GB bandwidth | $20/month | Free ✅ |
| **Domain** | N/A | $12/year | Optional |

**To start:** $5-20 (OpenAI credits only)

---

## 🎯 Common Tasks

### Change Colors
Edit: `tailwind.config.ts`
```typescript
primary: {
  DEFAULT: '#0ea5e9', // Change this!
  // ...
}
```

### Add New Language
1. Create: `src/dictionaries/en.json`
2. Edit: `src/lib/i18n.ts` (add 'en' to locales)
3. Use in pages

### Change Company Info
Edit: `src/services/company-knowledge.ts`

### Add New Service
1. Add to database via Prisma Studio
2. Update `src/components/homepage/Services.tsx`

### Customize AI Prompts
Edit: `src/services/ai-post-generator.ts`
- Modify `POST_TOPICS` array
- Change prompt template

---

## 🆘 Troubleshooting

### Quick Fixes

| Problem | Solution |
|---------|----------|
| Port 3000 in use | Kill process or use different port |
| Module not found | Run `npm install` |
| Prisma errors | Run `npx prisma generate` |
| Database errors | Check `DATABASE_URL` in `.env` |
| OpenAI errors | Check API key and credits |
| Telegram not working | Verify bot token and channel ID |

### Detailed Help
See troubleshooting sections in:
- `SETUP_GUIDE.md`
- `API_KEYS_GUIDE.md`

---

## 📞 Support

### Project Creator
- **Email:** akramjon10000@gmail.com
- **Telegram:** @Innoweb_uz
- **Phone:** +998 99 644 84 44
- **Location:** Toshkent, Nurafshon yo'li 12

### Community Resources
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- Prisma Docs: [prisma.io/docs](https://prisma.io/docs)
- OpenAI Docs: [platform.openai.com/docs](https://platform.openai.com/docs)
- Telegram Bot API: [core.telegram.org/bots](https://core.telegram.org/bots)

---

## 🎉 Next Steps

### Right Now
1. ✅ You're reading this (INDEX.md)
2. 👉 Next: Open [`QUICK_START.md`](QUICK_START.md)
3. 🚀 Get the website running!

### This Week
1. Get all API keys ([`API_KEYS_GUIDE.md`](API_KEYS_GUIDE.md))
2. Test all features
3. Customize content
4. Deploy to production

### This Month
1. Add custom content
2. Create blog posts
3. Share on social media
4. Monitor analytics

---

## 📝 Changelog

### Version 1.0.0 (Initial Release)
- ✅ Complete project structure
- ✅ AI integration (GPT-4 + DALL-E)
- ✅ Telegram automation
- ✅ Bilingual support
- ✅ Responsive design
- ✅ Full documentation

---

## 🙏 Credits

**Built for:** Innoweb.uz
**Technologies:** Next.js, TypeScript, Tailwind, OpenAI, Telegram
**Documentation:** Comprehensive guides for all levels

---

## 📜 License

© 2024 Innoweb.uz. All rights reserved.

---

**Happy Coding! 🚀**

Start with [`QUICK_START.md`](QUICK_START.md) to get running in 5 minutes!
