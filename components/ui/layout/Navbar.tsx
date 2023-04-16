"use client";
import { useState } from "react";

import { IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import Glow from "./Glow";
const Navbar = () => {
  const [isMob, setMob] = useState(false);
  const links = [
    {
      href: "/",
      text: "home",
    },
    {
      href: "/",
      text: "projects",
    },
    {
      href: "/",
      text: "blog",
    },
  ];

  return (
    <nav className="py-2">
      <div className="container">
        <div className="flex justify-between">
          {/* LOGO */}
          <div>
            <Glow />
            <h1 className="font-mono font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-radial from-orange-400 to-red-800">
              {/* <span className="font-thin">//</span> */}
              scottwil
            </h1>
          </div>
          {/* Primary Nav */}
          <div className="hidden items-center justify-center md:flex space-x-4">
            {links.map((link, idx) => (
              <a key={idx} className="tracking-wider" href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
          {/* secondary nav */}
          <div className=" hidden items-center space-x-4  font-light md:flex">
            <IoLogoLinkedin className="text-2xl" />
            <IoLogoTwitter className="text-2xl" />
            <IoLogoYoutube className="text-2xl" />

            {/* <a href="/contact" className="btn">
              Contact
            </a> */}
          </div>

          {/* mob button */}
          <button
            onClick={() => setMob(!isMob)}
            className="flex items-center md:hidden"
          >
            menu
          </button>
        </div>
      </div>
      {/* mob nav */}
      {isMob ? (
        <div className="bg-gray-200 absolute h-full w-full bg-primary md:hidden">
          <div className="flex flex-col p-8 space-y-8">
            {links.map((link, idx) => (
              <a key={idx} href={link.href}>
                {link.text}
              </a>
            ))}
            <a href="/account" className="bg-">
              Account
            </a>

            <button
              onClick={() => setMob(!isMob)}
              className="flex items-center md:hidden"
            >
              x
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
    // <nav className="navbar">
    //   <a href="/">
    //     <h1 className="text-6xl font-bold">Autofy</h1>
    //   </a>
    //   <div className="flex w-1/2 items-center justify-end space-x-8 bg-slate-200">

    //   </div>
    // </nav>
  );
};

export default Navbar;
