import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ScrollToTop from '@/components/layout/ScrollToTop';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://innoweb.uz'),
  title: {
    default: 'Innoweb.uz - Professional Web Saytlar, Telegram Botlar | Toshkent',
    template: '%s | Innoweb.uz',
  },
  description: 'Professional web saytlar, Telegram botlar, AI chatbotlar va biznes avtomatlashtirish xizmatlari. CRM, ERP tizimlari. Toshkent, O\'zbekiston. Bepul konsultatsiya +998996448444',
  keywords: ['web sayt yaratish', 'telegram bot', 'ai chatbot', 'biznes avtomatlashtirish', 'crm tizimi', 'landing page', 'e-commerce', 'toshkent', 'uzbekistan', 'web development'],
  authors: [{ name: 'Innoweb.uz', url: 'https://innoweb.uz' }],
  creator: 'Innoweb.uz',
  publisher: 'Innoweb.uz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Innoweb.uz - Professional Digital Solutions',
    description: 'Web saytlar, Telegram botlar, AI chatbotlar va avtomatlashtirish',
    url: 'https://innoweb.uz',
    siteName: 'Innoweb.uz',
    locale: 'uz_UZ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
