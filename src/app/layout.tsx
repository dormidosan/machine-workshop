import ReactGA from "react-ga4";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import "@fontsource-variable/inter";

import "./globals.css";

ReactGA.initialize("G-XMNYFKZ942");

export const metadata: Metadata = {
  title: "Taller de Mecanizado de Precisión",
  description: "Servicios expertos de Torno, Fresado y CNC para todas tus necesidades de mecanizado",
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
      <body className="text-[#444] bg-gray-50 antialiased vsc-initialized">
        <Header />
        <main className="bg-gray mx-auto p-6 py-6">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
