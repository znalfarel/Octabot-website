"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/language-context";

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!t) return null;

  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden"> 
      {/* py-24 diubah jadi py-20 biar jarak atas bawah section lebih dikit */}
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12 space-y-3"> 
          {/* mb-16 jadi mb-12 biar header ga kejauhan */}
          <h2 className="font-heading text-3xl md:text-5xl font-black text-primary tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4"> 
          {/* space-y-6 jadi space-y-4 biar antar kotak lebih rapat */}
          {t.faq.list.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`group relative transition-all duration-300 ${
                  isOpen ? "z-10" : "z-0"
                }`}
              >
                {/* 3D Shadow Element */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    isOpen 
                    ? "bg-primary translate-y-1 translate-x-0 opacity-20" 
                    : "bg-border translate-y-1 translate-x-0 opacity-100 group-hover:translate-y-1 group-hover:bg-primary/30" 
                }`}></div>

                {/* Main Card Content */}
                <div 
                    className={`relative bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 ${
                        isOpen ? "border-primary shadow-md" : "hover:border-primary/50"
                    }`}
                >
                    <button
                      onClick={() => toggleFAQ(index)}
                      // DISINI: Padding dikecilkan dari p-6/p-8 menjadi p-4/p-5
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                    >
                      {/* Font size judul disesuaikan sedikit */}
                      <span className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                          isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                      }`}>
                        {item.q}
                      </span>
                      
                      {/* Ukuran tombol icon diperkecil sedikit */}
                      <div className={`flex-shrink-0 ml-3 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isOpen 
                          ? "bg-primary text-white rotate-180 shadow-sm" 
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}>
                        <Plus size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} />
                      </div>
                    </button>

                    {/* Animasi Konten */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }} // Sedikit dipercepat
                        >
                          {/* DISINI: Padding konten dikecilkan */}
                          <div className="px-4 sm:px-5 pb-5 pt-0 text-muted-foreground leading-relaxed text-sm sm:text-base">
                            <div className="w-full h-px bg-border/50 mb-3"></div>
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}