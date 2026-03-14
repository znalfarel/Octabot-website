"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. Tipe bahasa sekarang hanya ID dan EN
export type Language = "id" | "en";

export const DICTIONARY = {
  id: {
    navbar: { items: ["Fitur", "Harga", "Kontak"], ctaDesktop: "Mulai Sekarang", ctaMobile: "Daftar", choose: "Pilih Bahasa" },
    hero: {
      titleStart: "Otomatisasikan",
      titleEnd: "Bisnismu.",
      btnPrimary: "Buat Bot",
      inputPlaceholder: "Ketik pesan...",
      demo: "Demo Mode"
    },
    chat: {
      reset: "Reset Demo",
      scenarios: {
        octabot: { 
          name: "Octabot Utama", welcome: "Halo! 👋 Saya siap membantu otomatisasi WhatsApp bisnis Anda.",
          answers: { price: "Paket Basic mulai Rp 50rb/bulan.", broadcast: "Bisa! Broadcast kami aman & anti-banned.", features: "Fitur: Auto-reply, Broadcast, API.", default: "Saya Bot Demo. Tanya 'Harga' atau 'Fitur'!" }
        },
        petshop: { name: "Toko Hewan", welcome: "Meow! 🐱 Selamat datang di Meow Petshop.", answers: { food: "Stok makanan kucing tersedia!", grooming: "Grooming buka jam 09.00 - 17.00.", default: "Meow! Tanya 'Makanan' atau 'Grooming'." } },
        clothing: { name: "Toko Baju", welcome: "Hi Sis! ✨ Koleksi gamis terbaru restock.", answers: { size: "Size: M, L, XL ready.", color: "Warna: Sage, Lilac, Pink.", default: "Tanya 'Ukuran' atau 'Warna' ya Sis." } },
        digital: { name: "Produk Digital", welcome: "Halo Gan! 🚀 Cari aplikasi premium?", answers: { netflix: "Netflix & Spotify ready garansi full.", warranty: "Akun bermasalah kita ganti baru.", default: "Ready: Netflix, Spotify. Mau yang mana?" } }
      }
    },
    features: {
      title: "Ekosistem Fitur Lengkap",
      subtitle: "Dari personal chat hingga manajemen komunitas, semua bisa diotomatisasi.",
      list: [
        { title: "Auto Reply Cerdas", desc: "Balas ribuan pesan pelanggan secara otomatis 24/7 tanpa henti dengan logic yang fleksibel." },
        { title: "Broadcast Anti-Banned", desc: "Kirim pesan massal dengan fitur delay pintar dan rotasi pesan agar nomor tetap aman." },
        { title: "Integrasi API & Webhook", desc: "Hubungkan bot dengan database stok, CRM, atau Google Sheets Anda secara real-time." },
        { title: "Integrasi Grup WhatsApp", desc: "Tambahkan bot ke dalam grup komunitas atau tim kerja untuk memantau aktivitas member." },
        { title: "Manajemen Grup Otomatis", desc: "Kick member yang melanggar aturan, sambut member baru, dan kelola admin secara otomatis." },
        { title: "Transaksi Dalam Grup", desc: "Member bisa membeli produk, top-up saldo, atau bayar tagihan langsung di dalam chat grup." }
      ]
    },
    howItWorks: {
      title: "Cara Kerja",
      steps: [
        { step: "STEP 1", title: "Upload dokumen", desc: "PDF, SOP, FAQ, katalog, dll." },
        { step: "STEP 2", title: "Sistem mengindeks", desc: "Sistem mengindeks knowledge Anda secara otomatis." },
        { step: "STEP 3", title: "Hubungkan WhatsApp", desc: "Hubungkan ke WhatsApp dengan scan QR Code." },
        { step: "STEP 4", title: "AI Aktif", desc: "AI mulai menjawab pesan masuk otomatis." }
      ]
    },
    // PENAMBAHAN: Section Integration (Bahasa Indonesia)
    integration: {
      badge: "100% TERKONEKSI",
      titleStart: "Satu Octabot.",
      titleEnd: "Semua Platform.",
      desc: "Nggak perlu lagi pusing buka-tutup banyak aplikasi buat balas chat. Octabot nyambung langsung ke platform sosial media yang kamu pakai sehari-hari.",
      points: [
        "Balas DM & Komen dari satu layar",
        "Tarik data realtime ke Google Sheets",
        "Kirim notifikasi otomatis via API"
      ]
    },
    comparison: {
      title: "Mengapa Octabot Lebih Unggul?",
      subtitle: "Tinggalkan chatbot kaku. Beralihlah ke AI yang mengerti pelanggan.",
      traditional: {
        title: "Chatbot Tradisional",
        points: [
          { title: "Kaku & Robotik", desc: "Respon terasa template dan tidak memiliki empati." },
          { title: "Gagal Paham Konteks", desc: "Sering error jika pelanggan mengetik typo atau bahasa gaul." },
          { title: "Hanya Menjawab", desc: "Terbatas memberikan info, tidak bisa membantu transaksi." }
        ]
      },
      octabot: {
        title: "Octabot AI Agent",
        points: [
          { title: "Percakapan Natural", desc: "Bisa ngobrol santai, sopan, dan persuasif layaknya manusia." },
          { title: "Cerdas & Adaptif", desc: "Mengerti bahasa daerah, singkatan, dan konteks yang rumit." },
          { title: "Bisa Eksekusi", desc: "Membantu closing penjualan, booking jadwal, hingga input data." }
        ]
      }
    },
    faq: {
      title: "Sering Ditanyakan (FAQ)",
      subtitle: "Masih bingung? Cek jawaban dari pertanyaan yang paling sering muncul.",
      list: [
        { q: "Apa itu Octabot sebenarnya?", a: "Octabot adalah asisten WhatsApp otomatis (bot) yang bisa membalas chat, mengirim broadcast, dan mengelola grup bisnis kamu secara 24 jam nonstop tanpa perlu istirahat." },
        { q: "Saya gaptek, susah nggak settingnya?", a: "Tenang aja! Kami desain dashboard Octabot semudah mungkin. Tinggal scan QR Code kayak WhatsApp Web, dan bot langsung aktif. Ada video tutorialnya juga kok." },
        { q: "Nomor WhatsApp saya aman dari banned?", a: "Keamanan adalah prioritas kami. Octabot punya fitur 'Anti-Ban' dengan delay pesan pintar dan rotasi pesan agar aktivitasmu tetap terlihat natural di mata sistem WhatsApp." },
        { q: "Bisa dipakai di HP atau harus Laptop?", a: "Octabot berbasis cloud (web). Jadi kamu bisa setting lewat Laptop/PC agar leluasa, tapi bot-nya tetap jalan di server kami meskipun HP kamu mati atau nggak ada sinyal." },
        { q: "Ada garansi uang kembali?", a: "Pasti. Jika dalam 7 hari kamu merasa Octabot tidak membantu bisnismu, kami kembalikan uangmu 100% tanpa banyak tanya." }
      ]
    },
    notFound: {
      code: "404",
      title: "Waduh, Jalannya Buntu!",
      desc: "Robot kami sudah mencari ke setiap sudut server, tapi halaman yang Anda tuju sepertinya sudah pindah atau memang tidak pernah ada.",
      backHome: "Kembali ke Markas",
      goBack: "Balik Aja",
      footer: "Error Code: PAGE_NOT_FOUND_EXCEPTION"
    },
    cta: {
      title: "Siap Meningkatkan Bisnis Anda?",
      desc: "Bergabunglah dengan 500+ bisnis yang telah beralih ke otomatisasi.",
      btn: "Mulai Sekarang"
    },
    footer: {
      desc: "Platform otomatisasi WhatsApp terbaik untuk UMKM dan Enterprise.",
      product: "Produk",
      company: "Perusahaan",
      legal: "Legal",
      links: { features: "Fitur", pricing: "Harga", api: "API", about: "Tentang Kami", contact: "Kontak", privacy: "Privasi", terms: "Syarat & Ketentuan" },
      copyright: "© 2024 Octabot. Hak cipta dilindungi."
    }
  },
  en: {
    navbar: { items: ["Features", "Pricing", "Contact"], ctaDesktop: "Start Now", ctaMobile: "Register", choose: "Select Language" },
    hero: {
      badge: "Beta Version", titleStart: "Automate Your", titleEnd: "Business.",
      btnPrimary: "Create Bot", features: ["Fast Setup", "Secure Data"], inputPlaceholder: "Type a message...", demo: "Demo Mode"
    },
    chat: {
      reset: "Reset Demo",
      scenarios: {
        octabot: { name: "Main Octabot", welcome: "Hello! 👋 I am ready to help automate your WhatsApp business.", answers: { price: "Basic starts $5/mo.", broadcast: "Secure & anti-ban broadcast.", features: "Auto-reply, Broadcast, API.", default: "Ask about 'Price' or 'Features'!" } },
        petshop: { name: "Pet Shop", welcome: "Meow! 🐱 Welcome to Meow Petshop.", answers: { food: "Cat food available!", grooming: "Grooming open 09:00 - 17:00.", default: "Meow! Ask 'Food' or 'Grooming'." } },
        clothing: { name: "Fashion Store", welcome: "Hi Sis! ✨ New collection restocked.", answers: { size: "Size: M, L, XL ready.", color: "Colors: Sage, Lilac, Pink.", default: "Ask 'Size' or 'Color'." } },
        digital: { name: "Digital Products", welcome: "Hello! 🚀 Looking for premium apps?", answers: { netflix: "Netflix & Spotify ready.", warranty: "Full warranty replacement.", default: "Ready: Netflix, Spotify." } }
      }
    },
    features: {
      title: "Complete Feature Ecosystem",
      subtitle: "From personal chats to community management, everything is automated.",
      list: [
        { title: "Smart Auto Reply", desc: "Reply to thousands of messages automatically 24/7 non-stop with flexible logic." },
        { title: "Anti-Ban Broadcast", desc: "Send bulk messages with smart delay and message rotation to keep your number safe." },
        { title: "API & Webhook", desc: "Connect the bot with your inventory database, CRM, or Google Sheets in real-time." },
        { title: "WhatsApp Group Integration", desc: "Add the bot to community or team groups to monitor member activity." },
        { title: "Auto Group Management", desc: "Kick members who violate rules, welcome new members, and manage admins automatically." },
        { title: "In-Group Transactions", desc: "Members can buy products, top-up balances, or pay bills directly inside the group chat." }
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { step: "STEP 1", title: "Upload Documents", desc: "PDF, SOP, FAQ, catalogs, etc." },
        { step: "STEP 2", title: "System Indexing", desc: "The system automatically indexes your knowledge base." },
        { step: "STEP 3", title: "Connect WhatsApp", desc: "Connect your WhatsApp simply by scanning a QR Code." },
        { step: "STEP 4", title: "AI is Active", desc: "The AI starts answering incoming messages automatically." }
      ]
    },
    // PENAMBAHAN: Section Integration (English)
    integration: {
      badge: "100% CONNECTED",
      titleStart: "One Octabot.",
      titleEnd: "All Platforms.",
      desc: "No more switching between multiple apps to reply to chats. Octabot connects directly to the social media platforms you use every day.",
      points: [
        "Reply to DMs & Comments from one screen",
        "Pull real-time data to Google Sheets",
        "Send automated notifications via API"
      ]
    },
    comparison: {
      title: "Why Octabot is Superior?",
      subtitle: "Leave rigid chatbots behind. Switch to AI that understands customers.",
      traditional: {
        title: "Traditional Chatbot",
        points: [
          { title: "Rigid & Robotic", desc: "Responses feel templated and lack empathy." },
          { title: "Lacks Context", desc: "Often errors if customers use typos or slang." },
          { title: "Just Answering", desc: "Limited to giving info, cannot assist in transactions." }
        ]
      },
      octabot: {
        title: "Octabot AI Agent",
        points: [
          { title: "Natural Conversation", desc: "Chats casually, politely, and persuasively like a human." },
          { title: "Smart & Adaptive", desc: "Understands local slang, abbreviations, and complex contexts." },
          { title: "Action Oriented", desc: "Helps close sales, book appointments, and input data." }
        ]
      }
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Still confused? Check answers to the most common questions.",
      list: [
        { q: "What exactly is Octabot?", a: "Octabot is an automated WhatsApp assistant that replies to chats, sends broadcasts, and manages your business groups 24/7 without needing a break." },
        { q: "I'm not tech-savvy, is it hard to set up?", a: "Don't worry! We designed the dashboard to be super simple. Just scan the QR Code like WhatsApp Web, and you're live. We have tutorials too." },
        { q: "Is my WhatsApp number safe from bans?", a: "Security is priority. Octabot has 'Anti-Ban' features with smart message delays and rotation to keep your activity looking natural." },
        { q: "Does it work on Mobile or PC only?", a: "Octabot is cloud-based. You set it up via Web (PC recommended), but the bot runs on our servers even if your phone is off or has no signal." },
        { q: "Is there a money-back guarantee?", a: "Absolutely. If within 7 days you feel Octabot doesn't help your business, we'll refund 100% with no questions asked." }
      ]
    },
    notFound: {
      code: "404",
      title: "Oops, Dead End!",
      desc: "Our robot searched every corner of the server, but the page you are looking for seems to have moved or never existed.",
      backHome: "Back to Base",
      goBack: "Go Back",
      footer: "Error Code: PAGE_NOT_FOUND_EXCEPTION"
    },
    cta: {
      title: "Ready to Scale Your Business?",
      desc: "Join 500+ businesses that have switched to automation.",
      btn: "Start Now"
    },
    footer: {
      desc: "The best WhatsApp automation platform for SMBs and Enterprises.",
      product: "Product", company: "Company", legal: "Legal",
      links: { features: "Features", pricing: "Pricing", api: "API", about: "About Us", contact: "Contact", privacy: "Privacy", terms: "Terms of Service" },
      copyright: "© 2024 Octabot. All rights reserved."
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof DICTIONARY["id"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: DICTIONARY[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}