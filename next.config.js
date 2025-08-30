/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // disables next/image optimization (not supported on GH Pages)
  }
}

module.exports = nextConfig;
