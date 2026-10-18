import type { Metadata } from "next";
import { Nunito, Open_Sans, Playfair_Display } from "next/font/google"; // <-- Playfair toegevoegd
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Analytics, { GtmNoscript } from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

// NIEUW: Playfair Display importeren voor de high-end koppen
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Licht en sierlijk
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  // ... (laat de metadata zoals die was)
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Kinderfysiotherapie Capelle aan den IJssel | Je kind weer spelend in beweging",
    template: "%s",
  },
  description: siteConfig.description,
  // ... (rest van metadata)
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // Voeg de playfair.variable toe aan de html class
    <html lang="nl-NL" className={`${nunito.variable} ${openSans.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <GtmNoscript />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
        <StructuredData />
        <Analytics />
      </body>
    </html>
  );
}
