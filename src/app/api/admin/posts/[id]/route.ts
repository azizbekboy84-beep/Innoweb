import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.post.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Post delete error:', error);
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.post.findUnique({
      where: { id: params.id },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Post fetch error:', error);
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const post = await prisma.post.update({
      where: { id: params.id },
      data: body,
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Post update error:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}
