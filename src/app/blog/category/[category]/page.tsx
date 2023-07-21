import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { Metadata } from "next";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Blog Categories - Ikhsanuddin Syamsuri",
  description: "Ikhsanuddin's programming journey",
  openGraph: {
    title: "Blog Categories - Ikhsanuddin Syamsuri",
    description: "Ikhsanuddin's programming journey",
    url: "https://ikhsanuddin.com/blog",
    siteName: "IKhsanuddin Syamsuri",
    images: [
      {
        url: "https://ik.imagekit.io/ikhsanuddin/profile/ikhsanuddin?tr=w-1080",
        width: 1080,
        height: 741,
        alt: "Ikhsanuddin Syamsuri",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  // Find the post for the current page.
  const posts = allPosts
    .filter((post) => post.category.toLowerCase() === params.category)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <main className="py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-100 sm:text-4xl">
            #{params.category}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-neutral-400">
            The post related to each other
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}
