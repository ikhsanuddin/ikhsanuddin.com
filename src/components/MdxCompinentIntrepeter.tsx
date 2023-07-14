import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ImageKit } from "./ImageKit";

export const mdxComponents: MDXComponents = {
  Link: (props) => <Link {...props} />,
  Image: (props) => <ImageKit {...props} />,
};
