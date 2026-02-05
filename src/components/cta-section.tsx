import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      {/* Menggunakan style 'ref-card' tapi dengan background Primary */}
      <div className="bg-primary rounded-[3rem] p-10 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        
        <div className="relative z-10 max-w-2xl mb-10 md:mb-0 space-y-6">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight">
            Siap Mengotomatisasi WhatsApp Anda?
          </h2>
          <p className="text-primary-foreground/80 text-xl leading-relaxed">
            Jangan biarkan pelanggan menunggu. Tingkatkan konversi penjualan dengan respon instan mulai hari ini.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0">
          <Link href="/register" className="bg-background text-foreground px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center gap-2">
            Mulai Konsultasi Gratis <ArrowRight/>
          </Link>
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
}