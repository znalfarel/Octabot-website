"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function IntegrationMarquee() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah error hydration di Next.js saat mendeteksi tema
  useEffect(() => {
    setMounted(true);
  }, []);

  // GANTI NAMA FILE DI BAWAH SESUAIKAN DENGAN NAMA GAMBARMU DI FOLDER PUBLIC
  const apps = [
    { name: "Website", image: "/logososmed/globe.svg" },
    { name: "Facebook", image: "/logososmed/fb.svg" },
    { name: "Telegram", image: "/logososmed/tele.svg" },
    { name: "WhatsApp", image: "/logososmed/wa.svg" },
    { 
      name: "Octabot", 
      // Siapkan 2 gambar: untuk mode terang (biasanya logo gelap) dan mode gelap (biasanya logo putih)
      imageLight: "/logo-light.svg", 
      imageDark: "/logo-dark.svg", 
      isHighlight: true // Tetap pakai highlight hijau stabilo
    },
    { name: "Instagram", image: "/logososmed/ig.svg" },
    { name: "Shopee", image: "/logososmed/shopi.svg" },
    { name: "Gmail", image: "/logososmed/gmail.svg" },
  ];

  // Gandakan array agar animasinya looping tanpa putus
  const duplicatedApps = [...apps, ...apps, ...apps];
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="w-full py-12 md:py-16 overflow-hidden relative bg-transparent">
      
      {/* JUDUL SECTION */}
      <div className="text-center mb-8 md:mb-10 px-4">
        <h2 className="text-xs sm:text-sm md:text-base font-bold text-muted-foreground uppercase tracking-widest">
          Kami Mendukung Integrasi
        </h2>
      </div>

      {/* Container Animasi Marquee (Full Width) */}
      <div className="relative flex overflow-hidden z-0 w-full">
        
        {/* Efek Fade transparan di ujung kiri & kanan - Responsif di HP & PC */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 items-center w-max pl-4 sm:pl-6 py-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 25, 
            repeat: Infinity,
          }}
        >
          {duplicatedApps.map((app, index) => {
            // Logika penentuan gambar (khusus Octabot yang punya 2 mode)
            let imgSrc = app.image || "";
            if (app.isHighlight) {
              imgSrc = mounted && currentTheme === "dark" ? app.imageDark! : app.imageLight!;
            }

            return (
              <div
                key={index}
                // Ukuran kotak dibikin bertahap: HP (w-16) -> Tablet (w-20) -> PC (w-24)
                className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl border-2 transition-all duration-300
                  ${
                    app.isHighlight
                      ? "bg-primary/10 border-primary shadow-[4px_4px_0_#3F6212] scale-110 mx-2"
                      : "bg-card border-border shadow-[4px_4px_0_var(--color-border)] hover:border-primary/50 hover:-translate-y-1"
                  }
                `}
              >
                {/* Tempat render gambar custom - Ukuran gambar juga responsif */}
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110">
                  <Image 
                    src={imgSrc} 
                    alt={app.name} 
                    fill 
                    className="object-contain drop-shadow-sm"
                    sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, 48px"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      
    </div>
  );
}