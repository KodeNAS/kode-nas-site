import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://kodenas.dev",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  build: {
    format: "directory",
  },

  output: "hybrid",
  adapter: cloudflare()
});