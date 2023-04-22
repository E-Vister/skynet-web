/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home-page/home-page-with-components",
      }
    ];
  },
  images: {
    domains: [
      'svgur.com',
      'i.imgur.com'
    ],
    unoptimized: true
  },
}

module.exports = nextConfig
