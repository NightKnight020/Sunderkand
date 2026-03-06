import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brantford Sunderkand — Community Recitation Group",
  description:
    "Join our community Sunderkand recitation group in Brantford, Ontario. We gather multiple times a week to recite the Sunderkand from Shri Ramcharitmanas. All are welcome. Jai Shree Ram 🙏",
  keywords: [
    "Sunderkand",
    "Brantford",
    "Hindu",
    "Ramcharitmanas",
    "Hanuman",
    "community",
    "recitation",
    "Ontario",
  ],
  openGraph: {
    title: "Brantford Sunderkand — Strengthening Faith, Building Community",
    description:
      "Community Sunderkand recitation group in Brantford, Ontario. All are welcome.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
