const list = [
  {
    id: 1,
    title: "Bonded & Insured Service",
    subtitle: "Backed by Top Insurers",
    body: "We prioritize your satisfaction with our fully bonded & insured cleaning service. We guarantee quality and look forward to being your one-stop solution for commercial cleaning.",
  },
  {
    id: 2,
    title: "Quality Equipment, Quality Work",
    subtitle: "Reliable Brands for Sanitary Results",
    body: "Our use of top brands ensures a presentable and sanitary environment, leaving you with a feeling of cleanliness satisfaction.",
  },
  {
    id: 3,
    title: "Quality Staffing, Thorough Sanitization",
    subtitle: "Experienced and Credible Staff",
    body: "Our staff undergoes background checks, extensive training, and use of sanitary products to ensure proper sanitization without damage.",
  },
  {
    id: 4,
    title: "Reliable Cleaning Service",
    subtitle: "We Provide the Right Amount of Staff",
    body: "We pride ourselves on providing dedicated and reliable representatives to ensure a sanitized and healthy environment for your business.",
  },
];

const Feautures = () => {
  return (
    <div className="container my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {list.map((item) => (
          <div key={item.id} className="text-center space-y-4">
            <h1 className="font-mono text-3xl capitalize">{item.title}</h1>
            <h2>{item.subtitle}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Feautures;
