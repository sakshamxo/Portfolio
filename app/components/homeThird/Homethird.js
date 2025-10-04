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
            I began my career as a software developer at Mushroom World
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
            As a Software Engineer & Tech Lead at Muno AI Pvt. Ltd., I am
            currently the leader of developing MindTraqk, a workforce
            intelligence platform driven by AI. In order to deliver a scalable,
            production-ready SaaS platform, I lead a team of developers, created
            the frontend and backend, integrated AI models for deep work
            detection and productivity insights, and designed the entire system
            architecture.
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
