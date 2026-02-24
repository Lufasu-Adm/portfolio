"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  animationDuration: number;
  animationDelay: number;
}

export const SparklesBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Men-generate 60 bintang secara acak saat komponen dimuat
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 60; i++) {
        newStars.push({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          size: Math.random() * 3 + 1, 
          animationDuration: Math.random() * 3 + 2, 
          animationDelay: Math.random() * 2, 
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
      {/* Merender Bintang-Bintang */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-emerald-400 rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            boxShadow: `0 0 ${star.size * 2}px rgba(16, 185, 129, 0.8)`, 
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: star.animationDuration,
            repeat: Infinity,
            delay: star.animationDelay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Background Gradient Blob yang bergerak sangat lambat */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed top-1/4 left-1/4 w-[40vw] h-[40vw] bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />
    </div>
  );
};