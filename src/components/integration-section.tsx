"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IntegrationPage() {
  return (
    // min-h-screen diganti jadi py-20 lg:py-32 biar jarak atas bawahnya natural ngikutin konten
    <section className="py-20 lg:py-32 bg-background overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Gap diperkecil sedikit di HP (gap-10) biar nggak terlalu jauh jarak teks dan gambar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* KIRI: Konten Teks */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                Satu Octabot. <br className="hidden sm:block" />
                {/* FIX: Hapus class text-transparent dan bg-clip-text yang bikin kodenya bau AI */}
                <span className="text-primary">Semua Platform.</span>
              </h1>
              
              {/* Tambahkan mx-auto di HP biar rata tengahnya seimbang */}
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-5 sm:mt-6 max-w-lg mx-auto lg:mx-0">
                Nggak perlu lagi pusing buka-tutup banyak aplikasi buat balas chat. Octabot nyambung langsung ke platform sosial media yang kamu pakai sehari-hari. Mulai dari ngejawab DM sampai input data ke Google Sheets, semua beres otomatis.
              </p>
            </motion.div>
          </div>

          {/* KANAN: Tempat Gambar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center lg:justify-end group w-full"
          >
            {/* FIX: Pakai aspect-square di HP biar lingkarannya nggak gepeng, dan aspect-[4/3] di Laptop */}
            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center">
              <Image 
                src="/integrasi.svg" 
                alt="Octabot Integrations Diagram" 
                fill
                priority // Tambahkan priority karena gambar ini penting (langsung dirender)
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}