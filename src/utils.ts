import { getCollection } from 'astro:content';

// All posts, newest first.
export async function getPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// 2026-10-18 -> ١٨ أكتوبر ٢٠٢٦
export const fmt = (d: Date) =>
  new Intl.DateTimeFormat('ar-EG', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);

export const iso = (d: Date) => d.toISOString().slice(0, 10);
