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
          name: "Octabot", 
          welcome: "Halo! 👋 Saya siap membantu otomatisasi WhatsApp bisnis Anda.",
          // Jawaban Bot (Logic)
          answers: {
            price: "Paket Basic mulai Rp 50rb/bulan. Murah kan?",
            broadcast: "Bisa! Broadcast kami aman dengan fitur anti-banned.",
            features: "Fitur kami: Auto-reply, Broadcast, API Integration, dan banyak lagi.",
            default: "Saya Bot Demo. Tanya soal 'Harga' atau 'Fitur' ya!"
          }
        },
        petshop: { 
          name: "Toko Hewan", 
          welcome: "Meow! 🐱 Selamat datang di Meow Petshop. Cari makanan atau grooming?",
          answers: {
            food: "Stok makanan kucing (Royal Canin/Whiskas) tersedia lengkap kak! Mau merk apa?",
            grooming: "Jasa Grooming buka jam 09.00 - 17.00. Booking sekarang?",
            default: "Meow! 🐱 Ketik 'Makanan' atau 'Grooming' untuk info lebih lanjut."
          }
        },
        clothing: { 
          name: "Toko Baju", 
          welcome: "Hi Sis! ✨ Koleksi gamis dan kemeja terbaru baru aja restock lho.",
          answers: {
            size: "Size chart: LD 100cm (M), 110cm (L), 120cm (XL).",
            color: "Warna ready: Sage Green, Lilac, dan Dusty Pink. Cantik banget!",
            default: "Halo Sis! Tanya soal 'Ukuran', 'Warna', atau 'Bahan' ya. ✨"
          }
        },
        digital: { 
          name: "Produk Digital", 
          welcome: "Halo Gan! 🚀 Cari aplikasi premium murah & garansi?",
          answers: {
            netflix: "Ready gan! Netflix & Spotify akun privat/sharing ada. Garansi full.",
            warranty: "Tenang, kalau akun bermasalah kita ganti baru. Syarat: jangan ubah password.",
            default: "Ready: Netflix, Spotify, Youtube. Mau order yang mana gan?"
          }
        },
      }
    }
  },
  en: {
    navbar: { items: ["Features", "Pricing", "Contact"], cta: "Start Now", choose: "Select Language" },
    hero: {
      badge: "#1 Most Flexible WhatsApp Bot",
      titleStart: "Automate Your",
      titleEnd: "Business.",
      desc: "Rent custom WhatsApp bots for Online Stores, Clinics, or Services. Try simulating various businesses on the right! 👉",
      btnPrimary: "Create Bot",
      features: ["Fast Setup", "Secure Data"],
      inputPlaceholder: "Type a message...",
      demo: "Demo Mode"
    },
    chat: {
      reset: "Reset Demo",
      scenarios: {
        octabot: { 
          name: "Main Octabot", 
          welcome: "Hello! 👋 I am ready to help automate your WhatsApp business.",
          answers: {
            price: "Basic package starts from $5/month. Affordable, right?",
            broadcast: "Yes! Our broadcast is secure with anti-ban features.",
            features: "Our features: Auto-reply, Broadcast, API Integration, and more.",
            default: "I'm a Demo Bot. Ask about 'Price' or 'Features'!"
          }
        },
        petshop: { 
          name: "Pet Shop", 
          welcome: "Meow! 🐱 Welcome to Meow Petshop. Looking for food or grooming?",
          answers: {
            food: "Cat food stock (Royal Canin/Whiskas) is fully available! Which brand?",
            grooming: "Grooming service is open 09:00 - 17:00. Book now?",
            default: "Meow! 🐱 Type 'Food' or 'Grooming' for more info."
          }
        },
        clothing: { 
          name: "Fashion Store", 
          welcome: "Hi Sis! ✨ New gamis and shirt collections just restocked.",
          answers: {
            size: "Size chart: Chest 100cm (M), 110cm (L), 120cm (XL).",
            color: "Colors ready: Sage Green, Lilac, and Dusty Pink. So pretty!",
            default: "Hi Sis! Ask about 'Size', 'Color', or 'Material'. ✨"
          }
        },
        digital: { 
          name: "Digital Products", 
          welcome: "Hello! 🚀 Looking for cheap premium apps with warranty?",
          answers: {
            netflix: "Ready! Netflix & Spotify private/shared accounts available. Full warranty.",
            warranty: "Don't worry, if the account has issues we replace it. Condition: don't change password.",
            default: "Ready: Netflix, Spotify, Youtube. Which one do you want?"
          }
        },
      }
    }
  },
  es: {
    navbar: { items: ["Características", "Precios", "Contacto"], cta: "Empezar", choose: "Seleccionar Idioma" },
    hero: {
      badge: "Bot de WhatsApp #1 Más Flexible",
      titleStart: "Automatiza tu",
      titleEnd: "Negocio.",
      desc: "Alquila bots de WhatsApp personalizados. ¡Prueba simulaciones a la derecha! 👉",
      btnPrimary: "Crear Bot",
      features: ["Configuración Rápida", "Datos Seguros"],
      inputPlaceholder: "Escribe un mensaje...",
      demo: "Modo Demo"
    },
    chat: {
      reset: "Reiniciar Demo",
      scenarios: {
        octabot: { 
          name: "Octabot Principal", 
          welcome: "¡Hola! 👋 Estoy listo para ayudar a automatizar tu negocio.",
          answers: {
            price: "El paquete básico comienza desde $5/mes. Económico, ¿verdad?",
            broadcast: "¡Sí! Nuestra difusión es segura con funciones anti-ban.",
            features: "Nuestras funciones: Respuesta automática, Difusión, API, y más.",
            default: "Soy un Bot Demo. ¡Pregunta por 'Precio' o 'Funciones'!"
          }
        },
        petshop: { 
          name: "Tienda de Mascotas", 
          welcome: "¡Miau! 🐱 Bienvenido a Meow Petshop. ¿Buscas comida o aseo?",
          answers: {
            food: "¡Tenemos Royal Canin y Whiskas disponibles! ¿Qué marca prefieres?",
            grooming: "El servicio de aseo abre de 09:00 a 17:00. ¿Reservar ahora?",
            default: "¡Miau! 🐱 Escribe 'Comida' o 'Aseo' para más información."
          }
        },
        clothing: { 
          name: "Tienda de Moda", 
          welcome: "¡Hola! ✨ Nuevas colecciones acaban de llegar.",
          answers: {
            size: "Tabla de tallas: Pecho 100cm (M), 110cm (L), 120cm (XL).",
            color: "Colores listos: Verde Salvia, Lila y Rosa. ¡Muy bonitos!",
            default: "¡Hola! Pregunta sobre 'Talla', 'Color' o 'Material'. ✨"
          }
        },
        digital: { 
          name: "Productos Digitales", 
          welcome: "¡Hola! 🚀 ¿Buscas aplicaciones premium baratas?",
          answers: {
            netflix: "¡Listo! Cuentas de Netflix y Spotify disponibles. Garantía total.",
            warranty: "Si la cuenta falla, la reemplazamos. No cambies la contraseña.",
            default: "Listo: Netflix, Spotify, Youtube. ¿Cuál quieres?"
          }
        },
      }
    }
  },
  ja: {
    navbar: { items: ["機能", "料金", "お問い合わせ"], cta: "今すぐ開始", choose: "言語を選択" },
    hero: {
      badge: "最も柔軟なWhatsAppボットNo.1",
      titleStart: "ビジネスを",
      titleEnd: "自動化。",
      desc: "カスタムWhatsAppボットをレンタル。右側でシミュレーションを試してみてください！👉",
      btnPrimary: "ボット作成",
      features: ["高速セットアップ", "データ保護"],
      inputPlaceholder: "メッセージを入力...",
      demo: "デモモード"
    },
    chat: {
      reset: "デモリセット",
      scenarios: {
        octabot: { 
          name: "Octabotメイン", 
          welcome: "こんにちは！👋 WhatsAppビジネスの自動化をお手伝いします。",
          answers: {
            price: "ベーシックプランは月額500円から。お得でしょう？",
            broadcast: "はい！一斉送信機能は安全で、BAN対策も万全です。",
            features: "機能：自動応答、一斉送信、API連携など。",
            default: "デロボットです。「料金」や「機能」について聞いてください！"
          }
        },
        petshop: { 
          name: "ペットショップ", 
          welcome: "ニャー！🐱 Meow Petshopへようこそ。フードやグルーミングをお探しですか？",
          answers: {
            food: "キャットフード（ロイヤルカナン/ウィスカス）在庫あります！",
            grooming: "トリミングは09:00 - 17:00まで営業中。予約しますか？",
            default: "ニャー！🐱 「フード」または「トリミング」と入力してください。"
          }
        },
        clothing: { 
          name: "ファッションストア", 
          welcome: "こんにちは！✨ 新しいコレクションが入荷しました。",
          answers: {
            size: "サイズ表：胸囲 100cm (M), 110cm (L), 120cm (XL)。",
            color: "カラー：セージグリーン、ライラック、ダスティピンク。",
            default: "こんにちは！「サイズ」「色」「素材」について聞いてください。✨"
          }
        },
        digital: { 
          name: "デジタル製品", 
          welcome: "こんにちは！🚀 安くて保証付きのプレミアムアプリをお探しですか？",
          answers: {
            netflix: "NetflixとSpotifyのアカウントあります。完全保証付き。",
            warranty: "アカウントに問題がある場合は交換します。パスワードは変更しないでください。",
            default: "Netflix、Spotify、Youtube。どれにしますか？"
          }
        },
      }
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