import Link from "next/link";
import { Bot, Instagram, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Bot size={20} />
              </div>
              <span className="font-bold text-xl">Octabot</span>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Solusi otomasi WhatsApp premium untuk bisnis Anda. 
              Custom fitur tanpa batas, stabil, dan terpercaya.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Bot Toko Online</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Bot Customer Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Broadcast API</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Custom Integration</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li><Link href="#" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Karir</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            © {new Date().getFullYear()} Octabot Indonesia. All rights reserved.
          </p>
          <div className="text-sm text-foreground/50 flex gap-6">
            <span>Made with ❤️ in Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}