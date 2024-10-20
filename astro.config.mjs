import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import astroExpressiveCode from 'astro-expressive-code';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import icon from "astro-icon";
import react from "@astrojs/react";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkMermaidToHtml from './src/plugins/remarkMermaidToHtml.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com', // should be same as `site.url` in src/config.yml
  markdown: {
    remarkPlugins: [remarkMath, remarkMermaidToHtml],
    rehypePlugins: [rehypeKatex],
    syntaxHighlight: false
  },
  integrations: [astroExpressiveCode({
    // You can use any of the themes bundled with Shiki by name,
    // specify a path to JSON theme file, or pass an instance
    // of the `ExpressiveCodeTheme` class here:
    themes: ['dracula', 'dracula'],
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

});