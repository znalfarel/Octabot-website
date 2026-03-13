"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe, ChevronDown, Check } from "lucide-react"; 
import { useLanguage, Language } from "@/context/language-context";

const LANGUAGES = [
  { code: "id", label: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "en", label: "EN", name: "English", flag: "🇺🇸" },
] as const;

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const activeLangData = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  // Class untuk Tombol Utama CTA (Solid Hijau Stabilo, Teks Gelap)
  const primary3DButtonClass = "bg-primary text-primary-foreground rounded-xl transition-all shadow-[0_4px_0_#3F6212] hover:brightness-110 active:translate-y-[4px] active:shadow-none font-bold";

  // JURUS PAMUNGKAS: Kita bypass Tailwind! Pakai logika Javascript langsung biar warnanya tunduk 100% sama tombol Toggle
  const isDarkMode = mounted && currentTheme === 'dark';
  const secondary3DButtonClass = `border border-primary rounded-xl transition-all shadow-[0_4px_0_#3F6212] hover:brightness-110 active:translate-y-[4px] active:shadow-none font-bold ${
    isDarkMode 
      ? 'bg-card text-primary' // Di Mode Gelap: Background card, Teks Hijau Stabilo
      : 'bg-white text-black'  // Di Mode Terang: Background putih, Teks HITAM PEKAT
  }`;

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent border-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer hover:opacity-80 transition-opacity z-50 relative">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9"> 
              {mounted && (
                <Image src={currentTheme === 'dark' ? "/logo-dark.svg" : "/logo-light.svg"} alt="Logo Octabot" fill className="object-contain" priority />
              )}
            </div>
            <span className="font-heading font-bold text-xl sm:text-2xl tracking-normal">Octabot</span>
          </Link>

          {/* KONTROL KANAN */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* TEMA: TOMBOL SEKUNDER 3D */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
              className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center ${secondary3DButtonClass}`}
            >
              {mounted && theme === "dark" ? <Sun size={16} className="sm:w-[18px] sm:h-[18px]" /> : <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />}
            </button>

            {/* BAHASA: TOMBOL SEKUNDER 3D */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
                className={`flex items-center h-9 sm:h-10 gap-1 sm:gap-1.5 px-2 sm:px-4 text-xs sm:text-sm ${secondary3DButtonClass}`}
              >
                <Globe size={14} className="sm:w-4 sm:h-4" />
                <span>{activeLangData.label}</span>
                <ChevronDown size={12} className={`sm:w-[14px] sm:h-[14px] transition-transform duration-200 ${isLangMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Dropdown Menu Bahasa */}
              <div className={`absolute top-full right-0 mt-3 w-40 sm:w-48 bg-card border-2 border-border rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top-right ${isLangMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}`}>
                <div className="p-1">
                  {LANGUAGES.map((lang) => (
                    <button key={lang.code} onClick={() => { setLanguage(lang.code as Language); setIsLangMenuOpen(false); }} className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors ${language === lang.code ? "bg-primary/10 text-primary font-bold" : "hover:bg-muted text-foreground font-medium"}`}>
                      <div className="flex items-center gap-3"><span className="text-base leading-none">{lang.flag}</span><span>{lang.name}</span></div>
                      {language === lang.code && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* TOMBOL CTA / LOGIN: TETAP PRIMARY 3D */}
            <Link 
              href="/login" 
              className={`h-9 sm:h-10 px-4 sm:px-6 flex items-center justify-center text-xs sm:text-sm ${primary3DButtonClass}`}
            >
              <span className="block sm:hidden">{t.navbar.ctaMobile}</span>
              <span className="hidden sm:block">{t.navbar.ctaDesktop}</span>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}