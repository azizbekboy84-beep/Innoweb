import { openai } from '@/lib/openai';
import { prisma } from '@/lib/prisma';
import { GeneratedPost } from '@/types';
import { generateSlug } from '@/lib/utils';

const POST_TOPICS = [
  'Web sayt yaratishda SEO optimizatsiyasi',
  'Responsive dizayn: mobil qurilmalar uchun sayt',
  'Web sayt tezligini oshirish usullari',
  'Landing page yaratish bo\'yicha qo\'llanma',
  'E-commerce sayt funksiyalari',
  'Telegram bot yaratish: boshlang\'ichlar uchun',
  'Telegram bot orqali to\'lovlarni qabul qilish',
  'Telegram bot monetizatsiyasi strategiyalari',
  'Avtomatik xabar yuboruvchi Telegram bot',
  'Telegram mini app yaratish',
  'AI chatbot biznesga qanday yordam beradi',
  'ChatGPT ni saytga integratsiya qilish',
  'Chatbot orqali mijozlar bilan muloqot',
  'AI yordamida content yaratish',
  'Chatbot va CRM integratsiyasi',
  'Biznes jarayonlarini avtomatlashtirish',
  'CRM tizimi: nima va nega kerak',
  'Avtomatik hisobot tizimi yaratish',
  'Email marketing avtomatlashtiruvi',
  'Digital marketing strategiyalari 2025',
  'SMM orqali mijozlar jalb qilish',
  'Content marketing asoslari',
  'DALL-E 3 uchun eng yaxshi promptlar',
  'ChatGPT promptlarini yaxshilash',
  'API integratsiyasi: oddiy tushuntirish',
  'No-code platformalar: kelajak',
];

export async function generateAIPost(): Promise<GeneratedPost> {
  const topic = POST_TOPICS[Math.floor(Math.random() * POST_TOPICS.length)];
  
  const prompt = `
Siz professional IT, marketing va biznes avtomatlashtirish bo'yicha mutaxassissiz.

Quyidagi mavzu bo'yicha blog post yozing:
Mavzu: ${topic}

IMPORTANT: Create content in BOTH Uzbek and Russian languages.

Requirements:
1. Title: jozibali va SEO-optimized (50-60 characters)
2. Content: 1000-1500 words, informative and practical
3. Include: real examples, step-by-step guides, tips
4. Tone: professional yet conversational
5. Structure: intro, main sections with subheadings, conclusion
6. SEO: naturally include keywords
7. Call-to-action: mention Innoweb.uz services where relevant
8. Image prompt: describe a relevant image for DALL-E 3

JSON format:
{
  "title": "Uzbek title",
  "titleRu": "Russian title",
  "content": "Full Uzbek content in Markdown",
  "contentRu": "Full Russian content in Markdown",
  "excerpt": "Uzbek excerpt (150-160 chars)",
  "excerptRu": "Russian excerpt (150-160 chars)",
  "metaTitle": "Uzbek SEO title",
  "metaTitleRu": "Russian SEO title",
  "metaDescription": "Uzbek meta description",
  "metaDescriptionRu": "Russian meta description",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "category": "Category name",
  "imagePrompt": "Detailed prompt for generating a professional blog post image"
}
`;

  try {
    console.log('🤖 Generating AI content...');
    
    const completion = await openai.chat.completions.create({
      model: 'gemini-pro',
      messages: [
        {
          role: 'system',
          content: 'You are a professional content creator, SEO expert, and bilingual writer (Uzbek & Russian). Always respond in valid JSON format.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    const response = completion.choices[0].message.content;
    if (!response) throw new Error('Empty AI response');

    const post: GeneratedPost = JSON.parse(response);
    return post;
  } catch (error) {
    console.error('AI Post Generation Error:', error);
    throw error;
  }
}

export async function generatePostImage(prompt: string): Promise<string> {
  try {
    // Gemini doesn't support image generation yet
    // Use placeholder or external service
    console.log('📸 Image generation skipped (use Unsplash or manual upload)');
    return '';
  } catch (error) {
    console.error('Image Generation Error:', error);
    return '';
  }
}

export async function generateHourlyPost() {
  console.log('🤖 Generating hourly AI post...');
  
  try {
    const post = await generateAIPost();
    const slug = generateSlug(post.title);

    console.log('🎨 Generating post image...');
    const imageUrl = await generatePostImage(post.imagePrompt);

    const now = new Date();
    const nextHour = new Date(now);
    nextHour.setHours(now.getHours() + 1, 0, 0, 0);

    const savedPost = await prisma.post.create({
      data: {
        title: post.title,
        titleRu: post.titleRu,
        slug,
        content: post.content,
        contentRu: post.contentRu,
        excerpt: post.excerpt,
        excerptRu: post.excerptRu,
        imageUrl,
        imagePrompt: post.imagePrompt,
        metaTitle: post.metaTitle,
        metaTitleRu: post.metaTitleRu,
        metaDescription: post.metaDescription,
        metaDescriptionRu: post.metaDescriptionRu,
        tags: post.tags,
        category: post.category,
        language: 'both',
        status: 'published',
        publishedAt: new Date(),
        scheduledFor: nextHour,
        aiGenerated: true,
      },
    });

    console.log(`✅ Post created: ${savedPost.title}`);
    return savedPost;
  } catch (error) {
    console.error('Hourly post generation failed:', error);
    throw error;
  }
}
