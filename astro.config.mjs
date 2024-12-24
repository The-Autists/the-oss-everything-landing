// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: "/",
  site: "https://The-OSS-Everything-Bot.github.io/the-oss-bot-landing",
});