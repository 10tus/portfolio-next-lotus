/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enables static export
  basePath: "/portfolio-next-lotus", // replace with your repo name
  images: {
    unoptimized: true, // disables next/image optimization (not supported on GH Pages)
  },
};

module.exports = nextConfig;
