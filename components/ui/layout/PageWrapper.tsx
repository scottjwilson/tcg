"use client";

import { motion } from "framer-motion";
import classNames from "classnames";
import React from "react";

const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={classNames("min-h-screen", className)}
    >
      {children}
    </motion.div>
  );
};
export default PageWrapper;
