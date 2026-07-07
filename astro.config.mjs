import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://tatianep.github.io",
  base: "/home",
  trailingSlash: "ignore",
  compressHTML: true,
  integrations: [sitemap()],
});
