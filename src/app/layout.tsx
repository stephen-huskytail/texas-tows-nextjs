import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import ScrollToTop from "@/components/ScrollToTop";
import ExitIntent from "@/components/ExitIntent";
import { BUSINESS, PHOTOS } from "@/lib/constants";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.texastows.com"),
  title: {
    default: "Texas Tows Inc. | 24/7 Towing Dallas TX",
    template: "%s | Texas Tows",
  },
  description:
    "Texas Tows Inc. provides fast, reliable 24/7 towing and roadside assistance in Dallas, TX. Licensed, insured, TDLR certified. Call now.",
  keywords: [
    "towing service Dallas TX",
    "24/7 towing Dallas",
    "emergency towing Dallas",
    "roadside assistance Dallas",
    "flatbed towing Dallas",
    "tow truck Dallas",
    "Texas Tows",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.texastows.com",
    siteName: "Texas Tows Inc.",
    title: "Texas Tows Inc. | 24/7 Towing Service Dallas, TX",
    description:
      "Fast, reliable 24/7 towing and roadside assistance in Dallas, TX. Licensed, insured, TDLR certified. Call (817) 512-1024.",
    images: [
      {
        url: PHOTOS.logo,
        width: 150,
        height: 150,
        alt: "Texas Tows Inc. Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Texas Tows Inc. | 24/7 Towing Service Dallas, TX",
    description: "Fast, reliable 24/7 towing and roadside assistance in Dallas, TX.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.texastows.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-white text-gray-900">
        <ScrollToTop />
        <ExitIntent />
        <TrustBar />
        <Header />
        <main className="pt-[108px] pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />

        {/* LocalBusiness Schema — site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.texastows.com/#business",
              name: BUSINESS.name,
              description:
                "Texas Tows Inc. provides 24/7 emergency towing, roadside assistance, flatbed towing, and vehicle recovery services throughout Dallas, TX.",
              url: BUSINESS.siteUrl,
              telephone: BUSINESS.phoneTel,
              email: BUSINESS.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: BUSINESS.address.street,
                addressLocality: BUSINESS.address.city,
                addressRegion: BUSINESS.address.state,
                postalCode: BUSINESS.address.zip,
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 32.8337,
                longitude: -96.7837,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: BUSINESS.rating,
                reviewCount: BUSINESS.reviewCount,
                bestRating: "5",
                worstRating: "1",
              },
              priceRange: "$$",
              areaServed: {
                "@type": "City",
                name: "Dallas",
                sameAs: "https://en.wikipedia.org/wiki/Dallas",
              },
              hasMap: "https://maps.google.com/?q=Texas+Tows+Inc+Dallas+TX",
              sameAs: [
                BUSINESS.social.facebook,
                BUSINESS.social.instagram,
                BUSINESS.social.youtube,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
