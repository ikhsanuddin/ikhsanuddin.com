import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

export default function PostCard(post: Post) {
  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="group relative">
        <div
          className={`rounded mt-4 ${
            post.imageClassName && `${post.imageClassName} flex justify-center`
          }`}
        >
          <picture className={`${post.imageClassName}`}>
            <img src={post.imageUrl} alt={post.title} className="h-60" />
          </picture>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-300 dark:group-hover:text-gray-50 group-hover:text-gray-600 ease-in-out duration-300">
          <Link href={post.url}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.date} className="text-gray-500">
            {format(parseISO(post.date), "dd LLLL yyyy")}
          </time>
          <Link
            href={`/blog/category/${post.category.toLowerCase()}`}
            className="text-orange-700 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-600 ease-in-out duration-300 relative"
          >
            <span className="absolute inset-0 z-10" />
            {post.category}
          </Link>
        </div>
        <div
          style={{ wordBreak: "break-word" }}
          className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-50 ease-in-out duration-300 break-words"
        >
          {post.body.raw}
        </div>
      </div>
      <div className="relative mt-4 flex items-center gap-x-4">
        <picture>
          <img
            src="https://ik.imagekit.io/ikhsanuddin/profile/ikhsanuddin-512.jpg"
            alt="Ikhsanuddin Syamsuri"
            className="h-10 w-10 rounded-full bg-gray-50 dark:bg-gray-900"
          />
        </picture>
        <div className="text-sm leading-6 group ">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            <Link href={"/about/ikhsanuddin"}>
              <span className="absolute inset-0" />
              Ikhsanuddin Syamsuri
            </Link>
          </p>
          <p className="text-gray-600 group-hover:text-gray-900 dark:group-hover:text-gray-500 ease-in-out duration-300">
            Sofware Engineer
          </p>
        </div>
      </div>
    </article>
  );
}
