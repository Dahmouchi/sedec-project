/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: "https",
        hostname: "pub-afc9974860af4d5aab3484c7d13caccf.r2.dev",
      },
    ],
  },
  // ... any other existing config
}

export default nextConfig