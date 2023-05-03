"use client";

import { useState, useEffect, Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn, reveal } from "@/lib/animations";
import ReactDOM from "react-dom";
import Overlay from "./overlay";
import ContactForm from "../forms/ContactForm";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Menu = ({ show, onClose, links }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const contactContent = show ? (
    <Overlay onClick={onClose}>
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="bg-white m-auto rounded-md py-12 w-80"
      >
        <div className="flex flex-col justify-center items-center space-y-8 w-full">
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
          {links.map((link: any, i: any) => (
            <motion.a
              className="relative capitalize text-xl"
              key={link.id}
              href={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {link.href === pathname && (
                <span
                  // layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-teal-600 rounded-xl "
                />
              )}
              {link.text}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {contactContent}
      </AnimatePresence>,
      //@ts-ignore
      document.getElementById("contact-modal")
    );
  } else {
    return null;
  }
};

export default Menu;
