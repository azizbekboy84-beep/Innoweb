import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GEMINI_API_KEY) {
  console.warn('⚠️ GEMINI_API_KEY is not set');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'demo-key');

export const openai = {
  chat: {
    completions: {
      create: async (options: any) => {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        
        const prompt = options.messages
          .map((m: any) => `${m.role}: ${m.content}`)
          .join('\n\n');

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return {
          choices: [
            {
              message: {
                content: text,
              },
            },
          ],
        };
      },
    },
  },
};
