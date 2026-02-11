"use client";

import { 
  Zap, 
  Radio, 
  Database, 
  Users, 
  ShieldAlert, 
  ShoppingBag 
} from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function FeaturesSection() {
  const { t } = useLanguage();

  // Mapping Icon secara eksplisit
  const ICONS = [
    Zap,          // Auto Reply
    Radio,        // Broadcast
    Database,     // API
    Users,        // Grup Integrasi
    ShieldAlert,  // Manajemen Grup
    ShoppingBag   // Transaksi
  ];

  return (
    <section id="fitur" className="py-24 bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            {t.features.title}
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.features.list.map((feature, index) => {
            const Icon = ICONS[index] || Zap; 
            
            return (
              <div 
                key={index} 
                className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 flex flex-col items-start h-full"
              >
                {/* Hover Glow Effect (Tetap dipertahankan agar tetap keren) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                <div className="mb-6 relative">
                  <div className="w-14 h-14 bg-background border border-border rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon size={26} className="text-primary" strokeWidth={1.5} />
                  </div>
                  
                </div>

                <h3 className="font-heading text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}