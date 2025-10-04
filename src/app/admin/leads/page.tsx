'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import {
  MessageSquare,
  Mail,
  Phone,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Trash2,
} from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email?: string;
  phone: string;
  company?: string;
  service: string;
  message?: string;
  status: string;
  createdAt: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const response = await fetch('/api/admin/leads');
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      const response = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchLeads();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm('Xabarni o\'chirmoqchimisiz?')) return;

    try {
      const response = await fetch(`/api/admin/leads/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchLeads();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const filteredLeads = leads.filter((lead) => {
    if (filter === 'all') return true;
    return lead.status === filter;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black bg-gradient-text mb-2">Xabarlar</h1>
          <p className="text-gray-400">Mijozlardan kelgan barcha xabarlar</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'all'
                ? 'bg-neon-cyan text-black'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Hammasi ({leads.length})
          </button>
          <button
            onClick={() => setFilter('new')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'new'
                ? 'bg-neon-green text-black'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Yangi
          </button>
          <button
            onClick={() => setFilter('contacted')}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              filter === 'contacted'
                ? 'bg-neon-purple text-black'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Bog'langan
          </button>
        </div>
      </div>

      {/* Leads List */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      ) : filteredLeads.length === 0 ? (
        <div className="text-center py-12 glass-effect border-2 border-neon-cyan/30 rounded-xl">
          <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">Xabarlar topilmadi</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredLeads.map((lead) => (
            <div
              key={lead.id}
              className="glass-effect border-2 border-neon-cyan/30 rounded-xl p-6 hover:border-neon-cyan transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-black text-white">{lead.name}</h3>
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        lead.status === 'new'
                          ? 'bg-neon-green/20 text-neon-green border border-neon-green/50'
                          : 'bg-neon-purple/20 text-neon-purple border border-neon-purple/50'
                      }`}
                    >
                      {lead.status === 'new' ? 'Yangi' : 'Bog\'langan'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Phone className="w-4 h-4 text-neon-cyan" />
                      <a
                        href={`tel:${lead.phone}`}
                        className="hover:text-neon-cyan transition-colors"
                      >
                        {lead.phone}
                      </a>
                    </div>
                    {lead.email && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <Mail className="w-4 h-4 text-neon-purple" />
                        <a
                          href={`mailto:${lead.email}`}
                          className="hover:text-neon-purple transition-colors"
                        >
                          {lead.email}
                        </a>
                      </div>
                    )}
                    {lead.company && (
                      <div className="flex items-center gap-2 text-gray-400">
                        <Building className="w-4 h-4 text-neon-green" />
                        {lead.company}
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4 text-neon-blue" />
                      {new Date(lead.createdAt).toLocaleDateString('uz-UZ')}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Xizmat:</p>
                    <p className="text-white font-semibold">{lead.service}</p>
                  </div>

                  {lead.message && (
                    <div className="bg-black/30 border border-neon-cyan/20 rounded-lg p-4">
                      <p className="text-gray-300">{lead.message}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                {lead.status === 'new' && (
                  <button
                    onClick={() => updateLeadStatus(lead.id, 'contacted')}
                    className="flex items-center gap-2 px-4 py-2 bg-neon-green/10 border-2 border-neon-green/30 text-neon-green rounded-lg hover:bg-neon-green/20 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Bog'langan
                  </button>
                )}
                {lead.status === 'contacted' && (
                  <button
                    onClick={() => updateLeadStatus(lead.id, 'new')}
                    className="flex items-center gap-2 px-4 py-2 bg-neon-purple/10 border-2 border-neon-purple/30 text-neon-purple rounded-lg hover:bg-neon-purple/20 transition-colors"
                  >
                    <Clock className="w-4 h-4" />
                    Yangi qilib belgilash
                  </button>
                )}
                <button
                  onClick={() => deleteLead(lead.id)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border-2 border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors ml-auto"
                >
                  <Trash2 className="w-4 h-4" />
                  O'chirish
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
