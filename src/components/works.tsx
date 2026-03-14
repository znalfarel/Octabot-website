"use client";

import { motion } from "framer-motion";
import { FileText, FileSearch, QrCode, Rocket } from "lucide-react";
// IMPORT LANGUAGE CONTEXT
import { useLanguage } from "@/context/language-context";

export default function HowItWorksSection() {
  const { t } = useLanguage();

  // Mapping Icon secara eksplisit (karena icon tidak bisa ditaruh di file bahasa json/ts)
  const ICONS = [
    <FileText key="1" className="w-8 h-8 md:w-10 md:h-10" />,
    <FileSearch key="2" className="w-8 h-8 md:w-10 md:h-10" />,
    <QrCode key="3" className="w-8 h-8 md:w-10 md:h-10" />,
    <Rocket key="4" className="w-8 h-8 md:w-10 md:h-10" />,
  ];

  // Fallback data (jika file bahasa belum diupdate, pakai teks default ini agar tidak error)
  const title = t.howItWorks?.title || "CARA KERJA";
  const stepsData = t.howItWorks?.steps || [
    { step: "STEP 1", title: "Upload dokumen", desc: "PDF, SOP, FAQ, katalog, dll." },
    { step: "STEP 2", title: "Sistem mengindeks", desc: "Sistem mengindeks knowledge Anda secara otomatis." },
    { step: "STEP 3", title: "Hubungkan WhatsApp", desc: "Hubungkan ke WhatsApp dengan scan QR Code." },
    { step: "STEP 4", title: "AI Aktif", desc: "AI mulai menjawab pesan masuk otomatis." }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-foreground flex items-center justify-center gap-2 sm:gap-3 uppercase">
              {title}
            </h2>
          </motion.div>
        </div>

        {/* Workflow Grid */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Garis Penghubung HORIZONTAL */}
          <div className="hidden lg:block absolute top-[4rem] left-[10%] right-[10%] h-0.5 border-t-[3px] border-dashed border-border/60 z-0"></div>

          {/* Garis Penghubung VERTIKAL */}
          <div className="block md:hidden absolute top-[10%] bottom-[10%] left-1/2 -translate-x-1/2 w-0 border-l-[3px] border-dashed border-border/60 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 relative z-10">
            {stepsData.map((item: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border-2 border-border p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-[4px_4px_0_var(--color-border)] md:shadow-[6px_6px_0_var(--color-border)] hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-[4px_6px_0_#3F6212] md:hover:shadow-[6px_10px_0_#3F6212] transition-all duration-300 flex flex-col items-center text-center group"
              >
                {/* Icon Container - Ambil dari array ICONS berdasarkan index */}
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary border-2 border-zinc-900 dark:border-primary rounded-xl md:rounded-2xl flex items-center justify-center text-zinc-950 mb-5 md:mb-6 shadow-[3px_3px_0_#18181b] md:shadow-[4px_4px_0_#18181b] dark:shadow-[3px_3px_0_#3F6212] dark:md:shadow-[4px_4px_0_#3F6212] group-hover:scale-110 transition-transform duration-300">
                  {ICONS[index]}
                </div>
                
                <span className="text-zinc-900 dark:text-primary font-black text-xs md:text-sm tracking-widest uppercase mb-2 md:mb-3">
                  {item.step}
                </span>

                <h3 className="font-bold text-lg md:text-xl text-foreground mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed px-2 sm:px-0">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
}