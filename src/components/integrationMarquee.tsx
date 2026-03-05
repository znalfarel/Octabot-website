"use client";

import { motion } from "framer-motion";
import { Globe, Facebook, Send, MessageCircle, Bot, Instagram, ShoppingBag, Mail } from "lucide-react";

export default function IntegrationMarquee() {
  // Daftar icon aplikasi sesuai urutan di gambar
  const apps = [
    { name: "Website", icon: <Globe size={32} />, color: "text-slate-400" },
    { name: "Facebook", icon: <Facebook size={32} />, color: "text-blue-500" },
    { name: "Telegram", icon: <Send size={32} />, color: "text-sky-500" },
    { name: "WhatsApp", icon: <MessageCircle size={32} />, color: "text-green-500" },
    { 
      name: "Octabot", 
      icon: <Bot size={32} />, 
      color: "text-primary", 
      isHighlight: true // Ini yang bikin dia beda sendiri (warna stabilo)
    },
    { name: "Instagram", icon: <Instagram size={32} />, color: "text-pink-500" },
    { name: "Shopee", icon: <ShoppingBag size={32} />, color: "text-orange-500" },
    { name: "Gmail", icon: <Mail size={32} />, color: "text-red-400" },
  ];

  // Gandakan array agar animasinya bisa looping tanpa putus
  const duplicatedApps = [...apps, ...apps, ...apps];

  return (
    // PENYESUAIAN: w-full tanpa max-width agar merentang penuh dari ujung ke ujung
    <div className="w-full py-16 overflow-hidden relative bg-transparent">
      
      {/* JUDUL SECTION */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest">
          Kami Mendukung Integrasi
        </h2>
      </div>

      {/* Container Animasi Marquee (Full Width) */}
      <div className="relative flex overflow-hidden z-0 w-full">
        
        {/* Efek Fade di ujung kiri dan kanan biar nyatu sama background secara mulus */}
        {/* Menggunakan "from-background" agar warnanya sama dengan warna dasar web */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <motion.div
          // Tambahkan py-4 agar shadow tidak kepotong saat animasi
          className="flex gap-6 md:gap-8 items-center w-max pl-6 py-4"
          // Bergerak dari 0% ke -33.33% (karena kita pakai 3 set array)
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Kecepatan jalannya (Makin kecil makin ngebut)
            repeat: Infinity,
          }}
        >
          {duplicatedApps.map((app, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl border-2 transition-all duration-300
                ${
                  app.isHighlight
                    // Styling khusus untuk Octabot (Highlight Hijau Stabilo)
                    ? "bg-primary/10 border-primary shadow-[4px_4px_0_#3F6212] scale-110 mx-2"
                    // Styling standar aplikasi lain (Tetap Neo-Brutalist)
                    : "bg-card border-border shadow-[4px_4px_0_var(--color-border)] hover:border-primary/50 hover:-translate-y-1"
                }
              `}
            >
              <div className={`${app.color} transition-transform duration-300 hover:scale-110`}>
                {app.icon}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
    </div>
  );
}