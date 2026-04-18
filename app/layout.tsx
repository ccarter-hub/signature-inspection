import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://signatureinspectionservice.com"),
  title: {
    default: "Home Inspector in Anchorage, AK | Signature Inspection Service Inc.",
    template: "%s | Signature Inspection Service Inc.",
  },
  description:
    "ASHI Certified home inspectors in Anchorage, AK. Residential inspections, commercial building inspections, and radon testing. 38+ years of construction experience. Same-day reports. Call (907) 223-3725.",
  keywords: [
    "home inspection Anchorage AK",
    "home inspector Anchorage Alaska",
    "commercial building inspection Anchorage",
    "radon testing Anchorage AK",
    "home inspection near me Anchorage",
    "ASHI certified home inspector Alaska",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://signatureinspectionservice.com",
    siteName: "Signature Inspection Service Inc.",
    title: "Home Inspector in Anchorage, AK | Signature Inspection Service Inc.",
    description:
      "ASHI Certified home inspectors in Anchorage, AK. Residential, commercial, and radon testing. 38+ years experience. Call (907) 223-3725.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://signatureinspectionservice.com",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Signature Inspection Service Inc.",
  url: "https://signatureinspectionservice.com",
  description: "ASHI Certified home inspection in Anchorage, AK. Residential, commercial, and radon testing.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://signatureinspectionservice.com/#business",
  name: "Signature Inspection Service Inc.",
  description:
    "ASHI Certified home inspectors in Anchorage, AK offering residential home inspections, commercial building inspections, and radon testing.",
  url: "https://signatureinspectionservice.com",
  telephone: "+1-907-223-3725",
  email: "info@signatureinspectionservice.com",
  founder: { "@type": "Person", name: "Larry McBain" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "8541 Raintree Circle",
    addressLocality: "Anchorage",
    addressRegion: "AK",
    postalCode: "99507",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 61.1743,
    longitude: -149.2843,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "15:00" },
  ],
  areaServed: [
    { "@type": "City", name: "Anchorage", containedInPlace: { "@type": "State", name: "Alaska" } },
    { "@type": "City", name: "Wasilla" },
    { "@type": "City", name: "Eagle River" },
    { "@type": "City", name: "Girdwood" },
    { "@type": "City", name: "Seward" },
    { "@type": "City", name: "Homer" },
  ],
  hasCredential: "ASHI Certified Home Inspector",
  sameAs: ["https://www.facebook.com/SignatureInspectionService/"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
  },
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
