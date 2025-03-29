import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  base: 'edchalstrey',
  site: 'https://edwardchalstrey1.github.io',
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  integrations: [tailwind(), react(), robotsTxt(), sitemap()]
});