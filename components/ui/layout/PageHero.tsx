type PageHeroProps = {
  title: string;
  subtitle?: string;
};

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <header className="max-w-xl mx-auto h-48 flex flex-col justify-center items-center my-8  px-8 space-y-8">
      <div>
        <h1 className="big-title">{title}</h1>
      </div>
      <div className="">
        <p className="text-lg">{subtitle}</p>
      </div>
    </header>
  );
};
export default PageHero;
