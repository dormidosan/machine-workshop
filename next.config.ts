import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    //domains: ["imagenes1.com", "imagenes2.com", "imagenes3.com"],
  },
  async redirects() {
    return [
      {
        source: "/contact", // Old URL
        destination: "/contacto", // New URL
        permanent: true, // true = 308 (permanent), works like 301 for SEO
      },
    ];
  },
};

export default nextConfig;
