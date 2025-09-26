import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'collboard.fra1.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/ptbk/social-images/**',
      },
    ],
  },
};

export default nextConfig;
