"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun, Bot } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mencegah hydration mismatch error
  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* --- LOGO AREA --- */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <Bot size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">Octabot</span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:block">
            {/* KUNCI PERBAIKAN: Gunakan 'items-center' agar vertikal rapi */}
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#features" className="text-foreground/80 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
                Fitur
              </Link>
              <Link href="#pricing" className="text-foreground/80 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
                Harga
              </Link>
              <Link href="#contact" className="text-foreground/80 hover:text-primary transition-colors px-3 py-2 text-sm font-medium">
                Kontak
              </Link>
              
              {/* Theme Toggle Button */}
              <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-foreground/80 hover:bg-muted hover:text-primary transition-all focus:outline-none flex items-center justify-center"
                aria-label="Toggle Dark Mode"
              >
                {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <Link 
                href="/login" 
                className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
              >
                Sewa Sekarang
              </Link>
            </div>
          </div>

          {/* --- MOBILE MENU BUTTONS --- */}
          <div className="-mr-2 flex md:hidden gap-2 items-center">
             {/* Mobile Theme Toggle (Agar mudah diakses tanpa buka menu) */}
             <button 
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
              >
                {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted focus:outline-none transition-colors"
              aria-label="Open Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              href="#features" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
            >
              Fitur
            </Link>
            <Link 
              href="#pricing" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
            >
              Harga
            </Link>
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-lg text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
            >
              Kontak
            </Link>
            
            <div className="pt-4 mt-2 border-t border-border">
              <Link 
                href="/login" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-primary-foreground px-5 py-3 rounded-lg font-bold shadow-md hover:opacity-90 transition-opacity"
              >
                Sewa Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}