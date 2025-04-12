import { DemoBanner } from "@/components/demo-banner";
import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "My Ecommerce | Modern E-commerce Platform",
    template: "%s | My Ecommerce",
  },
  description:
    "My Ecommerce is a modern e-commerce platform offering a wide range of products with secure payment processing via Stripe. Shop with confidence on our user-friendly platform.",
  keywords: [
    "e-commerce",
    "online shopping",
    "stripe payment",
    "retail",
    "products",
    "shopping cart",
  ],
  authors: [{ name: "Mohamed Amoussa" }],
  creator: "Mohamed Amoussa",
  publisher: "Mohamed Amoussa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "My Ecommerce | Modern E-commerce Platform",
    description:
      "My Ecommerce is a modern e-commerce platform offering a wide range of products with secure payment processing via Stripe.",
    url: "/",
    siteName: "My Ecommerce",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My Ecommerce E-commerce Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Ecommerce | Modern E-commerce Platform",
    description:
      "My Ecommerce is a modern e-commerce platform offering a wide range of products with secure payment processing via Stripe.",
    images: ["/twitter-image.jpg"],
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
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="flex min-h-full flex-col bg-white">
        <DemoBanner />
        <Navbar />
        <main className="grow container mx-auto px-4 py-8">{children}</main>
        <JsonLd />
      </body>
    </html>
  );
}
