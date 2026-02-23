"use client";

import { useLanguage } from "@/context/language-context";
import { XCircle, AlertTriangle, MessageSquare, Star, Smile, CheckCircle2, HeartHandshake, Coffee } from "lucide-react";

export default function ComparisonSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            {t.comparison.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.comparison.subtitle}
          </p>
        </div>

        {/* Comparison Grid */}
        {/* PENYESUAIAN: max-w-6xl diubah jadi max-w-5xl, dan gap-12 jadi gap-8 agar lebih padat dan rapi di tengah */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* KIRI: TRADITIONAL CHATBOT (Boring & Flat Look) */}
          <div className="bg-muted/30 border-2 border-border p-8 md:p-10 rounded-[2rem] flex flex-col relative transition-colors">
            <div className="w-16 h-16 bg-muted/50 rounded-2xl flex items-center justify-center mb-6">
               <MessageSquare size={32} className="text-muted-foreground" />
            </div>
            
            <h3 className="font-heading text-2xl font-bold mb-8 text-muted-foreground">
              {t.comparison.traditional.title}
            </h3>

            <div className="space-y-8 flex-1">
              {/* Point 1 */}
              <div className="flex gap-4">
                <AlertTriangle className="text-red-400/80 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground/70">{t.comparison.traditional.points[0].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.traditional.points[0].desc}
                  </p>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="flex gap-4">
                <XCircle className="text-red-400/80 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground/70">{t.comparison.traditional.points[1].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.traditional.points[1].desc}
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <MessageSquare className="text-red-400/80 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground/70">{t.comparison.traditional.points[2].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.traditional.points[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: OCTABOT AI (Chill, Fun, & Solid 3D Look) */}
          <div className="bg-card border-2 border-primary p-8 md:p-10 rounded-[2rem] flex flex-col relative shadow-[8px_8px_0_#3F6212] md:shadow-[12px_12px_0_#3F6212] transition-transform hover:-translate-y-1 hover:shadow-[12px_16px_0_#3F6212] overflow-hidden">
            
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 text-primary-foreground shadow-sm">
               <Star size={32} fill="currentColor" />
            </div>
            
            <h3 className="font-heading text-2xl font-bold mb-8 text-foreground">
              {t.comparison.octabot.title}
            </h3>

            <div className="space-y-8 flex-1 relative z-10">
              {/* Point 1: Natural (Diganti ikon Smile) */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Smile className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.comparison.octabot.points[0].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.octabot.points[0].desc}
                  </p>
                </div>
              </div>
              
              {/* Point 2: Cerdas & Adaptif (Diganti ikon Empati/Salaman) */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <HeartHandshake className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.comparison.octabot.points[1].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.octabot.points[1].desc}
                  </p>
                </div>
              </div>

              {/* Point 3: Bisa Eksekusi (Diganti ikon Kopi/Santai) */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Coffee className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.comparison.octabot.points[2].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.octabot.points[2].desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}