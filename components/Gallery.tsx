"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

interface GalleryProps {
  activeId: string | null;
  onHighlightComplete: () => void;
}

export const Gallery = ({ activeId, onHighlightComplete }: GalleryProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // === EFEK PENGUNCI SCROLL ===
  useEffect(() => {
    if (selectedId) {
      // Kunci scroll saat modal terbuka
      document.body.style.overflow = "hidden";
    } else {
      // Kembalikan scroll saat modal tertutup
      document.body.style.overflow = "unset";
    }

    // Cleanup function untuk mencegah bug jika komponen unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  const showcaseItems = [
    { 
      id: "showcase-genshin", 
      title: "Genshin-Impact Character Analyzer", 
      category: "Machine Learning Analytics", 
      image: "/portfolio/Genshin.png", 
      size: "md:col-span-2 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-blue-950/20" 
    },
    { 
      id: "showcase-nasa", 
      title: "NASA Exoplanet Query", 
      category: "AI & Data Science Pipeline", 
      image: "/portfolio/nasa_exoplanet.png", 
      size: "md:col-span-2 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-blue-950/20" 
    },
    { 
      id: "showcase-waifu-tracker", 
      title: "Waifu Habit Tracker", 
      category: "Gamified Productivity App", 
      image: "/portfolio/waifu_habit_tracker.png", 
      size: "md:col-span-1 md:row-span-2 min-h-[500px]", 
      bgClass: "bg-pink-950/20" 
    },
    { 
      id: "showcase-mood-map", 
      title: "Mood Map AI", 
      category: "Privacy-First Mental Health", 
      image: "/portfolio/AI_mood_map.png", 
      size: "md:col-span-1 md:row-span-2 min-h-[500px]", 
      bgClass: "bg-indigo-950/20" 
    },
    { 
      id: "showcase-shorts", 
      title: "AI Shorts Generator", 
      category: "Automated Content Creation", 
      image: "/portfolio/ai_shorts_gen.png", 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-violet-950/20" 
    },
    { 
      id: "showcase-vault", 
      title: "Password Vault", 
      category: "Secure Web Utility", 
      image: "/portfolio/password_vault.png", 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-amber-950/20" 
    },
    { 
      id: "showcase-research-assistant", 
      title: "AI Research Assistant", 
      category: "Autonomous Agent / Telegram", 
      image: "/portfolio/research_assistant.png", 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-violet-950/20" 
    },
    { 
      id: "showcase-ruphas", 
      title: "Ruphas: Sticker Companion", 
      category: "Emotional LLM Interaction", 
      image: "/portfolio/AI_sticker_companion.png", 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-rose-950/20" 
    },
    { 
      id: "showcase-booking", 
      title: "Booking Ruang Rapat", 
      category: "Laravel Enterprise System", 
      image: "/portfolio/bookng_ruangrapat.png", 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-emerald-950/20" 
    },
  ];

  const selectedItem = showcaseItems.find((item) => item.id === selectedId);

  return (
  <div className={`min-h-screen w-full bg-black text-white py-24 px-6 md:px-20 relative border-t border-white/5 transition-all duration-300 ${selectedId ? 'z-[999]' : 'z-10'}`}>
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Visual <span className="text-emerald-400">Showcase.</span>
          </h2>
          <p className="text-gray-400 mt-6 text-xl max-w-2xl font-light leading-relaxed">
            Klik pada gambar untuk meninjau detail teknis resolusi tinggi dari sistem cerdas Jordan Wijayanto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
          {showcaseItems.map((item) => {
            const isHighlighted = activeId === item.id;
            const isSelected = selectedId === item.id;

            return (
              <motion.div
                key={item.id}
                id={item.id}
                onClick={() => setSelectedId(item.id)}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                
                animate={isHighlighted ? {
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0px rgba(16, 185, 129, 0)",
                    "0 0 30px rgba(16, 185, 129, 0.4), 0 0 70px rgba(16, 185, 129, 0.2)", 
                    "0 0 0px rgba(16, 185, 129, 0)"
                  ],
                  borderColor: ["rgba(255,255,255,0.1)", "#10b981", "rgba(255,255,255,0.1)"],
                  filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
                  opacity: 1
                } : {
                  opacity: activeId ? 0.3 : 1,
                  scale: 1,
                  filter: "brightness(0.7) grayscale(0.2)"
                }}
                
                transition={{ 
                  opacity: { duration: 0.5 },
                  scale: isHighlighted ? { duration: 5, ease: "easeInOut" } : { type: "spring", stiffness: 300, damping: 25 },
                  default: { duration: isHighlighted ? 5 : 0.4, ease: "easeInOut" }
                }}
                
                onAnimationComplete={() => {
                  if (isHighlighted) onHighlightComplete();
                }}

                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 0.98, y: -5, opacity: 1, filter: "brightness(1) grayscale(0)" }}
                className={`relative rounded-[2.5rem] overflow-hidden group border shadow-2xl cursor-zoom-in transition-all duration-300 ${item.size} ${item.bgClass} ${isHighlighted ? 'z-30 border-emerald-500' : 'border-white/10 z-0'}`}
              >
                {isHighlighted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_60px_rgba(16,185,129,0.4)]"
                  />
                )}

                <motion.div 
                  layoutId={`card-container-${item.id}`} 
                  className="absolute inset-0 w-full h-full z-0"
                  style={{ opacity: isSelected ? 0 : 1 }} 
                >
                  <motion.img 
                    layoutId={`image-${item.id}`}
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-all duration-500" 
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 opacity-90 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 p-10 z-20 translate-y-0 group-hover:opacity-0 transition-all duration-300 pointer-events-none text-left">
                    <span className="text-xs tracking-[0.3em] font-mono text-emerald-400 mb-3 block uppercase font-bold">{item.category}</span>
                    <h3 className="text-3xl font-bold text-white tracking-tight">{item.title}</h3>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedId && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8 cursor-zoom-out"
              onClick={() => setSelectedId(null)}
            >
              <motion.div 
                layoutId={`card-container-${selectedId}`} 
                className="relative w-full max-w-5xl bg-zinc-950 border border-white/10 flex flex-col items-center justify-center rounded-[2.5rem] overflow-hidden shadow-2xl cursor-default" 
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedId(null)} 
                  className="absolute top-6 right-6 z-50 bg-black/50 text-white p-3 rounded-full hover:bg-emerald-500 hover:scale-110 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <motion.img 
                  layoutId={`image-${selectedId}`} 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full max-h-[70vh] object-contain bg-black/40" 
                />
                
                <div className="w-full p-8 bg-gradient-to-t from-zinc-950 to-zinc-900 text-left border-t border-white/5">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{selectedItem.title}</h3>
                  <p className="text-emerald-400 font-mono mt-3 uppercase tracking-widest text-sm font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {selectedItem.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};