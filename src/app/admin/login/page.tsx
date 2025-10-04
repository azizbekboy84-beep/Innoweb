'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Email yoki parol noto\'g\'ri');
      } else {
        router.push('/admin/dashboard');
      }
    } catch (error) {
      setError('Xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#00fff2]/20 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#bf00ff]/20 rounded-full blur-[120px] animate-float-slow"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="glass-effect border-2 border-neon-cyan/30 rounded-2xl p-8 shadow-neon-cyan">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black bg-gradient-text mb-2">
              Innoweb.uz
            </h1>
            <p className="text-gray-400">Admin Panel</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                  placeholder="admin@innoweb.uz"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">
                Parol
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-black/50 border-2 border-neon-cyan/30 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-primary hover:bg-gradient-hover text-white font-bold py-3 rounded-lg shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Yuklanmoqda...' : 'Kirish'}
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 p-4 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg">
            <p className="text-xs text-gray-400 text-center">
              <strong className="text-neon-cyan">Demo:</strong> admin@innoweb.uz / Innoweb2025!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
