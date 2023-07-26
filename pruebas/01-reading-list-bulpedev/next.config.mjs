/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  images: {unoptimized : true},
  eslint: {
    dirs: ["pages", "utils"]
  }
}

export default nextConfig