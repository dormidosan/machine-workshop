import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
// Supports weights 100-900
import "@fontsource-variable/inter";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// add style to body  font-family: 'Inter Variable', sans-serif;

export const metadata: Metadata = {
  title: "Taller de Mecanizado de Precisión",
  description: "Servicios expertos de torno y fresado para todas tus necesidades de mecanizado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="text-[#444] bg-gray-50 antialiased">
        <Header />
        <main className="bg-gray mx-auto p-6 py-6">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
