import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        link: z.string().url(),
        description: z.string(),
    }),
});

export const collections = {
    'projects': projectsCollection,
};
