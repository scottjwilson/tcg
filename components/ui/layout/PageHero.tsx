type PageHeroProps = {
  title: string;
  subtitle?: string;
};

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <header className="bg-pagehero bg-cover bg-center h-[50vh] relative">
      <div className="absolute top-0 left-0 bg-black bg-opacity-20 h-full w-full">
        <div className=" max-w-3xl mx-auto text-center flex flex-col justify-center items-center h-full space-y-4 px-8">
          <p className="text-sm text-white">- THE CLEANING GOUROU INC -</p>
          <h1 className="font-mono font-semibold md:text-7xl text-5xl text-white">
            {title}
          </h1>
          <p className="text-white font-semibold">{subtitle}</p>
        </div>
      </div>
    </header>
  );
};
export default PageHero;
