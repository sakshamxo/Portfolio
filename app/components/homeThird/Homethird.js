import React, { useEffect } from "react";
import "./Homethird.css";
import Image from "next/image";
import ImagePort from "../../../public/portfolio.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Homethird = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <section className="relative z-20">
      <div className="space-y-20 sm:space-y-40 homethird-div">
        <h3
          data-aos="fade-up"
          className="text-6xl sm:text-9xl font-bold text-[#f4e7d4]"
        >
          Inspired by the endless possibilities of code : I am not just a
          developer, I am a creator.
        </h3>
        <div
          data-aos="fade-up"
          className="space-y-6 sm:space-y-10 homethird-div"
        >
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            <i>Hey,</i> I'm Saksham Soni. Bhopal is my hometown, and I'm 24
            years old. Technology and programming caught my interest during my
            high school years, which later took form into pursuing a degree in
            Computer Applications. That was all about taking me in between the
            web and software development field.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            So, immediately after my studies got over, I was recruited at
            Mushroom World Futuretech as a MERN stack developer intern. One of
            the main projects I worked on was BizMetric-an HR management app. I
            built some client-based websites as well. By all of the above, I
            further motivated to get interested in user-centric software
            solutions.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            After that, I joined Geetek Global, working for solutions like Get
            Property Solution and many other client websites. My skills have
            grown in full-stack development, responsive design, and customized
            WordPress solutions. Developed by Techsurvi Pvt Ltd, The Vital is
            the SaaS Shopify app I developed, creating digital experiences for
            different clients with complete lifecycle management from user
            experience to backend functionality.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            I am currently exploring fresh solutions and developing new
            applications as an innovative software developer proficient in
            React.js, Next.js, Node.js, WordPress, Shopify, and the MERN stack
            to create meaningful digital experiences.
          </h4>
        </div>
        <div
          data-aos="fade-up"
          className="relative bg-grey-light dark:bg-pop-dark rounded-xl w-full h-96 sm:h-124 md:h-128 overflow-hidden"
        >
          <Image
            className="rounded-xl object-center object-cover"
            loading="lazy"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent",
            }}
            alt="port"
            src={ImagePort}
          />
        </div>
      </div>
    </section>
  );
};

export default Homethird;
