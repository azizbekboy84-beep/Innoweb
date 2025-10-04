import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import { Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default async function BlogPage() {
  const dict = await getDictionary('uz');

  const posts = [
    {
      slug: 'ai-chatbotlar-kelajak-texnologiyasi',
      title: 'AI Chatbotlar: Kelajak Texnologiyasi',
      excerpt: 'Sun\'iy intellekt chatbotlar biznesingizni qanday o\'zgartirishi mumkin',
      date: '2025-10-01',
      readTime: '5 min',
      category: 'AI',
      color: 'cyan',
    },
    {
      slug: 'telegram-botlar-avtomatlashtirish',
      title: 'Telegram Botlar bilan Biznesni Avtomatlashtirish',
      excerpt: 'Telegram botlar orqali vaqt va pulni tejashning 10 yo\'li',
      date: '2025-09-28',
      readTime: '7 min',
      category: 'Telegram',
      color: 'purple',
    },
    {
      slug: 'web-sayt-seo-optimizatsiyasi',
      title: 'Web Sayt SEO Optimizatsiyasi',
      excerpt: 'Google\'da birinchi o\'rinda turish uchun zarur qadamlar',
      date: '2025-09-25',
      readTime: '6 min',
      category: 'Web',
      color: 'blue',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar dict={dict} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#00fff2]/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#bf00ff]/20 rounded-full blur-[120px] animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-green">
              <Sparkles className="w-4 h-4 text-neon-green" />
              <span className="text-sm font-semibold text-neon-green">Blog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-neon-green">Texnologiya</span>
              <span className="block bg-gradient-text">Yangiliklari</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Zamonaviy texnologiyalar va{' '}
              <span className="text-neon-cyan font-bold">eng so'ngi trendlar</span>
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card
                key={index}
                className="glass-effect border-2 border-neon-cyan/30 hover:border-neon-cyan shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.4)] transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-bold rounded-full glass-effect border border-neon-purple text-neon-purple">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-neon-cyan group-hover:text-neon-purple transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${post.slug}`}>
                    <button className="w-full group/btn relative overflow-hidden bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-6 py-3 text-sm font-bold rounded-lg shadow-neon-cyan hover:shadow-[0_0_30px_rgba(0,255,242,0.5)] transition-all duration-300 hover:scale-105">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        To'liq o'qish
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Coming Soon */}
          <div className="text-center mt-16">
            <p className="text-gray-400 text-lg">Ko'proq maqolalar tez orada...</p>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}

export const metadata = {
  title: 'Blog | Innoweb.uz',
  description: 'Texnologiya yangiliklari, maslahatlar va trendlar.',
};
