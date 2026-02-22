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

              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* LANGUAGE SWITCHER */}
              <div className="relative" ref={langMenuRef}>
                <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-muted transition-all text-sm font-medium border border-transparent hover:border-border">
                  <Globe size={16} className="text-muted-foreground" />
                  <span>{activeLangData.label}</span>
                  <ChevronDown size={14} className={`text-muted-foreground transition-transform duration-200 ${isLangMenuOpen ? "rotate-180" : ""}`} />
                </button>

                <div className={`absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-xl shadow-xl overflow-hidden transition-all duration-200 origin-top-right ${isLangMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}`}>
                  <div className="p-1">
                    {LANGUAGES.map((lang) => (
                      <button key={lang.code} onClick={() => { setLanguage(lang.code as Language); setIsLangMenuOpen(false); }} className={`w-full flex items-center justify-between px-3 py-2.5 text-sm rounded-lg transition-colors ${language === lang.code ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted text-foreground"}`}>
                        <div className="flex items-center gap-3"><span className="text-base leading-none">{lang.flag}</span><span>{lang.name}</span></div>
                        {language === lang.code && <Check size={14} />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* TOMBOL DESKTOP 3D */}
              <Link 
                href="/login" 
                className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_4px_0_#5B21B6] hover:brightness-110 active:translate-y-[4px] active:shadow-none"
              >
                {t.navbar.cta}
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="flex items-center gap-4 md:hidden">
              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full hover:bg-muted transition-colors">
                {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground focus:outline-none z-50 relative">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed inset-0 z-40 bg-background flex flex-col items-center pt-24 gap-8 transition-all duration-300 ease-in-out md:hidden overflow-y-auto ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} style={{ height: '100vh' }}>
        <div className="flex flex-col items-center gap-6 w-full max-w-sm px-6">
          {SECTION_IDS.map((id, index) => (
            <Link key={id} href={`#${id}`} onClick={() => setIsOpen(false)} className="text-3xl font-heading font-bold text-foreground hover:text-primary transition-colors">
              {t.navbar.items[index]}
            </Link>
          ))}
        </div>
        <div className="w-20 h-1 bg-border rounded-full opacity-50"></div>
        <div className="flex flex-col items-center gap-3 w-full max-w-xs px-6">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{t.navbar.choose}</span>
          <div className="grid grid-cols-2 gap-3 w-full">
            {LANGUAGES.map((lang) => (
              <button key={lang.code} onClick={() => setLanguage(lang.code as Language)} className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all ${language === lang.code ? "border-primary bg-primary/5 text-primary shadow-sm" : "border-border bg-card hover:border-primary/50"}`}>
                <span className="text-lg">{lang.flag}</span><span className="font-medium text-sm">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-full max-w-sm px-6 pb-10 mt-auto">
          {/* TOMBOL MOBILE 3D */}
          <Link 
            href="/login" 
            onClick={() => setIsOpen(false)} 
            className="flex justify-center items-center bg-primary text-white w-full py-4 rounded-2xl text-xl font-bold transition-all shadow-[0_6px_0_#5B21B6] hover:brightness-110 active:translate-y-[6px] active:shadow-none"
          >
            {t.navbar.cta}
          </Link>
        </div>
      </div>
    </>
  );
}