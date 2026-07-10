import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Cvetličarna Anaeva | Premium Floral Artistry & Bespoke Design",
    template: "%s | Cvetličarna Anaeva"
  },
  description: "Bespoke floral arrangements, luxury wedding styling, and corporate floral designs handcrafted with fine art principles. Discover flowers designed to be remembered.",
  keywords: [
    "florist",
    "wedding florist",
    "premium floral arrangements",
    "custom bouquets",
    "luxury events florist",
    "Cvetličarna Anaeva",
    "Slovenian florist",
    "floristični studio"
  ],
  authors: [{ name: "Cvetličarna Anaeva" }],
  creator: "Cvetličarna Anaeva",
  openGraph: {
    type: "website",
    locale: "sl_SI",
    url: "https://www.cvetlicarna-anaeva.si",
    title: "Cvetličarna Anaeva | Premium Floral Artistry & Bespoke Design",
    description: "Bespoke floral arrangements, luxury wedding styling, and corporate floral designs handcrafted with fine art principles.",
    siteName: "Cvetličarna Anaeva",
    images: [
      {
        url: "/images/hero_floral.jpg",
        width: 1200,
        height: 630,
        alt: "Cvetličarna Anaeva Floral Artistry"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cvetličarna Anaeva | Premium Florist",
    description: "Bespoke floral arrangements designed to be remembered.",
    images: ["/images/hero_floral.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-blush selection:text-foreground">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
