import Services from '@/components/homepage/Services';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import { Sparkles, Globe, MessageSquare, Bot, Cpu, Zap } from 'lucide-react';

export default async function ServicesPage() {
  const dict = await getDictionary('uz');

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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-cyan">
              <Sparkles className="w-4 h-4 text-neon-cyan" />
              <span className="text-sm font-semibold text-neon-cyan">Xizmatlar</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-neon-cyan">Bizning</span>
              <span className="block bg-gradient-text">Xizmatlarimiz</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Zamonaviy texnologiyalar bilan{' '}
              <span className="text-neon-purple font-bold">biznesingizni rivojlantiring</span>
            </p>
          </div>
        </div>
      </section>

      <Services dict={dict} />
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#00fff2]/5 to-black"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Loyihangizni <span className="text-neon-cyan">Boshlashga</span> Tayyormisiz?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Bepul konsultatsiya oling va loyihangizni muhokama qiling
          </p>
          <a href="/aloqa">
            <button className="group relative overflow-hidden bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-10 py-7 text-lg font-bold rounded-xl shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.6)] transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center">
                <Zap className="mr-2 w-5 h-5" />
                Bepul Maslahat Olish
              </span>
            </button>
          </a>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}

export const metadata = {
  title: 'Xizmatlar | Innoweb.uz',
  description: 'Web saytlar, Telegram botlar, AI chatbotlar va avtomatlashtirish xizmatlari.',
};
