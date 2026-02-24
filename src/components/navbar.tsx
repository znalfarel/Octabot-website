"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Globe, ChevronDown, Check } from "lucide-react";
// IMPORT HOOK BAHASA
import { useLanguage, Language } from "@/context/language-context";

const LANGUAGES = [
  { code: "id", label: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "en", label: "EN", name: "English", flag: "🇺🇸" },
  { code: "es", label: "ES", name: "Español", flag: "🇪🇸" },
  { code: "ja", label: "JP", name: "日本語", flag: "🇯🇵" },
] as const;

export default function Navbar() {
  // GUNAKAN CONTEXT
  const { language, setLanguage, t } = useLanguage();
  
  const [isOpen, setIsOpen] = useState(false);
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
  const SECTION_IDS = ["fitur", "harga", "kontak"];

  // Class standar untuk tombol 3D Primary (Stabilo)
  const primary3DButtonClass = "bg-primary text-primary-foreground rounded-xl transition-all shadow-[0_4px_0_#3F6212] hover:brightness-110 active:translate-y-[4px] active:shadow-none font-bold";

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${scrolled || isOpen ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent border-transparent"}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity z-50 relative">
              <div className="relative w-9 h-9"> 
                {mounted && (
                  <Image src={currentTheme === 'dark' ? "/logo-dark.svg" : "/logo-light.svg"} alt="Logo Octabot" fill className="object-contain" priority />
                )}
              </div>
              <span className="font-heading font-bold text-2xl tracking-normal">Octabot</span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6 max-md:hidden">
              {SECTION_IDS.map((id, index) => (
                <Link key={id} href={`#${id}`} className="text-sm font-medium hover:text-primary transition-colors">
                  {t.navbar.items[index]}
                </Link>
              ))}
              
              <div className="h-6 w-px bg-border/50"></div>

              {/* TEMA: TOMBOL 3D PRIMARY */}
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className={`w-10 h-10 flex items-center justify-center ${primary3DButtonClass}`}
              >
                {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* BAHASA: TOMBOL 3D PRIMARY */}
              <div className="relative" ref={langMenuRef}>
                <button 
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
                  className={`flex items-center h-10 gap-1.5 px-4 text-sm ${primary3DButtonClass}`}
                >
                  <Globe size={16} className="" />
                  <span>{activeLangData.label}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown Menu Bahasa */}
                <div className={`absolute top-full right-0 mt-3 w-48 bg-card border-2 border-border rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top-right ${isLangMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}`}>
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

              {/* TOMBOL DESKTOP CTA */}
              <Link 
                href="/login" 
                className={`h-10 px-6 flex items-center text-sm ${primary3DButtonClass}`}
              >
                {t.navbar.cta}
              </Link>
            </div>

            {/* MOBILE TOGGLE (Tetap Primary 3D) */}
            <div className="flex items-center gap-3 md:hidden">
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className={`w-10 h-10 flex items-center justify-center ${primary3DButtonClass}`}
              >
                {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`w-10 h-10 flex items-center justify-center z-50 relative ${primary3DButtonClass}`}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU (UI/UX DIROMBAK TOTAL) --- */}
      <div className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center pt-28 pb-8 px-6 transition-all duration-300 ease-in-out md:hidden overflow-y-auto ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} style={{ height: '100vh' }}>
        
        {/* Kontainer Link Menu - Muncul bertahap (delay-100) */}
        <div className={`w-full max-w-sm flex flex-col gap-4 transition-all duration-500 delay-100 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          {SECTION_IDS.map((id, index) => (
            <Link 
              key={id} 
              href={`#${id}`} 
              onClick={() => setIsOpen(false)} 
              // Desain kotak tombol besar untuk kemudahan jari mengeklik
              className="w-full bg-card border-2 border-border p-5 rounded-2xl text-center shadow-[0_4px_0_var(--color-border)] active:translate-y-[4px] active:shadow-none transition-all hover:border-primary"
            >
              <span className="text-xl font-heading font-black text-foreground">
                {t.navbar.items[index]}
              </span>
            </Link>
          ))}
        </div>

        {/* Garis Pemisah - Muncul memanjang (delay-200) */}
        <div className={`w-24 h-1 bg-border rounded-full my-8 transition-all duration-500 delay-200 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}></div>

        {/* Pilihan Bahasa Grid - Muncul bertahap (delay-300) */}
        <div className={`w-full max-w-sm flex flex-col gap-4 transition-all duration-500 delay-300 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest text-center">
            {t.navbar.choose}
          </span>
          <div className="grid grid-cols-2 gap-4 w-full">
            {LANGUAGES.map((lang) => (
              <button 
                key={lang.code} 
                onClick={() => setLanguage(lang.code as Language)} 
                className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${
                  language === lang.code 
                    // Aktif: Warna Stabilo, Teks Gelap
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_4px_0_#3F6212] active:translate-y-[4px] active:shadow-none" 
                    // Tidak Aktif: Warna Card biasa
                    : "bg-card border-border text-foreground shadow-[0_4px_0_var(--color-border)] active:translate-y-[4px] active:shadow-none hover:bg-muted"
                }`}
              >
                <span className="text-2xl leading-none">{lang.flag}</span>
                <span className="font-bold text-sm leading-none">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tombol CTA Bawah - Muncul terakhir (delay-500) */}
        <div className={`w-full max-w-sm mt-auto pt-8 transition-all duration-500 delay-500 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <Link 
            href="/login" 
            onClick={() => setIsOpen(false)} 
            className="flex justify-center items-center bg-primary text-primary-foreground w-full py-5 rounded-2xl text-xl font-bold transition-all shadow-[0_6px_0_#3F6212] hover:brightness-110 active:translate-y-[6px] active:shadow-none"
          >
            {t.navbar.cta}
          </Link>
        </div>

      </div>
    </>
  );
}