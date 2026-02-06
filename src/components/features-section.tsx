"use client";

import { Zap, ShieldCheck, Database } from "lucide-react";
import { useLanguage } from "@/context/language-context";

export default function FeaturesSection() {
  const { t } = useLanguage();

  const ICONS = [Zap, ShieldCheck, Database];

  return (
    <section id="fitur" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            {t.features.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.features.list.map((feature, index) => {
            const Icon = ICONS[index];
            return (
              <div key={index} className="bg-card border border-border p-8 rounded-3xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
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