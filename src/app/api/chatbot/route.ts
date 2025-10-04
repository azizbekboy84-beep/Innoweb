import { NextRequest, NextResponse } from 'next/server';
import { model } from '@/lib/gemini';
import { prisma } from '@/lib/prisma';
import { CHATBOT_SYSTEM_PROMPT } from '@/services/company-knowledge';

export async function POST(req: NextRequest) {
  try {
    const { message, history, sessionId, language = 'uz' } = await req.json();

    if (!message || !sessionId) {
      return NextResponse.json(
        { error: 'Message and sessionId are required' },
        { status: 400 }
      );
    }

    // Save user message to history
    await prisma.chatHistory.create({
      data: {
        sessionId,
        role: 'user',
        content: message,
        metadata: { language },
      },
    });

    // Build conversation history for Gemini
    const conversationHistory = history
      .map((msg: any) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    // Create prompt with system instructions and history
    const prompt = `${CHATBOT_SYSTEM_PROMPT}

Conversation History:
${conversationHistory}

User: ${message}
  } catch (error: any) {
    console.error('Chatbot error:', error);
    return NextResponse.json(
      { error: 'Failed to get response', reply: 'Kechirasiz, xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.' },
      { status: 500 }
    );
  }
}
