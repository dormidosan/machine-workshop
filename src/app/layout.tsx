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
  title: "Taller de Torno y CNC Metalyplast | San Salvador",
  description:
    "Expertos en fabricación y mantenimiento de moldes de inyección y soplado. Más de 10 años de experiencia en torno, fresa y CNC en San Salvador.",
  openGraph: {
    title: "Servicios de Torno, Fresa y CNC en San Salvador | Metalyplast",
    description:
      "Expertos en fabricación y mantenimiento de moldes de inyección y soplado. Más de 10 años de experiencia en torno, fresa y CNC en San Salvador.",
    url: "https://www.metalyplast.com/",
    type: "website",
    siteName: "Taller Torno y CNC Metalyplast",
    images: [
      {
        url: "https://www.metalyplast.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Torno, Fresa y CNC en San Salvador",
      },
    ],
  },
  alternates: {
    canonical: "https://www.metalyplast.com/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.metalyplast.com/" />
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
