import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.portfolio.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Portfolio delete error:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const portfolio = await prisma.portfolio.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(portfolio);
  } catch (error) {
    console.error('Portfolio update error:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
