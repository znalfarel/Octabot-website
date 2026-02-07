"use client";

import { useLanguage } from "@/context/language-context";
import { XCircle, AlertTriangle, MessageSquare, Zap, Brain, CheckCircle2, TrendingUp, Bot } from "lucide-react";

export default function ComparisonSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* KIRI: TRADITIONAL CHATBOT (Grey/Muted Look) */}
          <div className="bg-card/50 border border-border p-8 rounded-3xl flex flex-col relative group hover:border-red-200/50 transition-colors">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
               <MessageSquare size={32} className="text-muted-foreground" />
            </div>
            
            <h3 className="font-heading text-2xl font-bold mb-8 text-muted-foreground">
              {t.comparison.traditional.title}
            </h3>

            <div className="space-y-8 flex-1">
              {/* Point 1 */}
              <div className="flex gap-4">
                <AlertTriangle className="text-red-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground/80">{t.comparison.traditional.points[0].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.traditional.points[0].desc}
                  </p>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="flex gap-4">
                <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground/80">{t.comparison.traditional.points[1].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.traditional.points[1].desc}
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <MessageSquare className="text-red-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-foreground/80">{t.comparison.traditional.points[2].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.traditional.points[2].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* KANAN: OCTABOT AI (Highlighted/Primary Look) */}
          <div className="bg-background border-2 border-primary/20 p-8 rounded-3xl flex flex-col relative shadow-2xl shadow-primary/5 ring-1 ring-primary/10 overflow-hidden">
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
               <Zap size={32} />
            </div>
            
            <h3 className="font-heading text-2xl font-bold mb-8 text-primary">
              {t.comparison.octabot.title}
            </h3>

            <div className="space-y-8 flex-1 relative z-10">
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="text-green-600 dark:text-green-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.comparison.octabot.points[0].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.octabot.points[0].desc}
                  </p>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 mt-1">
                  <Brain className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.comparison.octabot.points[1].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.octabot.points[1].desc}
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-1">
                  <TrendingUp className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.comparison.octabot.points[2].title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {t.comparison.octabot.points[2].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Diagram Sederhana (Kanan Bawah) */}
            <div className="hidden md:block absolute bottom-8 right-8 opacity-10 grayscale md:grayscale-0 md:opacity-20 pointer-events-none">
               <div className="relative w-32 h-32 border-2 border-dashed border-primary rounded-full animate-spin-slow"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <Bot size={48} className="text-primary" />
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}