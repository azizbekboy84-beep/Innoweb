'use client';

import { useEffect } from 'react';
import Hero from '@/components/homepage/Hero';
import Services from '@/components/homepage/Services';
import ContactForm from '@/components/contact/ContactForm';
import ChatWidget from '@/components/chatbot/ChatWidget';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import StructuredData from '@/components/seo/StructuredData';

export default function HomePage() {
  // Har safar sahifa yuklanganda yuqoriga scroll
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' } as ScrollToOptions);
  }, []);

  // To'liq O'zbek tilida dict - SEO uchun
  const dict = {
    nav: {
      home: 'Bosh sahifa',
      services: 'Xizmatlar',
      portfolio: 'Portfolio',
      blog: 'Blog',
      pricing: 'Narxlar',
      contact: 'Aloqa',
      about: 'Biz haqimizda',
      free_consultation: 'Bepul Maslahat',
    },
    hero: {
      title: 'Biznesingizni Raqamlashtiring',
      subtitle: 'Professional web saytlar, Telegram botlar, AI chatbotlar va biznes avtomatlashtirish yechimlari',
      cta: 'Bepul Konsultatsiya',
      cta_secondary: 'Portfolio ko\'rish',
    },
    services: {
      title: 'Bizning Xizmatlar',
      subtitle: 'To\'liq raqamli yechimlar sizning biznesingiz uchun',
      web: {
        title: 'Web Saytlar',
        description: 'Zamonaviy va tez ishlaydigan saytlar yaratamiz. Responsive dizayn, SEO optimizatsiya va professional kod.',
      },
      telegram: {
        title: 'Telegram Botlar',
        description: 'Avtomatlashtirish va mijozlar bilan aloqa. To\'lov qabul, CRM integratsiya va ko\'proq.',
      },
      chatbot: {
        title: 'AI Chatbotlar',
        description: '24/7 ishlaydigan sun\'iy intellekt chatbotlar. GPT-4 asosida, ko\'p tillilik va aqlli javoblar.',
      },
      automation: {
        title: 'Biznes Avtomatlashtirish',
        description: 'CRM, ERP va boshqa tizimlar orqali biznesingizni avtomatlashtiring.',
      },
    },
    contact: {
      title: 'Bog\'lanish',
      subtitle: 'Loyihangiz haqida gaplashaylik',
      name: 'Ismingiz',
      phone: 'Telefon raqam',
      email: 'Email (ixtiyoriy)',
      company: 'Kompaniya (ixtiyoriy)',
      service: 'Qaysi xizmat kerak?',
      message: 'Xabar (ixtiyoriy)',
      submit: 'Yuborish',
      success: 'Arizangiz qabul qilindi! Tez orada bog\'lanamiz.',
    },
    footer: {
      description: 'Professional raqamli yechimlar - Web saytlar, Telegram botlar, AI chatbotlar va avtomatlashtirish xizmatlari. Toshkent, O\'zbekiston.',
      services_title: 'Xizmatlar',
      company_title: 'Kompaniya',
      contact_title: 'Aloqa',
      rights: 'Barcha huquqlar himoyalangan',
    },
  };

  return (
    <>
      <StructuredData />
      <main>
        <Navbar dict={dict} />
        <Hero dict={dict} />
        <Services dict={dict} />
        <ContactForm dict={dict} />
        <Footer dict={dict} />
        <ChatWidget />
      </main>
    </>
  );
}
