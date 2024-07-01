"use client";

import Hero1 from "@/public/hero-1.jpg";
import Image from "next/image";
import { FancyFont } from "@/fonts";
import { cn } from "@/utils/cn";

import { motion } from "framer-motion";

import ButtonWithArrow from "./ButtonWithArrow";
import ScaleLink from "./ScaleLink";
import AnimatedText from "./AnimatedText";
import AnimatedParagraph from "./AnimatedParagraph";

const MainHero = () => {
  return (
    <section className="z-10 mt-12">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Image
          src={Hero1}
          alt="Hero1"
          quality={100}
          className="h-[40%] object-cover object-center"
        />
      </motion.span>
      <div className="flex flex-col items-center justify-center gap-4 p-8 text-left">
        <AnimatedText
          text="Welcome To Your Home Of Dentistry"
          className="text-4xl"
        />
        <AnimatedParagraph
          text="At Atelier Dental, we're firm believers that a healthy smile is a happy smile. Our dental experts are dedicated to ensuring your dental journey is nothing short of exceptional, providing you with an inviting atmosphere where your comfort and well-being always come first."
          className="text-base"
          animateBySentence={true}
        />
        <div className="mt-2 flex w-full flex-col items-center gap-2">
          <ButtonWithArrow className="w-full">
            Book An Appointment
          </ButtonWithArrow>
          <ScaleLink href="/contact">Or Contact Us</ScaleLink>
        </div>
      </div>
    </section>
  );
};

export default MainHero;

{
  /* <div className={cn(concert.className, "text-3xl flex gap-12 lg:text-4xl lg:gap-16")}></div> */
}
