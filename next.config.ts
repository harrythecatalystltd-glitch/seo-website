import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.seobotai.com' },
      { protocol: 'https', hostname: '*.cloudfront.net' },
    ],
  },
}

export default nextConfig
