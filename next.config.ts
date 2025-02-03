import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.genius.com'
      },
      {
        protocol: 'https',
        hostname: 'images.genius.com'
      }
    ]
  }
};

export default nextConfig;
