"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true }); // Animasi berjalan saat elemen terlihat
  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          duration: 0.5,
          delay: stagger(0.15), // Jeda antar kata (semakin kecil, semakin cepat)
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0 filter blur-[10px]" // Kondisi awal: tak terlihat dan blur
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`font-bold ${className}`}>
      <div className="mt-4">
        <div className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};