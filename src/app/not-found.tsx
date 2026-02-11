"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Background Decoration (Subtle) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden opacity-20">
          <div className="absolute top-10 left-10 opacity-50">
             <Image src="/robot.svg" alt="decoration" width={150} height={150} className="grayscale" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-50">
             <Image src="/robot3.svg" alt="decoration" width={150} height={150} className="grayscale" />
          </div>
      </div>

      <div className="relative z-10 text-center max-w-lg mx-auto space-y-8">
        
        {/* Visual Utama: Robot Bingung (Simulasi) */}
        <div className="relative w-40 h-40 mx-auto mb-6">
           <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse"></div>
           <Image 
             src="/boterror.svg" // Menggunakan aset robot yang sudah ada
             alt="Robot Bingung" 
             width={160} 
             height={160} 
             className="relative z-10 drop-shadow-2xl animate-bounce-slow"
           />
        </div>

        <div className="space-y-4">
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Waduh, Jalannya Buntu!
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Robot kami sudah mencari ke setiap sudut server, tapi halaman yang Anda tuju sepertinya sudah pindah atau memang tidak pernah ada.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <Home size={18} />
            Kembali ke Markas
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 px-8 py-3 rounded-full font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            <ArrowLeft size={18} />
            Balik Aja
          </button>
        </div>

        {/* Techy Footer Detail */}
        <div className="pt-12">
            <p className="text-xs text-muted-foreground/50 font-mono">
                Error Code: PAGE_NOT_FOUND_EXCEPTION <br/>
                System: Octabot Core v2.4
            </p>
        </div>

      </div>
    </div>
  );
}