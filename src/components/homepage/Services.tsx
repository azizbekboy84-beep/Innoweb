'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  MessageSquare, 
  Bot, 
  Sparkles,
  ArrowRight,
  Zap,
  Star,
  Cpu
} from 'lucide-react';

interface ServicesProps {
  dict: any;
}

const services = [
  {
    icon: Globe,
    key: 'web',
    gradient: 'from-[#00fff2] via-[#00a6ff] to-[#0066cc]',
    shadowColor: 'shadow-[0_0_40px_rgba(0,255,242,0.3)]',
    hoverShadow: 'hover:shadow-[0_0_60px_rgba(0,255,242,0.5)]',
    iconBg: 'bg-[#00fff2]/20',
    borderColor: 'border-[#00fff2]/30',
    textColor: 'text-[#00fff2]',
    features: ['Landing Page', 'E-commerce', 'Korporativ Sayt'],
  },
  {
    icon: MessageSquare,
    key: 'telegram',
    gradient: 'from-[#00a6ff] via-[#0088ff] to-[#0066ff]',
    shadowColor: 'shadow-[0_0_40px_rgba(0,166,255,0.3)]',
    hoverShadow: 'hover:shadow-[0_0_60px_rgba(0,166,255,0.5)]',
    iconBg: 'bg-[#00a6ff]/20',
    borderColor: 'border-[#00a6ff]/30',
    textColor: 'text-[#00a6ff]',
    features: ['Auto-javob', 'To\'lov qabul', 'CRM integratsiya'],
  },
  {
    icon: Bot,
    key: 'chatbot',
    gradient: 'from-[#bf00ff] via-[#9900ff] to-[#7700ff]',
    shadowColor: 'shadow-[0_0_40px_rgba(191,0,255,0.3)]',
    hoverShadow: 'hover:shadow-[0_0_60px_rgba(191,0,255,0.5)]',
    iconBg: 'bg-[#bf00ff]/20',
    borderColor: 'border-[#bf00ff]/30',
    textColor: 'text-[#bf00ff]',
    features: ['24/7 Support', 'AI-powered', 'Ko\'p tillilik'],
  },
  {
    icon: Cpu,
    key: 'automation',
    gradient: 'from-[#39ff14] via-[#00ff88] to-[#00ffaa]',
    shadowColor: 'shadow-[0_0_40px_rgba(57,255,20,0.3)]',
    hoverShadow: 'hover:shadow-[0_0_60px_rgba(57,255,20,0.5)]',
    iconBg: 'bg-[#39ff14]/20',
    borderColor: 'border-[#39ff14]/30',
    textColor: 'text-[#39ff14]',
    features: ['CRM Tizimi', 'ERP', 'Avtomatlashtirish'],
  },
];

export default function Services({ dict }: ServicesProps) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-[#00fff2]/20 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] bg-[#bf00ff]/20 rounded-full blur-[150px] animate-float-slow"></div>
        <div className="absolute top-[60%] left-[40%] w-[400px] h-[400px] bg-[#39ff14]/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,242,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,242,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-purple">
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-semibold text-neon-purple">Xizmatlar</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-neon-cyan">Bizning</span>
            <span className="block bg-gradient-text">Xizmatlarimiz</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Zamonaviy texnologiyalar bilan{' '}
            <span className="text-neon-green font-bold">biznesingizni rivojlantiring</span>
          </p>
        </div>

        {/* Services Grid with 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group"
              >
                <Card
                  className={`relative overflow-hidden border-2 ${service.borderColor} ${service.shadowColor} ${service.hoverShadow} transition-all duration-500 bg-black/60 backdrop-blur-xl h-full transform-gpu ${
                    isHovered ? 'scale-105 -translate-y-2' : ''
                  }`}
                  style={{
                    transform: isHovered ? 'rotateX(2deg) rotateY(2deg)' : 'rotateX(0) rotateY(0)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Gradient Glow Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Animated Border Beam */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${service.gradient} animate-border-beam`}></div>
                  </div>

                  {/* Floating particles on hover */}
                  {isHovered && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className={`absolute top-[20%] left-[15%] w-1 h-1 ${service.iconBg} rounded-full animate-float`}></div>
                      <div className={`absolute bottom-[30%] right-[20%] w-1.5 h-1.5 ${service.iconBg} rounded-full animate-float-slow`}></div>
                      <div className={`absolute top-[60%] left-[70%] w-1 h-1 ${service.iconBg} rounded-full animate-float`}></div>
                    </div>
                  )}

                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon Container with 3D effect */}
                    <div className={`w-20 h-20 rounded-2xl ${service.iconBg} border-2 ${service.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${service.shadowColor} relative`}>
                      <Icon className={`w-10 h-10 ${service.textColor}`} />
                      <div className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br ${service.gradient} rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity`}>
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Title with Neon Effect */}
                    <h3 className={`text-3xl font-black mb-4 ${service.textColor} group-hover:scale-105 transition-transform duration-300`}>
                      {dict.services[service.key].title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                      {dict.services[service.key].description}
                    </p>

                    {/* Features with animated icons */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                          <Zap className={`w-3 h-3 ${service.textColor} mr-2 flex-shrink-0`} />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href={`/xizmatlar#${service.key}`} className="mt-auto">
                      <Button 
                        variant="ghost" 
                        className={`w-full ${service.textColor} hover:bg-white/5 border-2 ${service.borderColor} font-bold group/btn transition-all duration-300 hover:scale-105`}
                      >
                        <span className="flex items-center justify-center">
                          Batafsil
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link href="/xizmatlar">
            <Button 
              size="lg" 
              className="group bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 px-10 py-7 text-lg font-bold rounded-xl shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.6)] transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Barcha Xizmatlar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
