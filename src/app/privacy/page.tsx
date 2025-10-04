import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import { Sparkles, Shield } from 'lucide-react';

export default async function PrivacyPage() {
  const dict = await getDictionary('uz');

  return (
    <main className="min-h-screen bg-black">
      <Navbar dict={dict} />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#00fff2]/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#bf00ff]/20 rounded-full blur-[120px] animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-blue">
              <Shield className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-semibold text-neon-blue">Maxfiylik</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-neon-blue">Maxfiylik</span>
              <span className="block bg-gradient-text">Siyosati</span>
            </h1>
          </div>

          <div className="glass-effect border-2 border-neon-cyan/30 p-8 md:p-12 rounded-2xl space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-black text-neon-cyan mb-4">1. Ma'lumotlar To'plash</h2>
              <p className="leading-relaxed">
                Innoweb.uz sizning shaxsiy ma'lumotlaringizni faqat xizmatlarimizni yaxshilash va 
                mijozlarimiz bilan samarali muloqot uchun to'playdi. Biz quyidagi ma'lumotlarni 
                to'playmiz:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Ism va familiya</li>
                <li>Email manzil</li>
                <li>Telefon raqam</li>
                <li>Kompaniya nomi (ixtiyoriy)</li>
                <li>Xabar matni</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-purple mb-4">2. Ma'lumotlardan Foydalanish</h2>
              <p className="leading-relaxed">
                Sizning ma'lumotlaringiz faqat quyidagi maqsadlar uchun ishlatiladi:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Sizning so'rovingizga javob berish</li>
                <li>Xizmatlar to'g'risida ma'lumot berish</li>
                <li>Loyihangiz bo'yicha konsultatsiya berish</li>
                <li>Xizmatlarimizni yaxshilash</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-green mb-4">3. Ma'lumotlar Xavfsizligi</h2>
              <p className="leading-relaxed">
                Biz sizning ma'lumotlaringizni himoya qilish uchun zamonaviy xavfsizlik 
                texnologiyalaridan foydalanamiz. Barcha ma'lumotlar shifrlangan holda 
                saqlanadi va uchinchi shaxslarga berilmaydi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-cyan mb-4">4. Cookie'lar</h2>
              <p className="leading-relaxed">
                Saytimiz foydalanuvchi tajribasini yaxshilash uchun cookie'lardan foydalanadi. 
                Siz brauzer sozlamalarida cookie'larni o'chirib qo'yishingiz mumkin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-purple mb-4">5. Sizning Huquqlaringiz</h2>
              <p className="leading-relaxed">
                Siz o'z ma'lumotlaringizni ko'rish, o'zgartirish yoki o'chirish huquqiga egasiz. 
                Buning uchun biz bilan bog'laning:
              </p>
              <div className="mt-4 space-y-2">
                <p>📧 Email: akramjon10000@gmail.com</p>
                <p>📞 Telefon: +998 99 644 84 44</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-blue mb-4">6. O'zgarishlar</h2>
              <p className="leading-relaxed">
                Ushbu maxfiylik siyosati vaqti-vaqti bilan yangilanishi mumkin. 
                Barcha o'zgarishlar ushbu sahifada e'lon qilinadi.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Oxirgi yangilanish: 2025-10-04
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}

export const metadata = {
  title: 'Maxfiylik Siyosati | Innoweb.uz',
  description: 'Innoweb.uz maxfiylik siyosati va ma\'lumotlar himoyasi.',
};
