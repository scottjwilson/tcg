"use client";

import { useState, useEffect, Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn } from "@/lib/animations";
import ReactDOM from "react-dom";
import Overlay from "./overlay";
import ContactForm from "../forms/ContactForm";

const Contact = ({ show, onClose }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);
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
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const contactContent = show ? (
    <Overlay onClick={onClose}>
      <motion.div
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="m-auto w-[500px] px-4 py-8 bg-gray-800 rounded"
      >
        {/* <ContactForm /> */}
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
          </div>
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

export default Contact;
