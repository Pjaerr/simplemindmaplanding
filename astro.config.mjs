import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  server: { port: 8080 },
  publicDir: "./public",
  site: "https://simplemindmap.com",
});