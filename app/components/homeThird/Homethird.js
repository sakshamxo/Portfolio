import React, { useEffect } from "react";
import "./Homethird.css";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import ThreeModel from "./ThreeBackground";

const Homethird = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <section className="relative z-20">
      <div className="space-y-20 sm:space-y-40 homethird-div">
        <h3
          data-aos="fade-up"
          className="text-6xl sm:text-9xl font-bold text-[#f4e7d4]">
          Inspired by the endless possibilities of code : I am not just a
          developer, I am a creator.
        </h3>
        <div
          data-aos="fade-up"
          className="space-y-6 sm:space-y-10 homethird-div">
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            <i>Hey,</i> I&#39;m Saksham Soni. Bhopal is my hometown, and I&#39;m
            24 years old. In high school, I developed a keen interest in
            technology and programming, leading me to pursue a degree in
            computer applications and pursue the field of software development
            and the web.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            I began my career as a software developer intern at Mushroom World
            Futuretech as soon as I graduated, where I developed a number of
            client-based websites and the HR management app BizMetric. My desire
            to create user-centric software solutions was enhanced by this
            encounter.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            My expertise in full-stack development and responsive design was
            further enhanced when I joined Geetek Global and contributed to
            various client websites and products like Get Property Solution.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            I created the SaaS application The Vital at Techsurvi Pvt. Ltd.,
            overseeing the entire product lifecycle from backend functionality
            to user experience and providing numerous clients with flawless
            digital experiences.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            At Muno AI, I worked as a Software Engineer Lead and currently
            continue as a Consultant, leading the development of MindTraqk, an
            AI-powered workforce intelligence platform. I designed and scaled
            the platform using React.js, Node.js, TypeScript, MongoDB, and AI
            integrations including OpenAI and open-source LLMs for deep work
            detection, burnout analysis, and productivity insights. I currently
            contribute to the platform’s V2 architecture and advanced AI
            capabilities while mentoring and leading development initiatives.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            I also worked as an SDE-1 at SuperAGI, where I contributed to
            AI-driven SaaS products and scalable support systems. I led the
            Support Engineering Pod, built automated communication and follow-up
            systems, optimized AI conversation pipelines, and developed
            AI-powered support and knowledge management modules while working
            across React.js, Vue.js, Go, and Ruby on Rails.
          </h4>
          <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
            As a software engineer skilled in React.js, Next.js, Node.js, and
            the MERN stack, I am at present exploring innovative approaches and
            developing new applications, producing significant, scalable, and
            AI-powered digital experiences.
          </h4>
        </div>
        <div
          data-aos="fade-up"
          className="relative bg-grey-light dark:bg-pop-dark rounded-xl w-full h-[700px]">
          {/* <Image
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
          /> */}
          <ThreeModel />
        </div>
      </div>
    </section>
  );
};

export default Homethird;
