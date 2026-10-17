import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Analytics, { GtmNoscript } from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default:
      "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
    template: "%s | Kids Fysio Capelle",
  },
  description: siteConfig.description,
  keywords: [
    "kinderfysiotherapie Capelle aan den IJssel",
    "kinderfysiotherapeut Capelle",
    "kinderfysiotherapie Rotterdam",
    "Kids Fysio Capelle",
    "baby fysiotherapie",
    "SI-therapie kinderen",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: "Kinderfysiotherapie Capelle aan den IJssel | Kids Fysio Capelle",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: siteConfig.googleSiteVerification
    ? { google: siteConfig.googleSiteVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="nl-NL"
      className={`${cormorant.variable} ${jakarta.variable}`}
    >
      <head>
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
        <GtmNoscript />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  );
}
