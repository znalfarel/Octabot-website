"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "id" | "en" | "es" | "ja";

export const DICTIONARY = {
  id: {
    navbar: { items: ["Fitur", "Harga", "Kontak"], cta: "Mulai Sekarang", choose: "Pilih Bahasa" },
    hero: {
      badge: "Bot WhatsApp #1 Paling Fleksibel",
      titleStart: "Otomatisasi",
      titleEnd: "Bisnis.",
      desc: "Sewa bot WhatsApp custom untuk Toko Online, Klinik, atau Layanan Jasa. Coba simulasi berbagai bisnis di samping kanan! 👉",
      btnPrimary: "Buat Bot",
      features: ["Setup Cepat", "Data Aman"],
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
    // --- NEW SECTIONS ---
    features: {
      title: "Fitur Unggulan",
      subtitle: "Semua yang Anda butuhkan untuk mengelola chat pelanggan.",
      list: [
        { title: "Auto Reply Cerdas", desc: "Balas ribuan pesan pelanggan secara otomatis 24/7 tanpa henti." },
        { title: "Broadcast Anti-Banned", desc: "Kirim pesan massal dengan fitur delay pintar agar nomor tetap aman." },
        { title: "Integrasi API", desc: "Hubungkan bot dengan database stok atau CRM Anda dengan mudah." }
      ]
    },
    cta: {
      title: "Siap Meningkatkan Bisnis Anda?",
      desc: "Bergabunglah dengan 500+ bisnis yang telah beralih ke otomatisasi.",
      btn: "Mulai Gratis Sekarang"
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
    navbar: { items: ["Features", "Pricing", "Contact"], cta: "Start Now", choose: "Select Language" },
    hero: {
      badge: "#1 Most Flexible WhatsApp Bot", titleStart: "Automate Your", titleEnd: "Business.",
      desc: "Rent custom WhatsApp bots for Online Stores, Clinics, or Services. Try simulating various businesses on the right! 👉",
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
      title: "Powerful Features",
      subtitle: "Everything you need to manage customer chats.",
      list: [
        { title: "Smart Auto Reply", desc: "Reply to thousands of messages automatically 24/7 non-stop." },
        { title: "Anti-Ban Broadcast", desc: "Send bulk messages with smart delay to keep your number safe." },
        { title: "API Integration", desc: "Connect the bot with your inventory database or CRM easily." }
      ]
    },
    cta: {
      title: "Ready to Scale Your Business?",
      desc: "Join 500+ businesses that have switched to automation.",
      btn: "Start Free Trial"
    },
    footer: {
      desc: "The best WhatsApp automation platform for SMBs and Enterprises.",
      product: "Product", company: "Company", legal: "Legal",
      links: { features: "Features", pricing: "Pricing", api: "API", about: "About Us", contact: "Contact", privacy: "Privacy", terms: "Terms of Service" },
      copyright: "© 2024 Octabot. All rights reserved."
    }
  },
  es: {
    navbar: { items: ["Características", "Precios", "Contacto"], cta: "Empezar", choose: "Seleccionar Idioma" },
    hero: {
      badge: "Bot de WhatsApp #1 Más Flexible", titleStart: "Automatiza tu", titleEnd: "Negocio.",
      desc: "Alquila bots de WhatsApp personalizados. ¡Prueba simulaciones a la derecha! 👉",
      btnPrimary: "Crear Bot", features: ["Rápido", "Seguro"], inputPlaceholder: "Escribe un mensaje...", demo: "Modo Demo"
    },
    chat: {
      reset: "Reiniciar",
      scenarios: {
        octabot: { name: "Octabot Principal", welcome: "¡Hola! 👋 Listo para automatizar tu negocio.", answers: { price: "Desde $5/mes.", broadcast: "Difusión segura.", features: "Auto-respuesta, API.", default: "Pregunta 'Precio' o 'Funciones'." } },
        petshop: { name: "Tienda Mascotas", welcome: "¡Miau! 🐱 Bienvenido.", answers: { food: "¡Comida disponible!", grooming: "Abierto 09:00 - 17:00.", default: "Miau. Pregunta 'Comida'." } },
        clothing: { name: "Tienda Moda", welcome: "¡Hola! ✨ Nueva colección.", answers: { size: "Tallas M, L, XL.", color: "Colores disponibles.", default: "Pregunta 'Talla'." } },
        digital: { name: "Productos Digitales", welcome: "¡Hola! 🚀 ¿Apps premium?", answers: { netflix: "Netflix listo.", warranty: "Garantía total.", default: "Netflix o Spotify?" } }
      }
    },
    features: {
      title: "Funciones Potentes",
      subtitle: "Todo lo que necesitas para gestionar chats.",
      list: [
        { title: "Auto Respuesta", desc: "Responde miles de mensajes automáticamente 24/7." },
        { title: "Difusión Segura", desc: "Envíos masivos con retraso inteligente anti-bloqueo." },
        { title: "Integración API", desc: "Conecta el bot con tu base de datos o CRM fácilmente." }
      ]
    },
    cta: {
      title: "¿Listo para Crecer?",
      desc: "Únete a más de 500 empresas que usan automatización.",
      btn: "Prueba Gratis"
    },
    footer: {
      desc: "La mejor plataforma de automatización para empresas.",
      product: "Producto", company: "Empresa", legal: "Legal",
      links: { features: "Funciones", pricing: "Precios", api: "API", about: "Nosotros", contact: "Contacto", privacy: "Privacidad", terms: "Términos" },
      copyright: "© 2024 Octabot. Todos los derechos reservados."
    }
  },
  ja: {
    navbar: { items: ["機能", "料金", "お問い合わせ"], cta: "開始", choose: "言語を選択" },
    hero: {
      badge: "No.1 WhatsAppボット", titleStart: "ビジネスを", titleEnd: "自動化。",
      desc: "カスタムWhatsAppボットをレンタル。右側でシミュレーションを試してください！👉",
      btnPrimary: "ボット作成", features: ["高速", "安全"], inputPlaceholder: "メッセージ...", demo: "デモ"
    },
    chat: {
      reset: "リセット",
      scenarios: {
        octabot: { name: "Octabotメイン", welcome: "こんにちは！👋 自動化をお手伝いします。", answers: { price: "月額500円〜", broadcast: "安全な一斉送信。", features: "自動応答、API。", default: "「料金」か「機能」を聞いてね。" } },
        petshop: { name: "ペットショップ", welcome: "ニャー！🐱 いらっしゃいませ。", answers: { food: "フード在庫あり！", grooming: "9時〜17時営業。", default: "「フード」か「トリミング」。" } },
        clothing: { name: "アパレル", welcome: "こんにちは！✨ 新作入荷。", answers: { size: "サイズM, L, XL。", color: "全色あり。", default: "「サイズ」を聞いてね。" } },
        digital: { name: "デジタル製品", welcome: "こんにちは！🚀 アプリ探してる？", answers: { netflix: "Netflixあり。", warranty: "完全保証。", default: "NetflixかSpotify？" } }
      }
    },
    features: {
      title: "強力な機能",
      subtitle: "顧客チャット管理に必要なすべて。",
      list: [
        { title: "スマート自動応答", desc: "24時間365日、何千ものメッセージに自動返信。" },
        { title: "BAN対策一斉送信", desc: "スマートな遅延機能で安全にメッセージを送信。" },
        { title: "API連携", desc: "在庫データベースやCRMと簡単に接続。" }
      ]
    },
    cta: {
      title: "ビジネスを拡大しませんか？",
      desc: "500社以上の企業が自動化に切り替えています。",
      btn: "無料で試す"
    },
    footer: {
      desc: "最高のWhatsApp自動化プラットフォーム。",
      product: "製品", company: "会社", legal: "法務",
      links: { features: "機能", pricing: "料金", api: "API", about: "会社概要", contact: "連絡先", privacy: "プライバシー", terms: "利用規約" },
      copyright: "© 2024 Octabot. 全著作権所有。"
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