import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com'],
  },
  output: 'export',
};

export default nextConfig;
