import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI: GoogleGenerativeAI | null = null;

function getGenAI() {
  if (!genAI) {
    if (!process.env.GEMINI_API_KEY) {
      console.warn('⚠️ GEMINI_API_KEY is not set');
      // Use demo key as fallback to prevent build errors
      genAI = new GoogleGenerativeAI('demo-key');
    } else {
      genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    }
  }
  return genAI;
}

export const openai = {
  chat: {
    completions: {
      create: async (options: any) => {
        const ai = getGenAI();
        const model = ai.getGenerativeModel({ model: 'gemini-pro' });
        
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
