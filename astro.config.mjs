import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
import embeds from "astro-embed/integration";
import expressiveCode from "astro-expressive-code";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), embeds({
    LinkPreview: false
  }), mdx(), sitemap({
    filter: (page) => !page.includes('/projects/jeremiah-boby')
  })],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypeSlug, {}], [rehypeAutolinkHeadings, {
      behavior: 'append'
    }]],
    remarkPlugins: [remarkToc]
  },
  site: "https://jb3.dev"
});
