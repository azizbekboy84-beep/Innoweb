import { GeneratedPost } from '@/types';

interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export function validatePost(post: GeneratedPost): ValidationResult {
  const errors: string[] = [];

  if (!post.title || post.title.length < 10 || post.title.length > 100) {
    errors.push('Title must be between 10 and 100 characters');
  }

  if (!post.titleRu || post.titleRu.length < 10 || post.titleRu.length > 100) {
    errors.push('Russian title must be between 10 and 100 characters');
  }

  if (!post.content || post.content.length < 500) {
    errors.push('Content must be at least 500 characters');
  }

  if (!post.contentRu || post.contentRu.length < 500) {
    errors.push('Russian content must be at least 500 characters');
  }

  if (!post.excerpt || post.excerpt.length < 100 || post.excerpt.length > 200) {
    errors.push('Excerpt must be between 100 and 200 characters');
  }

  if (!post.excerptRu || post.excerptRu.length < 100 || post.excerptRu.length > 200) {
    errors.push('Russian excerpt must be between 100 and 200 characters');
  }

  if (!post.tags || post.tags.length < 3 || post.tags.length > 10) {
    errors.push('Must have between 3 and 10 tags');
  }

  if (!post.category || post.category.length < 3) {
    errors.push('Category is required');
  }

  if (!post.imagePrompt || post.imagePrompt.length < 20) {
    errors.push('Image prompt must be at least 20 characters');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
