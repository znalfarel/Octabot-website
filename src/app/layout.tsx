import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// 1. IMPORT PROVIDER
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Octabot - Otomatisasi WhatsApp Modern",
  description: "Jasa penyewaan bot WA custom dengan fitur lengkap.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}>
        {/* 2. BUNGKUS DENGAN PROVIDER */}
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