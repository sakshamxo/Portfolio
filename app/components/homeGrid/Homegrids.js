import React, { useEffect } from "react";
import "./Homegrid.css";
import Link from "next/link";
import Image from "next/image";
import inspire from "../../../public//inspirationcomock.jpg";
import vital from "../../../public/thevitalappmock.jpg";
import loktantra from "../../../public/loktantramock.jpg";
import gcmerch from "../../../public/gcmerchmock.jpg";
import orkia from "../../../public/orkiamock.jpg";
import nonasties from "../../../public/nonastiesmock.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Homegrids = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-1 gap-y-10 sm:gap-y-20 gap-x-6 2xl:gap-x-10 sm:grid-cols-2 xl:grid-cols-3 homegrid-div"
    >
      {/* //project-1 */}
      <Link href={"/projects/thevitalapp"}>
        <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
          <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
            <Image
              alt="The Vital App"
              loading="lazy"
              className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
              src={vital}
            />
          </div>
          <div className="space-y-1 sm:space-y-2 mx-1">
            <h5 className="font-bold text-2xl sm:text-3xl">The Vital App</h5>
            <p className="font-medium uppercase text-sm">
              Saas Shopify Application
            </p>
          </div>
        </div>
      </Link>
      {/* //project-2 */}
      <Link href={"/projects/inspirationco"}>
        <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
          <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
            <Image
              alt="The Inspiration Co"
              loading="lazy"
              className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
              src={inspire}
            />
          </div>
          <div className="space-y-1 sm:space-y-2 mx-1">
            <h5 className="font-bold text-2xl sm:text-3xl">The Inspiration Co.</h5>
            <p className="font-medium uppercase text-sm">React Website</p>
          </div>
        </div>
      </Link>
      {/* //project-3 */}
      <Link href={"/projects/loktantra-udgosh"}>
        <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
          <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
            <Image
              alt="Loktantra Udgosh"
              loading="lazy"
              className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
              src={loktantra}
            />
          </div>
          <div className="space-y-1 sm:space-y-2 mx-1">
            <h5 className="font-bold text-2xl sm:text-3xl">Loktantra Udgosh</h5>
            <p className="font-medium uppercase text-sm">Next.js Website</p>
          </div>
        </div>
      </Link>
      {/* //project-4 */}
      <Link href={"/projects/orkia-flavors"}>
        <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
          <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
            <Image
              loading="lazy"
              className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
              alt="Orkia Flavors"
              src={orkia}
            />
          </div>
          <div className="space-y-1 sm:space-y-2 mx-1">
            <h5 className="font-bold text-2xl sm:text-3xl">Orkia Flavours</h5>
            <p className="font-medium uppercase text-sm">Shopify Website</p>
          </div>
        </div>
      </Link>
      {/* //project-5 */}
      <Link href={"/projects/gcmerch"}>
        <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
          <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
            <Image
              loading="lazy"
              className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
              alt="Ghost Circus Merch"
              src={gcmerch}
            />
          </div>
          <div className="space-y-1 sm:space-y-2 mx-1">
            <h5 className="font-bold text-2xl sm:text-3xl">GC Merch</h5>
            <p className="font-medium uppercase text-sm">React Website</p>
          </div>
        </div>
      </Link>
      {/* //project-6 */}
      <Link href={"/projects/no-nasties"}>
        <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
          <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
            <Image
              loading="lazy"
              className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
              alt="No Nasties"
              src={nonasties}
            />
          </div>
          <div className="space-y-1 sm:space-y-2 mx-1">
            <h5 className="font-bold text-2xl sm:text-3xl">No Nasties</h5>
            <p className="font-medium uppercase text-sm">React Website</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Homegrids;
