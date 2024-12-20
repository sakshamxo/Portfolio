import Link from "next/link";
import React, { useEffect } from "react";
import "./header.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <nav
      data-aos="fade-down"
      className=" w-full sm:flex sm:justify-between pt-6 sm:pt-10 xl:pt-16 space-y-10 sm:space-y-0 relative z-50"
    >
      <header className="flex" style={{ opacity: "1", transform: "none" }}>
        <Link className="cursor-pointer" href={"/"}>
          <div className="space-y-1">
            <h1 className="text-xl font-bold uppercase !cursor-pointer text-[#f4e7d4]">
              SAKSHAM SONI
            </h1>
            <h2 className="font-medium !cursor-pointer text-[#f4e7d4]">
              Full Stack Developer
            </h2>
          </div>
        </Link>
      </header>
      <nav style={{ opacity: "1", transform: "none" }}>
        <ul className="space-y-2 sm:space-y-1 ">
          <li className="navitem">
            <Link href={"/projects"} className="group  uppercase-text">
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
                📁
              </span>
              Projects Archive //
            </Link>
          </li>
          <li className="navitem">
            <Link href={"mailto:msakshams24@gmail.com"} className="group uppercase-text ">
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
                👋
              </span>
              Say Hello //
            </Link>
          </li>
          <li className="navitem">
            <Link href={"mailto:msakshams24@gmail.com"} className="group uppercase-text ">
              {" "}
              <span className="hidden md:inline-flex invisible group-hover:visible transition duration-500 pr-2 not-italic">
                💼
              </span>
              Hire Me //
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Header;
