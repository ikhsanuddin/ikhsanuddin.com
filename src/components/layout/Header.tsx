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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOnAbout, setIsOnAbout] = useState(false);
  const path = usePathname();

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - headerRef.current!.offsetHeight);
      setIsOnAbout(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header ref={headerRef} className="fixed top-0 w-full z-50 transition-all duration-300">
      <div
        className={`transition-colors duration-300 ${
          isScrolled
            ? "bg-gradient-to-br from-light-primary/20 via-light-secondary/20 to-light-accent/20 dark:from-dark-primary/20 dark:via-dark-secondary/20 dark:to-dark-accent/20 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 hover:opacity-80 transition-opacity">
              <span className="sr-only">Ikhsanuddin</span>
              <Logo />
            </Link>
          </div>
          <div className="flex lg:hidden gap-4 items-center">
            <TogleDark />
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <SlMenu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <ul className="hidden lg:flex lg:gap-x-8 items-center">
            <li>
              <Link 
                href="/about/ikhsanuddin"
                onClick={(e)=> {
                  e.preventDefault();
                  scrollToSection("summary");
                }}
                className={`text-base font-medium transition-colors hover:text-light-secondary dark:hover:text-dark-accent ${
                  isOnAbout
                    ? "text-light-secondary dark:text-dark-accent" 
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/projects"
                className={`text-base font-medium transition-colors hover:text-light-secondary dark:hover:text-dark-accent ${
                  path.startsWith("/projects") 
                    ? "text-light-secondary dark:text-dark-accent" 
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Showcase
              </Link>
            </li>
            <li>
              <Link 
                href="/blog"
                className={`text-base font-medium transition-colors hover:text-light-secondary dark:hover:text-dark-accent ${
                  path.startsWith("/blog") 
                    ? "text-light-secondary dark:text-dark-accent" 
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <TogleDark />
            </li>
          </ul>
        </nav>
      </div>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/20 dark:bg-black/40 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Ikhsanuddin</span>
              <Logo />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <SlClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                <Link
                  href="/about/ikhsanuddin"
                  onClick={(e) => {
                    setMobileMenuOpen(false)
                    scrollToSection("summary");
                    e.preventDefault();
                  }}
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition-colors ${
                    isOnAbout
                      ? "bg-light-secondary/10 dark:bg-dark-accent/10 text-light-secondary dark:text-dark-accent"
                      : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition-colors ${
                    path.startsWith("/projects")
                      ? "bg-light-secondary/10 dark:bg-dark-accent/10 text-light-secondary dark:text-dark-accent"
                      : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  Showcase
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 transition-colors ${
                    path.startsWith("/blog")
                      ? "bg-light-secondary/10 dark:bg-dark-accent/10 text-light-secondary dark:text-dark-accent"
                      : "text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
