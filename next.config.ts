import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  output: 'export', // Enables static export for GitHub Pages
  trailingSlash: true, // Creates /about/index.html instead of /about.html
  images: {
    unoptimized: true  // Required for static export
  },
  // GitHub Pages deployment to subdirectory
  assetPrefix: './',
  basePath: '/supreme-potato', // GitHub Pages subdirectory path
};

export default nextConfig;
