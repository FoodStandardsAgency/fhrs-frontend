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
    config.resolve.alias['@components'] = path.join(__dirname, 'node_modules', 'fsa-pattern-library-assets', 'dist', 'components');

    return config
  },
}

module.exports = nextConfig
