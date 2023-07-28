import { allPosts } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { MDXComponents } from "mdx/types";
import { format, parseISO } from "date-fns";

import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return {
    title: post?.title,
    description: post?.title,
    openGraph: {
      title: post?.title,
      description: post?.title,
      url: `https://ikhsanuddin.com/blog/${params.slug}`,
      siteName: "IKhsanuddin Syamsuri",
      images: [
        {
          url: post?.imageUrl || "https://ik.imagekit.io/ikhsanuddin/profile/ikhsanuddin?tr=w-1080",
          width: 640,
          height: 480,
          alt: post?.title,
        },
        {
          url: "https://ik.imagekit.io/ikhsanuddin/profile/ikhsanuddin?tr=w-1080",
          width: 1080,
          height: 741,
          alt: "Ikhsanuddin Syamsuri",
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post?.date,
      authors: post?.author?.name || "Ikhsanuddin Syamsuri",
      section: post?.category,
      tags: post?.category,
    },
  };
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

const mdxComponents: MDXComponents = {
  Link: ({ href, children, ...LinkProps }) => (
    <Link href={href as string} {...LinkProps}>
      {children}
    </Link>
  ),
};

function Article({ post }: { post: string }) {
  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post);

  return <MDXContent components={mdxComponents} />;
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  // 404 if the post does not exist.
  if (!post) notFound();

  return (
    <main className="min-h-screen">
      <article className="max-w-4xl px-6 pt-40 py-24 mx-auto space-y-12 dark:text-gray-50">
        <div className="w-full mx-auto space-y-4 text-center">
          <Link
            href={`/blog/category/${post.category.toLowerCase()}`}
            className="text-xs font-semibold tracki uppercase"
          >
            #{post.category}
          </Link>
          <h1 className="text-4xl font-bold leadi md:text-5xl">{post.title}</h1>
          <p className="text-sm dark:text-gray-400">
            by{" "}
            <Link
              rel="noopener noreferrer"
              href="/about/ikhsanuddin"
              className="underline dark:text-orange-400"
            >
              <span itemProp="name">Ikhsanuddin Syamsuri</span>
            </Link>{" "}
            on{" "}
            <time dateTime={post.date}>
              {format(parseISO(post.date), "dd LLLL yyyy")}
            </time>
          </p>
        </div>
        <div
          className={`mx-auto ${
            post.imageClassName ? post.imageClassName : "bg-gray-50 dark:bg-gray-900"
          } `}
        >
          <picture>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="mx-auto md:justify-self-start dark:bg-gray-500"
            />
          </picture>
        </div>
        <div className="prose dark:prose-invert lg:prose-xl dark:text-gray-100">
          <Article post={post.body.code} />
        </div>
        <div className="pt-12 border-t dark:border-gray-700">
          <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
            <picture className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700">
              <img
                src="https://ik.imagekit.io/ikhsanuddin/profile/ikhsanuddin-512.jpg"
                alt="Ikhsanuddin Syasmuri"
                className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700"
              />
            </picture>
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold">Ikhsanuddin Syamsuri</h4>
              <p className="dark:text-gray-400">
                Ikhsan is a web developer, with his main focus was in frontend,
                but he also be able to do backend and devops to help in
                development process.
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-4 space-x-4 align-center">
            <a
              rel="noopener noreferrer"
              href="https://github.com/ikhsanuddin"
              aria-label="GitHub"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
              target="_blank"
            >
              <svg
                viewBox="0 0 496 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://linkedin.com/in/ikhsanuddin"
              aria-label="Linked In"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
              target="_blank"
            >
              <svg
                viewBox="0 0 310 310"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z" />
                <path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z" />
                <path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://twitter.com/ikhsanuddin"
              aria-label="Twitter"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
              target="_blank"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="mailto:mail.ikhsanuddin@gmail.com?subject=I%20saw%20your%20website%20and%20i%20willing%20to%20connect"
              aria-label="Email"
              className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400"
            >
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 fill-current"
              >
                <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
              </svg>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
