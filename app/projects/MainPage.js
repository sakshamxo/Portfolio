import React, { useEffect } from "react";
import Projectgrid from "./projectGrid/Projectgrid";
import AOS from "aos";
import "aos/dist/aos.css";

const MainPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <section
      className="pt-[40vh] sm:pt-[60vh] relative z-50"
      style={{ opacity: "1", transform: "none" }}
    >
      <div data-aos="fade-up">
        <div>
          <h1 className="font-bold text-4xl sm:text-6xl text-[#f4e7d4]">
            Project Archive
          </h1>
        </div>
        <Projectgrid />
      </div>
    </section>
  );
};

export default MainPage;
