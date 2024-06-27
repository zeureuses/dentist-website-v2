"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ScaleLinkProps } from "@/interfaces";

const ScaleLink: React.FC<ScaleLinkProps> = ({ children, href, className }) => {
  return (
    <motion.span
      whileHover="hover"
      initial="initial"
      variants={{
        initial: { scale: 1 },
        hover: { scale: 1.05 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link className={`text-lg underline ${className}`} href={href}>
        {children}
      </Link>
    </motion.span>
  );
};

export default ScaleLink;

{
  /* <div className={cn(concert.className, "text-3xl flex gap-12 lg:text-4xl lg:gap-16")}></div> */
}
