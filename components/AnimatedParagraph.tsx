// AnimatedParagraph.tsx
import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedParagraphProps {
  text: string;
  className?: string;
  animateBySentence?: boolean;
}

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  text,
  className = "",
  animateBySentence = false,
}) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const sentences = animateBySentence
    ? text.match(/[^\.!\?]+[\.!\?]+/g) || [text]
    : [text];

  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {sentences.map((sentence, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          style={{ display: "inline-block" }}
        >
          {sentence}{" "}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedParagraph;
