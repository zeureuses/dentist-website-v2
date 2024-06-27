import Hero1 from "@/public/hero-1.jpg";
import Image from "next/image";
import { FancyFont, MainFontBold } from "@/app/layout";
import { cn } from "@/utils/cn";
import Link from "next/link";

import ButtonWithArrow from "./ButtonWithArrow";
import ScaleLink from "./ScaleLink";

const MainHero = () => {
  return (
    <section className="z-10 mt-12">
      <Image
        src={Hero1}
        alt="Hero1"
        quality={100}
        className="h-[45%] object-cover object-center"
      />
      <div className="flex flex-col items-center justify-center gap-4 p-8 text-left">
        <h1 className={cn(FancyFont.className, "text-4xl")}>
          Welcome To Your Home Of Dentistry
        </h1>
        <p>
          At Atelier Dental, we’re firm believers that a healthy smile is a
          happy smile. Our dental experts are dedicated to ensuring your dental
          journey is nothing short of exceptional, providing you with an
          inviting atmosphere where your comfort and well-being always come
          first.
        </p>
        <div
          className={cn(
            MainFontBold.className,
            "mt-2 flex w-full flex-col items-center gap-2",
          )}
        >
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
