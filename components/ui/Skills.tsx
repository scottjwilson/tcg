import { getTech } from "@/sanity/sanity-utils";
import Glow from "./layout/Glow";

const Skills = async () => {
  const tech = await getTech();
  return (
    <div className="px-4">
      <section className="max-w-5xl mx-auto my-24 bg-gray-800 rounded-lg px-8">
        {/* <hr className="my-10 " /> */}
        <div className="grid md:grid-cols-3 gap-5">
          {tech.map((t) => (
            <div
              key={t._id}
              className="md:py-8 md:space-y-2 md:text-left text-center my-4"
            >
              <h2 className="md:text-5xl text-3xl font-bold">{t.title}</h2>
              <p className="capitalize">{t.experience}</p>
            </div>
          ))}
          <Glow />
        </div>
      </section>
    </div>
  );
};

export default Skills;
