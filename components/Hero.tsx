"use client";

import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/BackgroundBeams";

export const Hero = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
      
      {/* Background Layer: Aceternity-style beams and grid */}
      <BackgroundBeams />

      {/* Secondary ambient glow for center depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="z-10 text-center px-4">
        
        {/* Terminal-style status indicator */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-emerald-400 font-mono mb-4 tracking-widest uppercase text-sm"
        >
          System Initialized
        </motion.p>

        {/* Main Identity Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Jordan Wijayanto
          </span>
        </motion.h1>

        {/* Professional Summary and Focus */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Informatics Student | AI Enthusiast | Creative Developer
        </motion.p>

        {/* Call to Action (CTA) Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">
            Explore Projects
          </button>
          <a
            href="https://github.com/Lufasu-Adm"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-emerald-500/30 hover:border-emerald-500 text-white transition-all duration-300 backdrop-blur-sm"
          >
            GitHub Lufasu-Adm
          </a>
        </motion.div>

      </div>
    </div>
  );
};