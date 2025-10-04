import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Blog maqolalar ma'lumotlari
const posts = {
  'ai-chatbotlar-kelajak-texnologiyasi': {
    title: 'AI Chatbotlar: Kelajak Texnologiyasi',
    date: '2025-10-01',
    readTime: '5 min',
    category: 'AI',
    author: 'Innoweb.uz Team',
    content: `
      <h2>Sun'iy intellekt chatbotlar nima?</h2>
      <p>AI chatbotlar - bu sun'iy intellekt texnologiyalari asosida ishlaydigan virtual assistentlar. Ular 24/7 mijozlar bilan muloqot qilish, savolarga javob berish va biznes jarayonlarini avtomatlashtirishda yordam beradi.</p>

      <h2>AI chatbotlarning afzalliklari</h2>
      <ul>
        <li><strong>24/7 ishlash:</strong> Chatbot hech qachon dam olmaydi va doimo mijozlaringiz uchun mavjud</li>
        <li><strong>Tez javoblar:</strong> Bir vaqtning o'zida minglab mijozlarga javob bera oladi</li>
        <li><strong>Xarajatlarni kamaytirish:</strong> Katta support jamoasiga ehtiyoj yo'q</li>
        <li><strong>Ko'p tillilik:</strong> Turli tillarda mijozlar bilan gaplasha oladi</li>
        <li><strong>O'rganuvchi:</strong> Har bir suhbatdan o'rganib, tobora yaxshilanadi</li>
      </ul>

      <h2>Qanday bizneslar foydalanishi mumkin?</h2>
      <p>AI chatbotlar deyarli barcha sohalar uchun mos:</p>
      <ul>
        <li>E-commerce - mahsulot tavsiya qilish, buyurtmalarni kuzatish</li>
        <li>Restoran - buyurtma qabul qilish, rezervatsiya</li>
        <li>Klinikalar - navbat belgilash, ma'lumot berish</li>
        <li>Ta'lim - talabalar savollariga javob berish</li>
        <li>Bank va moliya - hisoblar, tranzaksiyalar haqida ma'lumot</li>
      </ul>

      <h2>Innoweb.uz bilan AI chatbot yarating</h2>
      <p>Biz GPT-4, Gemini va boshqa zamonaviy AI texnologiyalaridan foydalanib, sizning biznesingiz uchun maxsus chatbot yaratamiz.</p>
      
      <p><strong>Bizning xizmatlarimiz:</strong></p>
      <ul>
        <li>Chatbot loyihalashtirish va yaratish</li>
        <li>Kompaniya ma'lumotlari bilan o'rgatish</li>
        <li>Web sayt va Telegram integratsiya</li>
        <li>24/7 texnik qo'llab-quvvatlash</li>
      </ul>

      <p>Bepul konsultatsiya olish uchun biz bilan bog'laning: <strong>+998 99 644 84 44</strong></p>
    `,
  },
  'telegram-botlar-avtomatlashtirish': {
    title: 'Telegram Botlar bilan Biznesni Avtomatlashtirish',
    date: '2025-09-28',
    readTime: '7 min',
    category: 'Telegram',
    author: 'Innoweb.uz Team',
    content: `
      <h2>Telegram botlar - biznes uchun kuchli vosita</h2>
      <p>Telegram botlar orqali biznesingizni avtomatlashtirib, vaqt va pulni tejashingiz mumkin. 500 million+ foydalanuvchi Telegramda faol.</p>

      <h2>Vaqt va pul tejashning 10 yo'li</h2>
      
      <h3>1. Avtomatik buyurtma qabul qilish</h3>
      <p>Bot mijozlardan buyurtmalarni 24/7 qabul qiladi, ishchilar uchun dam olish vaqti ham ishlaydi.</p>

      <h3>2. To'lov qabul qilish</h3>
      <p>Click, Payme, Uzum va xalqaro to'lov tizimlarini integratsiya qiling.</p>

      <h3>3. CRM tizimi bilan bog'lash</h3>
      <p>Barcha mijozlar ma'lumotlari avtomatik CRM ga tushadi.</p>

      <h3>4. Xabar yuborish</h3>
      <p>Chegirmalar, yangiliklar va aksiyalar haqida avtomatik xabar yuboring.</p>

      <h3>5. Statistika va hisobotlar</h3>
      <p>Kunlik, haftalik va oylik hisobotlarni avtomatik oling.</p>

      <h3>6. Mahsulot katalogi</h3>
      <p>Bot orqali mahsulotlarni ko'rsatish va narxlarni yangilash.</p>

      <h3>7. Savol-javob (FAQ)</h3>
      <p>Ko'p uchraydigan savollarga avtomatik javob.</p>

      <h3>8. Navbat tizimi</h3>
      <p>Mijozlar navbat olishlari mumkin (klinika, salon va h.k.).</p>

      <h3>9. Hodimlar boshqaruvi</h3>
      <p>Ishchilar uchun vazifalar berish va nazorat qilish.</p>

      <h3>10. Integratsiyalar</h3>
      <p>Google Sheets, Trello, Slack va boshqa dasturlar bilan bog'lash.</p>

      <h2>Telegram bot narxi</h2>
      <p>Bot narxi funktsiyalariga qarab belgilanadi. Oddiy bot 500,000 so'mdan, murakkab CRM integratsiya bilan 3,000,000 so'mgacha.</p>

      <h2>Biz bilan bog'laning</h2>
      <p>Telegram botingizni yaratish uchun: <strong>+998 99 644 84 44</strong></p>
    `,
  },
  'web-sayt-seo-optimizatsiyasi': {
    title: 'Web Sayt SEO Optimizatsiyasi',
    date: '2025-09-25',
    readTime: '6 min',
    category: 'Web',
    author: 'Innoweb.uz Team',
    content: `
      <h2>SEO nima va nima uchun muhim?</h2>
      <p>SEO (Search Engine Optimization) - bu saytingizni Google, Yandex kabi qidiruv tizimlarida yuqori o'ringa chiqarish jarayoni. Yaxshi SEO = ko'proq mijozlar!</p>

      <h2>Google'da birinchi o'rinda turish uchun zarur qadamlar</h2>

      <h3>1. Kalit so'zlarni tanlash</h3>
      <p>Mijozlaringiz qanday so'zlar bilan qidiradi? Masalan: "toshkentda web sayt yaratish", "telegram bot buyurtma qilish".</p>

      <h3>2. Sarlavhalar (Title Tags)</h3>
      <p>Har bir sahifada unique va kalit so'z bilan sarlavha:</p>
      <code>Innoweb.uz - Professional Web Saytlar | Toshkent</code>

      <h3>3. Meta Description</h3>
      <p>Qisqa va jozibali tavsif (150-160 belgi):</p>
      <code>Professional web saytlar, Telegram botlar va AI chatbotlar. Toshkent. Bepul konsultatsiya +998996448444</code>

      <h3>4. H1, H2, H3 sarlavhalar</h3>
      <p>Tuzilgan kontent - Google uchun muhim:</p>
      <ul>
        <li><strong>H1:</strong> Asosiy sarlavha (har sahifada faqat 1 ta)</li>
        <li><strong>H2:</strong> Bo'limlar sarlavhasi</li>
        <li><strong>H3:</strong> Ichki bo'limlar</li>
      </ul>

      <h3>5. Tezlik (Page Speed)</h3>
      <p>Sayt 3 soniyadan tez yuklanishi kerak. Sekin sayt - past reyting.</p>

      <h3>6. Mobile Friendly</h3>
      <p>60% odamlar telefonda qidiradi. Responsive dizayn majburiy!</p>

      <h3>7. Backlinks (Tashqi havolalar)</h3>
      <p>Boshqa saytlardan sizga havola - Google uchun trust signali.</p>

      <h3>8. Content (Kontent)</h3>
      <p>Foydali, unique va muntazam yangilangan kontent. Blog yozing!</p>

      <h3>9. Structured Data (JSON-LD)</h3>
      <p>Google'ga saytingiz haqida ma'lumot bering:</p>
      <code>Organization Schema, Service Schema, Article Schema</code>

      <h3>10. Google Analytics & Search Console</h3>
      <p>Statistikani kuzating va xatolarni tuzating.</p>

      <h2>Innoweb.uz SEO xizmatlari</h2>
      <p>Biz sizning saytingizni Google'da TOP 10 ga chiqaramiz:</p>
      <ul>
        <li>SEO audit va tahlil</li>
        <li>Kalit so'zlar tadqiqoti</li>
        <li>On-page optimizatsiya</li>
        <li>Tezlik optimizatsiyasi</li>
        <li>Kontent strategiya</li>
        <li>Oylik hisobotlar</li>
      </ul>

      <p><strong>Bepul SEO audit uchun:</strong> +998 99 644 84 44</p>
    `,
  },
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const dict = await getDictionary('uz');
  const post = posts[params.slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar dict={dict} />
      
      {/* Article Header */}
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Orqaga qaytish
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="px-4 py-2 text-sm font-bold rounded-full glass-effect border-2 border-neon-cyan text-neon-cyan">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-text leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-neon-cyan/20">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-neon-cyan" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-neon-purple" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">{post.author}</span>
            </div>
            <button className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg glass-effect border border-neon-cyan/30 hover:border-neon-cyan text-neon-cyan transition-colors">
              <Share2 className="w-4 h-4" />
              Ulashish
            </button>
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-black prose-headings:text-neon-cyan
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-neon-purple
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-300 prose-ul:my-6
              prose-li:mb-3
              prose-strong:text-white prose-strong:font-bold
              prose-code:text-neon-green prose-code:bg-black/50 prose-code:px-2 prose-code:py-1 prose-code:rounded
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 glass-effect border-2 border-neon-cyan/30 rounded-2xl">
            <h3 className="text-2xl font-black text-neon-cyan mb-4">
              Loyihangizni boshlashga tayyormisiz?
            </h3>
            <p className="text-gray-300 mb-6">
              Bepul konsultatsiya oling va biznesingizni keyingi bosqichga olib chiqing.
            </p>
            <Link href="/aloqa">
              <button className="bg-gradient-primary hover:bg-gradient-hover text-white px-8 py-4 rounded-xl font-bold shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.6)] transition-all duration-300 hover:scale-105">
                Bepul Maslahat Olish
              </button>
            </Link>
          </div>
        </div>
      </article>

      <Footer dict={dict} />
    </main>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug as keyof typeof posts];
  
  if (!post) {
    return {
      title: 'Maqola topilmadi',
    };
  }

  return {
    title: `${post.title} | Innoweb.uz Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
  };
}
