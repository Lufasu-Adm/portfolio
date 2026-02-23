"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

export const Contact = () => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    { role: "system", content: "Connection established. Selamat datang di portofolio Jordan." },
    { role: "system", content: "Ketik 'help' untuk melihat daftar protokol yang tersedia." }
  ]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    setIsTyping(true);

    setTimeout(() => {
      let response = "";
      
      switch (command) {
        case "help":
          response = "PERINTAH: 'about', 'projects', 'vault', 'shorts', 'tech', 'skripsi', 'hobby', 'clear'.";
          break;
        case "about":
          response = "Jordan Wijayanto (Joo). Mahasiswa S1 Informatika Telkom University Surabaya (Sem. 7). Fokus pada AI, Web Dev, dan Sistem Enterprise.";
          break;
        case "projects":
          response = "MENAMPILKAN DATABASE: 1. Mood Map AI, 2. Waifu Habit Tracker, 3. PT PAL Booking System, 4. AI Shorts Gen, 5. Password Vault.";
          break;
        case "vault":
          response = "Vault_Protocol: Aplikasi Password Manager berbasis React/Vite. Menggunakan LocalStorage untuk penyimpanan aman di browser.";
          break;
        case "shorts":
          response = "Automation_Protocol: Bot Python (Llama 3 + EdgeTTS) untuk generate video YouTube Shorts secara otomatis dari topik sederhana.";
          break;
        case "tech":
          response = "STACK_ANALYSIS: Frontend (React, Next.js, Tailwind), Backend (Laravel, FastAPI), AI (Python, Groq, Llama 3.3), Mobile (Flutter).";
          break;
        case "skripsi":
          response = "RESEARCH_LOG: Sedang dalam tahap penyusunan proposal skripsi. Fokus pada integrasi sistem cerdas untuk efisiensi data.";
          break;
        case "hobby":
          response = "NON-TECH_LOG: Fotografi (Landscape/Product), Genshin Impact (World exploration), dan Wuthering Waves.";
          break;
        case "genshin":
        case "wuwa":
          response = "GAMING_MODE: User 'Joo' terdeteksi sering login ke Teyvat dan Solaris-3 untuk melepas penat koding.";
          break;
        case "clear":
          setMessages([]);
          setIsTyping(false);
          return;
        default:
          response = `ERROR: Perintah '${command}' tidak ditemukan. Ketik 'help' untuk daftar protokol.`;
      }

      setMessages((prev) => [...prev, { role: "system", content: response }]);
      setIsTyping(false);
    }, 1000); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="min-h-screen w-full bg-black text-white py-24 px-6 md:px-20 relative z-10 border-t border-white/5 flex items-center">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-left">
            Let's <span className="text-emerald-400">Connect.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed text-left">
            Tertarik berkolaborasi dalam riset kecerdasan buatan atau diskusi sistem terintegrasi? Silakan hubungi saya melalui tautan di bawah ini.
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/Lufasu-Adm" target="_blank" className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">GitHub</a>
            <a href="mailto:1jordan4wijayanto@gmail.com" className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">Email</a>
            <a href="https://www.linkedin.com/in/jordan-wijayanto-adm/" className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">LinkedIn</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden h-[450px] flex flex-col"
        >
          <div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-mono text-xs text-emerald-400 uppercase tracking-tighter">Terminal // Jordan@Informatics-System</h3>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-hide">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                <span className="text-[9px] text-zinc-600 ml-1 uppercase font-mono tracking-widest">
                  {msg.role === "user" ? ">>> User_Request" : ">>> Core_Logic"}
                </span>
                <div className={`px-4 py-2 rounded-2xl text-sm font-mono border ${
                  msg.role === "user" 
                    ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 rounded-tr-sm" 
                    : "bg-zinc-900/50 border-zinc-800 text-gray-300 rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-[10px] text-emerald-500/50 font-mono animate-pulse lowercase ml-1"># processing_request...</div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="relative mt-auto">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik 'help'..." 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white font-mono placeholder-zinc-700 focus:outline-none focus:border-emerald-500/30"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500/50 hover:text-emerald-400 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};