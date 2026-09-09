import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // new URL("https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/**"),
      // new URL("https://kickboxingmorocco.club/**"),
      // new URL("https://images.unsplash.com/**"),

      {
        protocol: "https",
        hostname: "**.r2.dev",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "kickboxingmorocco.club",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "**.unsplash.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com/**",
      },
    ],
  },
};

export default nextConfig;
