import React, { useEffect } from "react";
import "./Homeforth.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Homeforth = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  
    const scrollToTop = (e) => {
      e.preventDefault(); // Prevent default anchor link behavior
      document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section className="relative z-40 space-y-10 sm:space-y-20 pb:10 sm:pb-20">
      <div className="homeforth-div">
        <h3
          data-aos="fade-up"
          className="text-6xl sm:text-9xl font-bold text-[#f4e7d4]"
        >
          Just drop me a line to grab a drink.
        </h3>
      </div>
      <div data-aos="fade-up" className="space-y-2 homeforth-div">
        <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
          If anything of those sounds intriguing, just feel free to reach out to
          me. You are welcome.
        </h4>
        <h4 className="text-2xl sm:text-4xl text-[#f4e7d4]">
          And if you’re lazy and don’t want to scroll to get back to the top,
          <Link href={"#top"} onClick={scrollToTop} >
            <span className="ml-1 sm:ml-2 underline underline-offset-8 cursor-pointer sm:opacity-70 sm:hover:opacity-100 transition duration-500">
              i feel you.
            </span>
          </Link>
        </h4>
      </div>
      <div className="homeforth-div">
        <div data-aos="fade-up" className="space-y-2">
          <li className="contactitem">
            <Link href={'https://www.linkedin.com/in/saksham-soni-568844196/'} target="_blank" className="group">
              {" "}
              Linkedin Me //{" "}
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pl-2 not-italic">
                🤝
              </span>
            </Link>
          </li>
          <li className="contactitem">
            <Link href={'https://github.com/sakshamxo'} target="_blank" className="group">
              {" "}
              Github //{" "}
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pl-2 not-italic">
                🤝
              </span>
            </Link>
          </li>
          <li className="contactitem">
            <Link href={'mailto:msakshams24@gmail.com'} target="_blank" className="group">
              {" "}
              Say hello //{" "}
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pl-2 not-italic">
                🤝
              </span>
            </Link>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Homeforth;
