import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#00fff2',
          50: '#e6fffd',
          100: '#ccfffb',
          200: '#99fff7',
          300: '#66fff3',
          400: '#33ffef',
          500: '#00fff2',
          600: '#00ccc2',
          700: '#009991',
          800: '#006661',
          900: '#003330',
          foreground: '#000000',
        },
        secondary: {
          DEFAULT: '#bf00ff',
          500: '#bf00ff',
          600: '#9900cc',
          700: '#730099',
          foreground: '#ffffff',
        },
        neon: {
          cyan: '#00fff2',
          purple: '#bf00ff',
          green: '#39ff14',
          pink: '#ff0080',
          blue: '#00a6ff',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 242, 0.5), 0 0 40px rgba(0, 255, 242, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 255, 242, 0.8), 0 0 60px rgba(0, 255, 242, 0.5)',
          },
        },
        'glow-pulse-purple': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(191, 0, 255, 0.5), 0 0 40px rgba(191, 0, 255, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 35px rgba(191, 0, 255, 0.8), 0 0 70px rgba(191, 0, 255, 0.5)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(3deg)' },
        },
        'glow-rotate': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 255, 242, 0.5), 0 0 40px rgba(191, 0, 255, 0.3)',
            transform: 'rotate(0deg)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(191, 0, 255, 0.5), 0 0 60px rgba(0, 255, 242, 0.3)',
            transform: 'rotate(180deg)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(0, 255, 242, 0.5), 0 0 40px rgba(191, 0, 255, 0.3)',
            transform: 'rotate(360deg)'
          },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'border-beam': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'slide-in': 'slide-in 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.5s ease-out',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'glow-pulse-purple': 'glow-pulse-purple 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'glow-rotate': 'glow-rotate 10s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'border-beam': 'border-beam 2s linear infinite',
        'scale-in': 'scale-in 0.4s ease-out',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(135deg, #00fff2 0%, #bf00ff 50%, #ff0080 100%)',
        'gradient-neon-hover': 'linear-gradient(135deg, #00ccc2 0%, #9900cc 50%, #cc0066 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #00a6ff 0%, #00fff2 50%, #39ff14 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 255, 242, 0.5), 0 0 40px rgba(0, 255, 242, 0.3)',
        'neon-purple': '0 0 20px rgba(191, 0, 255, 0.5), 0 0 40px rgba(191, 0, 255, 0.3)',
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.5), 0 0 40px rgba(57, 255, 20, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.5), 0 0 40px rgba(255, 0, 128, 0.3)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
