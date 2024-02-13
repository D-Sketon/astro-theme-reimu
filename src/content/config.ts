import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
    keywords: z.union([z.string(), z.array(z.string())]).optional(),
    tags: z.array(z.string()).optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
    cover: z.string().optional(),
    excerpt: z.string().optional(),
    comment: z.boolean().optional()
	}),
});

export const collections = { blog };
