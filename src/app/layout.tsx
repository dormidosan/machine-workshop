import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import GAInit from "@/components/GAInit";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

import "@fontsource-variable/inter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taller de Torno, Fresa y CNC en San Salvador",
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
        <GAInit />
        <Header />
        <main className="bg-gray mx-auto p-6 py-6">{children}</main>
        <Footer />
        <ChatBot />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
