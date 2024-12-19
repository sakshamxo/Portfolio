import React, { useEffect } from "react";
import Projectcard from "../component/Projectcard";
import { projects } from "../../data/project";
import Link from "next/link";
import Image from "next/image";

const Projectgrid = () => {
  return (
    <div className="mt-10 sm:mt-20 grid grid-cols-1 gap-y-10 sm:gap-y-20 gap-x-6 2xl:gap-x-10 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <Link key={project.id} href={project.link}>
          <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
            <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
              <Image
                alt={project.title}
                src={project.image}
                height={"500"}
                width={"500"}
                className="object-center object-cover group-hover:scale-105 transition duration-500 rounded-xl"
              />
            </div>
            <div className="space-y-1 sm:space-y-2 mx-1">
              <h5 className="font-bold text-2xl sm:text-3xl">
                {project.title}
              </h5>
              <p className="font-medium uppercase text-sm">
                {project.shorttitle}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projectgrid;
