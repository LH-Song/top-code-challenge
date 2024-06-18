/** @type {import('next').NextConfig} */

import withVideos from 'next-videos'

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
}

export default withVideos(nextConfig)
