"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail } from "lucide-react";

export default function Footer() {
  const { t, language } = useLanguage();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  // Render logo dinamis (JANGAN DIHAPUS)
  const logoSrc = mounted && currentTheme === 'light' ? "/logo-light.svg" : "/logo-dark.svg";

  return (
    <footer className="relative bg-background pt-20 pb-10 overflow-hidden">
      
      {/* --- DECORATION: GLOWING BORDER & LIGHT --- */}
      {/* Garis gradient di atas border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      {/* Ambient Light di pojok kanan atas footer */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* 1. BRAND & DESCRIPTION (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 group">
              {mounted && (
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                    <Image src={logoSrc} alt="Octabot" width={40} height={40} className="object-contain relative z-10" />
                </div>
              )}
              <span className="font-heading font-bold text-2xl tracking-tight group-hover:text-primary transition-colors">Octabot</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <SocialLink href="https://instagram.com/octabot.id" icon={<Instagram size={18} />} />
              <SocialLink href="#" icon={<Twitter size={18} />} />
              <SocialLink href="#" icon={<Linkedin size={18} />} />
              <SocialLink href="#" icon={<Facebook size={18} />} />
            </div>
          </div>

          {/* 2. LINKS (Col Span 2 per column) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-foreground tracking-wide">{t.footer.product}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><FooterLink href="#fitur">{t.footer.links.features}</FooterLink></li>
              <li><FooterLink href="#harga">{t.footer.links.pricing}</FooterLink></li>
              <li><FooterLink href="/api">{t.footer.links.api}</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-foreground tracking-wide">{t.footer.company}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><FooterLink href="/about">{t.footer.links.about}</FooterLink></li>
              <li><FooterLink href="/contact">{t.footer.links.contact}</FooterLink></li>
              <li><FooterLink href="/blog">Blog</FooterLink></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-6 text-foreground tracking-wide">{t.footer.legal}</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><FooterLink href="/privacy">{t.footer.links.privacy}</FooterLink></li>
              <li><FooterLink href="/terms">{t.footer.links.terms}</FooterLink></li>
            </ul>
          </div>

          {/* 3. NEWSLETTER (Col Span 2 - Extra "Niat") */}
          {/* Kolom tambahan agar footer terlihat penuh & profesional */}
          <div className="lg:col-span-2">
             <h4 className="font-bold mb-6 text-foreground tracking-wide">Stay Updated</h4>
             <div className="space-y-3">
                <p className="text-xs text-muted-foreground">Dapatkan info fitur terbaru.</p>
                <div className="flex flex-col gap-2">
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14}/>
                        <input 
                          type="email" 
                          placeholder="Email Anda" 
                          className="w-full bg-muted/50 border border-border rounded-lg pl-9 pr-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                        />
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold py-2 rounded-lg transition-all flex items-center justify-center gap-2">
                        Subscribe <Send size={12} />
                    </button>
                </div>
             </div>
          </div>

        </div>

        {/* COPYRIGHT SECTION */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-medium">
            {t.footer.copyright}
          </p>
          
          <div className="flex items-center gap-6 text-xs text-muted-foreground font-medium">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                System Operational
             </div>
             <span>v2.4.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Komponen Kecil untuk Link agar kodingan rapi
function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">
            {children}
        </Link>
    )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <Link href={href} className="w-8 h-8 rounded-full bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            {icon}
        </Link>
    )
}