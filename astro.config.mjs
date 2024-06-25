import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode(), mdx()],
  vite: {
    ssr: {
      noExternal: ['@astrojs/prism']
    }
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypeSlug, {}], [rehypeAutolinkHeadings, {
      behavior: 'append'
    }]]
  }
});
