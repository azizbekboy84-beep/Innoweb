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
    try {
      await prisma.chatHistory.create({
        data: {
          sessionId,
          role: 'user',
          content: message,
          metadata: { language },
        },
      });
    } catch (dbError) {
      console.log('DB not available, skipping history save');
    }

    // Build conversation history for Gemini
    const conversationHistory = history
      .map((msg: any) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    const prompt = `${CHATBOT_SYSTEM_PROMPT}

Conversation History:
${conversationHistory}

User: ${message}

Assistant:`;

    // Get AI response from Gemini
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const reply = response.text();

    // Save bot response to history
    try {
      await prisma.chatHistory.create({
        data: {
          sessionId,
          role: 'bot',
          content: reply,
          metadata: { language },
        },
      });
    } catch (dbError) {
      console.log('DB not available, skipping history save');
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Chatbot error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to get response', 
        reply: 'Kechirasiz, xatolik yuz berdi. Iltimos qaytadan urinib ko\'ring.' 
      },
      { status: 500 }
    );
  }
}
