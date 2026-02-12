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
      

      <div className="relative z-10 text-center max-w-lg mx-auto space-y-8">
        
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
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary tracking-tighter">
            {t?.notFound?.code || "404"}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            {t?.notFound?.title || "Page Not Found"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {t?.notFound?.desc || "The page you are looking for does not exist."}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <Home size={18} />
            {t?.notFound?.backHome || "Back Home"}
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center gap-2 px-8 py-3 rounded-full font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
          >
            <ArrowLeft size={18} />
            {t?.notFound?.goBack || "Go Back"}
          </button>
        </div>

        {/* Techy Footer Detail */}
        <div className="pt-12">
            <p className="text-xs text-muted-foreground/50 font-mono">
                {t?.notFound?.footer} <br/>
                System: Octabot Core v2.4
            </p>
        </div>

      </div>
    </div>
  );
}