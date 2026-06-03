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
