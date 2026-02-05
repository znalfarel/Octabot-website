import { Zap, ShieldCheck, Code2, Headphones } from "lucide-react";

const features = [
  {
    icon: <Zap size={32} />,
    title: "Respon Kilat",
    description: "Infrastruktur serverless memastikan balasan di bawah 500ms.",
  },
  {
    icon: <Code2 size={32} />,
    title: "Logic Custom",
    description: "Buat alur percakapan kompleks sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Enkripsi Data",
    description: "Privasi pelanggan terjaga dengan enkripsi End-to-End.",
  },
  {
    icon: <Headphones size={32} />,
    title: "Support 24/7",
    description: "Tim teknis kami siap membantu kapanpun Anda butuh.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      <div className="max-w-3xl mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          Fitur Premium, <br/><span className="text-muted-foreground">Harga Masuk Akal.</span>
        </h2>
      </div>

      {/* RESPONSIVE GRID: 1 kolom (HP), 2 kolom (Tablet/Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group bg-card border border-border rounded-[2rem] p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
          >
            <div className="mb-6 inline-flex p-3 bg-primary/10 text-primary rounded-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}