"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { title: "Home", link: "#home" },
  { title: "About", link: "#about" },
  { title: "Projects", link: "#projects" },
  { title: "Gallery", link: "#gallery" },
  { title: "Contact", link: "#contact" },
];

export const FullscreenNav = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; 
    }
  }, [isActive]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsActive(false);
    
    setTimeout(() => {
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 600); 
  };

  const menuVariants: Variants = {
    initial: { y: "-100%" },
    animate: { 
      y: "0%", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const linkVariants: Variants = {
    initial: { y: "30%", opacity: 0 },
    animate: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.1 * i + 0.2 }
    }),
    exit: { 
      y: "30%", 
      opacity: 0, 
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <>
      <div className="fixed top-8 right-6 md:right-12 z-[101]">
        <button
          onClick={() => setIsActive(!isActive)}
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950/40 backdrop-blur-md border border-emerald-500/20 hover:border-emerald-500/60 transition-colors shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)]"
        >
          <div className={`w-5 flex flex-col gap-[5px] transition-all duration-300 ${isActive ? "rotate-45" : ""}`}>
            <span className={`h-[2px] w-full bg-emerald-400 transition-all duration-300 ${isActive ? "translate-y-[7px] rotate-90" : ""}`} />
            <span className={`h-[2px] w-full bg-emerald-400 transition-all duration-300 ${isActive ? "opacity-0" : ""}`} />
            <span className={`h-[2px] w-full bg-emerald-400 transition-all duration-300 ${isActive ? "-translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-emerald-900/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="flex flex-col items-center gap-4 md:gap-8 relative z-10">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  variants={linkVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="overflow-hidden"
                >
                  <a
                    href={item.link}
                    onClick={(e) => handleScroll(e, item.link)}
                    className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-500 hover:text-emerald-400 transition-colors duration-300 relative group block py-2"
                  >
                    {item.title}
                    <span className="absolute top-1/2 -translate-y-1/2 -left-8 md:-left-12 w-4 md:w-6 h-[4px] bg-emerald-400 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="absolute bottom-12 flex gap-8 text-xs md:text-sm font-mono text-gray-500 uppercase tracking-widest"
            >
              <a href="https://github.com/Lufasu-Adm" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Github</a>
              <span className="text-zinc-700">|</span>
              <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
              <span className="text-zinc-700">|</span>
              <a href="#" className="hover:text-emerald-400 transition-colors">Email</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};