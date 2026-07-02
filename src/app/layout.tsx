import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConversionWidgets from "@/components/conversion/ConversionWidgets";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vogue Spaces Interior Studio | Transforming Spaces Into Luxurious Experiences",
  description: "Premier luxury interior architecture firm in India. Bespoke residential apartments, villas, haute modular kitchens, turnkey solutions & executive office interior design.",
  keywords: [
    "Interior Designer in India",
    "Luxury Interior Designer",
    "Premium Interior Designer",
    "Residential Interior Design",
    "Commercial Interior Design",
    "Modular Kitchen Designer",
    "Villa Interior Designer",
    "Office Interior Design",
    "Interior Design Studio",
    "Turnkey Interior Solutions",
    "Best Interior Designer Near Me",
    "Vogue Spaces Interior Studio"
  ],
  openGraph: {
    title: "Vogue Spaces Interior Studio | Luxury Bespoke Interiors",
    description: "Transforming residential apartments, villas, and commercial spaces into timeless luxury experiences.",
    url: "https://voguespaces.in",
    siteName: "Vogue Spaces Interior Studio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Vogue Spaces Luxury Lounge Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Vogue Spaces Interior Studio",
    "description": "Transforming Spaces Into Luxurious Experiences. Premier bespoke interior design and turnkey execution studio in India.",
    "url": "https://voguespaces.in",
    "logo": "https://voguespaces.in/logo/vogue-logo.png",
    "telephone": "+91-9876543210",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "402, Luxury Horizon Tower, Cyber City / Bandra West",
      "addressLocality": "Mumbai / Gurgaon",
      "addressCountry": "IN"
    },
    "priceRange": "₹₹₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "248"
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)] antialiased selection:bg-[var(--color-gold)] selection:text-black pt-20">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <ConversionWidgets />
        <Footer />
      </body>
    </html>
  );
}
