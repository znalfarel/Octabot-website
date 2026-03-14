"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link2, Check } from "lucide-react";
// IMPORT LANGUAGE CONTEXT
import { useLanguage } from "@/context/language-context";

export default function IntegrationPage() {
  const { t } = useLanguage();

  // Fallback data (Jaga-jaga kalau kamu lupa update file language-context.tsx, webnya nggak akan crash)
  const data = t.integration || {
    badge: "100% TERKONEKSI",
    titleStart: "Satu Octabot.",
    titleEnd: "Semua Platform.",
    desc: "Nggak perlu lagi pusing buka-tutup banyak aplikasi buat balas chat. Octabot nyambung langsung ke platform sosial media yang kamu pakai sehari-hari.",
    points: [
      "Balas DM & Komen dari satu layar",
      "Tarik data realtime ke Google Sheets",
      "Kirim notifikasi otomatis via API"
    ]
  };

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden relative border-y border-border/50">
      
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-border)_1.5px,_transparent_1.5px)] bg-[size:24px_24px] opacity-20 md:opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-6xl mx-auto">
          
          {/* KIRI: Konten Teks */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full flex flex-col items-center lg:items-start"
            >
              
              {/* BADGE NEO-BRUTALIST */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border-2 border-primary text-zinc-900 dark:text-primary font-bold text-xs sm:text-sm mb-6 shadow-[3px_3px_0_#3F6212]">
                <Link2 size={16} className="text-primary" /> 
                <span className="tracking-wide uppercase">{data.badge}</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                {data.titleStart} <br className="hidden sm:block" />
                <span className="text-primary">{data.titleEnd}</span>
              </h1>
              
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mt-5 sm:mt-6 max-w-lg">
                {data.desc}
              </p>

              {/* LIST KOTAK 3D DINAMIS (Ngikutin bahasa) */}
              <div className="mt-8 flex flex-col gap-3 sm:gap-4 text-left w-full max-w-md mx-auto lg:mx-0">
                {data.points.map((text: string, i: number) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                    className="flex items-center gap-4 p-3 sm:p-4 bg-card border-2 border-border rounded-xl shadow-[4px_4px_0_var(--color-border)] hover:-translate-y-1 hover:border-primary hover:shadow-[4px_6px_0_#3F6212] transition-all duration-300 group"
                  >
                    <div className="bg-background border-2 border-border group-hover:border-primary text-primary p-1.5 rounded-lg transition-colors">
                      <Check size={18} strokeWidth={3} />
                    </div>
                    <span className="font-bold text-sm md:text-base text-foreground">{text}</span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* KANAN: Gambar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center lg:justify-center w-full mt-12 lg:mt-0"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-lg aspect-square lg:aspect-[4/3] flex items-center justify-center drop-shadow-xl"
            >
              <Image 
                src="/integrasi.svg" 
                alt="Octabot Integrations Diagram" 
                fill
                priority 
                className="object-contain"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}