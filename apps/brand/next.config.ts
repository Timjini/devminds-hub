import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**.r2.dev",
      port: "",
      search: "",
    }],
  },
};

export default nextConfig;
