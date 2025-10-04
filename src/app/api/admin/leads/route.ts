import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error('Leads fetch error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
