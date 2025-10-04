'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import {
  TrendingUp,
  Eye,
  Users,
  MousePointer,
  BarChart3,
  Calendar,
} from 'lucide-react';

interface AnalyticsData {
  totalViews: number;
  totalUsers: number;
  totalClicks: number;
  avgSessionTime: number;
  topPages: Array<{ page: string; views: number }>;
  recentEvents: Array<{ event: string; page: string; createdAt: string }>;
}

export default function AdminAnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalViews: 0,
    totalUsers: 0,
    totalClicks: 0,
    avgSessionTime: 0,
    topPages: [],
    recentEvents: [],
  });
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7days');

  useEffect(() => {
    fetchAnalytics();
  }, [dateRange]);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/admin/analytics?range=${dateRange}`);
      if (response.ok) {
        const data = await response.json();
        setAnalytics(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Jami Ko\'rishlar',
      value: analytics.totalViews,
      icon: Eye,
      color: 'cyan',
      change: '+12%',
    },
    {
      title: 'Foydalanuvchilar',
      value: analytics.totalUsers,
      icon: Users,
      color: 'purple',
      change: '+8%',
    },
    {
      title: 'Kliklar',
      value: analytics.totalClicks,
      icon: MousePointer,
      color: 'green',
      change: '+15%',
    },
    {
      title: 'O\'rtacha Vaqt',
      value: `${Math.round(analytics.avgSessionTime)}m`,
      icon: Calendar,
      color: 'blue',
      change: '+5%',
    },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black bg-gradient-text mb-2">Statistika</h1>
          <p className="text-gray-400">Sayt statistikasi va tahlil</p>
        </div>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="px-4 py-2 bg-gray-900 border-2 border-neon-cyan/30 rounded-lg text-white font-semibold focus:border-neon-cyan focus:outline-none"
        >
          <option value="today">Bugun</option>
          <option value="7days">7 kun</option>
          <option value="30days">30 kun</option>
          <option value="90days">90 kun</option>
        </select>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="glass-effect border-2 border-neon-cyan/30 rounded-xl p-6 hover:border-neon-cyan transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-neon-${card.color}/10 border-2 border-neon-${card.color}/30`}>
                  <Icon className={`w-6 h-6 text-neon-${card.color}`} />
                </div>
                <span className="text-green-400 text-sm font-bold">{card.change}</span>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{card.title}</h3>
              <p className="text-3xl font-black text-white">
                {loading ? '...' : card.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Top Pages */}
        <div className="glass-effect border-2 border-neon-cyan/30 rounded-xl p-6">
          <h2 className="text-2xl font-black text-neon-cyan mb-6">
            Top Sahifalar
          </h2>
          {loading ? (
            <p className="text-gray-400 text-sm">Yuklanmoqda...</p>
          ) : analytics.topPages.length === 0 ? (
            <p className="text-gray-400 text-sm">Ma'lumot yo'q</p>
          ) : (
            <div className="space-y-4">
              {analytics.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center text-neon-cyan font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-white">{page.page}</span>
                  </div>
                  <span className="text-gray-400">{page.views} views</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recent Events */}
        <div className="glass-effect border-2 border-neon-purple/30 rounded-xl p-6">
          <h2 className="text-2xl font-black text-neon-purple mb-6">
            So'ngi Hodisalar
          </h2>
          {loading ? (
            <p className="text-gray-400 text-sm">Yuklanmoqda...</p>
          ) : analytics.recentEvents.length === 0 ? (
            <p className="text-gray-400 text-sm">Ma'lumot yo'q</p>
          ) : (
            <div className="space-y-3">
              {analytics.recentEvents.map((event, index) => (
                <div key={index} className="p-3 bg-black/30 border border-neon-purple/20 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-semibold">{event.event}</span>
                    <span className="text-xs text-gray-500">
                      {new Date(event.createdAt).toLocaleTimeString('uz-UZ')}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">{event.page}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="glass-effect border-2 border-neon-green/30 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <BarChart3 className="w-8 h-8 text-neon-green flex-shrink-0" />
          <div>
            <h3 className="text-xl font-black text-neon-green mb-2">
              Kengaytirilgan Statistika
            </h3>
            <p className="text-gray-400">
              To'liq analitika uchun Google Analytics va Yandex.Metrika integratsiya qilish tavsiya etiladi.
              Bu yerda asosiy metrikalar ko'rsatiladi.
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
