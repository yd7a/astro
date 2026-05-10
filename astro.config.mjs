import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  output: "static",
  site: "https://seisan.insaem.jp",
  base: "/",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    server: { allowedHosts: ["seisan.insaem.jp"] },
    resolve: {
      alias: { "@": path.resolve(__dirname, "./src") },
    },
  },
});
