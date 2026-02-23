import type { Metadata } from "next";
// 1. IMPORT FONT ANTI-MAINSTREAM YANG CHILL & KEREN
import { DM_Sans, Lexend } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// IMPORT LANGUAGE PROVIDER
import { LanguageProvider } from "@/context/language-context";

// Konfigurasi Font Body (Bersih, elegan, dan sangat natural)
const dmSans = DM_Sans({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

// Konfigurasi Font Judul (Lebar, asik, chill, dan sangat mudah dibaca)
const lexend = Lexend({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
  title: "Octabot - Otomatisasi WhatsApp Modern",
  description: "Jasa penyewaan bot WA custom dengan fitur lengkap.",
  
  icons: {
    icon: "/icon.svg", 
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      {/* 2. APLIKASIKAN VARIABEL FONT BARU KE BODY */}
      <body className={`${dmSans.variable} ${lexend.variable} antialiased font-sans`}>
        
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <Navbar />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
        
      </body>
    </html>
  );
}