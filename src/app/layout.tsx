import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const nunito = Nunito({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rian Hartokusumo | S1 Sistem Informasi & Web Developer",
  description:
    "Website portofolio resmi Rian Hartokusumo, lulusan S1 Sistem Informasi Universitas Gunadarma dengan keahlian web development berbasis Laravel, PHP, MySQL, dan Bootstrap.",
  keywords: [
    "Rian Hartokusumo",
    "Web Developer",
    "Sistem Informasi",
    "Universitas Gunadarma",
    "Laravel",
    "PHP",
    "MySQL",
    "Portofolio",
  ],
  authors: [{ name: "Rian Hartokusumo" }],
  creator: "Rian Hartokusumo",
  metadataBase: new URL("https://rianhartokusumo.vercel.app"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rianhartokusumo.vercel.app",
    title: "Rian Hartokusumo | S1 Sistem Informasi & Web Developer",
    description:
      "Website portofolio resmi Rian Hartokusumo — Pengembang web dengan spesialisasi Laravel, PHP, dan MySQL.",
    siteName: "Portofolio Rian Hartokusumo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${nunito.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0e0f2d] text-[#babcd9] font-sans antialiased flex flex-col selection:bg-[#5865f2] selection:text-white">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
