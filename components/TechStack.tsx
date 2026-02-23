"use client";

import { motion } from "framer-motion";
import React from "react";

export const TechStack = () => {
  // Technical skills data configuration
  const technologies = [
    { name: "Python", role: "AI & Backend" },
    { name: "React.js", role: "Frontend" },
    { name: "Next.js", role: "Fullstack" },
    { name: "Tailwind CSS", role: "Styling" },
    { name: "PyTorch", role: "Machine Learning" },
    { name: "Framer Motion", role: "Animation" },
    { name: "Git & GitHub", role: "Version Control" },
  ];

  // Duplicate array to achieve seamless infinite looping
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <div className="w-full bg-black text-white py-20 relative z-10 overflow-hidden border-t border-white/5">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6 md:px-20 mb-10"
      >
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
          <span className="text-emerald-400">Tech Stack</span> Arsenal.
        </h3>
        <p className="text-gray-400 text-center mt-2 text-sm md:text-base">
          Alat dan teknologi pendukung dalam pengembangan ekosistem perangkat lunak dan sistem terintegrasi.
        </p>
      </motion.div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full flex overflow-hidden">
        
        {/* Fade gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Marquee Animation */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20, 
            repeat: Infinity,
          }}
          className="flex gap-4 px-4 w-max"
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="w-[200px] md:w-[250px] flex-shrink-0 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:border-emerald-500/50 hover:bg-zinc-800 transition-colors duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-1 tracking-tight">{tech.name}</h4>
              <p className="text-[10px] tracking-wider uppercase font-mono text-emerald-400">{tech.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};