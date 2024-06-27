"use client";

import React from "react";
import { motion } from "framer-motion";
import { ButtonWithArrowProps } from "@/interfaces";

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <motion.button
      className={`relative overflow-hidden rounded-full bg-customDarkGreen px-8 py-2 text-lg text-white ${className}`}
      onClick={onClick}
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.05 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.span className="mr-2 inline-block">{children}</motion.span>
      <motion.span
        className="absolute transform"
        variants={{
          initial: { opacity: 0, x: -10 },
          hover: { opacity: 1, x: 20 },
        }}
        transition={{ duration: 0.25 }}
      >
        →
      </motion.span>
    </motion.button>
  );
};

export default ButtonWithArrow;

{
  /* <div className={cn(concert.className, "text-3xl flex gap-12 lg:text-4xl lg:gap-16")}></div> */
}
