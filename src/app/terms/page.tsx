import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import { Sparkles, FileText } from 'lucide-react';

export default async function TermsPage() {
  const dict = await getDictionary('uz');

  return (
    <main className="min-h-screen bg-black">
      <Navbar dict={dict} />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#bf00ff]/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#00fff2]/20 rounded-full blur-[120px] animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-purple">
              <FileText className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-semibold text-neon-purple">Shartlar</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="block text-neon-purple">Foydalanish</span>
              <span className="block bg-gradient-text">Shartlari</span>
            </h1>
          </div>

          <div className="glass-effect border-2 border-neon-purple/30 p-8 md:p-12 rounded-2xl space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-black text-neon-cyan mb-4">1. Umumiy Qoidalar</h2>
              <p className="leading-relaxed">
                Innoweb.uz veb-saytidan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz. 
                Agar siz ushbu shartlar bilan rozi bo'lmasangiz, iltimos saytdan foydalanmang.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-purple mb-4">2. Xizmatlar</h2>
              <p className="leading-relaxed mb-4">
                Innoweb.uz quyidagi xizmatlarni taqdim etadi:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Web saytlar yaratish va rivojlantirish</li>
                <li>Telegram botlar ishlab chiqish</li>
                <li>AI chatbotlar yaratish</li>
                <li>Biznes jarayonlarini avtomatlashtirish</li>
                <li>CRM va ERP tizimlari</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-green mb-4">3. To'lov va Narxlar</h2>
              <p className="leading-relaxed">
                Barcha narxlar loyiha murakkabligiga qarab individual belgilanadi. 
                To'lovlar shartnoma asosida amalga oshiriladi. Biz quyidagi to'lov 
                usullarini qabul qilamiz:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Bank o'tkazmasi</li>
                <li>Plastik karta</li>
                <li>Click va Payme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-cyan mb-4">4. Mualliflik Huquqi</h2>
              <p className="leading-relaxed">
                Saytdagi barcha materiallar (matn, rasm, dizayn) Innoweb.uz mualliflik 
                huquqi bilan himoyalangan. Ruxsatsiz nusxa ko'chirish yoki tarqatish 
                taqiqlanadi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-purple mb-4">5. Javobgarlik</h2>
              <p className="leading-relaxed">
                Innoweb.uz o'z xizmatlarining sifati uchun javobgardir. Biroq, biz 
                mijozning noto'g'ri ma'lumot berishi yoki uchinchi shaxslarning 
                harakatlari natijasida yuzaga kelgan zararlar uchun javobgar emasmiz.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-blue mb-4">6. Shartnomani Bekor Qilish</h2>
              <p className="leading-relaxed">
                Ikkala tomon ham shartnomani bekor qilish huquqiga ega, lekin bu haqda 
                30 kun oldin yozma ravishda xabar berish kerak. Bajarilgan ishlar uchun 
                to'lov qaytarilmaydi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black text-neon-green mb-4">7. O'zgarishlar</h2>
              <p className="leading-relaxed">
                Innoweb.uz ushbu shartlarni istalgan vaqtda o'zgartirish huquqini o'zida 
                saqlab qoladi. Barcha o'zgarishlar ushbu sahifada e'lon qilinadi.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Oxirgi yangilanish: 2025-10-04
              </p>
            </section>

            <section className="border-t border-neon-cyan/30 pt-8">
              <h2 className="text-2xl font-black text-neon-cyan mb-4">Aloqa</h2>
              <p className="leading-relaxed mb-4">
                Savollar yoki takliflar bo'lsa, biz bilan bog'laning:
              </p>
              <div className="space-y-2">
                <p>📧 Email: akramjon10000@gmail.com</p>
                <p>📞 Telefon: +998 99 644 84 44</p>
                <p>📱 Telegram: @Innoweb_uz</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer dict={dict} />
    </main>
  );
}

export const metadata = {
  title: 'Foydalanish Shartlari | Innoweb.uz',
  description: 'Innoweb.uz foydalanish shartlari va qoidalari.',
};
