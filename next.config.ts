import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export for GitHub Pages
  basePath: "/muskan-portfolio", // Required for free github.io subfolder hosting
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
