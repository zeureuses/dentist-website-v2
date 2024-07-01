// Navbar.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/services", name: "Services" },
  { path: "/contact", name: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  };

  // @ts-ignore
  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="currentColor"
      strokeLinecap="round"
      {...props}
    />
  );

  return (
    <nav className="absolute z-20 h-12 w-full">
      <div className="mx-auto h-full max-w-7xl">
        <div className="flex h-full items-center justify-between px-8">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="z-50">
            <motion.button
              onClick={toggleMenu}
              className="mt-3 inline-flex items-center justify-center rounded-md text-customDarkGreen"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-7 w-7" viewBox="0 0 24 24">
                <Path
                  variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                  }}
                  animate={isOpen ? "open" : "closed"}
                />
                <Path
                  d="M 2 9.423 L 20 9.423"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.1 }}
                  animate={isOpen ? "open" : "closed"}
                />
                <Path
                  variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                  }}
                  animate={isOpen ? "open" : "closed"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-gray-800"
          >
            <div className="flex h-full flex-col items-center justify-center space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  custom={index}
                  variants={itemVariants}
                >
                  <Link
                    href={item.path}
                    className="text-2xl font-medium text-white hover:text-gray-300"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
