import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { LanguageProvider } from "@/contexts/language-context";
import LayoutClient from "@/components/layout-client";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Night at The Valley",
  description: "Trải nghiệm game đỉnh cao với đồ họa tuyệt đẹp",
};

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="vi">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          <LayoutClient>{children}</LayoutClient>
        </LanguageProvider>
      </body>
    </html>
  );
}