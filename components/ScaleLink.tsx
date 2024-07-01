"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { ScaleLinkProps } from "@/interfaces";
import { MainFontBold } from "@/fonts";
import { cn } from "@/utils/cn";

const ScaleLink: React.FC<ScaleLinkProps> = ({ children, href, className }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  const linkVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2, // Adjust this value to change the animation speed
        ease: "easeOut"
      }
    },
    hover: { scale: 1.05 },
  };

  return (
    <motion.span
      className={cn(MainFontBold.className, `text-lg underline ${className}`)}
      variants={linkVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      transition={{ type: "spring", stiffness: 400, damping: 10 }} // This now applies to hover and tap animations
    >
      <Link href={href}>
        {children}
      </Link>
    </motion.span>
  );
};

export default ScaleLink;




{
  /* <div className={cn(concert.className, "text-3xl flex gap-12 lg:text-4xl lg:gap-16")}></div> */
}
