import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AYNI | Cuina Peruana",
  description: "Auténtica cocina peruana con toques de autor en la Costa Brava.",
};

import { LanguageProvider } from '@/context/LanguageContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-bg text-text antialiased selection:bg-gold/30 selection:text-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
