"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import inspire from "../../../public/inspirationcomock.jpg";
import vital from "../../../public/thevitalappmock.jpg";
import loktantra from "../../../public/loktantramock.jpg";
import gcmerch from "../../../public/gcmerchmock.jpg";
import orkia from "../../../public/orkiamock.jpg";
import nonasties from "../../../public/nonastiesmock.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Homegrids = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({ duration: 1200, once: true });
  }, []);

  if (!mounted) return null; // Prevents hydration errors

  const projects = [
    { href: "/projects/thevitalapp", src: vital, title: "The Vital App", subtitle: "SaaS Shopify Application" },
    { href: "/projects/inspirationco", src: inspire, title: "The Inspiration Co.", subtitle: "React Website" },
    { href: "/projects/loktantra-udgosh", src: loktantra, title: "Loktantra Udgosh", subtitle: "Next.js Website" },
    { href: "/projects/orkia-flavors", src: orkia, title: "Orkia Flavours", subtitle: "Shopify Website" },
    { href: "/projects/gcmerch", src: gcmerch, title: "GC Merch", subtitle: "React Website" },
    { href: "/projects/no-nasties", src: nonasties, title: "No Nasties", subtitle: "React Website" },
  ];

  return (
    <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 homegrid-div">
      {projects.map((project, index) => (
        <Link href={project.href} key={index}>
          <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
            <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
              <Image
                src={project.src}
                alt={project.title}
                className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
                placeholder="blur"
                priority={index < 2} // Load first two images faster
                {...(index >= 2 && { loading: "lazy" })} 
              />
            </div>
            <div className="space-y-1 sm:space-y-2 mx-1">
              <h5 className="font-bold text-2xl sm:text-3xl">{project.title}</h5>
              <p className="font-medium uppercase text-sm">{project.subtitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Homegrids;
