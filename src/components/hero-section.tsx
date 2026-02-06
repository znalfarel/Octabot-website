"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, CheckCircle, Bot, Send, Cat, Shirt, Smartphone, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/language-context";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
};

type ScenarioType = "octabot" | "petshop" | "clothing" | "digital";

export default function HeroSection() {
  const { t, language } = useLanguage();

  const [activeScenario, setActiveScenario] = useState<ScenarioType>("octabot");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDemoActive, setIsDemoActive] = useState(true);
  
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // --- KONFIGURASI SKENARIO & LOGIC ---
  const SCENARIOS = {
    octabot: {
      name: t.chat.scenarios.octabot.name,
      botName: "Octabot AI",
      icon: <Bot size={20} />,
      color: "bg-primary",
      welcome: t.chat.scenarios.octabot.welcome,
      logic: (text: string) => {
        // Regex cek keyword (Indo/Eng/General)
        if (text.match(/harga|biaya|price|cost|pay|bayar/i)) return t.chat.scenarios.octabot.answers.price;
        if (text.match(/broadcast|sebar|blast/i)) return t.chat.scenarios.octabot.answers.broadcast;
        if (text.match(/fitur|bisa|feature|what can/i)) return t.chat.scenarios.octabot.answers.features;
        return t.chat.scenarios.octabot.answers.default;
      }
    },
    petshop: {
      name: t.chat.scenarios.petshop.name,
      botName: "Meow Petshop 🐱",
      icon: <Cat size={20} />,
      color: "bg-orange-500",
      welcome: t.chat.scenarios.petshop.welcome,
      logic: (text: string) => {
        if (text.match(/makan|royal|whiskas|stok|food|brand/i)) return t.chat.scenarios.petshop.answers.food;
        if (text.match(/grooming|mandi|salon|wash|cut/i)) return t.chat.scenarios.petshop.answers.grooming;
        return t.chat.scenarios.petshop.answers.default;
      }
    },
    clothing: {
      name: t.chat.scenarios.clothing.name,
      botName: "Fashion Store 👗",
      icon: <Shirt size={20} />,
      color: "bg-pink-500",
      welcome: t.chat.scenarios.clothing.welcome,
      logic: (text: string) => {
        if (text.match(/ukuran|size|muat|chart/i)) return t.chat.scenarios.clothing.answers.size;
        if (text.match(/warna|color|ready/i)) return t.chat.scenarios.clothing.answers.color;
        return t.chat.scenarios.clothing.answers.default;
      }
    },
    digital: {
      name: t.chat.scenarios.digital.name,
      botName: "Premium Apps 📱",
      icon: <Smartphone size={20} />,
      color: "bg-blue-500",
      welcome: t.chat.scenarios.digital.welcome,
      logic: (text: string) => {
        if (text.match(/netflix|spotify|youtube|disney/i)) return t.chat.scenarios.digital.answers.netflix;
        if (text.match(/garansi|rusak|masalah|warranty|issue/i)) return t.chat.scenarios.digital.answers.warranty;
        return t.chat.scenarios.digital.answers.default;
      }
    }
  };

  const currentData = SCENARIOS[activeScenario];

  // --- EFEK: RESET DEMO SAAT GANTI TOKO ATAU BAHASA ---
  useEffect(() => {
    setIsDemoActive(true);
    setMessages([]);
    setInputValue("");
    setIsTyping(false);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    // Tampilkan pesan selamat datang dari Context
    const demoScript = [
      { role: "bot", text: currentData.welcome, delay: 1000 },
    ];

    let cummulativeDelay = 0;
    demoScript.forEach((msg, index) => {
      // @ts-ignore
      const t1 = setTimeout(() => setIsTyping(true), cummulativeDelay + 500);
      timeoutsRef.current.push(t1);

      cummulativeDelay += msg.delay; // Menggunakan delay dari script
      const t2 = setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { id: index, role: "bot", text: msg.text }]);
      }, cummulativeDelay);
      timeoutsRef.current.push(t2);
    });

    return () => timeoutsRef.current.forEach(clearTimeout);
  }, [activeScenario, language]); 

  // Auto Scroll
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // --- HANDLER KIRIM PESAN ---
  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    if (isDemoActive) {
      setIsDemoActive(false);
      timeoutsRef.current.forEach(clearTimeout);
      setMessages([]);
      setIsTyping(false);
    }

    const text = inputValue;
    setInputValue("");

    setTimeout(() => {
      // 1. Pesan User
      setMessages((prev) => [...prev, { id: Date.now(), role: "user", text }]);
      setIsTyping(true);

      setTimeout(() => {
        // 2. Pesan Bot (PAKAI LOGIC PINTAR LAGI)
        const reply = currentData.logic(text);
        setMessages((prev) => [...prev, { id: Date.now() + 1, role: "bot", text: reply }]);
        setIsTyping(false);
      }, 1000 + Math.random() * 1000);
    }, 10);
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 overflow-hidden">
      
      {/* --- KIRI: TEXT HERO --- */}
      <div className="flex-1 space-y-8 text-center lg:text-left w-full z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-xs md:text-sm border border-primary/20 backdrop-blur-sm">
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t.hero.badge}
        </div>
        
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
          {t.hero.titleStart} <br className="hidden sm:block"/>
          <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            WhatsApp
          </span> {t.hero.titleEnd}
        </h1>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
          {t.hero.desc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
          <Link href="/register" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-base hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/25 flex items-center justify-center gap-2">
            {t.hero.btnPrimary} <ArrowRight size={18}/>
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 justify-center lg:justify-start text-sm text-muted-foreground">
            {t.hero.features.map((feat, i) => (
               <div key={i} className="flex items-center gap-2"><CheckCircle size={16} className="text-primary"/> {feat}</div>
            ))}
        </div>
      </div>

      {/* --- KANAN: CHAT UI + SIDEBAR RESPONSIVE --- */}
      <div className="flex-1 lg:flex-none w-full lg:w-auto flex flex-col md:flex-row gap-4 items-center md:items-end relative group">
        
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full blur-[100px] -z-10 pointer-events-none opacity-40 transition-colors duration-700 ${currentData.color.replace('bg-', 'bg-')}/30`}></div>

        {/* SIDEBAR */}
        <div className="w-full md:w-20 bg-card/80 backdrop-blur-xl border border-border rounded-2xl md:rounded-[2rem] p-2 flex flex-row md:flex-col gap-3 justify-evenly md:justify-center items-center shadow-lg order-2 md:order-1 transition-all">
          {Object.entries(SCENARIOS).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveScenario(key as ScenarioType)}
              className={`relative group/btn p-3 rounded-full transition-all duration-300 ${
                activeScenario === key 
                  ? `${data.color} text-white shadow-lg scale-110` 
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
              }`}
              title={data.name}
            >
              {data.icon}
              <span className="absolute z-50 whitespace-nowrap bg-foreground text-background text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none left-1/2 -translate-x-1/2 top-full mt-2 md:top-1/2 md:-translate-y-1/2 md:mt-0 md:left-auto md:translate-x-0 md:right-full md:mr-3">
                {data.name}
              </span>
            </button>
          ))}
        </div>

        {/* CHAT INTERFACE */}
        <div className="w-full max-w-md md:w-[400px] aspect-[4/5] bg-card/90 backdrop-blur-xl border border-border rounded-[2.5rem] p-4 sm:p-6 relative shadow-2xl flex flex-col transition-transform duration-500 order-1 md:order-2">
           
           <div className="flex justify-between items-center mb-4 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${currentData.color} flex items-center justify-center text-white ring-2 ring-background transition-colors duration-500`}>
                    {currentData.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm transition-all duration-300">{currentData.botName}</h3>
                    <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                      <span className={`w-1.5 h-1.5 rounded-full ${currentData.color} animate-pulse`}></span>
                      {isDemoActive ? t.hero.demo : "Online"}
                    </div>
                  </div>
                </div>
                {!isDemoActive && (
                  <button onClick={() => setIsDemoActive(true)} className="p-2 hover:bg-muted rounded-full transition-colors" title={t.chat.reset}>
                    <Sparkles size={14} className="text-muted-foreground" />
                  </button>
                )}
           </div>

           <div ref={chatContainerRef} className="flex-1 space-y-3 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-border hover:scrollbar-thumb-primary/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed transition-colors duration-500 ${
                    msg.role === 'user' 
                      ? 'bg-muted/50 border border-border text-foreground rounded-br-none' 
                      : `${currentData.color} text-white rounded-bl-none shadow-md`
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start animate-in fade-in duration-300">
                  <div className={`bg-opacity-10 border border-opacity-20 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 ${currentData.color.replace('bg-', 'bg-')}/10 border-${currentData.color.replace('bg-', '')}/20`}>
                    <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${currentData.color}`}></span>
                    <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${currentData.color} [animation-delay:0.1s]`}></span>
                    <span className={`w-1.5 h-1.5 rounded-full animate-bounce ${currentData.color} [animation-delay:0.2s]`}></span>
                  </div>
                </div>
              )}
           </div>
           
           <form onSubmit={handleSendMessage} className="mt-4 pt-3 border-t border-border/50">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t.hero.inputPlaceholder}
                  className="w-full bg-muted/50 h-12 rounded-full border border-border/50 px-5 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground/50"
                />
                <button type="submit" disabled={!inputValue.trim()} className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 transition-all ${currentData.color}`}>
                   <Send size={16} className="ml-0.5 mt-0.5" />
                </button>
              </div>
           </form>

        </div>
      </div>
    </section>
  );
}