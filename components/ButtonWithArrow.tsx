"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ButtonWithArrowProps } from "@/interfaces";
import { MainFontBold } from "@/fonts";
import { cn } from "@/utils/cn";

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
  children,
  onClick,
  className,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 10px rgba(0,0,0,0.2)",
      background: "linear-gradient(45deg, #383839, #A9B2A0)",
    },
    tap: { scale: 0.95 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2 } },
    hover: {
      textShadow: "0px 0px 8px rgba(255,255,255,0.5)",
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 0, x: -10 },
    hover: {
      opacity: 1,
      x: [20, 25, 20],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1,
        },
      },
    },
  };

  return (
    <motion.button
      className={cn(
        MainFontBold.className,
        `relative overflow-hidden rounded-full bg-customDarkGreen px-8 py-2 text-lg text-white ${className}`,
      )}
      onClick={onClick}
      variants={buttonVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      whileTap="tap"
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
        background: { duration: 0.3 },
      }}
    >
      <motion.span
        className="relative z-10 mr-2 inline-block"
        variants={textVariants}
      >
        {children}
      </motion.span>
      <motion.span className="absolute transform" variants={arrowVariants}>
        →
      </motion.span>
      <motion.div
        className="absolute inset-0 z-0"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0 },
          hover: {
            opacity: 1,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
          },
        }}
      />
    </motion.button>
  );
};

export default ButtonWithArrow;

{
  /* <div className={cn(concert.className, "text-3xl flex gap-12 lg:text-4xl lg:gap-16")}></div> */
}
