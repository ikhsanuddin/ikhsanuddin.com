"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import TogleDark from "./ToggleDark";
import { SlMenu, SlClose } from "react-icons/sl";
import Logo from "@/components/svg/Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();

  const header = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 90
      ? header.current?.classList.add("is-sticky")
      : header.current?.classList.remove("is-sticky");
  };

  return (
    <header className="absolute w-full z-10">
      <div
        className="sticky-holder fixed header-section sticky-navbar"
        ref={header}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Ikhsanuddin</span>
              <Logo/>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <SlMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="hidden lg:flex lg:gap-x-12 text-dark dark:text-white main-menu">
            <li className={path.startsWith("/about") ? "active" : ""}>
              <Link href="/about/ikhsanuddin">
                <span>About</span>
              </Link>
            </li>
            <li className={path.startsWith("/projects") ? "active" : ""}>
              <Link href="/projects">
                <span>Showcase</span>
              </Link>
            </li>
            <li className={path.startsWith("/blog") ? "active" : ""}>
              <Link href="/blog">
                <span>Blog</span>
              </Link>
            </li>
          </ul>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <TogleDark />
          </div>
        </nav>
      </div>

      <Dialog
        as="div"
        className="lg:hidden"
        id="mobile-main-menu"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-20" />
        <Dialog.Panel className="fixed backdrop-blur-md inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white/50 dark:bg-gray-500/50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Ikhsanuddin</span>
              <Logo/>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 dark:text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <SlClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-100/10">
              
              <div className="space-y-2 py-6 text-gray-900 dark:text-gray-100">
                <Link
                  href="/about/ikhsanuddin"
                  className={`${path.startsWith("/about") ? "active " : ""}-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className={`${path.startsWith("/projects") ? "active " : ""}-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`}
                >
                  Showcase
                </Link>
                <Link
                  href="/blog"
                  className={`${path.startsWith("/blog") ? "active " : ""}-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7`}
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <TogleDark />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
