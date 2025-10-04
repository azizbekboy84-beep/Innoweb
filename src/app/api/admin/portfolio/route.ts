import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const portfolios = await prisma.portfolio.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        category: true,
        client: true,
        image: true,
        url: true,
        featured: true,
        completedAt: true,
        createdAt: true,
      },
    });

    return NextResponse.json(portfolios);
  } catch (error) {
    console.error('Portfolio fetch error:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Database bo'lmasa demo response qaytarish
    try {
      const portfolio = await prisma.portfolio.create({
        data: body,
      });
      return NextResponse.json(portfolio);
    } catch (dbError) {
      console.log('Database not available, returning demo response');
      // Demo response
      return NextResponse.json({
        id: Date.now().toString(),
        ...body,
        createdAt: new Date().toISOString(),
        completedAt: null,
      });
    }
  } catch (error) {
    console.error('Portfolio create error:', error);
    return NextResponse.json({ 
      error: 'Xatolik yuz berdi. Database ulanishi tekshiring.',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
