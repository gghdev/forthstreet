import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Itim, PT_Sans as PTSans } from "next/font/google";
import Script from "next/script";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const sans = PTSans({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sans" });
const cursive = Itim({ subsets: ["latin"], weight: "400", variable: "--font-cursive" });

export const metadata = {
  title: "Forth Street — web app development",
  description: "Custom solutions for your business",
  openGraph: {
    title: "Forth Street Limited",
    type: "website",
    images: ["https://www.forthstreet.com/img/forth-street-logo-card.webp"],
    description:
      "London-based software development company, specialising in web-based applications for business.",
  },
  themeColor: [
    {
      color: "rgb(096, 165, 250)",
      media: "(prefers-color-scheme: light)",
    },
    {
      color: "rgb(8, 69, 138)",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  applicationName: "Forth Street",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script id="ld" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Forth Street",
          "legalName": "Forth Street Limited",
          "image": "https://www.forthstreet.com/img/forth-street-logo-card.webp",
          "logo": "https://www.forthstreet.com/img/forth-street-logo.webp",
          "url": "https://www.forthstreet.com",
          "address": {
          "@type": "PostalAddress",
          "addressCountry": "GB",
          "addressRegion": "England",
          "addressLocality": "London"
        },
          "founder": {
          "@type": "Person",
          "name": "Graham G. Hughes",
          "givenName": "Graham",
          "additionalName": "G.",
          "familyName": "Hughes",
          "gender": "Male",
          "url": "https://grahamghughes.com"
        },
          "taxID": "10487304",
          "vatID": "256 6843 69",
          "sameAs": [
          "https://www.linkedin.com/company/forth-street-limited",
          "https://www.facebook.com/ForthStreetLtd"
          ]
        }
        `}
      </Script>
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
      <body
        className={`flex min-h-screen flex-col items-stretch justify-between 
        ${cursive.variable} ${sans.variable} font-sans bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
