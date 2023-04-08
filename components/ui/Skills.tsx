const skillsList = [
  {
    name: "HTML",
    exp: "4 years experience",
  },
  {
    name: "CSS",
    exp: "4 years experience",
  },
  {
    name: "JavaScript",
    exp: "4 years experience",
  },
  {
    name: "React",
    exp: "4 years experience",
  },
  {
    name: "Next.js",
    exp: "4 years experience",
  },
  {
    name: "Tailwind CSS",
    exp: "4 years experience",
  },
];

const Skills = () => {
  return (
    <section className="container">
      <hr className="my-10 " />
      <div className="grid md:grid-cols-3 justify-center">
        {skillsList.map((skill, idx) => (
          <div
            key={idx}
            className="md:py-8 md:space-y-2  md:text-left text-center mb-8"
          >
            <h2 className="md:text-5xl text-3xl font-bold">{skill.name}</h2>
            <p className="capitalize">{skill.exp}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
