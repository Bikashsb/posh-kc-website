import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: {
    default: "Posh KC Blow Dry Bar | Kansas City",
    template: "%s | Posh KC",
  },
  description:
    "Kansas City's premier blow dry bar. Professional blowouts, makeup, wedding hair & makeup, memberships, and Posh Party events in the Power & Light District.",
  keywords: [
    "blow dry bar kansas city",
    "blowout bar KC",
    "wedding hair makeup kansas city",
    "bachelorette party hair KC",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Posh KC Blow Dry Bar",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Posh KC Blow Dry Bar",
  description:
    "Kansas City's premier blow dry bar offering blowouts, makeup, wedding hair & makeup, memberships, and Posh Party events.",
  url: "https://www.poshkc.com",
  telephone: "+18169747674",
  email: "info@poshkc.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1211 Main St",
    addressLocality: "Kansas City",
    addressRegion: "MO",
    postalCode: "64106",
    addressCountry: "US",
  },
  image:
    "https://images.squarespace-cdn.com/content/v1/632a669af1b1882f3a037d22/c2a5ddb3-7b98-4303-a270-eea58e6f6f9a/1-3.jpg",
  sameAs: ["https://www.facebook.com/thePoshKC"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="bg-white text-posh-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
