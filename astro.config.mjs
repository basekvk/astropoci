import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  redirects: {
    '/old-page': '/new-page'
  },
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});