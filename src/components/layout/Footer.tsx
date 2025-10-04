'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Send, Sparkles, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FooterProps {
  dict: any;
}

interface Message {
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      content: 'Salom! 👋 Men Innoweb AI assistentiman. "Salom" deb yozing!',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isInitialMount, setIsInitialMount] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
      return;
    }
    scrollToBottom();
  }, [messages, isInitialMount]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      let botResponse = '';
      const lowerInput = input.toLowerCase().trim();

      if (lowerInput.includes('salom') || lowerInput.includes('hello') || lowerInput.includes('assalom')) {
        botResponse = '🎉 Assalomu alaykum! Xush kelibsiz! Men sizga Web saytlar, Telegram botlar va AI chatbotlar haqida ma\'lumot bera olaman. Nimadan boshlashni xohlaysiz?';
      } else if (lowerInput.includes('xizmat') || lowerInput.includes('service')) {
        botResponse = '✨ Bizning asosiy xizmatlar:\n\n💻 **Web Saytlar** - Landing page, E-commerce, Korporativ saytlar\n🤖 **Telegram Botlar** - Avtomatik javob, to\'lov qabul, CRM integratsiya\n🧠 **AI Chatbotlar** - 24/7 mijozlar bilan muloqot\n⚡ **Avtomatlashtirish** - CRM, ERP tizimlari\n\nQaysi xizmat haqida batafsil ma\'lumot olishni xohlaysiz?';
      } else if (lowerInput.includes('web') || lowerInput.includes('sayt')) {
        botResponse = '💻 Biz zamonaviy, responsive va SEO-optimizatsiyalangan web saytlar yaratamiz. Landing page, E-commerce va korporativ saytlar bizning ixtisosligimiz. Batafsil ma\'lumot uchun +998 99 644 84 44 ga qo\'ng\'iroq qiling!';
      } else if (lowerInput.includes('telegram') || lowerInput.includes('bot')) {
        botResponse = '🤖 Telegram botlar orqali biznesingizni avtomatlashtiramiz: avtomatik javoblar, to\'lov qabul qilish, CRM integratsiya va boshqalar. Aloqaga chiqing!';
      } else if (lowerInput.includes('ai') || lowerInput.includes('chatbot') || lowerInput.includes('chat')) {
        botResponse = '🧠 AI Chatbotlar - sun\'iy intellekt asosida ishlaydigan virtual assistentlar. 24/7 mijozlar bilan muloqot, savolarga avtomatik javoblar va ko\'p tillilik. Sizning biznesingizni keyingi bosqichga olib chiqamiz!';
      } else if (lowerInput.includes('narx') || lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('qancha')) {
        botResponse = '💰 Narxlar loyiha murakkabligiga qarab belgilanadi. Bepul konsultatsiya olish uchun +998 99 644 84 44 ga bog\'laning yoki akramjon10000@gmail.com ga xat yozing.';
      } else if (lowerInput.includes('aloqa') || lowerInput.includes('contact') || lowerInput.includes('telefon') || lowerInput.includes('phone')) {
        botResponse = '📞 Aloqa:\n+998 99 644 84 44\n📧 akramjon10000@gmail.com\n📱 @Innoweb_uz\n📍 Toshkent, Nurafshon yo\'li 12';
      } else if (lowerInput.includes('rahmat') || lowerInput.includes('thank')) {
        botResponse = '🙏 Arzimaydi! Yana savollaringiz bo\'lsa, bemalol yozing. Yordam bera olishimdan xursandman!';
      } else {
        botResponse = 'Rahmat! Sizning savolingiz uchun mutaxassislarimiz tez orada javob berishadi. Qo\'shimcha ma\'lumot uchun +998 99 644 84 44 ga qo\'ng\'iroq qiling! 😊';
      }

      const botMessage: Message = {
        role: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 800);

    setInput('');
  };

  return (
    <footer className="bg-black border-t border-neon-cyan/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] bg-[#00fff2]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] bg-[#bf00ff]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Company Info + Links */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-neon-cyan">
                    <span className="text-white font-black text-2xl">I</span>
                  </div>
                  <span className="text-2xl font-black text-neon-cyan">Innoweb.uz</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {dict.footer.description}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-lg glass-effect border border-neon-cyan/30 flex items-center justify-center hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 hover:scale-110">
                    <span className="text-neon-cyan">T</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg glass-effect border border-neon-purple/30 flex items-center justify-center hover:border-neon-purple hover:shadow-neon-purple transition-all duration-300 hover:scale-110">
                    <span className="text-neon-purple">I</span>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-lg glass-effect border border-neon-blue/30 flex items-center justify-center hover:border-neon-blue hover:shadow-[0_0_20px_rgba(0,166,255,0.5)] transition-all duration-300 hover:scale-110">
                    <span className="text-neon-blue">F</span>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-black text-lg mb-6 text-neon-cyan">{dict.footer.services_title}</h4>
                <ul className="space-y-3">
                  {['Web Saytlar', 'Telegram Botlar', 'AI Chatbotlar', 'Avtomatlashtirish'].map((service, i) => (
                    <li key={i}>
                      <Link href="/xizmatlar" className="text-gray-400 hover:text-neon-cyan transition-colors flex items-center group">
                        <Sparkles className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-black text-lg mb-6 text-neon-purple">{dict.footer.contact_title}</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-400 hover:text-white transition-colors group">
                    <Phone className="w-4 h-4 mr-2 mt-1 text-neon-cyan group-hover:scale-110 transition-transform" />
                    <span>+998 99 644 84 44</span>
                  </li>
                  <li className="flex items-start text-gray-400 hover:text-white transition-colors group">
                    <Mail className="w-4 h-4 mr-2 mt-1 text-neon-purple group-hover:scale-110 transition-transform" />
                    <span className="break-all">akramjon10000@gmail.com</span>
                  </li>
                  <li className="flex items-start text-gray-400 hover:text-white transition-colors group">
                    <MessageCircle className="w-4 h-4 mr-2 mt-1 text-neon-blue group-hover:scale-110 transition-transform" />
                    <span>@Innoweb_uz</span>
                  </li>
                  <li className="flex items-start text-gray-400 hover:text-white transition-colors group">
                    <MapPin className="w-4 h-4 mr-2 mt-1 text-neon-green group-hover:scale-110 transition-transform" />
                    <span>Toshkent, Nurafshon yo'li 12</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Live Demo Chatbot */}
          <div className="glass-effect border-2 border-neon-cyan/30 rounded-2xl overflow-hidden shadow-neon-cyan">
            <div className="bg-gradient-primary p-4 border-b border-neon-cyan/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-glow-pulse">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-black text-white">Demo Chatbot</h3>
                  <p className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></span>
                    Online · Javob beradi
                  </p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-black/40">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                      message.role === 'user'
                        ? 'bg-gradient-primary text-white shadow-neon-cyan'
                        : 'glass-effect border border-neon-cyan/20 text-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neon-cyan/20 bg-black/60">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Xabar yozing..."
                  className="flex-1 px-4 py-2.5 rounded-xl glass-effect border border-neon-cyan/30 focus:outline-none focus:border-neon-cyan text-white placeholder-gray-500 text-sm"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  size="icon"
                  className="rounded-xl bg-gradient-primary hover:bg-gradient-hover shadow-neon-cyan disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">💡 "Salom" deb yozib ko'ring!</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neon-cyan/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="text-neon-cyan font-bold">Innoweb.uz</span>. {dict.footer.rights}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                Maxfiylik
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                Shartlar
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-neon-cyan text-sm transition-colors">
                Sayt xaritasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
