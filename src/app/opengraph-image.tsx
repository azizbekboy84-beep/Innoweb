import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Innoweb.uz - Professional Digital Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(0, 255, 242, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(191, 0, 255, 0.15) 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              background: 'linear-gradient(135deg, #00fff2 0%, #bf00ff 50%, #00a6ff 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              marginBottom: 20,
            }}
          >
            Innoweb.uz
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#fff',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Professional Web Saytlar, Telegram Botlar va AI Chatbotlar
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#00fff2',
              marginTop: 20,
            }}
          >
            🚀 Toshkent, O'zbekiston
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
