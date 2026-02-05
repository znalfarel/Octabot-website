import Link from "next/link";
import { MessageSquareMore, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <MessageSquareMore size={18} />
              </div>
              <span className="font-bold text-xl">Octabot</span>
            </div>
            <p className="text-muted-foreground pr-4 max-w-md">
              Platform otomasi WhatsApp paling fleksibel. Bangun bot canggih untuk layanan pelanggan, notifikasi, dan penjualan tanpa batas.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-6">Produk</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Fitur Utama</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Integrasi API</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Harga Paket</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Studi Kasus</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">Perusahaan</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Octabot. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border border-border transition-all hover:scale-110"><Instagram size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border border-border transition-all hover:scale-110"><Twitter size={18} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary p-2 bg-background rounded-full border border-border transition-all hover:scale-110"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}