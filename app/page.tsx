"use client";

import { useState, useEffect } from "react"; 
import { AnimatePresence } from "framer-motion";
import { Preloader } from "../components/Preloader";
import { CustomCursor } from "../components/CustomCursor";
import { FullscreenNav } from "../components/FullscreenNav"; // <-- Update: Import FullscreenNav baru
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TechStack } from "../components/TechStack";
import { Projects } from "../components/Projects";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { TracingBeam } from "../components/TracingBeam"; 
import { SparklesBackground } from "../components/SparklesBackground";

export default function Home() {
  // State untuk mengontrol Preloader
  const [isLoading, setIsLoading] = useState(true);
  
  // State untuk melacak ID proyek yang sedang aktif di-highlight
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  // Kunci layar agar tidak bisa di-scroll saat Preloader masih berjalan
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  // Fungsi untuk menangani klik dari komponen Projects
  const handleProjectClick = (id: string) => {
    setActiveHighlight(id);
  };

  // Fungsi untuk mereset highlight setelah animasi di Gallery selesai
  const clearHighlight = () => {
    setActiveHighlight(null);
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 overflow-x-hidden relative">
      
      {/* === ANIMASI PRELOADER === */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* === KURSOR KUSTOM === */}
      <CustomCursor />
      
      {/* === BACKGROUND BINTANG BERKILAU GLOBAL === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesBackground />
      </div>

      {/* === KONTEN UTAMA === */}
      {/* Disembunyikan (opacity-0) sampai isLoading menjadi false */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden pointer-events-none' : 'opacity-100'}`}>
        
        {/* === MENU OVERLAY FULLSCREEN === */}
        <FullscreenNav /> {/* <-- Update: Menggunakan FullscreenNav pengganti Navbar lama */}
        
        <section id="home">
          <Hero />
        </section>

        <TechStack /> 
        
        <TracingBeam className="pl-12 pr-4 md:px-6">
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <Projects onProjectClick={handleProjectClick} />
          </section>
          
          <section id="gallery">
            <Gallery 
              activeId={activeHighlight} 
              onHighlightComplete={clearHighlight} 
            />
          </section>
          
          <section id="contact">
            <Contact />
          </section>

        </TracingBeam>
      </div>
    </main>
  );
}