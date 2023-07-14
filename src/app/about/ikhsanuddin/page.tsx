import { ImageKit } from "@/components/ImageKit";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Ikhsanuddin Syamsuri",
  description:
    "Ikhsan is a web developer, with his main focus was in frontend, but he also be able to do backend and devops to help in development process",
};

export default function Ikhsanuddin() {
  return (
    <main className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden blur-3xl">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <section className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-orange-600">
                Profile
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 dark:text-gray-100 sm:text-4xl">
                Ikhsanuddin Syamsuri
              </h1>
              <p className="mt-6 text-xl leading-8 dark:text-gray-300 text-gray-700">
                Ikhsan is a web developer, with his main focus was in frontend,
                but he also be able to do backend and devops to help in
                development process
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 -mr-12 lg:mr-0 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {/* <picture className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]">
            <img
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt=""
            />
          </picture> */}
          <ImageKit
            src={"/profile/ikhsanuddin"}
            alt="Ikhsanuddin Syamsuri"
            width={912}
            height={626}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] w-full"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 dark:text-gray-400 lg:max-w-lg">
              <p className="mb-8">
                Currently, he heavily type React.js website development with
                TypeScript. He also loved to code with React Native and Vue
              </p>
              <p className="mb-8">
                His background in psychology and his passion for coding make him
                able to worki with data research and process the statistical
                data.
              </p>
              <p className="mb-8">
                In 2012, he start his career in graphic design to help with
                tuition fees in psychology. Since then he has hon his skill in
                digital marketing, analytics, advertisement and SEO (Search
                Engine Optimization).
              </p>
              <p className="mb-8"></p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600 dark:text-gray-300">
                <li className="flex gap-x-3">
                  {/* <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">
                      Frontend.
                    </strong>{" "}
                    Next.js is his favorite framework for working with React.js
                    alongside Bootstrap 5, Tailwind, and ANT-Design pattern to
                    develop appealing websites. He sometimes use NUXT.js, Vue,
                    Gatsby, and Svelte.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">
                      Backend.
                    </strong>{" "}
                    Nest.js, Go and Laravel is what he preferred, even though he
                    was able to use JAVA as well.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* <ServerIcon className="mt-1 h-5 w-5 flex-none text-orange-600" aria-hidden="true" /> */}
                  <span>
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">
                      Devops.
                    </strong>{" "}
                    Docker was his best friend for deploying the application,
                    since 2021 he started using Kubernetes to manage multiple
                    docker images and resources.
                  </span>
                </li>
              </ul>
              <p className="mt-8"></p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                No backend? No problem.
              </h2>
              <p className="mt-6">
                He manage to establish application without using any backend,
                yes it for prototype olny. But we need to create prototype at
                early stage of ideation process and calling for investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <ol className="border-l border-neutral-300 dark:border-neutral-500">
            <li>
              <div className="flex-start flex items-center pt-3">
                <div className="-ml-[8px] mr-3 h-[15px] w-[15px] rounded-full bg-neutral-400"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  April 2023, IT deparement disbanded
                </p>
              </div>
              <div className="mb-3 ml-4 mt-2">
                <h3 className="text-xl font-semibold">TwoSpaces</h3>
                <Link
                  className="text-orange-600"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://twospacesgroup.com"}
                >
                  twospacesgroup.com
                </Link>
              </div>
            </li>
            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  April 2022
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1 mt-3 font-semibold">
                  Lead Software Engineer
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Building digital property management services. Reservation,
                  booking chart, payment, room service, email service, API
                  intregation with Channel Manager and digital checkin was build
                  within a year.
                </p>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Mentoring, reporting, code review, distributing task and
                  giving support was his day to day job as a lead of 2 backend,
                  1 fontend, 1 Database Admin and Quality Assurance
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[8px] mr-3 h-[15px] w-[15px] rounded-full bg-neutral-400"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  April 2022, left
                </p>
              </div>
              <div className="mb-3 ml-4 mt-2">
                <h3 className="text-xl font-semibold">
                  Indotek Sukses Sekawan
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  formerly Tekno Kreasi Nyata
                </p>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600"
                  href={"https://indotek.github.io"}
                >
                  indotek.github.io
                </Link>
              </div>
            </li>
            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  May 2021
                </p>
              </div>
              <div className="mb-3 ml-4 mt-2">
                <h4 className="mb-1 mt-3 font-semibold">
                  Lead Sofware Engineer
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Maintain development, giving level 3 support, and reporting
                  for B2B white label product with single tenant sofware,
                  managed in multi tenant infrastructure using Kubernetes. The
                  tools that we use are Jira Agile, Google CLoud Platform,
                  Stackdriver, Google Tag Manager, Google Analytics.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  April 2019
                </p>
              </div>
              <div className="ml-4 mt-2 mb-3">
                <h4 className="mb-1 mt-3 font-semibold">
                  Lead Frontend Engineer
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  The frontend team getting bigger, then he promoted to lead the
                  team. Deciding the stack for next project, and team capacity
                  management now is his responsibily. Leading 4 people.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  November 2018
                </p>
              </div>
              <div className="ml-4 mt-2 mb-6">
                <h4 className="mb-1 mt-3 font-semibold">
                  Senior Frontend Engineer
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Develop website using React.js with ANT-Design for back office
                  and using Vue - Nuxt.js for starting the project. I also give
                  mentorship to my coleague.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[8px] mr-3 h-[15px] w-[15px] rounded-full bg-neutral-400"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  February 2019, left
                </p>
              </div>
              <div className="mb-3 ml-4 mt-2">
                <h3 className="text-xl font-semibold">Coconutlab,Ltd</h3>

                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600"
                  href={"https://coconutlab.io"}
                >
                  coconutlab.io
                </Link>
              </div>
            </li>
            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  Sept 2018
                </p>
              </div>
              <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1 mt-3 font-semibold">
                  Senior Frontend Engineer
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Develop website using React Native we manage to ship an
                  application to production level.
                </p>
              </div>
            </li>

            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[8px] mr-3 h-[15px] w-[15px] rounded-full bg-neutral-400"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  Sept 2018, left
                </p>
              </div>
              <div className="mb-3 ml-4 mt-2">
                <h3 className="text-xl font-semibold">YAMISOK</h3>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600"
                  href={"https://yamisok.com"}
                >
                  yamisok.com
                </Link>
              </div>
            </li>
            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  June 2017
                </p>
              </div>
              <div className="mb-3 ml-4 mt-2">
                <h4 className="mb-1 mt-3 font-semibold">
                  Senior Frontend Engineer
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Deciding to folow the frontend path. He rebuild the website
                  using vue.js and new bootsrap 4. Also he is a senior frontend
                  with a new responsibilty to do mentorship.
                </p>
              </div>
            </li>
            <li>
              <div className="flex-start flex items-center pt-2">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 dark:text-neutral-300">
                  May 2016
                </p>
              </div>
              <div className="mb-3 ml-4 mt-2">
                <h4 className="mb-1 mt-3 font-semibold">
                  Junior software Engineer
                </h4>
                <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                  Translate from phothoshop to html and css is his main job.
                  Using bootsrap 3, creating a gamer portal for online
                  tournament inculding upper and lower bracket ststem, feeds,
                  realtime chat, and marketing email. Sometimes he helps other
                  coleague with larael backend.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
