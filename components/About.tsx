"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React from "react";

export const About = () => {
  // 3D Tilt Effect State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Drag and Lanyard Physics State
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const lineX = useTransform(dragX, (x: number) => x + 160);
  const lineY = useTransform(dragY, (y: number) => y + 36);

  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6 md:px-20 py-20 relative z-10 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Typography Section (UPDATED: Added relative, z-20, and mobile backdrop-blur) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-20 bg-black/40 backdrop-blur-md p-6 -mx-6 rounded-2xl md:bg-transparent md:backdrop-blur-none md:p-0 md:mx-0 pointer-events-none md:pointer-events-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-emerald-400">About</span> Me.
          </h2>
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Halo, saya Jordan Wijayanto. Saat ini saya adalah mahasiswa semester 7 program studi Informatika di Telkom University Surabaya.
            </p>
            <p>
              Memiliki ketertarikan mendalam terhadap teknologi modern, khususnya pada pengembangan kecerdasan buatan (AI) dan rekayasa sistem terintegrasi.
            </p>
            <p>
              Di luar aktivitas akademik dan pengembangan perangkat lunak, saya mendedikasikan waktu luang untuk menikmati game seperti Wuthering Waves.
            </p>
          </div>
        </motion.div>

        {/* Interactive ID Card Section (UPDATED: Added relative z-0) */}
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 14, 
            delay: 0.1 
          }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center perspective-[1000px] relative z-0 mt-10 md:mt-0"
          style={{ perspective: 1000 }}
        >
          <div className="relative w-80 h-[28rem]">
            
            {/* Lanyard String (SVG) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              style={{ overflow: "visible" }}
            >
              <motion.line
                x1={160}          
                y1={-1000}        
                x2={lineX}        
                y2={lineY}        
                stroke="#FFFFFF"  
                strokeWidth={8}   
                strokeLinecap="round"
              />
            </svg>

            {/* Main Card Component */}
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              drag
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              dragElastic={0.9} 
              dragTransition={{ bounceStiffness: 150, bounceDamping: 12 }}
              whileDrag={{ cursor: "grabbing", scale: 1.02 }}
              style={{ 
                x: dragX,         
                y: dragY,         
                rotateY, 
                rotateX, 
                transformStyle: "preserve-3d",
                transformOrigin: "top center" 
              }}
              className="w-full h-full rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 flex flex-col items-center shadow-2xl cursor-grab group z-10 relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Lanyard Hole */}
              <div 
                className="w-16 h-4 bg-zinc-950 rounded-full mb-8 border border-zinc-800 shadow-inner z-10 relative" 
                style={{ transform: "translateZ(30px)" }} 
              />

             {/* Profile Picture */}
              <div 
                className="w-40 h-40 rounded-full bg-zinc-800 border-2 border-emerald-500/30 mb-4 flex items-center justify-center shadow-lg pointer-events-none z-10 overflow-hidden" 
                style={{ transform: "translateZ(50px)" }}
              >
                <img 
                  src="/portfolio/profile.png" 
                  alt="Jordan Wijayanto" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>

              {/* ID Information */}
              <div className="text-center w-full pointer-events-none z-10" style={{ transform: "translateZ(40px)" }}>
                <h3 className="text-xl font-bold text-white mb-1">Jordan Wijayanto</h3>
                <p className="text-emerald-400 font-mono text-xs mb-4">@Lufasu-Adm</p>

                <div className="w-full h-px bg-zinc-800 my-4" />

                <div className="grid grid-cols-2 gap-4 text-left text-sm text-gray-400 w-full px-2">
                  <div>
                    <p className="text-[10px] tracking-wider text-zinc-500 uppercase">Role</p>
                    <p className="text-white font-medium text-sm">AI Enthusiast</p>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-wider text-zinc-500 uppercase">Status</p>
                    <p className="text-white font-medium text-sm">Undergraduate</p>
                  </div>
                  <div className="col-span-2 mt-2">
                    <p className="text-[10px] tracking-wider text-zinc-500 uppercase mb-2">Interests</p>
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-zinc-800/50 border border-zinc-700 rounded text-xs">Software Eng</span>
                      <span className="px-2 py-1 bg-zinc-800/50 border border-zinc-700 rounded text-xs">Photography</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};