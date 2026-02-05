"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, MessageSquareMore } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mencegah scroll pada body saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
          scrolled || isOpen 
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* 1. LOGO */}
            <Link href="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity z-50 relative">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <MessageSquareMore size={22} />
              </div>
              <span className="font-bold text-xl tracking-tight">Octabot</span>
            </Link>

            {/* 2. DESKTOP MENU (Wajib: max-md:hidden) */}
            {/* Class 'max-md:hidden' memaksa elemen ini hilang total di layar HP */}
            <div className="hidden md:flex items-center gap-8 max-md:hidden">
              {["Fitur", "Harga", "Kontak"].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
              
              <div className="h-6 w-px bg-border/50"></div>

              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle Theme"
              >
                {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <Link href="/login" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all">
                Mulai Sekarang
              </Link>
            </div>

            {/* 3. MOBILE TOGGLE (Wajib: md:hidden) */}
            <div className="flex items-center gap-4 md:hidden">
              {/* Theme Toggle Mobile */}
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Hamburger Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-foreground focus:outline-none z-50 relative"
                aria-label="Menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE MENU OVERLAY (Full Screen Cover) */}
      {/* Menggunakan 'fixed inset-0' dan background solid agar tidak transparan */}
      <div 
        className={`fixed inset-0 z-40 bg-background flex flex-col justify-center items-center gap-8 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        {/* Dekorasi Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="flex flex-col items-center gap-8 w-full max-w-sm text-center px-6">
          {["Fitur", "Harga", "Kontak"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          
          <div className="w-20 h-1 bg-border rounded-full opacity-50 my-2"></div>

          <Link 
            href="/login" 
            onClick={() => setIsOpen(false)} 
            className="bg-primary text-white w-full py-4 rounded-full text-xl font-bold shadow-xl shadow-primary/30 active:scale-95 transition-transform"
          >
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </>
  );
}