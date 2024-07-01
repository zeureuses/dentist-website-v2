import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { FancyFont } from "@/fonts";

const Logo = () => {
  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    // @ts-ignore
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const logoText = "Atelier Dental";

  return (
    <Link href="/">
      <motion.div
        className={cn(FancyFont.className, "inline-block text-2xl text-black")}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.95 }}
      >
        {logoText.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            initial="initial"
            animate="animate"
            custom={index}
            whileHover={{
              color: "#383839",
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </Link>
  );
};

export default Logo;
