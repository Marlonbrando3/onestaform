import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FacebookPixel from "./components/facebookPixel";
import Hotjar from "./components/hotjar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pobyt inwestorski nieruchomości w Hiszpanii",
  description: "Znajdź z nami swój nowy dom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Hotjar />
      <FacebookPixel />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
