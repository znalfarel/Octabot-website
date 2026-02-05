import type { Metadata } from "next";
// 1. IMPORT FONT
import { Inter, Space_Grotesk } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// 2. CONFIG SPACE GROTESK
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"] 
});

export const metadata: Metadata = {
  title: "Octabot - Otomatisasi WhatsApp Modern",
  description: "Jasa penyewaan bot WA custom dengan fitur lengkap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      {/* 3. MASUKKAN VARIABLE KE BODY (PENTING!) */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}