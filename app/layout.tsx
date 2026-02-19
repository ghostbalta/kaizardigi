import WhatsAppFloating from "@/components/ui/WhatsAppFloating";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaizardigi",
  description: "Agence digitale au Maroc • Web • SEO • Automatisation IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <WhatsAppFloating
          phone="212679806345"
          message="Salam, je veux un devis pour mon business."
        />
      </body>
    </html>
  );
}
