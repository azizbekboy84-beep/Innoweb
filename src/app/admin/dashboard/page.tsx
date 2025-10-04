'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import {
  FileText,
  Briefcase,
  MessageSquare,
  Eye,
  TrendingUp,
  Calendar,
} from 'lucide-react';

interface Stats {
  posts: number;
  portfolio: number;
  leads: number;
  views: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    posts: 0,
    portfolio: 0,
    leads: 0,
    views: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch stats from API
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats');
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Blog Maqolalar',
      value: stats.posts,
      icon: FileText,
      color: 'cyan',
      href: '/admin/blog',
    },
    {
      title: 'Portfolio Loyihalar',
      value: stats.portfolio,
      icon: Briefcase,
      color: 'purple',
      href: '/admin/portfolio',
    },
    {
      title: 'Yangi Xabarlar',
      value: stats.leads,
      icon: MessageSquare,
      color: 'green',
      href: '/admin/leads',
    },
    {
      title: 'Jami Ko\'rishlar',
      value: stats.views,
      icon: Eye,
      color: 'blue',
      href: '/admin/analytics',
    },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black bg-gradient-text mb-2">Dashboard</h1>
        <p className="text-gray-400 flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {new Date().toLocaleDateString('uz-UZ', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="glass-effect border-2 border-neon-cyan/30 rounded-xl p-6 hover:border-neon-cyan shadow-neon-cyan hover:shadow-[0_0_30px_rgba(0,255,242,0.3)] transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-lg bg-neon-${card.color}/10 border-2 border-neon-${card.color}/30`}
                >
                  <Icon className={`w-6 h-6 text-neon-${card.color}`} />
                </div>
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{card.title}</h3>
              <p className="text-3xl font-black text-white">
                {loading ? '...' : card.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Posts */}
        <div className="glass-effect border-2 border-neon-cyan/30 rounded-xl p-6">
          <h2 className="text-2xl font-black text-neon-cyan mb-4">
            So'ngi Maqolalar
          </h2>
          <div className="space-y-3">
            <p className="text-gray-400 text-sm">Ma'lumotlar yuklanmoqda...</p>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="glass-effect border-2 border-neon-purple/30 rounded-xl p-6">
          <h2 className="text-2xl font-black text-neon-purple mb-4">
            So'ngi Xabarlar
          </h2>
          <div className="space-y-3">
            <p className="text-gray-400 text-sm">Ma'lumotlar yuklanmoqda...</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 glass-effect border-2 border-neon-green/30 rounded-xl p-6">
        <h2 className="text-2xl font-black text-neon-green mb-4">Tez Harakatlar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="/admin/blog/new"
            className="p-4 text-center bg-neon-cyan/10 border-2 border-neon-cyan/30 rounded-lg hover:border-neon-cyan transition-colors"
          >
            <FileText className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
            <p className="text-sm font-semibold text-white">Yangi Maqola</p>
          </a>
          <a
            href="/admin/portfolio/new"
            className="p-4 text-center bg-neon-purple/10 border-2 border-neon-purple/30 rounded-lg hover:border-neon-purple transition-colors"
          >
            <Briefcase className="w-8 h-8 text-neon-purple mx-auto mb-2" />
            <p className="text-sm font-semibold text-white">Yangi Loyiha</p>
          </a>
          <a
            href="/admin/leads"
            className="p-4 text-center bg-neon-green/10 border-2 border-neon-green/30 rounded-lg hover:border-neon-green transition-colors"
          >
            <MessageSquare className="w-8 h-8 text-neon-green mx-auto mb-2" />
            <p className="text-sm font-semibold text-white">Xabarlar</p>
          </a>
          <a
            href="/admin/analytics"
            className="p-4 text-center bg-neon-blue/10 border-2 border-neon-blue/30 rounded-lg hover:border-neon-blue transition-colors"
          >
            <TrendingUp className="w-8 h-8 text-neon-blue mx-auto mb-2" />
            <p className="text-sm font-semibold text-white">Statistika</p>
          </a>
        </div>
      </div>
    </AdminLayout>
  );
}
