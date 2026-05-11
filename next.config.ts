import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  typescript: {
    // Isse TypeScript errors build ko nahi rokain ge
    ignoreBuildErrors: true,
  },
  eslint: {
    // Isse ESLint ke maslay build ko nahi rokain ge
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;