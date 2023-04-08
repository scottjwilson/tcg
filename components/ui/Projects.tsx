import { link } from "fs";
import Image from "next/image";

const projectData = [
  {
    name: "design portfolio",
    img: "/thumbnail-project-1-large.webp",
    tech: ["HTML", "CSS"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    name: "e-learning landing page",
    img: "/thumbnail-project-2-large.webp",
    tech: ["HTML", "CSS"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    name: "Todo web app",
    img: "/thumbnail-project-3-large.webp",
    tech: ["HTML", "CSS"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    name: "entertainment web app",
    img: "/thumbnail-project-4-large.webp",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    name: "memory game",
    img: "/thumbnail-project-5-large.webp",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
  {
    name: "art gallery showcase",
    img: "/thumbnail-project-6-large.webp",
    tech: ["HTML", "CSS"],
    href: "https://scottwil.com",
    source: "https://github.com",
  },
];
const Projects = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-between">
        <h1 className="big-title">Projects</h1>
        <button className="button">Contact Me</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4 justify-center">
        {projectData.map((project) => (
          <div className="my-8">
            <Image
              src={project.img}
              width={570}
              height={400}
              alt={project.name}
            />
            <div className="flex flex-col space-y-2 my-6">
              <h3 className="uppercase text-2xl font-bold">{project.name}</h3>
              <ul className="flex space-x-4 text-lg">
                {project.tech.map((t) => (
                  <li>{t}</li>
                ))}
              </ul>
              <div className="flex space-x-4">
                <a className="btn" href={project.href}>
                  view project
                </a>
                <a className="btn" href={project.source}>
                  view code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
