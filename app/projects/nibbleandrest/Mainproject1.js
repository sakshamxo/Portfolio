import Image from "next/image";
import React from "react";
import Vital from "../../../public/nibbleandrestmain.png";
import VitalDash from "../../../public/nibbleandrestcol.png";
import Vitalcus from "../../../public/nibbleandrestpro.png";
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
              Shopify Website
            </h6>
            <h1 className="font-bold text-4xl sm:text-6xl text-[#f4e7d4]">
              Nibble and Rest
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
            Nibble and Rest is the ultimate destination for parents seeking
            innovative and practical solutions to transform their children's
            mealtime experience. Founded by Melina, a passionate mum of three,
            Nibble and Rest is home to the original Footsi® highchair footrest,
            the first-ever portable and height-adjustable footrest designed to
            make mealtimes more comfortable and enjoyable for little ones.
            Inspired by her first-born, Chiara, Melina created the Footsi® to
            provide the support young children need while eating, a product now
            recommended by pediatric feeding experts and dieticians worldwide.
            In addition to the Footsi®, Nibble and Rest offers a curated
            selection of aesthetically pleasing, functional feeding accessories
            and products from like-minded parent innovators across the globe.
            With a mission to promote positive eating habits and foster joyful
            mealtimes, Nibble and Rest has become a trusted name for parents
            everywhere.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Contribution</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            I built and optimized Nibble and Rest's website on Shopify, ensuring
            a seamless shopping experience for customers. By focusing on an
            intuitive design, enhanced functionality, and improved performance,
            I created a digital platform that reflects the brand's values and
            supports its mission of providing innovative solutions for families.
            This revamped website not only showcases the unique benefits of the
            Footsi® but also connects parents to a range of thoughtfully crafted
            products designed to make parenting a little easier.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
        
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            Technologies and tools used include Shopify.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Link</strong>
          </h3>
          <ul className="ml-10 py-5 list-disc space-y-5">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
                <a
                  href="https://nibbleandrest.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-brand dark:text-azure transition duration-500 text-base sm:text-xl font-medium mb-4 underline underline-offset-8 opacity-70 hover:opacity-100"
                >
                  Nibble and Rest
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
