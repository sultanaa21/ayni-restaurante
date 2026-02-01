import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "AYNI | Cuina Peruana",
  description: "Auténtica cocina peruana con toques de autor en la Costa Brava.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "D3z-WLyvKhZf1FajSSGiOZQAoJKFj-By2h0gwH4Af6c",
  },
};

import { LanguageProvider } from '@/context/LanguageContext';
import { CookieBanner } from '@/components/ui/CookieBanner';

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
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
