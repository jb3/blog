import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    ssr: {
      noExternal: ['@astrojs/prism']
    }
  },
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [rehypeSlug, {}],
      [rehypeAutolinkHeadings, {
        behavior: 'append',
      }],
      [rehypePrettyCode, {}],
    ]
  }
});
