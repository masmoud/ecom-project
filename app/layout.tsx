import { DemoBanner } from "@/components/demo-banner";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MinaYek | Buy and Sell Products",
  description: "MinaYek is a platform for buying and selling products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-white">
        <DemoBanner />
        <Navbar />
        <main className="grow container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
