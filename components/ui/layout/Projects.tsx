"use client";
import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);
const FramerLink = motion(Link);
const Projects = ({ projects }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      {projects.map((project: any) => {
        return (
          <div key={project._id} className="col-span-1 overflow-hidden">
            <div className="w-full flex flex-col items-center justify-center relative h-full">
              <FramerLink
                href="/"
                target="_blank"
                className="cursor-pointer overflow-hidden h-full w-full "
                whileHover={{ scale: 1.3, backgroundColor: "#000" }}
                transition={{ duration: 0.5 }}
              >
                {/* <div className="flex absolute top-0 left-0  bg-opacity-20 bg-black h-full w-full">
                  <h1 className="text">{project.title}</h1>
                </div> */}

                <div className="z-10 absolute top-0 left-0 bg-black hover:bg-opacity-30 bg-opacity-10 h-full w-full transition ease-linear "></div>
                <Image
                  src={project.mainImage}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full bg-cover bg-center"
                  alt={project.title}
                  priority
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <h1 className="font-mono text-2xl text-white z-20 capitalize">
                    {project.title}
                  </h1>
                </div>
                {/* <FramerImage
                  src={project.mainImage}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-full w-full bg-cover bg-center"
                  whileHover={{ scale: 1.3, backgroundColor: "#000" }}
                  transition={{ duration: 0.5 }}
                  alt={project.title}
                  priority
                /> */}
              </FramerLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
