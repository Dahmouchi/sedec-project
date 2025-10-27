/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  // ... any other existing config
}

export default nextConfig