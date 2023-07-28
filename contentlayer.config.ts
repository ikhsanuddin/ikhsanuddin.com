import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";

import highlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

const Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    imageUrl: {
      type: "string",
      required: true,
    },
    url: {
      type: "string",
    },
    role: {
      type: "string",
    },
    name: {
      type: "string",
      required: true,
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true },
    imageUrl: {
      type: "string",
      required: true,
    },
    imageClassName: {
      type: "string",
    },
    author: {
      type: "nested",
      of: Author,
    },
  },
  computedFields: {
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    url: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "src/articles",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [highlight],
  },
});
