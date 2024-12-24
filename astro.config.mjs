// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: "/the-oss-bot-landing",
  site: "https://The-OSS-Everything-Bot.github.io",
  srcDir: "src",
});