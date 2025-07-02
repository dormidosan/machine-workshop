import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    //domains: ["imagenes1.com", "imagenes2.com", "imagenes3.com"],
  },
  async redirects() {
    return [
      // Redirect old /contact to /contacto
      {
        source: "/contact",
        destination: "/contacto",
        permanent: true,
      },
      // Redirect non-www to www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "metalyplast.com",
          },
        ],
        destination: "https://www.metalyplast.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
