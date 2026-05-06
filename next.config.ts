import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.seobotai.com' },
      { protocol: 'https', hostname: '*.cloudfront.net' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/case-study-creation-coffee',
        destination: '/case-study-creation-coffee.html',
      },
      {
        source: '/case-study-fitness-coach-chronicle',
        destination: '/case-study-fitness-coach-chronicle.html',
      },
    ]
  },
}

export default nextConfig
