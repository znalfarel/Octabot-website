"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "id" | "en" | "es" | "ja";

export const DICTIONARY = {
  id: {
    navbar: { items: ["Fitur", "Harga", "Kontak"], cta: "Mulai Sekarang", choose: "Pilih Bahasa" },
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
    // --- FAQ SECTION (SUDAH DITAMBAHKAN) ---
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
    navbar: { items: ["Features", "Pricing", "Contact"], cta: "Start Now", choose: "Select Language" },
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
    // --- FAQ ENGLISH ---
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
  },
  es: {
    navbar: { items: ["Características", "Precios", "Contacto"], cta: "Empezar", choose: "Seleccionar Idioma" },
    hero: {
      badge: "Beta Version", titleStart: "Automatiza tu", titleEnd: "Negocio.",
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
      title: "Ecosistema Completo",
      subtitle: "Desde chats personales hasta gestión de comunidades.",
      list: [
        { title: "Auto Respuesta", desc: "Responde miles de mensajes automáticamente 24/7." },
        { title: "Difusión Segura", desc: "Envíos masivos con retraso inteligente anti-bloqueo." },
        { title: "Integración API", desc: "Conecta el bot con tu base de datos o CRM fácilmente." },
        { title: "Integración de Grupos", desc: "Añade el bot a grupos para monitorizar la actividad." },
        { title: "Gestión de Grupos", desc: "Expulsa miembros, da la bienvenida y gestiona admins." },
        { title: "Transacciones en Grupo", desc: "Compras, recargas y pagos dentro del chat grupal." }
      ]
    },
    comparison: {
      title: "¿Por qué Octabot es Superior?",
      subtitle: "Deja atrás los chatbots rígidos. Cámbiate a la IA.",
      traditional: {
        title: "Chatbot Tradicional",
        points: [
          { title: "Rígido y Robótico", desc: "Las respuestas parecen plantillas y carecen de empatía." },
          { title: "Falta de Contexto", desc: "A menudo falla si los clientes usan jerga." },
          { title: "Solo Responde", desc: "Limitado a dar información, no puede ayudar en transacciones." }
        ]
      },
      octabot: {
        title: "Agente Octabot AI",
        points: [
          { title: "Conversación Natural", desc: "Charla casual y persuasiva como un humano." },
          { title: "Inteligente", desc: "Entiende jerga local y contextos complejos." },
          { title: "Orientado a la Acción", desc: "Ayuda a cerrar ventas y reservar citas." }
        ]
      }
    },
    // --- FAQ SPANISH ---
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "¿Tienes dudas? Aquí las resolvemos.",
      list: [
        { q: "¿Qué es exactamente Octabot?", a: "Octabot es un asistente automatizado de WhatsApp que responde chats y gestiona grupos 24/7." },
        { q: "¿Es difícil de configurar?", a: "¡Para nada! Solo escanea el código QR y listo. Es muy fácil de usar." },
        { q: "¿Mi número está seguro?", a: "Sí. Usamos tecnología Anti-Ban con retrasos inteligentes para proteger tu número." },
        { q: "¿Funciona si apago mi teléfono?", a: "Sí, Octabot funciona en la nube. Tu bot sigue trabajando aunque tu móvil esté apagado." },
        { q: "¿Hay garantía de devolución?", a: "Sí, garantía de 7 días. Si no te gusta, te devolvemos tu dinero." }
      ]
    },
    notFound: {
      code: "404",
      title: "¡Vaya, sin salida!",
      desc: "Nuestro robot buscó en todos los rincones del servidor, pero la página que buscas parece haberse movido o nunca existió.",
      backHome: "Volver a la Base",
      goBack: "Regresar",
      footer: "Código de Error: PAGE_NOT_FOUND_EXCEPTION"
    },
    cta: {
      title: "¿Listo para Crecer?",
      desc: "Únete a más de 500 empresas que usan automatización.",
      btn: "Empezar Ahora"
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
      badge: "Beta Version", titleStart: "ビジネスを", titleEnd: "自動化。",
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
      title: "完全な機能エコシステム",
      subtitle: "個人チャットからコミュニティ管理まで、すべてを自動化。",
      list: [
        { title: "スマート自動応答", desc: "24時間365日、何千ものメッセージに自動返信。" },
        { title: "BAN対策一斉送信", desc: "スマートな遅延機能で安全にメッセージを送信。" },
        { title: "API連携", desc: "在庫データベースやCRMと簡単に接続。" },
        { title: "グループ統合", desc: "コミュニティやチームのグループにボットを追加。" },
        { title: "グループ自動管理", desc: "ルール違反者のキック、新規メンバーの歓迎などを自動化。" },
        { title: "グループ内取引", desc: "チャット内で商品の購入や支払いが可能。" }
      ]
    },
    comparison: {
      title: "なぜOctabotが優れているのか？",
      subtitle: "硬直したチャットボットは過去のもの。顧客を理解するAIへ。",
      traditional: {
        title: "従来のチャットボット",
        points: [
          { title: "硬直的でロボットのよう", desc: "定型文のような返答で、共感に欠けます。" },
          { title: "文脈を理解できない", desc: "誤字や俗語があるとエラーになりがちです。" },
          { title: "回答のみ", desc: "情報提供に限られ、取引を支援できません。" }
        ]
      },
      octabot: {
        title: "Octabot AIエージェント",
        points: [
          { title: "自然な会話", desc: "人間のようにカジュアルで礼儀正しく会話します。" },
          { title: "スマートで適応力がある", desc: "地域の方言や複雑な文脈を理解します。" },
          { title: "実行可能", desc: "販売のクロージングや予約をサポートします。" }
        ]
      }
    },
    // --- FAQ JAPANESE ---
    faq: {
      title: "よくある質問",
      subtitle: "不明な点はございますか？こちらをご確認ください。",
      list: [
        { q: "Octabotとは何ですか？", a: "Octabotは、チャットへの返信やグループ管理を24時間体制で行うWhatsApp自動化アシスタントです。" },
        { q: "設定は難しいですか？", a: "ご安心ください！QRコードをスキャンするだけで簡単に設定できます。" },
        { q: "WhatsAppアカウントは安全ですか？", a: "はい、BAN対策機能を搭載しており、人間のような自然な挙動でアカウントを保護します。" },
        { q: "スマホの電源を切っても動きますか？", a: "はい、クラウドベースなので、スマホの電源が切れていてもボットは稼働し続けます。" },
        { q: "返金保証はありますか？", a: "はい、7日間の全額返金保証があります。" }
      ]
    },
    notFound: {
      code: "404",
      title: "おっと、行き止まり！",
      desc: "ロボットがサーバーの隅々まで検索しましたが、お探しのページは移動したか、存在しないようです。",
      backHome: "基地に戻る",
      goBack: "戻る",
      footer: "エラーコード: PAGE_NOT_FOUND_EXCEPTION"
    },
    cta: {
      title: "ビジネスを拡大しませんか？",
      desc: "500社以上の企業が自動化に切り替えています。",
      btn: "今すぐ始める"
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