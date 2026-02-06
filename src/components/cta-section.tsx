"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6">
      <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white relative overflow-hidden group">
        
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:bg-white/20 transition-all duration-700"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 group-hover:bg-black/20 transition-all duration-700"></div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
            {t.cta.title}
          </h2>
          <p className="text-white/80 text-lg md:text-xl">
            {t.cta.desc}
          </p>
          <div className="flex justify-center">
            <Link href="/register" className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center gap-2">
              {t.cta.btn} <ArrowRight size={20} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}