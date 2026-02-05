"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, Bot, Send } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
};

// --- SKENARIO DEMO (GERAK SENDIRI SAAT AWAL) ---
const DEMO_SCENARIO = [
  { role: "bot", text: "Halo! Selamat datang di Octabot. 👋", delay: 1000 },
  { role: "bot", text: "Saya siap membantu bisnis Anda otomatisasi WhatsApp 24/7.", delay: 3000 },
  { role: "user", text: "Bisa kirim pesan broadcast ke 1000 nomor?", delay: 5500 },
  { role: "bot", text: "Bisa banget! Fitur Broadcast kami aman dan anti-banned dengan manajemen delay pintar.", delay: 8000 },
  { role: "bot", text: "Silakan coba chat saya! 👇", delay: 11000 },
];

// --- LOGIKA AI LOKAL (20+ VARIASI TOPIK) ---
const getSmartResponse = (input: string): string => {
  const text = input.toLowerCase();

  // 1. Sapaan Umum
  if (text.match(/halo|hai|pagi|siang|malam|hello|hi|oy|woy/)) 
    return "Halo! 👋 Ada yang bisa saya bantu? Silakan tanya soal Harga, Fitur, atau Cara Order.";

  // 2. Sapaan Formal/Agama
  if (text.match(/assalamu|salam/)) 
    return "Waalaikumsalam! Selamat datang di Octabot. Ada yang bisa kami bantu?";

  // 3. Panggil Admin/Manusia
  if (text.match(/admin|cs|manusia|orang|cust/)) 
    return "Saya adalah AI pintar 🤖. Tapi jika Anda butuh bantuan teknis mendalam, tim CS kami siap membantu via WhatsApp di jam kerja.";

  // 4. Harga/Biaya General
  if (text.match(/harga|bayar|biaya|pric/)) 
    return "Harga kami sangat kompetitif! Paket Basic mulai Rp 50rb/bulan, dan Pro Rp 150rb/bulan. Cek menu 'Harga' di atas ya!";

  // 5. Mahal/Murah
  if (text.match(/mahal|diskon|promo|kurang/)) 
    return "Tenang, harga kami sebanding dengan kualitas server yang stabil. Kami juga sering ada promo bulanan, silakan daftar dulu untuk info promo!";

  // 6. Metode Pembayaran
  if (text.match(/transfer|bank|qris|ewallet|gopay|ovo|dana/)) 
    return "Kami menerima pembayaran via Transfer Bank (BCA, Mandiri) dan QRIS (GoPay, OVO, Dana, ShopeePay). Otomatis aktif setelah bayar.";

  // 7. Fitur Broadcast
  if (text.match(/broadcast|bc|masal|blasting|sebar/)) 
    return "Fitur Broadcast kami juara! 🚀 Bisa kirim pesan ke ribuan kontak, support spintax (kata acak), dan delay aman agar nomor awet.";

  // 8. Fitur Tombol/List (Interactive)
  if (text.match(/tombol|button|list|menu|pilihan/)) 
    return "Ya, Octabot mendukung pesan interaktif berupa Tombol (Buttons) dan Daftar Pilihan (List Messages) agar chat lebih menarik.";

  // 9. Integrasi API/Coding
  if (text.match(/api|coding|program|json|webhook/)) 
    return "Developer friendly! Dokumentasi API kami lengkap. Bisa webhook, kirim pesan via HTTP Request, dan integrasi database.";

  // 10. Fitur Auto Reply
  if (text.match(/auto|reply|balas|otomatis|bot/)) 
    return "Tentu, itu fitur utama kami. Anda bisa setting kata kunci (keyword) sesuka hati untuk membalas pesan pelanggan secara otomatis.";

  // 11. Cara Daftar
  if (text.match(/daftar|regis|buat|akun|join/)) 
    return "Gampang! Klik tombol 'Buat Bot' di kiri layar, isi email, dan scan QR Code WhatsApp Anda. Bot langsung aktif!";

  // 12. Login Masalah
  if (text.match(/login|masuk|gagal|lupa|password/)) 
    return "Jika lupa password, gunakan fitur 'Lupa Password' di halaman login. Cek email Anda untuk link resetnya.";

  // 13. Keamanan Data
  if (text.match(/aman|privasi|data|hack|curi/)) 
    return "Keamanan prioritas kami. Kami menggunakan enkripsi End-to-End standar WhatsApp. Data chat tidak kami simpan/baca.";

  // 14. Anti Banned
  if (text.match(/banned|blokir|aman ga|blok/)) 
    return "Kami punya fitur 'Smart Delay' & 'Number Rotation' untuk meminimalisir risiko banned. Namun, pastikan konten Anda tidak melanggar ketentuan WhatsApp.";

  // 15. Trial/Coba Gratis
  if (text.match(/trial|coba|gratis|free|tes/)) 
    return "Ada! Kami menyediakan Free Trial 3 hari full fitur untuk pengguna baru. Silakan daftar dan klaim trial-nya.";

  // 16. Lokasi Kantor
  if (text.match(/lokasi|kantor|alamat|domisili|mana/)) 
    return "Kantor pusat kami berada di Jakarta Selatan. Tapi layanan kami berbasis Cloud, bisa diakses dari seluruh dunia 🌍.";

  // 17. Reseller/Affiliate
  if (text.match(/reseller|affiliate|komisi|jual|agen/)) 
    return "Mau cuan tambahan? Program Affiliate kami memberikan komisi 30% berulang (recurring) tiap bulan selama klien Anda berlangganan!";

  // 18. Error/Gangguan
  if (text.match(/error|gangguan|rusak|down|lemot/)) 
    return "Ups, jika ada kendala, cek status server di dashboard. Atau laporkan ke tim teknis kami agar segera diperbaiki.";

  // 19. Terima Kasih
  if (text.match(/makasih|thanks|thank|suwun|thx/)) 
    return "Sama-sama! Senang bisa membantu. Sukses terus untuk bisnis Anda! 🚀";

  // 20. Nama Bot
  if (text.match(/nama|siapa kamu|octabot/)) 
    return "Saya Octabot AI, asisten virtual yang siap bikin WhatsApp bisnis kamu jadi otomatis dan canggih!";

  // Fallback (Jawaban Default)
  return "Maaf, saya belum paham maksudnya. 🤔 Coba tanya tentang 'Harga', 'Broadcast', 'API', atau 'Cara Daftar'.";
};

