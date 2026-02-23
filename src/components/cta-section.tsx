"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6">
      
      {/* PENYESUAIAN: Background gelap (bg-card), border hijau, dan bayangan 3D tebal ke bawah */}
      <div className="bg-card border-2 border-primary rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden group shadow-[8px_8px_0_#3F6212] md:shadow-[16px_16px_0_#3F6212] transition-transform hover:-translate-y-1 hover:shadow-[16px_20px_0_#3F6212]">
        
        {/* Decorative Circles: Diubah jadi warna primary/stabilo yang samar (glow) */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-primary/20 transition-all duration-700 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover:bg-primary/15 transition-all duration-700 pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-6 md:space-y-8">
          
          {/* PENYESUAIAN: Teks diubah jadi text-foreground (terang/putih di dark mode) */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight text-foreground">
            {t.cta.title}
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl">
            {t.cta.desc}
          </p>
          
          <div className="flex justify-center pt-4 md:pt-6">
            {/* PENYESUAIAN: Tombol disamakan dengan gaya Hero (Hijau stabilo, teks gelap, shadow 3D) */}
            <Link 
              href="/register" 
              className="bg-primary text-primary-foreground w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_6px_0_#3F6212] hover:brightness-110 active:translate-y-[6px] active:shadow-none"
            >
              {t.cta.btn} <ArrowRight size={20} />
            </Link>
          </div>
          
        </div>

      </div>
    </section>
  );
}