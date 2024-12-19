import Image from "next/image";
import React from "react";
import lokhome from "../../../public/loktantrahome.png";
import lokvideo from "../../../public/loktantravideo.png";
import loknews from "../../../public/loktantranews.png";

import Link from "next/link";
const Mainproject1 = () => {
  return (
    <section
      className="relative pt-[40vh] sm:pt-[60vh] z-40"
      style={{ opacity: "1", transform: "none" }}
    >
      <div>
        <section className="space-y-6 sm:space-y-10">
          <div className="space-y-3 sm:space-y-4">
            <h6 className="text-base sm:text-xl font-medium text-[#f4e7d4]">
             Next.js Website
            </h6>
            <h1 className="font-bold text-4xl sm:text-6xl text-[#f4e7d4]">
             Loktantra Udghosh
            </h1>
          </div>
          <div className="relative w-full h-116 md:h-128 bg-grey-light dark:bg-pop-dark rounded-xl overflow-hidden">
            <Image alt="" src={lokhome} />
          </div>
        </section>
        <section className="mt-20 sm:mt-40">
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Introduction</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            Loktantra Udghosh is a dynamic news platform dedicated to delivering
            timely and reliable information to its readers. Covering a wide
            range of topics from current affairs to in-depth analyses, Loktantra
            Udghosh aims to provide an engaging and informative experience for
            users seeking trusted news content.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Problem</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            The initial version of the Loktantra Udghosh website was built
            entirely on WordPress, which presented significant challenges in
            performance and usability. The website suffered from slow loading
            times, poor optimization, and an outdated user interface that
            hindered user engagement. As a result, visitors faced difficulties
            in accessing news content efficiently, leading to a subpar browsing
            experience.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Solution</strong>
          </h3>

          <ul className="ml-10 py-5 list-disc space-y-5 text-[#f4e7d4]">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Frontend Redevelopment</strong>: Rebuilt the website
                using Next.js and Tailwind, creating an interactive, modern, and
                responsive user interface for a seamless browsing experience.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Backend Integration</strong>: Leveraged WordPress as the
                backend to retain content management flexibility while ensuring
                high performance on the frontend.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Performance Optimization</strong>: Improved site speed
                and reduced loading times significantly, enhancing user
                engagement and overall experience.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Modern User Experience</strong>: Designed a clean and
                intuitive layout to make content discovery easy, enabling
                readers to navigate the website efficiently across devices.
              </p>
            </li>

            <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
              By migrating Loktantra Udghosh to a Next.js framework while
              keeping WordPress as the backend, I successfully optimized
              performance, delivered an interactive and visually appealing
              interface, and created a fast, user-friendly platform tailored to
              the needs of modern news readers.
            </p>
          </ul>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            Technologies and tools used include Next.js and Tailwind.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Link</strong>
          </h3>
          <ul className="ml-10 py-5 list-disc space-y-5">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
                <a
                  href="https://loktantraudghosh.com/"
                  rel="noreferrer noopener"
                  className="text-brand dark:text-azure transition duration-500 text-base sm:text-xl font-medium mb-4 underline underline-offset-8 opacity-70 hover:opacity-100"
                >
                  Loktantra Udghosh
                </a>
              </p>
            </li>
          </ul>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <div className="relative flex w-full h-auto my-4 sm:my-10 rounded-xl bg-grey-light dark:bg-pop-dark overflow-hidden">
            <Image alt="project" src={lokvideo} />
          </div>
          <div className="relative flex w-full h-auto my-4 sm:my-10 rounded-xl bg-grey-light dark:bg-pop-dark overflow-hidden">
            <Image alt="project" src={loknews} />
          </div>
          
        </section>
        <section>
          <h4 className="text-2xl sm:text-4xl mt-20">
            <Link
              href={"/projects"}
              className="text-[#f4e7d4] underline underline-offset-8 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-500"
            >
              Back to Archive
            </Link>
          </h4>
        </section>
      </div>
    </section>
  );
};

export default Mainproject1;
