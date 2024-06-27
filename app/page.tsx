import bgGradient from "@/public/Gradient.png";
import Image from "next/image";
import MainHero from "@/components/MainHero";

export default function Home() {
  return (
    <main>
      <div className="relative flex h-[85vh]">
        <div className="absolute inset-0">
          <Image
            src={bgGradient}
            alt="bgGradient"
            quality={100}
            fill
            className="object-cover"
          />
        </div>
        <MainHero />
      </div>
      {/* <section className="mt-20 h-20 bg-red-500">aaa</section> */}
      {/* <section className="mt-20 h-20 bg-blue-500">aaa</section> */}
    </main>
  );
}

{
  /* <div className={cn(concert.className, "text-3xl flex gap-12 lg:text-4xl lg:gap-16")}></div> */
}
