// /** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
        pathname: '/photos/pets/**',
      },
    ],
  },
  sassOptions: {
    // includePaths: [path.join(__dirname, 'scss')],
    additionalData: `@import "/scss/utils.scss";`,
  },
};

module.exports = nextConfig;
