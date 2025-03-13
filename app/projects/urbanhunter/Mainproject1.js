import Image from "next/image";
import React from "react";
import Vital from "../../../public/urbanhuntermain.webp";
import VitalDash from "../../../public/urbanhuntersec.webp";
import Vitalcus from "../../../public/urbanhunterthird.webp";
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
              Wordpress Website
            </h6>
            <h1 className="font-bold text-4xl sm:text-6xl text-[#f4e7d4]">
              Urban Hunter
            </h1>
          </div>
          <div className="relative w-full h-116 md:h-128 bg-grey-light dark:bg-pop-dark rounded-xl overflow-hidden">
            <Image alt="" src={Vital} />
          </div>
        </section>
        <section className="mt-20 sm:mt-40">
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Introduction</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            Urban Hunter is a consultancy dedicated to empowering businesses
            through comprehensive solutions in Amazon Account Management,
            Shopify Website Development, and Website Development. We specialize
            in helping brands unlock their full potential by providing tailored
            strategies and expert guidance to excel in the digital marketplace.
            With a focus on driving growth and achieving measurable results,
            Urban Hunter delivers innovative and scalable solutions designed to
            meet the unique needs of each client. From optimizing Amazon
            accounts to building and designing impactful Shopify and WordPress
            websites, we are committed to ensuring our clients succeed in
            today’s competitive landscape.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>

          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Contribution</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            I played a crucial role in establishing Urban Hunter’s digital
            presence by designing and developing their official website.
          </p>
          <ul className="ml-10 py-5 list-disc space-y-5 text-[#f4e7d4]">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Website Design</strong>: Crafted a visually appealing
                and modern website design that reflects Urban Hunter’s brand
                identity and professionalism.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Website Design</strong>: Focused on user-friendly
                navigation and an engaging interface to enhance the visitor
                experience.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Website Development</strong>: Built the website using
                WordPress, ensuring responsiveness and compatibility across all
                devices and browsers.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Website Development</strong>: Optimized the website for
                performance, speed, and SEO to drive organic traffic and improve
                search engine visibility.
              </p>
            </li>

            <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
              By combining innovative design principles and robust development
              practices, I created a platform that showcases Urban Hunter’s
              services effectively while supporting their mission to help
              businesses succeed.
            </p>
          </ul>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            Technologies and tools used include Wordpress.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Link</strong>
          </h3>
          <ul className="ml-10 py-5 list-disc space-y-5">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
                <a
                  href="https://urbanhunter.co.in/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-brand dark:text-azure transition duration-500 text-base sm:text-xl font-medium mb-4 underline underline-offset-8 opacity-70 hover:opacity-100"
                >
                  Urban Hunter
                </a>
              </p>
            </li>
          </ul>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <div className="relative flex w-full h-auto my-4 sm:my-10 rounded-xl bg-grey-light dark:bg-pop-dark overflow-hidden">
            <Image alt="project" src={VitalDash} />
          </div>
          <div className="relative flex w-full h-auto my-4 sm:my-10 rounded-xl bg-grey-light dark:bg-pop-dark overflow-hidden">
            <Image alt="project" src={Vitalcus} />
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