export default function HeroSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // State Mode Demo (Default True)
  const [isDemoActive, setIsDemoActive] = useState(true);
  
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // --- 1. JALANKAN DEMO OTOMATIS ---
  useEffect(() => {
    // Jika User sudah interaksi, jangan jalankan demo
    if (!isDemoActive) return;

    // Bersihkan pesan lama & timeout sebelumnya
    setMessages([]);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    let cummulativeDelay = 0;

    DEMO_SCENARIO.forEach((msg, index) => {
      // Logic Indikator Ngetik
      if (msg.role === "bot") {
        const typingStart = cummulativeDelay + 500;
        const t1 = setTimeout(() => setIsTyping(true), typingStart);
        timeoutsRef.current.push(t1);
      }

      // Logic Munculkan Pesan
      cummulativeDelay += msg.delay;
      const t2 = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { id: index, role: msg.role as "user" | "bot", text: msg.text },
        ]);
      }, cummulativeDelay);
      timeoutsRef.current.push(t2);
    });

    // Cleanup
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [isDemoActive]);

  // Auto Scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // --- 2. HANDLER USER MENGIRIM PESAN ---
  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // A. STOP DEMO & RESET JIKA INI PESAN PERTAMA
    if (isDemoActive) {
      setIsDemoActive(false);
      timeoutsRef.current.forEach(clearTimeout);
      setMessages([]);
      setIsTyping(false);
    }

    // B. PROSES PESAN
    const currentInput = inputValue;
    setInputValue("");
    
    // Gunakan timeout kecil agar state reset diatas selesai dulu
    setTimeout(() => {
      // 1. Tampilkan pesan user
      setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: currentInput }]);
      setIsTyping(true);

      // 2. Jawaban Bot (Delay Random agar natural)
      setTimeout(() => {
        const botReply = getSmartResponse(currentInput);
        setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: botReply }]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1500); // Delay 1 - 2.5 detik
    }, 10);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 overflow-hidden">
      
      {/* --- KONTEN KIRI (TEKS) --- */}
      <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left w-full z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs md:text-sm border border-primary/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Bot WhatsApp #1 Paling Fleksibel
        </div>
        
        {/* JUDUL DENGAN FONT FUTURISTIK (font-heading) */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          Otomatisasi <br className="hidden sm:block"/>
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            WhatsApp
          </span> Bisnis.
        </h1>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Sewa bot WhatsApp custom. Tingkatkan respon pelanggan 24/7 tanpa perlu coding manual yang rumit.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
          <Link href="/register" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
            Buat Bot <ArrowRight size={18}/>
          </Link>
          <Link href="#demo" className="bg-card text-foreground border border-border px-8 py-4 rounded-full font-bold text-base hover:border-primary hover:bg-muted/50 transition-all active:scale-95 text-center">
            Lihat Demo
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 justify-center lg:justify-start text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-primary"/> Setup Cepat</div>
            <div className="flex items-center gap-2"><CheckCircle size={16} className="text-primary"/> Data Aman</div>
        </div>
      </div>

      {/* --- KONTEN KANAN (CHAT UI) --- */}
      {/* lg:w-[480px] menjaga agar chat tidak terlalu lebar di layar besar */}
      <div className="flex-1 lg:flex-none w-full max-w-md lg:w-[480px] relative group">
        
        {/* Efek Glow di belakang HP */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 rounded-full blur-[80px] -z-10 pointer-events-none opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

        <div className="aspect-[4/5] bg-card/80 backdrop-blur-xl border border-border rounded-[2.5rem] p-4 sm:p-6 relative shadow-2xl flex flex-col transition-transform duration-500 hover:scale-[1.01]">
           
           {/* Header Chat */}
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary ring-2 ring-background">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Octabot AI</h3>
                    <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-primary font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      {isDemoActive ? "Demo Mode" : "Online"}
                    </div>
                  </div>
                </div>
                {!isDemoActive && (
                  <button onClick={() => setIsDemoActive(true)} className="text-[10px] text-muted-foreground hover:text-primary transition-colors">
                    Replay Demo
                  </button>
                )}
           </div>

           {/* Area Chat */}
           <div 
             ref={chatContainerRef}
             className="flex-1 space-y-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-border hover:scrollbar-thumb-primary/50"
           >
              {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-muted/50 border border-border text-foreground rounded-br-none' // FIX: Tambah border agar jelas di Light Mode
                      : 'bg-primary text-primary-foreground rounded-bl-none shadow-md shadow-primary/20'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start animate-in fade-in duration-300">
                  <div className="bg-primary/10 border border-primary/20 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.1s]"></span>
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  </div>
                </div>
              )}
           </div>
           
           {/* Form Input Chat */}
           <form onSubmit={handleSendMessage} className="mt-4 pt-3 border-t border-border/50">
              {/* WRAPPER RELATIVE: Agar tombol absolute mengacu ke div ini, bukan form induk */}
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={isDemoActive ? "Ketik untuk chat..." : "Tanya 'Broadcast', 'API', 'Harga'..."}
                  className="w-full bg-muted/50 h-12 rounded-full border border-border/50 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim()} 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all"
                >
                   <Send size={16} />
                </button>
              </div>
           </form>

        </div>
      </div>
    </section>
  );
}