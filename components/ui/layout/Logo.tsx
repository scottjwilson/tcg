import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex">
        <div className="w-20">
          <Image
            src="/logo.png"
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full rounded-lg"
            alt="logo"
          />
        </div>
        <div className="hidden md:flex flex-col justify-center ml-4">
          <h1 className="font-mono text-2xl text-teal-600 uppercase ">
            The Cleaning GouRou
          </h1>
          <p className="capitalize text-xs tracking-widest text-gray-600">
            professional cleaning for a professional you
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Logo;
