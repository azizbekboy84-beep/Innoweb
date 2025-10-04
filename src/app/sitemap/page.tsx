import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import { Sparkles, Map } from 'lucide-react';
import Link from 'next/link';

export default async function SitemapPage() {
  const dict = await getDictionary('uz');

  const sitemapSections = [
    {
      title: 'Asosiy Sahifalar',
      color: 'cyan',
      links: [
        { href: '/', label: 'Bosh sahifa' },
        { href: '/xizmatlar', label: 'Xizmatlar' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/blog', label: 'Blog' },
        { href: '/haqida', label: 'Biz haqimizda' },
        { href: '/aloqa', label: 'Aloqa' },
      ],
    },
    {
      title: 'Xizmatlar',
      color: 'purple',
      links: [
        { href: '/xizmatlar#web', label: 'Web Saytlar' },
        { href: '/xizmatlar#telegram', label: 'Telegram Botlar' },
        { href: '/xizmatlar#chatbot', label: 'AI Chatbotlar' },
        { href: '/xizmatlar#automation', label: 'Avtomatlashtirish' },
      ],
    },
    {
      title: 'Ma\'lumot',
      color: 'blue',
      links: [
        { href: '/privacy', label: 'Maxfiylik Siyosati' },
        { href: '/terms', label: 'Foydalanish Shartlari' },
        { href: '/sitemap', label: 'Sayt Xaritasi' },
      ],
    },
    {
      title: 'Aloqa',
      color: 'green',
      links: [
        { href: 'tel:+998996448444', label: '+998 99 644 84 44' },
        { href: 'mailto:akramjon10000@gmail.com', label: 'akramjon10000@gmail.com' },
        { href: 'https://t.me/Innoweb_uz', label: '@Innoweb_uz' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar dict={dict} />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#00fff2]/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#bf00ff]/20 rounded-full blur-[120px] animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-green">
              <Map className="w-4 h-4 text-neon-green" />
              <span className="text-sm font-semibold text-neon-green">Sitemap</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-neon-green">Sayt</span>
              <span className="block bg-gradient-text">Xaritasi</span>
            </h1>
            <p className="text-xl text-gray-300">
              Barcha sahifalar va bo'limlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sitemapSections.map((section, idx) => (
              <div
                key={idx}
                className={`glass-effect border-2 border-neon-${section.color}/30 hover:border-neon-${section.color} p-8 rounded-2xl transition-all duration-300 hover:scale-105`}
              >
                <h2 className={`text-2xl font-black mb-6 text-neon-${section.color}`}>
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      {link.href.startsWith('http') || link.href.startsWith('tel') || link.href.startsWith('mailto') ? (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center group"
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center group"
                        >
                          <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}

export const metadata = {
  title: 'Sayt Xaritasi | Innoweb.uz',
  description: 'Innoweb.uz sayt xaritasi - barcha sahifalar va bo\'limlar.',
};
