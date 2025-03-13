import Image from "next/image";
import React from "react";
import Vital from "../../../public/vitaljpg.webp";
import VitalDash from "../../../public/vitaldashboard.webp";
import Vitalcus from "../../../public/vitalcustomer.webp";
import Vitaldeal from "../../../public/vitaldeal.webp";
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
              Saas Shopify Application
            </h6>
            <h1 className="font-bold text-4xl sm:text-6xl text-[#f4e7d4]">
              The Vital
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
            The Vital is a powerful Shopify app designed to boost sales and
            customer loyalty through a comprehensive set of features, including
            loyalty and rewards programs, product reviews, customer dashboards,
            exclusive deals, and more. Built using React, Node.js, Express, SQL,
            and Sequelize, The Vital offers a seamless and scalable solution for
            merchants aiming to enhance customer engagement and retention. With
            fully customizable loyalty programs, automated review collection,
            and personalized user dashboards, The Vital empowers businesses to
            create meaningful customer interactions at every stage of the
            journey. Its ease of setup, no-code configuration, and expert
            support make it an essential tool for driving Customer Lifetime
            Value (CLV) and Average Order Value (AOV).
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Problem</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            The initial version of The Vital faced critical challenges that
            hindered its effectiveness and user experience. The user interface
            was slow and poorly designed, resulting in an unresponsive and
            cluttered experience. The customer dashboard lacked functionality
            and usability, making it difficult for merchants to manage their
            customers effectively. Additionally, there was no proper reward or
            deals system in place, which limited customer engagement and
            retention. These issues, combined with poor overall performance and
            slow loading times, created significant roadblocks for Shopify
            merchants looking to boost their sales and loyalty programs.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Contribution</strong>
          </h3>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            My Contribution to <strong>The Vital App</strong>
          </p>
          <ul className="ml-10 py-5 list-disc space-y-5 text-[#f4e7d4]">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>UI/UX Redesign</strong>: Redesigned the user interface
                using React.js and Shopify Polaris, improving usability and
                delivering a clean, intuitive experience.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Performance Optimization</strong>: Enhanced loading
                speed, reducing page load times by 40% and ensuring a smoother,
                faster experience.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Backend Development</strong>: Rebuilt the reward and
                deals system using Node.js, Express, SQL, and Sequelize, making
                it robust and fully functional.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Customer Dashboard</strong>: Developed a personalized
                and dynamic customer dashboard to improve user engagement.
              </p>
            </li>
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
                <strong>Scalable Architecture</strong>: Optimized APIs and
                backend queries, resulting in a 30% improvement in overall
                performance and response time.
              </p>
            </li>

            <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg">
              By addressing these challenges, I helped transform The Vital into
              a highly efficient, user-friendly, and feature-rich solution,
              empowering Shopify merchants to enhance customer retention and
              drive business growth.
            </p>
          </ul>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
            Technologies and tools used include React, Node.Js, Express.Js, SQL,
            Sequelize, Redux and Shopify Polaris.
          </p>
          <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg"></p>
          <h3 className="text-3xl sm:text-4xl font-bold mt-10 sm:mt-20 mb-4 sm:mb-6 text-[#f4e7d4]">
            <strong>Link</strong>
          </h3>
          <ul className="ml-10 py-5 list-disc space-y-5">
            <li>
              <p className="text-base sm:text-xl font-medium mb-4 md:mb-6 max-w-screen-lg text-[#f4e7d4]">
                <a
                  href="https://app.thevitalapps.com/"
                  rel="noreferrer noopener"
                  className="text-brand dark:text-azure transition duration-500 text-base sm:text-xl font-medium mb-4 underline underline-offset-8 opacity-70 hover:opacity-100"
                >
                  The Vital app
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
          <div className="relative flex w-full h-auto my-4 sm:my-10 rounded-xl bg-grey-light dark:bg-pop-dark overflow-hidden">
            <Image alt="project" src={Vitaldeal} />
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
