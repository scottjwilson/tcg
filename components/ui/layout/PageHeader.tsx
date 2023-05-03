import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  heroImage?: string;
};

const PageHeader = ({ title, subtitle, heroImage }: PageHeaderProps) => {
  return (
    <header className="bg-cover bg-center h-[50vh] relative">
      <Image
        src={heroImage || "/images/hero.jpg"}
        alt={title}
        sizes="100vw"
        fill
        style={{ objectFit: "cover", objectPosition: "bottom" }}
      />
      <div className="absolute top-0 left-0 bg-black bg-opacity-20 h-full w-full">
        <div className="flex flex-col justify-center items-center h-full space-y-4">
          <p className="text-sm text-white">{subtitle}</p>
          <h1 className="text-center font-mono font-semibold text-7xl text-white">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};
export default PageHeader;
