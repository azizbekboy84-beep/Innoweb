import { generateHourlyPost } from '../src/services/ai-post-generator';

async function runHourlyGeneration() {
  const currentHour = new Date().getHours();
  
  // Only run between 7 AM and 7 PM (DISABLED FOR TESTING)
  // if (currentHour < 7 || currentHour >= 19) {
  //   console.log('⏸️  Outside working hours (7:00-19:00). Skipping...');
  //   return;
  // }
  
  console.log('⚠️ Running outside normal hours for testing...');

  console.log(`\n⏰ Hourly Post Generation - ${new Date().toLocaleString()}`);
  console.log('━'.repeat(50));

  try {
    const post = await generateHourlyPost();
    console.log(`\n✅ Success: ${post.title}`);
    console.log(`📝 Slug: ${post.slug}`);
    console.log(`🏷️  Category: ${post.category}`);
    console.log(`🏷️  Tags: ${post.tags.join(', ')}`);
    if (post.imageUrl) {
      console.log(`🖼️  Image: Generated`);
    }
  } catch (error: any) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

// Run if called directly
if (require.main === module) {
  runHourlyGeneration()
    .then(() => {
      console.log('\n✨ Hourly generation completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Fatal error:', error);
      process.exit(1);
    });
}

export default runHourlyGeneration;
