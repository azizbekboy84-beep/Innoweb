'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: '',
    tags: '',
    status: 'draft',
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim();
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map((t) => t.trim()),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('✅ Maqola muvaffaqiyatli saqlandi!');
        router.push('/admin/blog');
      } else {
        setError(data.error || 'Xatolik yuz berdi');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Server bilan bog\'lanishda xatolik');
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
            href="/admin/blog"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-purple transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Orqaga qaytish
          </Link>
          <h1 className="text-4xl font-black bg-gradient-text mb-2">
            Yangi Blog Maqola
          </h1>
          <p className="text-gray-400">Yangi maqola yozing</p>
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
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Sarlavha *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                required
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Slug (URL) *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                URL: /blog/{formData.slug || 'slug'}
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Qisqa matn *
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={2}
                className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none resize-none"
                required
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Matn (HTML) *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={15}
                className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none resize-none font-mono text-sm"
                placeholder="<h2>Sarlavha</h2><p>Matn...</p>"
                required
              />
            </div>

            {/* Category & Tags */}
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
                  <option value="AI">AI</option>
                  <option value="Telegram">Telegram</option>
                  <option value="Web">Web</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Teglar (vergul bilan)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                  placeholder="ai, chatbot, uzbekistan"
                />
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white focus:border-neon-cyan focus:outline-none"
                required
              >
                <option value="draft">Qoralama</option>
                <option value="published">Nashr qilish</option>
              </select>
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
            <Link href="/admin/blog">
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
