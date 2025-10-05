/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Server actions configuration for production
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        '*.onrender.com',
        'innoweb.uz',
        'www.innoweb.uz'
      ],
    },
  },
}

module.exports = nextConfig
