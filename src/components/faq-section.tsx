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
      
      

      <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12 space-y-3"> 
          {/* PENYESUAIAN: Ubah warna judul jadi text-foreground agar kontrasnya aman dan nggak silau */}
          <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4"> 
          {t.faq.list.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                /* PENYESUAIAN: Hapus elemen bayangan absolute, pakai desain Neo-Brutalism langsung di card utama */
                className={`relative bg-card border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "border-primary shadow-[4px_4px_0_#3F6212] z-10 scale-[1.01]" 
                    : "border-border hover:border-primary/50 hover:shadow-[4px_4px_0_#3F6212]/40 z-0"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none bg-transparent"
                >
                  <span className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                      isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                  }`}>
                    {item.q}
                  </span>
                  
                  {/* PENYESUAIAN: Icon plus berubah gelap saat aktif di atas stabilo */}
                  <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                      ? "bg-primary text-primary-foreground rotate-180" 
                      : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                  }`}>
                    <Plus size={18} className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`} />
                  </div>
                </button>

                {/* Animasi Konten yang Smooth */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-muted-foreground leading-relaxed text-sm sm:text-base">
                        {/* Garis pemisah */}
                        <div className="w-full h-px bg-border mb-4"></div>
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}