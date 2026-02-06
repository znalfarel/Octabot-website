"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { t, language } = useLanguage(); // Ambil bahasa aktif
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Render logo dinamis
  const logoSrc = mounted && currentTheme === 'light' ? "/logo-light.svg" : "/logo-dark.svg";

  return (
    <footer className="bg-background border-t border-border py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               {mounted && <Image src={logoSrc} alt="Octabot" width={32} height={32} className="object-contain" />}
               <span className="font-heading font-bold text-2xl">Octabot</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.product}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#fitur" className="hover:text-primary transition-colors">{t.footer.links.features}</Link></li>
              <li><Link href="#harga" className="hover:text-primary transition-colors">{t.footer.links.pricing}</Link></li>
              <li><Link href="/api" className="hover:text-primary transition-colors">{t.footer.links.api}</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.company}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">{t.footer.links.about}</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">{t.footer.links.contact}</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">{t.footer.links.privacy}</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">{t.footer.links.terms}</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-4">
            {/* Opsional: Social Icons bisa ditaruh sini */}
            <span>Instagram</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
      </div>
    </footer>
  );
}