"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getProjects } from "@/sanity/sanity-utils";
import { type } from "os";

const projectData = [
  {
    id: 1,
    name: "design portfolio",
    img: "/thumbnail-project-1-large.webp",
    tech: ["HTML", "CSS"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    id: 2,
    name: "e-learning landing page",
    img: "/thumbnail-project-2-large.webp",
    tech: ["HTML", "CSS"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    id: 3,

    name: "Todo web app",
    img: "/thumbnail-project-3-large.webp",
    tech: ["HTML", "CSS"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    id: 4,
    name: "entertainment web app",
    img: "/thumbnail-project-4-large.webp",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    id: 5,
    name: "memory game",
    img: "/thumbnail-project-5-large.webp",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    id: 6,
    name: "art gallery showcase",
    img: "/thumbnail-project-6-large.webp",
    tech: ["HTML", "CSS"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
];

const Projects = async () => {
  const projects_data = await getProjects();
  return (
    <section className="container">
      <div className="flex items-center justify-between mb-12">
        <h1 className="big-title">Projects</h1>
        <button className="button">Contact Me</button>
      </div>
      <div className="grid md:grid-cols-2 gap-8 justify-center">
        {projects_data.map((project) => {
          // const tecc = Object.entries(project.tech);

          return (
            <motion.div
              key={project._id}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              style={{ x: 1 }}
            >
              <Image
                src={project.mainImage}
                width={570}
                height={400}
                alt={project.title}
              />

              <div className="flex flex-col space-y-2 my-6">
                <h3 className="uppercase text-2xl font-bold">
                  {project.title}
                </h3>
                <ul className="flex space-x-4 text-lg">
                  {project.tech.map((tecc) => (
                    <li key={tecc._id}>{tecc.title}</li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <a className="btn" href={project.title}>
                    view project
                  </a>
                  <a className="btn" href={project.title}>
                    view code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
