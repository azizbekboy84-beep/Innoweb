'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';

interface HeroProps {
  dict: any;
}

export default function Hero({ dict }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background Blurs with Neon Colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-[#00fff2]/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[15%] right-[10%] w-[600px] h-[600px] bg-[#bf00ff]/30 rounded-full blur-[120px] animate-float-slow"></div>
        <div className="absolute top-[40%] right-[25%] w-[400px] h-[400px] bg-[#39ff14]/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[30%] left-[20%] w-[450px] h-[450px] bg-[#00a6ff]/25 rounded-full blur-[110px] animate-float-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,242,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,242,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-neon-cyan rounded-full animate-float opacity-60"></div>
        <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-neon-purple rounded-full animate-float-slow opacity-50"></div>
        <div className="absolute bottom-[25%] left-[30%] w-2 h-2 bg-neon-green rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[35%] right-[40%] w-1 h-1 bg-neon-blue rounded-full animate-float-slow opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          {mounted && (
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 glass-effect rounded-full animate-fade-in-up border border-neon-cyan">
              <Zap className="w-4 h-4 text-neon-cyan animate-glow-pulse" />
              <span className="text-sm font-semibold text-neon-cyan">
                Kelajak Texnologiyalari
              </span>
              <Star className="w-3 h-3 text-neon-cyan animate-pulse" />
            </div>
          )}

          {/* Main Heading with Neon Effect */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tight">
            <span className="block text-neon-cyan animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Biznesingizni
            </span>
            <span className="block bg-gradient-text animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Raqamlashtiring
            </span>
            <span className="block text-neon-purple animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              AI bilan
            </span>
          </h1>

          {/* Subtitle with Highlighted Keywords */}
          <p className="text-xl md:text-3xl mb-14 max-w-4xl mx-auto animate-fade-in-up text-gray-300 font-medium leading-relaxed" style={{ animationDelay: '400ms' }}>
            <span className="text-neon-cyan font-bold">Web saytlar</span>,{' '}
            <span className="text-neon-purple font-bold">Telegram botlar</span> va{' '}
            <span className="text-neon-blue font-bold">AI chatbotlar</span> —{' '}
            <span className="text-neon-green">professional darajada</span>
          </p>

          {/* CTAs with Neon Glow */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up mb-20" style={{ animationDelay: '500ms' }}>
            <Link href="/aloqa">
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-10 py-7 text-lg font-bold rounded-xl transition-all duration-300 shadow-neon-cyan hover:shadow-[0_0_30px_rgba(0,255,242,0.6)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  <Zap className="mr-2 w-5 h-5" />
                  Bepul Maslahat
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                size="lg" 
                className="group border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 px-10 py-7 text-lg font-bold rounded-xl bg-transparent transition-all duration-300 shadow-neon-purple hover:shadow-[0_0_30px_rgba(191,0,255,0.6)] hover:scale-105"
              >
                <span className="flex items-center">
                  {'<>'} Xizmatlarni Ko'rish
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Stats with Neon Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            {[
              { label: 'Loyihalar', value: '50+', color: 'cyan' },
              { label: 'Mijozlar', value: '100+', color: 'purple' },
              { label: 'Telegram Botlar', value: '30+', color: 'blue' },
              { label: 'Tajriba', value: '5+ yil', color: 'green' },
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`glass-effect p-6 rounded-2xl hover:scale-105 transition-all duration-300 group ${
                  stat.color === 'cyan' ? 'hover:border-neon-cyan hover:shadow-neon-cyan' :
                  stat.color === 'purple' ? 'hover:border-neon-purple hover:shadow-neon-purple' :
                  stat.color === 'blue' ? 'hover:border-[#00a6ff] hover:shadow-[0_0_20px_rgba(0,166,255,0.5)]' :
                  'hover:border-[#39ff14] hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]'
                }`}
              >
                <div className={`text-5xl font-black mb-2 ${
                  stat.color === 'cyan' ? 'text-neon-cyan' :
                  stat.color === 'purple' ? 'text-neon-purple' :
                  stat.color === 'blue' ? 'text-neon-blue' :
                  'text-neon-green'
                }`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-neon-cyan/70 rounded-full flex items-start justify-center p-2 shadow-neon-cyan">
          <div className="w-1.5 h-4 bg-neon-cyan rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
