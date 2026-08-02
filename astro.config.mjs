// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ikhsanuddin.com",
  integrations: [
    mdx(),
    // Keep the scaffold's placeholder post and the category page it generates
    // out of the sitemap. Delete mdx-format.mdx to drop the pages entirely.
    sitemap({
      filter: (page) =>
        !page.includes("/blog/mdx-format/") &&
        !page.includes("/blog/category/example/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
