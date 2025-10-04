import { prisma } from '../src/lib/prisma';
import { sendPostToTelegram } from '../src/services/telegram-sender';

async function runHourlyTelegramSend() {
  const currentHour = new Date().getHours();
  
  // Only run between 7 AM and 7 PM
  if (currentHour < 7 || currentHour >= 19) {
    console.log('⏸️  Outside working hours. Skipping...');
    return;
  }

  console.log(`\n📮 Hourly Telegram Send - ${new Date().toLocaleString()}`);
  console.log('━'.repeat(50));

  try {
    // Get posts scheduled for this hour that haven't been sent
    const posts = await prisma.post.findMany({
      where: {
        telegramSent: false,
        status: 'published',
        scheduledFor: {
          lte: new Date(),
        },
      },
      orderBy: { scheduledFor: 'asc' },
      take: 1, // Send one post per hour
    });

    if (posts.length === 0) {
      console.log('ℹ️  No posts scheduled for this hour');
      return;
    }

    const post = posts[0];
    console.log(`\n📝 Sending: ${post.title}`);

    const result = await sendPostToTelegram({
      title: post.title,
      excerpt: post.excerpt || '',
      url: `https://innoweb.uz/blog/${post.slug}`,
      tags: post.tags,
      imageUrl: post.imageUrl || undefined,
    });

    if (result.success) {
      await prisma.post.update({
        where: { id: post.id },
        data: {
          telegramSent: true,
          telegramMsgId: result.messageId?.toString(),
        },
      });
      console.log(`✅ Sent successfully! Message ID: ${result.messageId}`);
    } else {
      console.log(`❌ Failed: ${result.error}`);
    }
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  runHourlyTelegramSend()
    .then(() => {
      console.log('\n✨ Telegram send completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Fatal error:', error);
      process.exit(1);
    });
}

export default runHourlyTelegramSend;
