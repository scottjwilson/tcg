"use client";

import { useState, useEffect, Key } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dropIn, reveal } from "@/lib/animations";
import ReactDOM from "react-dom";
import Overlay from "./overlay";
import Form from "@/components/QuoteForm/Form";

const Popup = ({ show, onClose }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const popupContent = show ? (
    <Overlay onClick={onClose}>
      <motion.div
        variants={reveal}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        className="bg-white my-auto mx-8 sm:mx-auto rounded-xl w-[600px] h-[500px]"
      >
        <Form />
      </motion.div>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => null}>
        {popupContent}
      </AnimatePresence>,
      //@ts-ignore
      document.getElementById("popup-modal")
    );
  } else {
    return null;
  }
};

export default Popup;
