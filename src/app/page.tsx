import Link from "next/link";
import { ParallaxProviders } from "./providers";
import { Parallax } from "@/components/Paralax";
import { SiKubernetes } from "react-icons/si";
import ShipWheel from "@/components/svg/ShipWheel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="flex min-h-screen  max-w-7xl mx-auto items-center relative">
        <div className="mr-auto max-w-2xl px-10 justify-self-start">
          <h1 className="text-5xl font-normal">
            I&apos;m <span className="font-bold">Ikhsanuddin Syamuri,</span>
          </h1>
          <h2 className="text-3xl leading-10 text-normal">
            a Lead Software Engineer at TwoSpaces.
          </h2>
          <h3 className="text-xl font-light">
            I lead a team of engineers creating smart property management and
            bring inovation to hospitality industries with mobile device and
            IOT.
          </h3>
          <Link
            className="rounded-full inline-block mt-4 bg-orange-600 px-7 py-3 text-base font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            href={"/project/twospaces"}
          >
            Explore More
          </Link>
          <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl">
            <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] dark:fill-gray-50 fill-orange-600 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
              <ShipWheel />
            </div>
          </div>
        </div>
      </section>
      {/* <ParallaxProviders>
        <Parallax speed={-10}>
          <div>xxxx</div>
        </Parallax>
      </ParallaxProviders>
      <Link href="/blog">
        <h2>
          Blog <span>-&gt;</span>
        </h2>
        <p>
          Find in-depth information what i an doing and what have been done.
        </p>
      </Link> */}
    </main>
  );
}
