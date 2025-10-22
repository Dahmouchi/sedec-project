/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.resolve.alias.canvas = false;
    return config
  },
  experimental: {
    serverActions: {
       bodySizeLimit: '50mb', // or '50mb' or whatever size you need
    },
  },
  async rewrites() {
    return [
      {
        source: '/api/google/:path*',
        destination: 'https://maps.googleapis.com/maps/api/place/:path*',
      },
       {
        source: "/api/:path*",
        destination: "/api/:path*", // prevent locale prefix on API
      },
      
    ];
  },
  // ... any other existing config
}

export default nextConfig