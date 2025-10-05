'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewPortfolioPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    titleRu: '',
    description: '',
    descriptionRu: '',
    category: '',
    client: '',
    image: '',
    url: '',
    technologies: '',
    featured: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Auto-fill Russian fields if empty
      const payload = {
        ...formData,
        titleRu: formData.titleRu || formData.title,
        descriptionRu: formData.descriptionRu || formData.description,
        images: [formData.image],
        technologies: formData.technologies 
          ? formData.technologies.split(',').map((t) => t.trim()).filter(t => t)
          : [],
        tags: [],
      };

      const response = await fetch('/api/admin/portfolio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Loyiha muvaffaqiyatli saqlandi!');
        router.push('/admin/portfolio');
      } else {
        const errorMsg = data.error || data.details || 'Xatolik yuz berdi';
        console.error('API Error:', data);
        setError(errorMsg);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Server bilan bog\'lanishda xatolik. Database ulanganligini tekshiring.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/portfolio"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Orqaga qaytish
          </Link>
          <h1 className="text-4xl font-black bg-gradient-text mb-2">
            Yangi Portfolio Loyiha
          </h1>
          <p className="text-gray-400">Yangi loyiha qo'shing</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-4 mb-6">
            <p className="text-red-400 font-semibold">❌ {error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="glass-effect border-2 border-neon-cyan/30 rounded-xl p-6 space-y-6">
            {/* Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Sarlavha (UZ) *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Sarlavha (RU)
                </label>
                <input
                  type="text"
                  value={formData.titleRu}
                  onChange={(e) => setFormData({ ...formData, titleRu: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                />
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Tavsif (UZ) *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none resize-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Tavsif (RU)
                </label>
                <textarea
                  value={formData.descriptionRu}
                  onChange={(e) => setFormData({ ...formData, descriptionRu: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Category & Client */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Kategoriya *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                  required
                >
                  <option value="">Tanlang</option>
                  <option value="web">Web Sayt</option>
                  <option value="telegram">Telegram Bot</option>
                  <option value="chatbot">AI Chatbot</option>
                  <option value="mobile">Mobile App</option>
                  <option value="other">Boshqa</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Mijoz
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                />
              </div>
            </div>

            {/* Image & URL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Rasm URL *
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Sayt URL
                </label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            {/* Technologies */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Texnologiyalar (vergul bilan ajratilgan)
              </label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                placeholder="React, Next.js, Tailwind CSS"
              />
            </div>

            {/* Featured */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-5 h-5 rounded border-2 border-neon-cyan/30 bg-black/50 text-neon-cyan focus:ring-neon-cyan"
              />
              <label htmlFor="featured" className="text-white font-semibold">
                Featured loyiha
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-primary hover:bg-gradient-hover text-white font-bold rounded-xl shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.6)] transition-all duration-300 disabled:opacity-50"
            >
              <Save className="w-5 h-5" />
              {loading ? 'Saqlanmoqda...' : 'Saqlash'}
            </button>
            <Link href="/admin/portfolio">
              <button
                type="button"
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-xl transition-colors"
              >
                Bekor qilish
              </button>
            </Link>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
