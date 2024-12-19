import Image from "next/image";
import React from "react";
import Vital from "../../../public/bsimplyroomsmain.png";
import VitalDash from "../../../public/bsimplyroomscol.png";
import Vitalcus from "../../../public/bsimplyroomspro.png";
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
              B-Simply Rooms
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
            B-Simply Rooms is a charming, family-run property that provides cozy
            and modern accommodation in the idyllic setting of Stow-on-the-Wold.
            Located just 150 yards from the vibrant village square, it offers a
            peaceful retreat with a touch of sophistication. Guests enjoy
            well-appointed rooms featuring contemporary décor, free Wi-Fi,
            flat-screen TVs, tea and coffee-making facilities, and private
            bathrooms, making it the perfect destination for comfort and
            relaxation in the Cotswolds.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Contribution</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
          I had the privilege of designing and developing the official website for B-Simply Rooms using WordPress, focusing on creating a seamless online presence that reflects the property’s warmth and modern charm. My contributions include:
          </p>
          <ul className="ml-10 py-5 list-disc space-y-5 text-[#f4e7d4]">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Custom Website Design</strong>: Crafted an elegant and user-friendly interface that captures the essence of the property’s inviting atmosphere.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Responsive Development</strong>: Ensured the website is fully responsive, providing a smooth browsing experience across all devices.

              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>WordPress Integration</strong>: Developed the site on WordPress, enabling easy content management for the client.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Booking Feature Integration</strong>: Incorporated features to showcase room details, amenities, and a streamlined booking process for enhanced user convenience.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>SEO Optimization</strong>: Optimized the website to improve visibility in search engine results and attract more guests.
              </p>
            </li>

            <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
            This project demonstrates my ability to create tailored websites that highlight a business's unique qualities while providing practical functionality and an engaging user experience.
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
                  href="https://bsimplyrooms.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-brand dark:text-azure transition duration-500 text-base sm:text-xl font-medium mb-4 underline underline-offset-8 opacity-70 hover:opacity-100"
                >
                  B-Simply Rooms
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
