"use client";

import { useState } from "react"; 
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TechStack } from "../components/TechStack";
import { Projects } from "../components/Projects";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { TracingBeam } from "../components/TracingBeam"; 
import { SparklesBackground } from "../components/SparklesBackground"; // 1. Tambahkan import Sparkles

export default function Home() {
  // State untuk melacak ID proyek yang sedang aktif di-highlight
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);

  // Fungsi untuk menangani klik dari komponen Projects
  const handleProjectClick = (id: string) => {
    setActiveHighlight(id);
  };

  // Fungsi untuk mereset highlight setelah animasi di Gallery selesai
  const clearHighlight = () => {
    setActiveHighlight(null);
  };

  return (
    // Tambahkan class 'relative' di main agar tumpukan z-index bekerja dengan benar
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 overflow-x-hidden scroll-smooth relative">
      
      {/* === BACKGROUND BINTANG BERKILAU GLOBAL === */}
      {/* Posisi fixed di belakang segalanya (z-0), dan pointer-events-none agar tidak memblokir klik pada tombol/link */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesBackground />
      </div>

      {/* === KONTEN UTAMA === */}
      {/* Dibungkus div relative z-10 agar selalu tampil di depan animasi bintang */}
      <div className="relative z-10">
        <Navbar />
        
        <section id="home">
          <Hero />
        </section>

        {/* Tech Stack ditaruh di luar TracingBeam agar efek lebarnya tetap full layar */}
        <TechStack /> 
        
        {/* Bungkus sisa perjalanan portofoliomu dengan garis cahaya */}
        <TracingBeam className="px-4 md:px-6">
          
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            {/* Kirim fungsi handleProjectClick ke komponen Projects */}
            <Projects onProjectClick={handleProjectClick} />
          </section>
          
          <section id="gallery">
            {/* Kirim state activeHighlight dan fungsi reset ke komponen Gallery */}
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