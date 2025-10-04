'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  MessageSquare,
  BarChart3,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

const menuItems = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Blog',
    href: '/admin/blog',
    icon: FileText,
  },
  {
    name: 'Portfolio',
    href: '/admin/portfolio',
    icon: Briefcase,
  },
  {
    name: 'Xabarlar',
    href: '/admin/leads',
    icon: MessageSquare,
  },
  {
    name: 'Statistika',
    href: '/admin/analytics',
    icon: BarChart3,
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-gray-900 to-black border-r border-neon-cyan/20 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-neon-cyan/20">
            <Link href="/admin/dashboard">
              <h1 className="text-2xl font-black bg-gradient-text">Innoweb.uz</h1>
              <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
            </Link>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-neon-cyan/10 border-2 border-neon-cyan text-neon-cyan'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white border-2 border-transparent'
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-neon-cyan/20">
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors border-2 border-transparent hover:border-red-500/50"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-semibold">Chiqish</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 border-2 border-neon-cyan/30 rounded-lg text-neon-cyan"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen">
        <div className="p-8">{children}</div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
