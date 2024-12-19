import Image from "next/image";
import Link from "next/link";

export default function Projectcard({ project }) {
  <Link href={project.link}>
    <div className="group cursor-pointer sm:opacity-70 sm:hover:opacity-100 duration-500 transition space-y-3 sm:space-y-4">
      <div className="relative w-full h-116 bg-grey-light dark:bg-pop-dark sm:h-124 aspect-w-1 rounded-xl overflow-hidden safari_fix">
        <Image
          alt={project.title}
          src={project.image}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="space-y-1 sm:space-y-2 mx-1">
        <h5 className="font-bold text-2xl sm:text-3xl">{project.title}</h5>
        <p className="font-medium uppercase text-sm">{project.shorttitle}</p>
      </div>
    </div>
  </Link>;
}
