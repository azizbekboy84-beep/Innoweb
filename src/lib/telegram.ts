import axios from 'axios';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

export async function sendTelegramMessage(chatId: string, text: string, parseMode: 'HTML' | 'Markdown' = 'HTML') {
  try {
    const response = await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
      chat_id: chatId,
      text,
      parse_mode: parseMode,
    });
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Telegram send error:', error.response?.data || error.message);
    return { success: false, error: error.message };
  }
}

export async function sendTelegramPhoto(chatId: string, photo: string, caption: string) {
  try {
    const response = await axios.post(`${TELEGRAM_API_URL}/sendPhoto`, {
      chat_id: chatId,
      photo,
      caption,
      parse_mode: 'HTML',
    });
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Telegram photo send error:', error.response?.data || error.message);
    return { success: false, error: error.message };
  }
}
