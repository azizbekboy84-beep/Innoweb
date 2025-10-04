# 🤝 Contributing to Innoweb.uz

Loyihaga hissa qo'shganingiz uchun rahmat!

## 📋 Development Setup

### Prerequisites:
- Node.js 18.17.0+
- PostgreSQL 14+
- Git

### Local Setup:
```bash
# Clone repository
git clone https://github.com/yourusername/innoweb-uz.git
cd innoweb-uz

# Install dependencies
npm install

# Setup environment
cp .env.example .env
# .env faylini to'ldiring

# Database setup
npx prisma db push

# Run development server
npm run dev
```

## 🌿 Branch Strategy

- `main` - Production branch
- `dev` - Development branch
- `feature/*` - New features
- `fix/*` - Bug fixes

## 📝 Commit Convention

```
feat: yangi xususiyat qo'shish
fix: xatoni tuzatish
docs: dokumentatsiya yangilash
style: kod formatlash
refactor: kod refactoring
test: testlar qo'shish
chore: boshqa o'zgarishlar
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run linter
npm run lint

# Build check
npm run build
```

## 📤 Pull Request Process

1. Fork repository
2. Create feature branch
3. Make changes
4. Test locally
5. Create Pull Request
6. Wait for review

## 📞 Support

- Email: akramjon10000@gmail.com
- Telegram: @Innoweb_uz

Rahmat! 🙏
