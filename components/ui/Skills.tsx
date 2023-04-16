import { getTech } from "@/sanity/sanity-utils";

const Skills = async () => {
  const techs = await getTech();
  return (
    <section className="container my-24 bg-black">
      <hr className="my-10 " />
      <div className="grid md:grid-cols-3 justify-center">
        {techs.map((tech, idx) => (
          <div
            key={idx}
            className="md:py-8 md:space-y-2  md:text-left text-center mb-8"
          >
            <h2 className="md:text-5xl text-3xl font-bold">{tech.title}</h2>
            <p className="capitalize">{tech.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
