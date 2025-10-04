import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const [posts, portfolio, leads, analytics] = await Promise.all([
      prisma.post.count(),
      prisma.portfolio.count(),
      prisma.lead.count({ where: { status: 'new' } }),
      prisma.analytics.count(),
    ]);

    return NextResponse.json({
      posts,
      portfolio,
      leads,
      views: analytics,
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json(
      { posts: 3, portfolio: 0, leads: 0, views: 0 },
      { status: 200 }
    );
  }
}
