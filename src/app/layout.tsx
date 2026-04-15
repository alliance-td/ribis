import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "РИБИС — Спецавтомобили ГАЗ | Продажа и переоборудование",
    template: "%s | РИБИС",
  },
  description:
    "Компания РИБИС — производство, продажа и переоборудование спецавтомобилей ГАЗ. ГАЗель, Газон, Садко, Соболь. Доставка по России.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "РИБИС",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
