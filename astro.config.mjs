import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astroExpressiveCode from 'astro-expressive-code';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import icon from "astro-icon";
import react from "@astrojs/react";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import Font from 'vite-plugin-font';
import mermaid from 'astro-mermaid';

import rehypeAddImageClasses from './src/plugins/rehypeAddImageClasses.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex, rehypeAddImageClasses],
    syntaxHighlight: false
  },
  integrations: [mermaid(), astroExpressiveCode({
    // You can use any of the themes bundled with Shiki by name,
    // specify a path to JSON theme file, or pass an instance
    // of the `ExpressiveCodeTheme` class here:
    themes: ['github-dark', 'github-dark'],
    shiki: {
      // You can pass additional plugin options here,
      // e.g. to load custom language grammars:
      langs: [
        // import('./some-exported-grammar.mjs'),
        // JSON.parse(fs.readFileSync('./some-json-grammar.json', 'utf-8'))
      ]
    },
    plugins: [pluginCollapsibleSections()]
  }), mdx(), sitemap(), icon(), react()],
  vite: {
    plugins: [
     Font.vite({
        scanFiles: ['src/**/*.{ts,tsx,js,jsx,md,mdx,astro,yml}']
      }),
    ]
  }
});