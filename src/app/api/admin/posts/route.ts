import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        category: true,
        status: true,
        views: true,
        publishedAt: true,
        createdAt: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Posts fetch error:', error);
    // Return static data if DB not available
    return NextResponse.json([
      {
        id: '1',
        title: 'AI Chatbotlar: Kelajak Texnologiyasi',
        slug: 'ai-chatbotlar-kelajak-texnologiyasi',
        category: 'AI',
        status: 'published',
        views: 0,
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Telegram Botlar bilan Biznesni Avtomatlashtirish',
        slug: 'telegram-botlar-avtomatlashtirish',
        category: 'Telegram',
        status: 'published',
        views: 0,
        createdAt: new Date().toISOString(),
      },
      {
        id: '3',
        title: 'Web Sayt SEO Optimizatsiyasi',
        slug: 'web-sayt-seo-optimizatsiyasi',
        category: 'Web',
        status: 'published',
        views: 0,
        createdAt: new Date().toISOString(),
      },
    ]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Database bo'lmasa demo response qaytarish
    try {
      const post = await prisma.post.create({
        data: {
          ...body,
          publishedAt: body.status === 'published' ? new Date() : null,
        },
      });
      return NextResponse.json(post);
    } catch (dbError) {
      console.log('Database not available, returning demo response');
      // Demo response
      return NextResponse.json({
        id: Date.now().toString(),
        ...body,
        publishedAt: body.status === 'published' ? new Date().toISOString() : null,
        createdAt: new Date().toISOString(),
        views: 0,
      });
    }
  } catch (error) {
    console.error('Post create error:', error);
    return NextResponse.json({ 
      error: 'Xatolik yuz berdi. Database ulanishi tekshiring.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
