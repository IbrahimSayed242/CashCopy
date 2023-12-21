import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import AstroPWA from '@vite-pwa/astro'
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(),
     react(),
      vue(),
      AstroPWA({
      }),
    ],
    

  outDir: "../astrobuild/",
  // publicDir: "../astrobuild/media/",
  // trailingSlash: "always",
  // compressHTML: process.env.NODE_ENV === "production",
  // build: {
  //   format: "file",
  //   inlineStylesheets: "auto",
  //   assets: "static",
  // },
});