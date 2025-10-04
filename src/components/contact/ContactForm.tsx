'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2, CheckCircle2, Phone, Mail, MessageCircle, Sparkles, Send } from 'lucide-react';

interface ContactFormProps {
  dict: any;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          company: '',
          service: '',
          message: '',
        });

        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#bf00ff]/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#00fff2]/20 rounded-full blur-[120px] animate-float-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(191,0,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(191,0,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="container px-4 mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-effect rounded-full border border-neon-purple">
            <Sparkles className="w-4 h-4 text-neon-purple" />
            <span className="text-sm font-semibold text-neon-purple">Bog'lanish</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="block text-neon-purple">{dict.contact.title}</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto">
            {dict.contact.subtitle}
          </p>
        </div>

        <Card className="glass-effect border-2 border-neon-purple/30 shadow-neon-purple backdrop-blur-xl">
          {success ? (
            <div className="text-center py-16 animate-scale-in">
              <div className="w-20 h-20 rounded-full bg-neon-green/20 border-2 border-neon-green mx-auto mb-6 flex items-center justify-center animate-glow-pulse">
                <CheckCircle2 className="w-12 h-12 text-neon-green" />
              </div>
              <h3 className="text-3xl font-black text-white mb-3">
                Muvaffaqiyatli!
              </h3>
              <p className="text-gray-300 text-lg">
                {dict.contact.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-neon-cyan">
                    {dict.contact.name} *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ismingiz"
                    className="glass-effect border-2 border-neon-cyan/30 focus:border-neon-cyan text-white placeholder-gray-500 h-12 rounded-xl"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-neon-cyan">
                    {dict.contact.phone} *
                  </label>
                  <Input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+998 90 123 45 67"
                    className="glass-effect border-2 border-neon-cyan/30 focus:border-neon-cyan text-white placeholder-gray-500 h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-neon-purple">
                    {dict.contact.email}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="glass-effect border-2 border-neon-purple/30 focus:border-neon-purple text-white placeholder-gray-500 h-12 rounded-xl"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-bold mb-3 text-neon-purple">
                    {dict.contact.company}
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Kompaniya nomi"
                    className="glass-effect border-2 border-neon-purple/30 focus:border-neon-purple text-white placeholder-gray-500 h-12 rounded-xl"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-bold mb-3 text-neon-blue">
                  {dict.contact.service} *
                </label>
                <Select
                  required
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger className="glass-effect border-2 border-neon-blue/30 focus:border-neon-blue text-white h-12 rounded-xl">
                    <SelectValue placeholder="Xizmatni tanlang" />
                  </SelectTrigger>
                  <SelectContent className="glass-effect border-2 border-neon-blue/30 bg-black/95">
                    <SelectItem value="web" className="text-white hover:text-neon-cyan">Web Sayt</SelectItem>
                    <SelectItem value="telegram" className="text-white hover:text-neon-cyan">Telegram Bot</SelectItem>
                    <SelectItem value="chatbot" className="text-white hover:text-neon-cyan">AI Chatbot</SelectItem>
                    <SelectItem value="crm" className="text-white hover:text-neon-cyan">CRM Tizimi</SelectItem>
                    <SelectItem value="automation" className="text-white hover:text-neon-cyan">Avtomatlashtirish</SelectItem>
                    <SelectItem value="other" className="text-white hover:text-neon-cyan">Boshqa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold mb-3 text-neon-green">
                  {dict.contact.message}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Loyihangiz haqida bizga gapiring..."
                  rows={4}
                  className="glass-effect border-2 border-neon-green/30 focus:border-neon-green text-white placeholder-gray-500 rounded-xl"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="group relative overflow-hidden w-full bg-transparent border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 text-lg py-7 font-black rounded-xl shadow-neon-purple hover:shadow-[0_0_40px_rgba(191,0,255,0.6)] transition-all duration-300 hover:scale-105"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Yuborilmoqda...
                  </>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 w-5 h-5" />
                    {dict.contact.submit}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </form>
          )}
        </Card>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="glass-effect border-2 border-neon-cyan/30 hover:border-neon-cyan shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.4)] transition-all duration-300 hover:scale-105 group">
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-neon-cyan/20 border-2 border-neon-cyan mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Phone className="w-8 h-8 text-neon-cyan" />
              </div>
              <h4 className="font-black text-xl mb-3 text-neon-cyan">Telefon</h4>
              <p className="text-gray-300 font-semibold">+998 99 644 84 44</p>
            </div>
          </Card>

          <Card className="glass-effect border-2 border-neon-purple/30 hover:border-neon-purple shadow-neon-purple hover:shadow-[0_0_40px_rgba(191,0,255,0.4)] transition-all duration-300 hover:scale-105 group">
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-neon-purple/20 border-2 border-neon-purple mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Mail className="w-8 h-8 text-neon-purple" />
              </div>
              <h4 className="font-black text-xl mb-3 text-neon-purple">Email</h4>
              <p className="text-gray-300 font-semibold break-all">akramjon10000@gmail.com</p>
            </div>
          </Card>

          <Card className="glass-effect border-2 border-neon-blue/30 hover:border-neon-blue shadow-[0_0_20px_rgba(0,166,255,0.3)] hover:shadow-[0_0_40px_rgba(0,166,255,0.5)] transition-all duration-300 hover:scale-105 group">
            <div className="p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-neon-blue/20 border-2 border-neon-blue mx-auto mb-6 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <MessageCircle className="w-8 h-8 text-neon-blue" />
              </div>
              <h4 className="font-black text-xl mb-3 text-neon-blue">Telegram</h4>
              <p className="text-gray-300 font-semibold">@Innoweb_uz</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
