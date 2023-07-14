import Link from "next/link";
import { SiNextdotjs, SiTailwindcss, SiMdx } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-slate-50  dark:from-gray-900 backdrop-blur-md text-gray-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between  p-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex align-center mx-auto lg:ml-0 lg:order-1">
          <small className="text-sm mr-2">Build with</small>
          <SiNextdotjs
            title="NEXT.Js"
            className="hover:text-black hover:bg-white hover:rounded-full hover:border mr-2"
          />
          <SiTailwindcss
            title="Tailwind CSS"
            className="hover:text-sky-500 mr-2"
          />
          <SiMdx title="MDX" className="hover:text-orange-500 mr-2" />
        </div>
        <div className="text-sm lg:text-right lg:order-3 mx-auto lg:ml-auto">
          <Link className="mr-2" href="/blog">Blog</Link>
          <Link className="mr-2" href="/about/ikhsanuddin">About</Link>
          <Link className="mr-2" href="/projects">Projects</Link>
          <Link className="mr-2" href="/sitemap.xml">Sitemap</Link>
          <Link href="/">Home</Link>
        </div>
        <p className="text-center mx-auto text-gray-500 lg:order-2 md:col-span-2 lg:col-span-1">Copyright © 2023</p>
      </div>
    </footer>
  );
}
