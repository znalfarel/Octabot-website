"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "@/context/language-context"; // Import Hook

export default function NotFound() {
  const { t } = useLanguage(); // Gunakan data bahasa

  // Safety check jika t belum ready (mencegah error merah)
  if (!t) return null;

  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto space-y-8 mt-10">
        
        {/* Visual Utama: Robot Bingung */}
        <div className="relative w-40 h-40 mx-auto mb-6">
           <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
           <Image 
             src="/errorbot.svg" 
             alt="Robot Bingung" 
             width={160} 
             height={160} 
             className="relative z-10 drop-shadow-2xl animate-bounce-slow"
           />
        </div>

        <div className="space-y-4">
          {/* Teks 404 */}
          <h1 className="font-heading text-7xl md:text-9xl font-black text-foreground tracking-tighter drop-shadow-sm">
            {t?.notFound?.code || "404"}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t?.notFound?.title || "Waduh, Kesasar Ya?"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto">
            {t?.notFound?.desc || "Halaman yang kamu cari udah nggak ada atau dipindah. Yuk balik ke jalan yang benar!"}
          </p>
        </div>

        {/* Action Buttons - DIUBAH JADI NEO BRUTALISM 3D */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-6 w-full max-w-sm mx-auto sm:max-w-none">
          
          {/* Tombol Primary (Hijau Stabilo) */}
          <Link 
            href="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_6px_0_#3F6212] hover:brightness-110 active:translate-y-[6px] active:shadow-none"
          >
            <Home size={20} />
            {t?.notFound?.backHome || "Balik ke Beranda"}
          </Link>
          
          {/* Tombol Secondary (Border Tegas) */}
          <button 
            onClick={() => window.history.back()} 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-card border-2 border-border text-foreground px-8 py-4 rounded-2xl font-bold transition-all shadow-[0_6px_0_var(--color-border)] hover:border-primary hover:text-primary active:translate-y-[6px] active:shadow-none"
          >
            <ArrowLeft size={20} />
            {t?.notFound?.goBack || "Kembali"}
          </button>
          
        </div>

        {/* Techy Footer Detail */}
        <div className="pt-16">
            <div className="inline-block bg-muted/50 border border-border px-4 py-2 rounded-lg">
              <p className="text-xs text-muted-foreground font-mono">
                  {t?.notFound?.footer || "Error Log:"} <br/>
                  System: Octabot Core v2.4
              </p>
            </div>
        </div>

      </div>
    </div>
  );
}