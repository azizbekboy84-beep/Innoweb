import { NextRequest, NextResponse } from 'next/server';
import { generateHourlyPost } from '@/services/ai-post-generator';

export async function POST(req: NextRequest) {
  try {
    // Optional: Add authentication check here
    const authHeader = req.headers.get('authorization');
    
    const post = await generateHourlyPost();

    return NextResponse.json({
      success: true,
      post: {
        id: post.id,
        title: post.title,
        slug: post.slug,
        category: post.category,
      },
    });
  } catch (error: any) {
    console.error('Post generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate post', details: error.message },
      { status: 500 }
    );
  }
}
