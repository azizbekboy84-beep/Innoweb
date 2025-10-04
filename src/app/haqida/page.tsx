import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import { Sparkles, Target, Users, Zap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default async function AboutPage() {
  const dict = await getDictionary('uz');

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
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-blue">
              <Sparkles className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-semibold text-neon-blue">Biz Haqimizda</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-neon-blue">Innoweb.uz</span>
              <span className="block bg-gradient-text">Jamoasi</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto">
              Biz{' '}
              <span className="text-neon-cyan font-bold">zamonaviy texnologiyalar</span>
              {' '}orqali bizneslarni{' '}
              <span className="text-neon-purple font-bold">raqamlashtiruvchi</span>
              {' '}professional jamoa
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { label: 'Loyihalar', value: '50+', color: 'cyan' },
              { label: 'Mijozlar', value: '100+', color: 'purple' },
              { label: 'Tajriba', value: '5+ yil', color: 'blue' },
              { label: 'Jamoa', value: '10+', color: 'green' },
            ].map((stat, i) => (
              <Card
                key={i}
                className="glass-effect border-2 border-neon-cyan/30 hover:border-neon-cyan shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.4)] transition-all duration-300 hover:scale-105 p-8 text-center"
              >
                <div className={`text-5xl font-black mb-2 text-neon-${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="glass-effect border-2 border-neon-purple/30 hover:border-neon-purple shadow-neon-purple hover:shadow-[0_0_40px_rgba(191,0,255,0.4)] transition-all duration-300 p-10">
              <Target className="w-12 h-12 text-neon-purple mb-6" />
              <h2 className="text-3xl font-black mb-4 text-neon-purple">Maqsadimiz</h2>
              <p className="text-gray-300 leading-relaxed">
                O'zbekiston bizneslarini zamonaviy texnologiyalar bilan ta'minlash va 
                raqamli transformatsiyaga yordam berish. Har bir mijozimiz uchun 
                individual va innovatsion yechimlar yaratish.
              </p>
            </Card>

            <Card className="glass-effect border-2 border-neon-cyan/30 hover:border-neon-cyan shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.4)] transition-all duration-300 p-10">
              <Zap className="w-12 h-12 text-neon-cyan mb-6" />
              <h2 className="text-3xl font-black mb-4 text-neon-cyan">Vazifamiz</h2>
              <p className="text-gray-300 leading-relaxed">
                Yuqori sifatli, zamonaviy va samarali IT yechimlar yaratish orqali 
                mijozlarimizning biznesini rivojlantirish va raqobatbardoshligini 
                oshirish.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-neon-green">Bizning</span>{' '}
              <span className="bg-gradient-text">Qadriyatlarimiz</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Sifat',
                description: 'Har bir loyihada eng yuqori sifat standartlari',
                color: 'cyan',
              },
              {
                icon: Users,
                title: 'Mijoz',
                description: 'Mijozlar ehtiyojlari birinchi o\'rinda',
                color: 'purple',
              },
              {
                icon: Zap,
                title: 'Innovatsiya',
                description: 'Eng so\'ngi texnologiyalar va yechimlar',
                color: 'blue',
              },
            ].map((value, i) => (
              <Card
                key={i}
                className="glass-effect border-2 border-neon-cyan/30 hover:border-neon-cyan shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.4)] transition-all duration-300 hover:scale-105 p-8 text-center group"
              >
                <value.icon className={`w-16 h-16 mx-auto mb-6 text-neon-${value.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-2xl font-black mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
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
  title: 'Biz Haqimizda | Innoweb.uz',
  description: 'Innoweb.uz jamoasi, maqsadlarimiz va qadriyatlarimiz.',
};
