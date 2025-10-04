import axios from 'axios';
import { prisma } from '@/lib/prisma';
import { TelegramPostMessage } from '@/types';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID!;
const TELEGRAM_ADMIN_CHAT_ID = process.env.TELEGRAM_ADMIN_CHAT_ID!;
const MAX_RETRIES = 3;

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function sendPostToTelegram(
  message: TelegramPostMessage,
  retries = 0
): Promise<{ success: boolean; messageId?: number; error?: string }> {
  try {
    const caption = `
🚀 <b>${message.title}</b>

${message.excerpt}

🔗 <a href="${message.url}">To'liq o'qish</a>

${message.tags.slice(0, 5).map(tag => `#${tag.replace(/\s/g, '_')}`).join(' ')}

📱 @Innoweb_uz
    `.trim();

    let response;

    if (message.imageUrl) {
      response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`,
        {
          chat_id: TELEGRAM_CHANNEL_ID,
          photo: message.imageUrl,
          caption,
          parse_mode: 'HTML',
        }
      );
    } else {
      response = await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHANNEL_ID,
          text: caption,
          parse_mode: 'HTML',
          disable_web_page_preview: false,
        }
      );
    }

    return {
      success: true,
      messageId: response.data.result.message_id,
    };
  } catch (error: any) {
    console.error('Telegram send error:', error.response?.data || error.message);

    if (retries < MAX_RETRIES) {
      const delay = Math.pow(2, retries) * 1000;
      console.log(`Retrying in ${delay}ms... (${retries + 1}/${MAX_RETRIES})`);
      await sleep(delay);
      return sendPostToTelegram(message, retries + 1);
    }

    return {
      success: false,
      error: error.response?.data?.description || error.message,
    };
  }
}

export async function sendLeadNotification(lead: {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  service: string;
  message?: string;
}) {
  try {
    const text = `
🎯 <b>Yangi Buyurtma!</b>

👤 <b>Ism:</b> ${lead.name}
📞 <b>Telefon:</b> ${lead.phone}
${lead.email ? `📧 <b>Email:</b> ${lead.email}` : ''}
${lead.company ? `🏢 <b>Kompaniya:</b> ${lead.company}` : ''}
💼 <b>Xizmat:</b> ${lead.service}
${lead.message ? `\n💬 <b>Xabar:</b>\n${lead.message}` : ''}

⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}
    `.trim();

    await axios.post(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: TELEGRAM_ADMIN_CHAT_ID,
        text,
        parse_mode: 'HTML',
      }
    );

    return { success: true };
  } catch (error: any) {
    console.error('Lead notification error:', error);
    return { success: false, error: error.message };
  }
}
