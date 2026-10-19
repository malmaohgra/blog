import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every post is a folder in src/content/posts with an index.md and a cover image.
// The folder name becomes the post URL (English letters and dashes).
const posts = defineCollection({
  loader: glob({
    pattern: '*/index.md',
    base: './src/content/posts',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      caption: z.string(),
      quote: z.string().optional(),
      cover: image().optional(),
    }),
});

export const collections = { posts };
