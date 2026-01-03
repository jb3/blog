import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
import emoji from 'remark-emoji';
import embeds from "astro-embed/integration";
import expressiveCode from "astro-expressive-code";
import webmanifest from "astro-webmanifest";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), embeds({
    LinkPreview: false
  }), mdx(), sitemap({
    filter: (page) => !page.includes('/projects/jeremiah-boby')
  }), webmanifest({
    name: "Joe Banks",
    icon: "./src/images/icon.jpg",
    short_name: "Joe Banks",
    description: "The personal blog of Joe Banks",
    start_url: "/",
    background_color: "#ffffff",
    theme_color: "#616283",
    display: "standalone",
    config: {
      insertAppleTouchLinks: true,
    }
  })],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypeSlug, {}], [rehypeAutolinkHeadings, {
      behavior: 'append'
    }]],
    remarkPlugins: [remarkToc, [emoji, {accessible: true}]],
  },
  site: "https://jb3.dev"
});
