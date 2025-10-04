import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import { Sparkles, ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default async function PortfolioPage() {
  const dict = await getDictionary('uz');

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Zamonaviy onlayn savdo platformasi',
      category: 'Web Sayt',
      image: '🛍️',
      color: 'cyan',
    },
    {
      title: 'Telegram CRM Bot',
      description: 'Mijozlar bilan ishlash avtomatik tizimi',
      category: 'Telegram Bot',
      image: '🤖',
      color: 'purple',
    },
    {
      title: 'AI Customer Support',
      description: '24/7 mijozlarga yordam chatbot',
      category: 'AI Chatbot',
      image: '🧠',
      color: 'blue',
    },
    {
      title: 'Corporate Website',
      description: 'Korporativ veb-sayt SEO optimizatsiya bilan',
      category: 'Web Sayt',
      image: '💼',
      color: 'green',
    },
    {
      title: 'Payment Bot',
      description: 'Avtomatik to\'lov qabul qilish tizimi',
      category: 'Telegram Bot',
      image: '💳',
      color: 'cyan',
    },
    {
      title: 'Restaurant Management',
      description: 'Restoran uchun buyurtma tizimi',
      category: 'Web App',
      image: '🍽️',
      color: 'purple',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar dict={dict} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#bf00ff]/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#00fff2]/20 rounded-full blur-[120px] animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-purple">
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-semibold text-neon-purple">Portfolio</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-neon-purple">Bizning</span>
              <span className="block bg-gradient-text">Loyihalarimiz</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Muvaffaqiyatli amalga oshirilgan{' '}
              <span className="text-neon-cyan font-bold">50+</span> loyihalar
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-effect border-2 border-neon-cyan/30 hover:border-neon-cyan shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.4)] transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <div className="p-8">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 text-xs font-bold rounded-full glass-effect border border-neon-purple text-neon-purple">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-neon-cyan">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6">
                    {project.description}
                  </p>
                  <button className="flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors font-bold">
                    Batafsil
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}

export const metadata = {
  title: 'Portfolio | Innoweb.uz',
  description: 'Bizning muvaffaqiyatli loyihalarimiz va mijozlarimiz.',
};
