// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production origin — used to derive canonical/OG/Twitter URLs in later slices (#11).
  site: 'https://ciaobang.com',
  // Emit `dist/<path>/index.html` (directory-style URLs) to match the current site.
  build: { format: 'directory' },
});
