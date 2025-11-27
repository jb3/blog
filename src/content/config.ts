import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        link: z.string().url(),
        description: z.string(),
        noindex: z.boolean().default(false),
        hidden: z.boolean().default(false),
    }),
});

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        blurb: z.string(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    'projects': projectsCollection,
    'blog': blogCollection,
};
