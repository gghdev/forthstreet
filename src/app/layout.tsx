import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { siteConfig } from "./site";

config.autoAddCss = false;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  applicationName: siteConfig.name,
  creator: siteConfig.founder,
  publisher: siteConfig.legalName,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: `${siteConfig.url}/`,
      name: siteConfig.name,
      alternateName: siteConfig.legalName,
      description: siteConfig.description,
      inLanguage: "en-GB",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: `${siteConfig.url}/`,
      description: siteConfig.description,
      email: siteConfig.email,
      logo: `${siteConfig.url}/img/forth-street-logo.webp`,
      founder: { "@id": `${siteConfig.url}/#graham-hughes` },
      areaServed: {
        "@type": "Country",
        name: "United Kingdom",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software development services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Internal tool development",
              description: "Bespoke software that supports the workflows of UK SMEs.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Reporting systems",
              description: "Web-based reporting that turns business data into useful insight.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Legacy rebuilds",
              description: "Modern replacements for ageing or hard-to-maintain business software.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Bespoke web application development",
              description:
                "Custom software for business problems that do not fit an off-the-shelf package.",
            },
          },
        ],
      },
      taxID: "10487304",
      vatID: "256 6843 69",
      sameAs: [
        "https://www.linkedin.com/company/forth-street-limited",
        "https://www.facebook.com/ForthStreetLtd",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#graham-hughes`,
      name: siteConfig.founder,
      givenName: "Graham",
      additionalName: "G.",
      familyName: "Hughes",
      jobTitle: "Business analyst and full-stack software developer",
      url: "https://grahamghughes.com",
      worksFor: { "@id": `${siteConfig.url}/#organization` },
      knowsAbout: [
        "Custom web application development",
        "Internal business tools",
        "Business reporting systems",
        "Legacy software modernisation",
        "Business analysis",
        "Full-stack software development",
        "AI-assisted development",
      ],
      sameAs: ["https://uk.linkedin.com/in/grahamghughes", "https://github.com/gghdev"],
    },
  ],
} as const;

const structuredDataMarkup = {
  __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    {
      color: "rgb(247, 244, 237)",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "rgb(9, 17, 30)",
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body>
        <script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={structuredDataMarkup}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G47K33X89T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-G47K33X89T');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
