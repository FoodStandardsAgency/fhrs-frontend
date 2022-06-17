const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: 'twigjs-loader',
      }
    });
    config.resolve.alias['@components'] = path.join(__dirname, 'node_modules', 'fsa-pattern-library-assets', 'dist');

    return config
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['www.rct.uk']
  },
}

module.exports = nextConfig
