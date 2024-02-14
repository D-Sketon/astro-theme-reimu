import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, BASE_URL } from '../utils/config'

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `${BASE_URL}/blog/${post.slug}/`,
    })),
  });
}
