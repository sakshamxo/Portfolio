import React, { useEffect } from "react";
import "../homepage/homepage.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Homepage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <section className="flex relative pt-[40vh] sm:pt-[60vh] z-20 overscroll-y-none section-homepage">
      <div>
        <h1
          data-aos="fade-up"
          className="title-summary text-3xl sm:text-5xl text-[#f4e7d4]">
          {" "}
          <i>Hello,</i> I am Saksham, a Software Engineer & Tech Lead with 2+
          years of experience building scalable, AI-powered, and full-stack web
          applications. I specialize in React.js, Next.js, Node.js, and the MERN
          stack, crafting seamless user interfaces, dynamic dashboards, and
          robust backend systems. Currently, I lead the development of MindTraqk
          at Muno AI Pvt. Ltd., an AI-driven workforce intelligence platform -
          building everything from architecture to frontend, backend, and AI
          integrations, while mentoring a team of developers to deliver
          production-ready solutions.I thrive on transforming complex ideas into
          impactful digital experiences that blend functionality with design.
          Whether it’s optimizing backend workflows, building interactive UIs,
          or deploying scalable solutions, my goal is to create software that
          drives results and delights users.{" "}
        </h1>
      </div>
    </section>
  );
};

export default Homepage;
