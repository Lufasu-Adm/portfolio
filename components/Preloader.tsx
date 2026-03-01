"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const words = ["Hello", "Olá", "Привет", "Halo", "こんにちは"];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1);
      },
      index === 0 ? 1000 : 200
    );

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  const slideUp: Variants = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  const textFade: Variants = {
    initial: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={textFade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex items-center gap-3 text-white text-4xl md:text-5xl font-normal tracking-tight"
        >
          <span className="block w-2 h-2 bg-white rounded-full mt-1" />
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};