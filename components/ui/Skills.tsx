import { getTech } from "@/sanity/sanity-utils";

const Skills = async () => {
  const tech = await getTech();
  return (
    <>
      <section className="container my-24 bg-black">
        <hr className="my-10 " />
        <div className="grid md:grid-cols-3 justify-center">
          {tech.map((t) => (
            <div
              key={t._id}
              className="md:py-8 md:space-y-2  md:text-left text-center mb-8"
            >
              <h2 className="md:text-5xl text-3xl font-bold">{t.title}</h2>
              <p className="capitalize">{t.experience}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
