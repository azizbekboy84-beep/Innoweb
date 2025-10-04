import ContactForm from '@/components/contact/ContactForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';

export default async function ContactPage() {
  const dict = await getDictionary('uz');

  return (
    <main className="min-h-screen bg-black">
      <Navbar dict={dict} />
      <div className="pt-20">
        <ContactForm dict={dict} />
      </div>
      <Footer dict={dict} />
    </main>
  );
}

export const metadata = {
  title: 'Aloqa | Innoweb.uz',
  description: 'Biz bilan bog\'laning. Professional web saytlar, Telegram botlar va AI chatbotlar yaratamiz.',
};
