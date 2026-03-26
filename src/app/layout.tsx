import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteConfig } from "../../site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const title =
  siteConfig.seo.titleTemplate ||
  `${siteConfig.businessName} | ${siteConfig.tagline}`;

const description =
  siteConfig.seo.description ||
  `${siteConfig.businessName} — trusted ${siteConfig.trade} serving ${siteConfig.serviceAreas.slice(0, 3).join(", ")} and surrounding areas. Licensed, insured, and local. Call ${siteConfig.phone} for a free quote.`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteConfig.businessName}`,
  },
  description,
  metadataBase: new URL(siteConfig.domain || "https://example.com.au"),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_AU",
    siteName: siteConfig.businessName,
    url: siteConfig.domain || "https://example.com.au",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.domain || "https://example.com.au",
  },
};

// JSON-LD LocalBusiness structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.businessName,
  description,
  url: siteConfig.domain || "https://example.com.au",
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address,
    addressCountry: "AU",
  },
  ...(siteConfig.abn && siteConfig.abn !== "00 000 000 000"
    ? { taxID: siteConfig.abn }
    : {}),
  ...(siteConfig.licenceNumber
    ? { identifier: siteConfig.licenceNumber }
    : {}),
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  },
  ...(siteConfig.social.google
    ? { sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.google].filter(Boolean) }
    : {}),
  aggregateRating:
    siteConfig.testimonials.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: (
            siteConfig.testimonials.reduce((sum, t) => sum + t.rating, 0) /
            siteConfig.testimonials.length
          ).toFixed(1),
          reviewCount: siteConfig.testimonials.length,
          bestRating: 5,
        }
      : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        {/* Inject config colours as CSS custom properties */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --color-primary: ${siteConfig.colors.primary};
                --color-accent: ${siteConfig.colors.accent};
              }
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Google Analytics 4 */}
        {siteConfig.googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
