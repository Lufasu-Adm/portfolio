"use client";

import { useState } from "react"; // Tambahkan useState untuk manajemen highlight
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { TechStack } from "../components/TechStack";
import { Projects } from "../components/Projects";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";

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
    <main className="min-h-screen bg-black text-white selection:bg-emerald-500/30 overflow-x-hidden scroll-smooth">
      <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>

      {/* Tech Stack sebagai transisi visual antar section */}
      <TechStack /> 
      
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
    </main>
  );
}