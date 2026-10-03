import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    imageUrl: z.string(),
    imageClassName: z.string().optional(),
    description: z.string().optional(),
    // PNG/JPG for link previews; LinkedIn does not render SVG.
    ogImage: z.string().optional(),
    // Kept reachable by URL, hidden from lists and search engines.
    unlisted: z.boolean().optional(),
    author: z
      .object({
        name: z.string(),
        imageUrl: z.string(),
        url: z.string().optional(),
        role: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog };
