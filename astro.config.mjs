import { defineConfig, envField } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import node from "@astrojs/node";
import { loadEnv } from "vite";

const { geoip_api } = loadEnv(process.env.geoip_api, process.cwd(), "");

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
  adapter: node({
    mode: "standalone",
  }),
  experimental: {
    env: {
      schema: {
        API_URL: envField.string({
          context: "client",
          access: "public",
          optional: true,
        }),
        PORT: envField.number({
          context: "server",
          access: "public",
          default: 4322,
        }),
        API_SECRET: envField.string({ context: "server", access: "secret" }),
      },
    },
  },
  middleware: ["./src/middleware.js"],
});
