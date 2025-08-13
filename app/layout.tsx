import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import ScrollProgress from "@/components/scroll-progress"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Complejo Drina - Departamentos frente al mar en Villa Gesell",
  description:
    "Departamentos equipados en la playa de Villa Gesell, Argentina. Ubicación privilegiada, atención cercana y todas las comodidades para tus vacaciones perfectas.",
  keywords:
    "departamentos playa villa gesell, arriendo vacaciones, complejo drina, alojamiento frente al mar argentina",
  authors: [{ name: "Complejo Drina" }],
  creator: "Complejo Drina",
  publisher: "Complejo Drina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://complejodrina.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Complejo Drina - Departamentos frente al mar",
    description:
      "Departamentos equipados en la playa de Villa Gesell, Argentina con ubicación privilegiada y atención cercana.",
    url: "https://complejodrina.com.ar",
    siteName: "Complejo Drina",
    images: [
      {
        url: "/chilean-beach-apartments.png",
        width: 1200,
        height: 630,
        alt: "Complejo Drina - Departamentos frente al mar",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Complejo Drina - Departamentos frente al mar",
    description: "Departamentos equipados en la playa de Villa Gesell, Argentina con ubicación privilegiada.",
    images: ["/chilean-beach-apartments.png"],
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <script src="https://hotels.cloudbeds.com/widget/load/S3GnS9/immersive" async />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Complejo Drina",
              description: "Departamentos equipados frente al mar en Villa Gesell, Argentina",
              url: "https://complejodrina.com.ar",
              telephone: "+5491123839628",
              email: "reservas@edificiodrina.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Paseo 111, 269",
                addressCountry: "AR",
                addressLocality: "Villa Gesell",
                addressRegion: "Buenos Aires",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -37.264248666741885,
                longitude: -56.974169352940194,
              },
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "WiFi gratuito" },
                { "@type": "LocationFeatureSpecification", name: "Estacionamiento" },
                { "@type": "LocationFeatureSpecification", name: "Cocina equipada" },
                { "@type": "LocationFeatureSpecification", name: "Vista al mar" },
                { "@type": "LocationFeatureSpecification", name: "Pet-friendly" },
              ],
              starRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ScrollProgress />
        {children}
        <ScrollToTop />
      </body>
    </html>
  )
}
