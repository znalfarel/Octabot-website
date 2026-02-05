import { ArrowRight, CheckCircle2, Zap, Shield, Cpu } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Platform Bot WhatsApp #1 di Indonesia
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-6 max-w-4xl">
          Otomatisasi WhatsApp <br />
          <span className="text-primary">Sesuai Imajinasimu</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed">
          Octabot menyediakan jasa penyewaan bot WhatsApp dengan fitur custom. 
          Dari auto-reply sederhana hingga integrasi AI kompleks, kami buatkan untuk Anda.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            Konsultasi Gratis <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-background border border-border text-foreground rounded-lg font-semibold hover:border-foreground transition-all">
            Lihat Demo
          </button>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Bot Aktif", value: "500+" },
            { label: "Pesan/Hari", value: "1M+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Klien Puas", value: "200+" },
          ].map((stat, idx) => (
            <div key={idx}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-foreground/60 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Kenapa Octabot?</h2>
          <p className="text-foreground/70 max-w-xl text-lg">
            Kami tidak menjual template. Kami membangun sistem yang menyesuaikan dengan alur bisnis Anda, bukan sebaliknya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Cpu size={32} />,
              title: "Fully Custom Logic",
              desc: "Anda butuh bot yang bisa cek stok gudang lalu kirim invoice otomatis? Bisa.",
            },
            {
              icon: <Zap size={32} />,
              title: "Respon Kilat",
              desc: "Dibangun dengan infrastruktur modern, delay pesan di bawah 1 detik.",
            },
            {
              icon: <Shield size={32} />,
              title: "Privasi Terjaga",
              desc: "Data chat Anda terenkripsi dan kami tidak menyimpannya di server kami.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Siap Mengotomatisasi Bisnis Anda?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Bergabunglah dengan ratusan bisnis yang telah menghemat waktu operasional mereka menggunakan Octabot.
          </p>
          <button className="bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:scale-105 transition-all">
            Mulai Sekarang
          </button>
        </div>
      </section>
    </>
  );
}