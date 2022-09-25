/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['accessmatic.com', 'images.unsplash.com', 'firebasestorage.googleapis.com'],
  },
}

module.exports = nextConfig
