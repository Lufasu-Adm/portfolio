"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

interface GalleryProps {
  activeId: string | null;
  onHighlightComplete: () => void;
}

export const Gallery = ({ activeId, onHighlightComplete }: GalleryProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  // === EFEK PENGUNCI SCROLL ===
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setCurrentImageIndex(0); 
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId]);

  // UBAH 'image' MENJADI ARRAY 'images'
  const showcaseItems = [
    { 
      id: "showcase-food-pipeline", 
      title: "Enterprise Food Delivery Analytics", 
      category: "Data Pipeline & Streamlit Dashboard", 
      images: [
        "/portfolio/Food_Delivery_Data_Analytics.png",
        "/portfolio/TELE.jpeg" 
      ], 
      size: "md:col-span-2 md:row-span-2 min-h-[500px]", 
      bgClass: "bg-blue-950/20" 
    },
    { 
      id: "showcase-genshin", 
      title: "Genshin-Impact Character Analyzer", 
      category: "Machine Learning Analytics", 
      images: ["/portfolio/Genshin.png"],
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-cyan-950/20" 
    },
    { 
      id: "showcase-nasa", 
      title: "NASA Exoplanet Query", 
      category: "AI & Data Science Pipeline", 
      images: ["/portfolio/nasa_exoplanet.png"], 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-indigo-950/20" 
    },
    { 
      id: "showcase-waifu-tracker", 
      title: "Waifu Habit Tracker", 
      category: "Gamified Productivity App", 
      images: ["/portfolio/waifu_habit_tracker.png"], 
      size: "md:col-span-1 md:row-span-2 min-h-[500px]", 
      bgClass: "bg-pink-950/20" 
    },
    { 
      id: "showcase-mood-map", 
      title: "Mood Map AI", 
      category: "Privacy-First Mental Health", 
      images: ["/portfolio/AI_mood_map.png"], 
      size: "md:col-span-1 md:row-span-2 min-h-[500px]", 
      bgClass: "bg-blue-950/20" 
    },
    { 
      id: "showcase-shorts", 
      title: "AI Shorts Generator", 
      category: "Automated Content Creation", 
      images: ["/portfolio/ai_shorts_gen.png"], 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-violet-950/20" 
    },
    { 
      id: "showcase-vault", 
      title: "Password Vault", 
      category: "Secure Web Utility", 
      images: ["/portfolio/password_vault.png"], 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-amber-950/20" 
    },
    { 
      id: "showcase-research-assistant", 
      title: "AI Research Assistant", 
      category: "Autonomous Agent / Telegram", 
      images: ["/portfolio/research_assistant.png"], 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-violet-950/20" 
    },
    { 
      id: "showcase-ruphas", 
      title: "Ruphas: Sticker Companion", 
      category: "Emotional LLM Interaction", 
      images: ["/portfolio/AI_sticker_companion.png"], 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-rose-950/20" 
    },
    { 
      id: "showcase-booking", 
      title: "Booking Ruang Rapat", 
      category: "Laravel Enterprise System", 
      images: [
        "/portfolio/bookng_ruangrapat.png",
        "/portfolio/super_admin.png" 
      ], 
      size: "md:col-span-1 md:row-span-1 min-h-[300px]", 
      bgClass: "bg-emerald-950/20" 
    },
  ];

  const selectedItem = showcaseItems.find((item) => item.id === selectedId);

  // FUNGSI NAVIGASI GAMBAR NEXT & PREV
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev === selectedItem.images.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedItem.images.length - 1 : prev - 1));
    }
  };

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
                onClick={() => {
                  setSelectedId(item.id);
                  setCurrentImageIndex(0); 
                }}
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
                {/* Tampilan Grid (Hanya menampilkan gambar indeks 0 sebagai Cover) */}
                <motion.div 
                  layoutId={`card-container-${item.id}`} 
                  className="absolute inset-0 w-full h-full z-0"
                  style={{ opacity: isSelected ? 0 : 1 }} 
                >
                  <motion.img 
                    layoutId={`image-${item.id}`}
                    src={item.images[0]} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-100 transition-all duration-500" 
                  />
                  
                  {/* Indikator Multigambar di sudut kanan atas jika gambar lebih dari 1 */}
                  {item.images.length > 1 && (
                    <div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                      <span className="text-xs font-mono text-white">{item.images.length}</span>
                    </div>
                  )}

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
                {/* Tombol Close */}
                <button 
                  onClick={() => setSelectedId(null)} 
                  className="absolute top-6 right-6 z-50 bg-black/50 text-white p-3 rounded-full hover:bg-emerald-500 hover:scale-110 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                {/* Container Gambar Slider */}
                <div className="relative w-full flex items-center justify-center bg-black/40 h-[60vh] md:h-[70vh] group">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImageIndex} // Kunci (key) memicu animasi setiap kali index berubah
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      src={selectedItem.images[currentImageIndex]} 
                      alt={`${selectedItem.title} - Screenshot ${currentImageIndex + 1}`} 
                      className="w-full h-full object-contain" 
                    />
                  </AnimatePresence>

                  {/* Tombol Navigasi Kiri & Kanan (Hanya Muncul Jika Gambar > 1) */}
                  {selectedItem.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-500 hover:scale-110 z-20"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-emerald-500 hover:scale-110 z-20"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                      </button>

                      {/* Titik Indikator di Bawah Gambar */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {selectedItem.images.map((_, idx) => (
                          <button 
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`transition-all duration-300 rounded-full ${idx === currentImageIndex ? 'w-6 h-2 bg-emerald-500' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                
                {/* Deskripsi Bawah */}
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