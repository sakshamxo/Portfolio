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
          className="title-summary text-3xl sm:text-5xl text-[#f4e7d4]"
        >
          {" "}
          <i>Hello,</i> I am Saksham, a software developer skilled in
          developing on React.js, Next.js, Node.js, WordPress, Shopify, and the
          MERN stack. In the last 1.5 years, I have focused on creating seamless
          web applications and dynamic user interfaces, building scalable MERN
          stack solutions, optimizing backend systems, and developing robust
          WordPress and Shopify websites. I craft digital experiences ranging
          from responsive websites to versatile e-commerce platforms. My
          commitment is to meld function with form and use the latest
          technologies in whatever platform I choose, pushing myself at each
          step in developing the best solution.{" "}
        </h1>
      </div>
    </section>
  );
};

export default Homepage;
