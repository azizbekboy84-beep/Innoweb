'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';
import {
  Briefcase,
  Plus,
  Edit,
  Trash2,
  Eye,
  Star,
  ExternalLink,
} from 'lucide-react';

interface Portfolio {
  id: string;
  title: string;
  category: string;
  client?: string;
  image: string;
  url?: string;
  featured: boolean;
  completedAt?: string;
  createdAt: string;
}

export default function AdminPortfolioPage() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const response = await fetch('/api/admin/portfolio');
      if (response.ok) {
        const data = await response.json();
        setPortfolios(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePortfolio = async (id: string) => {
    if (!confirm('Loyihani o\'chirmoqchimisiz?')) return;

    try {
      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPortfolios();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const toggleFeatured = async (id: string, featured: boolean) => {
    try {
      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featured: !featured }),
      });

      if (response.ok) {
        fetchPortfolios();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black bg-gradient-text mb-2">Portfolio</h1>
          <p className="text-gray-400">Loyihalaringizni boshqaring</p>
        </div>
        <Link href="/admin/portfolio/new">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-primary hover:bg-gradient-hover text-white font-bold rounded-xl shadow-neon-purple hover:shadow-[0_0_40px_rgba(191,0,255,0.6)] transition-all duration-300">
            <Plus className="w-5 h-5" />
            Yangi Loyiha
          </button>
        </Link>
      </div>

      {/* Portfolio Grid */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      ) : portfolios.length === 0 ? (
        <div className="text-center py-12 glass-effect border-2 border-neon-purple/30 rounded-xl">
          <Briefcase className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">Hali loyihalar yo'q</p>
          <Link href="/admin/portfolio/new">
            <button className="px-6 py-3 bg-neon-purple/10 border-2 border-neon-purple text-neon-purple font-bold rounded-lg hover:bg-neon-purple/20 transition-colors">
              Birinchi loyihani qo'shing
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="glass-effect border-2 border-neon-purple/30 rounded-xl overflow-hidden hover:border-neon-purple transition-all hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-900">
                {portfolio.image ? (
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Briefcase className="w-16 h-16 text-gray-700" />
                  </div>
                )}
                {portfolio.featured && (
                  <div className="absolute top-2 right-2 px-3 py-1 bg-neon-purple/90 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-black text-white">{portfolio.title}</h3>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-bold rounded bg-neon-cyan/20 text-neon-cyan">
                    {portfolio.category}
                  </span>
                  {portfolio.client && (
                    <span className="text-xs text-gray-400">{portfolio.client}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 mt-4">
                  <button
                    onClick={() => toggleFeatured(portfolio.id, portfolio.featured)}
                    className={`flex-1 p-2 border-2 rounded-lg transition-colors ${
                      portfolio.featured
                        ? 'bg-neon-purple/20 border-neon-purple text-neon-purple'
                        : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-neon-purple'
                    }`}
                  >
                    <Star className="w-4 h-4 mx-auto" />
                  </button>
                  {portfolio.url && (
                    <a
                      href={portfolio.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-2 bg-neon-blue/10 border-2 border-neon-blue/30 text-neon-blue rounded-lg hover:bg-neon-blue/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mx-auto" />
                    </a>
                  )}
                  <Link href={`/admin/portfolio/${portfolio.id}`} className="flex-1">
                    <button className="w-full p-2 bg-neon-cyan/10 border-2 border-neon-cyan/30 text-neon-cyan rounded-lg hover:bg-neon-cyan/20 transition-colors">
                      <Edit className="w-4 h-4 mx-auto" />
                    </button>
                  </Link>
                  <button
                    onClick={() => deletePortfolio(portfolio.id)}
                    className="flex-1 p-2 bg-red-500/10 border-2 border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                  >
                    <Trash2 className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
