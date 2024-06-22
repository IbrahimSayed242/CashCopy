import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import vercel from '@astrojs/vercel/serverless';
import vercelServerless from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), vue()],
  // outDir: "../astrobuild/",
  // publicDir: "../astrobuild/media/",
  // trailingSlash: "always",
  // compressHTML: process.env.NODE_ENV === "production",
  // build: {
  //   format: "file",
  //   inlineStylesheets: "auto",
  //   assets: "static",
  // },
  output: "server",
  adapter: vercel(
    {
      edgeMiddleware: true,
    }
  ),

  middleware: ['./src/middleware.js'],
});