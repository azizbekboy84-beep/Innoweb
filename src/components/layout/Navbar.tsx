'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap, Sparkles } from 'lucide-react';

interface NavbarProps {
  dict: any;
}

export default function Navbar({ dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: dict.nav.home },
    { href: '/xizmatlar', label: dict.nav.services },
    { href: '/portfolio', label: dict.nav.portfolio },
    { href: '/blog', label: dict.nav.blog },
    { href: '/aloqa', label: dict.nav.contact },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-neon-cyan/30 shadow-[0_4px_20px_rgba(0,255,242,0.1)]' 
          : 'bg-black/50 backdrop-blur-md border-b border-neon-cyan/10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Neon Effect */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={`w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-neon-cyan transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
              scrolled ? 'scale-95' : ''
            }`}>
              <span className="text-white font-black text-2xl">I</span>
            </div>
            <span className="text-2xl font-black text-neon-cyan group-hover:text-neon-purple transition-colors">
              Innoweb.uz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-300 hover:text-neon-cyan transition-all duration-300 font-semibold text-sm group"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                {/* Glow effect on hover */}
                <span className="absolute inset-0 bg-neon-cyan/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            ))}
            
            <Link href="/aloqa" className="ml-4">
              <Button className="group relative overflow-hidden bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded-xl px-6 py-2.5 font-bold text-sm shadow-neon-cyan hover:shadow-[0_0_30px_rgba(0,255,242,0.5)] transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center">
                  <Zap className="w-4 h-4 mr-2" />
                  Bepul Maslahat
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button with Animation */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg glass-effect border border-neon-cyan/30 flex items-center justify-center text-neon-cyan hover:border-neon-cyan hover:shadow-neon-cyan transition-all duration-300 hover:scale-110"
          >
            {isOpen ? (
              <X className="w-6 h-6 animate-scale-in" />
            ) : (
              <Menu className="w-6 h-6 animate-scale-in" />
            )}
          </button>
        </div>

        {/* Mobile Navigation with Slide Animation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-neon-cyan/20 bg-black/95 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-gray-300 hover:text-neon-cyan transition-all duration-300 font-semibold rounded-lg hover:bg-neon-cyan/5 flex items-center group animate-slide-in-right"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Sparkles className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity text-neon-cyan" />
                  {item.label}
                </Link>
              ))}
              <Link 
                href="/aloqa" 
                onClick={() => setIsOpen(false)}
                className="mt-4 animate-fade-in-up"
                style={{ animationDelay: '250ms' }}
              >
                <Button className="w-full bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 rounded-xl py-3 font-bold shadow-neon-cyan hover:scale-105 transition-all duration-300">
                  <Zap className="w-4 h-4 mr-2" />
                  Bepul Maslahat
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Glowing bottom border animation */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }}
        ></div>
      )}
    </nav>
  );
}
