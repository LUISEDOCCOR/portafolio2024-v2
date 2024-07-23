import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import webVitals from "@astrojs/web-vitals";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), webVitals(), db()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});