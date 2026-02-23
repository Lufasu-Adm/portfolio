"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-black pointer-events-none overflow-hidden">
      {/* 1. Grid Pattern: Menciptakan tekstur latar belakang */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" 
      />
      
      {/* 2. Radial Gradient Mask: Membuat grid memudar di tepian layar */}
      <div 
        className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#000_100%)]" 
      />

      {/* 3. Animated Beams: Partikel cahaya dinamis */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Beam 1 */}
        <motion.rect
          initial={{ y: "-100%", x: "20%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 0,
          }}
          width="1"
          height="300"
          fill="url(#beam-gradient)"
        />

        {/* Beam 2 */}
        <motion.rect
          initial={{ y: "-100%", x: "80%" }}
          animate={{ y: "100%" }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          width="1"
          height="400"
          fill="url(#beam-gradient)"
        />
      </svg>

      {/* 4. Ambient Glow: Cahaya statis untuk atmosfer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-[120px] rounded-full" />
    </div>
  );
};