/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, // Use SWC for faster minification
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
