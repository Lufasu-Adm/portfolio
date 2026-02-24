"use client";

import { motion } from "framer-motion";
import React from "react";

/**
 * Interface untuk mendefinisikan struktur data setiap proyek.
 * Data diambil dari portofolio Jordan Wijayanto.
 */
interface Project {
  title: string;
  showcaseId: string;
  description: string;
  tags: string[];
  github: string;
  className: string;
  gradient: string;
  border: string;
}

interface ProjectsProps {
  onProjectClick: (id: string) => void;
}

export const Projects = ({ onProjectClick }: ProjectsProps) => {
  const projects: Project[] = [
    {
      title: "Genshin Impact Intelligence System",
      showcaseId: "showcase-genshin",
      description: "Data-Driven character insights menggunakan Unsupervised Learning (K-Means Clustering) untuk penentuan role objektif dan sistem rekomendasi hibrida berbasis jarak Euclidean.",
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Pandas"],
      github: "https://github.com/Lufasu-Adm/genshin-impact-analytics", 
      className: "md:col-span-2", 
      gradient: "from-cyan-500/10 to-teal-900/20",
      border: "border-cyan-500/20",
    },
    {
      title: "Mood Map AI",
      showcaseId: "showcase-mood-map",
      description: "Aplikasi kesehatan mental Privacy-First dengan arsitektur Hybrid. Mengintegrasikan Flutter dan FastAPI untuk analisis sentimen empatik menggunakan Llama 3.3.",
      tags: ["Flutter", "FastAPI", "Llama 3.3", "SQLite"],
      github: "https://github.com/Lufasu-Adm",
      className: "md:col-span-1", 
      gradient: "from-indigo-500/10 to-blue-900/20",
      border: "border-indigo-500/20",
    },
    {
      title: "Enterprise Booking System",
      showcaseId: "showcase-booking",
      description: "Sistem manajemen ruang rapat berbasis Laravel 10 di PT PAL. Implementasi QR Code Attendance untuk efisiensi birokrasi.",
      tags: ["Laravel 10", "PostgreSQL", "QR Code", "Enterprise"],
      github: "https://github.com/Lufasu-Adm/booking-ruang-rapat",
      className: "md:col-span-2",
      gradient: "from-emerald-500/10 to-teal-900/20",
      border: "border-emerald-500/20",
    },
    {
      title: "Waifu Habit Tracker",
      showcaseId: "showcase-waifu-tracker",
      description: "Gamifikasi produktivitas berbasis Flutter dengan asisten AI 'Lumina'. Memfitur sistem streak dan manajemen data offline menggunakan Hive NoSQL.",
      tags: ["Flutter", "Hive", "Groq/Llama-3", "AI"],
      github: "https://github.com/Lufasu-Adm",
      className: "md:col-span-1",
      gradient: "from-pink-400/10 to-rose-900/20",
      border: "border-pink-500/20",
    },
    {
      title: "AI Shorts Generator",
      showcaseId: "showcase-shorts",
      description: "Bot Python otomatis pembuat video YouTube Shorts. Menggunakan Groq Llama 3 untuk naskah, EdgeTTS untuk suara, dan Pexels API.",
      tags: ["Python", "Groq Llama 3", "EdgeTTS", "Automation"],
      github: "https://github.com/Lufasu-Adm/ai-shorts-generator",
      className: "md:col-span-2",
      gradient: "from-violet-500/10 to-purple-900/20",
      border: "border-violet-500/20",
    },
    {
      title: "Password Vault",
      showcaseId: "showcase-vault",
      description: "Password Manager aman berbasis React & Vite. Menyimpan data secara persisten di LocalStorage dengan fitur built-in password generator.",
      tags: ["React", "Vite", "Tailwind CSS", "LocalStorage"],
      github: "https://github.com/Lufasu-Adm/password-vault",
      className: "md:col-span-1",
      gradient: "from-amber-500/10 to-orange-900/20",
      border: "border-amber-500/20",
    },
    {
      title: "AI Auto Research Assistant",
      showcaseId: "showcase-research-assistant",
      description: "Bot riset otonom harian menggunakan LLaMA 3.3. Mengotomatisasi tech monitoring melalui scraping Google News dan Telegram API.",
      tags: ["Python", "LLaMA 3.3", "Automation", "Telegram API"],
      github: "https://github.com/Lufasu-Adm/ai-research-assistant",
      className: "md:col-span-1",
      gradient: "from-violet-500/10 to-purple-900/20",
      border: "border-violet-500/20",
    },
    {
      title: "NASA Exoplanet Query",
      showcaseId: "showcase-nasa",
      description: "Platform klasifikasi habitabilitas planet menggunakan Random Forest berdasarkan dataset NASA Exoplanet Archive.",
      tags: ["Python", "Machine Learning", "FastAPI", "NASA Data"],
      github: "https://github.com/Lufasu-Adm/nasa-exoplanet-query",
      className: "md:col-span-1",
      gradient: "from-blue-500/10 to-indigo-900/20",
      border: "border-blue-500/20",
    },
    {
      title: "Autofeeder Web Control",
      showcaseId: "showcase-autofeeder",
      description: "Implementasi IoT untuk kontrol akuarium otomatis melalui antarmuka web dengan penjadwalan presisi.",
      tags: ["IoT", "Hardware", "C++", "Web Control"],
      github: "https://github.com/Lufasu-Adm/autofeeder-web-control",
      className: "md:col-span-1",
      gradient: "from-purple-500/10 to-indigo-900/20",
      border: "border-purple-500/20",
    },
    {
      title: "AI Companion: Ruphas",
      showcaseId: "showcase-ruphas",
      description: "Aplikasi chat mobile Flutter dengan respons emosional reaktif berdasarkan analisis mood pengguna.",
      tags: ["Flutter", "Riverpod", "LLM", "Sentiment"],
      github: "https://github.com/Lufasu-Adm/AI-Stickers-Companion",
      className: "md:col-span-1",
      gradient: "from-rose-500/10 to-pink-900/20",
      border: "border-rose-500/20",
    },
  ];

  const handleNavigation = (id: string) => {
    onProjectClick(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen w-full bg-black text-white py-24 px-6 md:px-20 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-emerald-400">Projects.</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg font-light leading-relaxed max-w-2xl">
            Kumpulan integrasi sistem cerdas, arsitektur enterprise, dan solusi berbasis data oleh **Jordan Wijayanto**, mahasiswa Informatika Telkom University Surabaya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20 
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleNavigation(project.showcaseId)}
              className={`relative rounded-3xl p-8 border ${project.border} bg-gradient-to-br ${project.gradient} backdrop-blur-sm overflow-hidden group cursor-pointer ${project.className}`}
            >
              {/* Efek kilau saat hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Supaya tidak men-trigger scroll saat klik link
                      className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    </a>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-[10px] uppercase tracking-widest font-mono text-emerald-300 bg-emerald-900/30 rounded-full border border-emerald-500/20 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};