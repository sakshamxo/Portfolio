import React, { useEffect } from "react";
import "./Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <footer
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
      className="w-full relative mt-40 mb-6 sm:mb-10 xl:mb-16 z-40"
    >
      <div className="footer-div">
        <p className="text-sm font-medium uppercase cursor-default text-[#f4e7d4]">
          <span className="italic">@2024</span>
          ,Saksham Soni
        </p>
      </div>
    </footer>
  );
};

export default Footer;
