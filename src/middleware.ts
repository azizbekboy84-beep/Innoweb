export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/blog/:path*', '/admin/portfolio/:path*', '/admin/leads/:path*'],
};
