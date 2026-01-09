import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  output: 'export', // Enables static export for GitHub Pages
  trailingSlash: true, // Creates /about/index.html instead of /about.html
  images: {
    unoptimized: true  // Required for static export
  },
  // GitHub Pages base path - adjust if deploying to subdirectory
  assetPrefix: './',
  basePath: '', // Set this if deploying to a subdirectory like github.com/username/repo-name
};

export default nextConfig;
