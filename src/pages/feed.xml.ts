import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: { site: string; }) {
    const blog = await getCollection('blog');
    return rss({
        // `<title>` field in output xml
        title: "Joe Banks's Blog",
        // `<description>` field in output xml
        description: "Various ramblings about topics I find interesting and projects I'm working on",
        // Pull in your project "site" from the endpoint context
        // https://docs.astro.build/en/reference/api-reference/#contextsite
        site: context.site,

        items: blog.sort((a, b) => {
            return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
        }).map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.blurb,
            link: `/posts/${post.slug}`,
            categories: post.data.tags,
        }))
    });
}
