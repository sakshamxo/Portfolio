import Image from "next/image";
import React from "react";
import Vital from "../../../public/shilajetkaufenmain.png";
import VitalDash from "../../../public/shilajetkaufencol.png";
import Vitalcus from "../../../public/shilajetkaufenprod.png";
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
              React Website
            </h6>
            <h1 className="font-bold text-4xl sm:text-6xl text-[#f4e7d4]">
              Shilajit Kaufen 
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
            Shilajit Kaufen is a Germany-based brand offering Vitadote® Shilajit
            Resin, ethically and sustainably sourced from the pristine Altai and
            Himalayan mountain ranges. With a commitment to authenticity and
            quality, the brand combines ancient wisdom with modern practices,
            providing customers with a product that nourishes both body and
            mind. Each batch of shilajit undergoes rigorous testing to ensure it
            meets the highest quality standards, embodying the natural vitality
            of its origins.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
         
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Contribution</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
          I was responsible for designing and developing the Shilajit Kaufen website, utilizing React for the frontend and Shopify as the backend. My contributions include:
          </p>
          <ul className="ml-10 py-5 list-disc space-y-5 text-[#f4e7d4]">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Custom Web Design</strong>: Created a visually appealing and intuitive user interface that reflects the brand’s commitment to quality and natural vitality.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Frontend Development</strong>: Leveraged React to build a responsive and dynamic website, ensuring a seamless user experience across all devices.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Shopify Integration</strong>: Implemented Shopify as the backend to streamline product management, order processing, and inventory tracking.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Brand Representation</strong>: Strategically designed the layout and content to highlight the brand’s heritage, values, and product quality.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Performance Optimization</strong>: Ensured fast loading speeds and smooth navigation to enhance customer satisfaction and engagement.
              </p>
            </li>

            <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
            This project highlights my expertise in merging robust e-commerce solutions with modern web technologies to deliver a platform that aligns with the brand’s vision and engages its audience effectively.
            </p>
          </ul>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            Technologies and tools used include React.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Link</strong>
          </h3>
          <ul className="ml-10 py-5 list-disc space-y-5">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
                <a
                  href="https://shilajitkaufen.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-brand dark:text-azure transition duration-500 text-base sm:text-xl font-medium mb-4 underline underline-offset-8 opacity-70 hover:opacity-100"
                >
                  Shilajit Kaufen
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
