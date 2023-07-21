import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import PostCard from "@/components/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Ikhsanuddin Syamsuri",
  description: "Ikhsanuddin's programming journey",
  openGraph: {
    title: "Blog - Ikhsanuddin Syamsuri",
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

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="py-24 sm:py-32 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-neutral-400">
            The programming journey.
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
