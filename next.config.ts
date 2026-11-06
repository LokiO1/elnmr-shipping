import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/elnmr-shipping',
  assetPrefix: '/elnmr-shipping/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
