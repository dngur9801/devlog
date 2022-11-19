/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { reactRoot: true },
  images: {
    domains: ['avatars.githubusercontent.com', 'localhost', 'lh3.googleusercontent.com', 'localhost'],
  },
};

module.exports = nextConfig;
