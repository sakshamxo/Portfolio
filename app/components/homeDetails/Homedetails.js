import React, { useEffect } from "react";
import "./Homedetails.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Homedetails = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="relative z-20 space-y-10 sm:space-y-20 ">
      <div className="space-y-10 sm:space-y-20 homedetails-div">
        <h3
          data-aos="fade-up"
          className="text-6xl sm:text-9xl font-bold text-[#f4e7d4]">
          Actions over words. Here&#39;s my journey.
        </h3>
        <section className="relative z-30 space-y-10 sm:space-y-20">
          <div data-aos="fade-up" className="space-y-4 homedetails-div">
            <h4 className="text-sm sm:text-base font-medium uppercase text-[#f4e7d4]">
              Experience
            </h4>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                Software Engineer & Technical Lead
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Muno AI Pvt. Ltd., from April 2025 to Till Date
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                At Muno AI Pvt. Ltd., I led and developed MindTraqk, an
                AI-powered workforce intelligence SaaS platform. From concept to
                live deployment, I built the complete system architecture,
                frontend, and backend using React, Node.js, TypeScript, and
                MongoDB, integrating OpenAI and OpenSource LLM for deep work
                detection, burnout analysis, and productivity insights. I
                directed a team of developers and delivered a scalable,
                production-ready AI platform that empowers organizations to
                optimize performance and reduce burnout.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                Software Consultant
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Techsurvi Pvt. Ltd., from January 2024 to November 2024
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                At Techsurvi Pvt Ltd, I developed The-Vital, a Shopify SaaS app,
                handling user research, UX design, and UI development. Built
                with Node.js, React.js, and SQL, I delivered a seamless,
                efficient solution tailored to Shopify&#39;s ecosystem.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                Full Stack Web Developer
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Geetek Global, from September 2023 to December 2023
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                At Geetek Global, I contributed to the development of Get
                Property Solution, a web application streamlining property
                management, and several client-based websites. I worked
                extensively on building user-centric features, ensuring
                responsiveness, and optimizing performance across diverse
                platforms.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                Software Developer
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Mushroom World FutureTech, from June 2023 to September 2023
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                At Mushroom World Futuretech, during my internship, I worked on
                BizMetric, an HR management app, focusing on streamlining HR
                processes. Additionally, I developed responsive websites for
                clients, showcasing strong problem-solving skills and delivering
                high-quality web solutions.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-4 homedetails-div">
            <h4 className="text-sm sm:text-base font-medium uppercase text-[#f4e7d4]">
              Education
            </h4>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                Bachelors of Computer Applications
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Barkatullah University, from October 2020 to May 2023
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                Bachelors of Computer Applications Degree
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                10<sup>th</sup> & 12<sup>th</sup>
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                CBSE, May 2017 & May 2019
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                I completed my 10th and 12th grades under the CBSE Board at
                Mother Teresa Hr. Sec. School, where I built a strong academic
                foundation and actively participated in extracurricular
                activities that honed my teamwork and problem-solving skills.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-4 homedetails-div">
            <h4 className="text-sm sm:text-base font-medium uppercase text-[#f4e7d4]">
              Certifications
            </h4>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                React Js & Front-end Development
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Sheryians Coding School, from December 2022 to March 2023
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                Mastering React.js, Next.js, Firebase, Redux, and React Router
                DOM for building dynamic web apps.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                Backend Development
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Sheryians Coding School, from June 2022 to November 2022
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                Expertise in Node.js, MongoDB, Payment Gateways, Socket.io,
                Express.js, and JWT authentication to build scalable and secure
                server-side applications.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" className="space-y-4 homedetails-div">
            <h4 className="text-sm sm:text-base font-medium uppercase text-[#f4e7d4]">
              Achievements
            </h4>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                Junior Vs Senior
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Sheryians Coding School, April 2022
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                Won First Prize in the Junior vs Senior coding competition at
                Sheryians Coding School, showcasing strong problem-solving and
                coding skills.
              </p>
            </div>
            <div className="space-y-2">
              <h5 className="text-xl sm:text-3xl text-[#f4e7d4] font-bold">
                Design Showcase
              </h5>
              <p className="text-sm sm:text-base text-[#f4e7d4] italic font-medium">
                Sheryians Coding School, from July 2022
              </p>
              <p className="text-sm sm:text-base text-[#f4e7d4] font-medium">
                Secured Fifth Place in the Design Showcase 2022, demonstrating
                creativity and design skills in a competitive environment.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="homedetails-div">
        <h4 data-aos="fade-up" className="text-2xl sm:text-4xl text-[#f4e7d4]">
          Not enough? Here is my{" "}
          <u>
            <Link
              className="ml-1 sm:ml-2 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-500"
              href={"/resume.pdf"}
              download={"resume.pdf"}>
              curriculum
            </Link>
          </u>
        </h4>
      </div>
    </section>
  );
};

export default Homedetails;
