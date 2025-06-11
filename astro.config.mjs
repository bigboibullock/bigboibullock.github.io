// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://bigboibullock.github.io',
  experimental: {
    fonts: [{
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist"
    }]
  }
});
