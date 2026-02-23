"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 80;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Gallery", link: "#gallery" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div 
        className={`flex items-center gap-4 md:gap-8 px-8 py-3 rounded-full transition-all duration-500
          /* Efek Kaca Buram */
          bg-zinc-950/40 backdrop-blur-xl 
          
          /* Frame dengan Cahaya Emerald */
          border ${scrolled ? 'border-emerald-500/40' : 'border-emerald-500/20'}
          
          /* Shadow Pendaran Emerald Buram */
          shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]
          
          hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.5)]
          hover:border-emerald-500/60
        `}
      >
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            onClick={(e) => scrollToSection(e, item.link)}
            className="text-xs md:text-sm font-mono tracking-widest uppercase text-gray-400 hover:text-emerald-400 transition-colors relative group"
          >
            {item.name}
            {/* Garis bawah tipis saat hover */}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>
    </motion.div>
  );
};