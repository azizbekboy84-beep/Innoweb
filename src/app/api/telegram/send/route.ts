import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendPostToTelegram } from '@/services/telegram-sender';

export async function POST(req: NextRequest) {
  try {
    const { postId } = await req.json();

    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      );
    }

    const post = await prisma.post.findUnique({
      where: { id: postId },
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    if (post.telegramSent) {
      return NextResponse.json(
        { error: 'Post already sent to Telegram' },
        { status: 400 }
      );
    }

    const result = await sendPostToTelegram({
      title: post.title,
      excerpt: post.excerpt || '',
      url: `https://innoweb.uz/blog/${post.slug}`,
      tags: post.tags,
      imageUrl: post.imageUrl || undefined,
    });

    if (result.success) {
      await prisma.post.update({
        where: { id: postId },
        data: {
          telegramSent: true,
          telegramMsgId: result.messageId?.toString(),
        },
      });

      return NextResponse.json({
        success: true,
        messageId: result.messageId,
      });
    } else {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Telegram send error:', error);
    return NextResponse.json(
      { error: 'Failed to send to Telegram' },
      { status: 500 }
    );
  }
}
