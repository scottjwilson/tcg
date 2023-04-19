"use client";
import { useState } from "react";
import { IoLogoLinkedin, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import Glow from "./Glow";
import Link from "next/link";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./Logo";
const Navbar = () => {
  const [isMob, setMob] = useState(false);
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      href: "/",
      text: "home",
    },
    {
      id: 2,
      href: "/projects",
      text: "projects",
    },
    {
      id: 3,
      href: "/contact",
      text: "contact",
    },
  ];

  return (
    <nav className="py-2">
      <div className="container">
        <div className="flex justify-between">
          {/* LOGO */}
          <div>
            <Glow />
            <Logo />
          </div>
          {/* Primary Nav */}

          <div className="hidden items-center justify-center md:flex space-x-4">
            <Glow />

            {links.map((link) => (
              <Link
                className="relative text-lg capitalize"
                key={link.id}
                href={link.href}
              >
                {link.href === pathname && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 top-full block h-[2px] w-full bg-white rounded-xl "
                  />
                )}
                {link.text}
              </Link>
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
    </nav>
  );
};

export default Navbar;
