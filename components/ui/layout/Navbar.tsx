"use client";
import { useState } from "react";
import { VscCallOutgoing, VscMenu } from "react-icons/vsc";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Logo from "./Logo";
import ProjectCard from "../ProjectCard";
import Contact from "../modal/contact";
import Menu from "../modal/menu";
const Navbar = () => {
  const [isMob, setMob] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const pathname = usePathname();

  const links = [
    {
      id: 1,
      href: "/",
      text: "home",
    },
    {
      id: 2,
      href: "/services",
      text: "services",
    },
    {
      id: 3,
      href: "/about",
      text: "about us",
    },
    {
      id: 4,
      href: "/contact",
      text: "contact us",
    },
    {
      id: 5,
      href: "/careers",
      text: "careers",
    },
  ];

  return (
    <>
      <Menu show={isMenuOpen} onClose={toggleMenu} links={links} />
      <nav className="py-4 border-b">
        <div className="container">
          <div className="flex justify-between">
            {/* mob button */}
            <button
              onClick={toggleMenu}
              className="flex items-center lg:hidden"
            >
              <VscMenu className="text-3xl" />
            </button>
            {/* LOGO */}
            <div>
              <Logo />
            </div>
            {/* Primary Nav */}
            <div className="hidden items-center justify-center lg:flex space-x-8">
              {links.map((link) => (
                <Link
                  className="relative capitalize text-sm"
                  key={link.id}
                  href={link.href}
                >
                  {link.href === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[2px] w-full bg-teal-600 rounded-xl "
                    />
                  )}
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="lg:hidden flex flex-col justify-center">
              <a href="tel:+18189608662">
                <VscCallOutgoing className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
