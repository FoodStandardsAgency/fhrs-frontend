const path = require('path');
const { i18n } = require('./next-i18next.config');
const CopyFilePlugin = require('copy-file-plugin')
const util = require('util')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: 'twigjs-loader',
      }
    });
    config.plugins.push(
      new CopyFilePlugin(
         [
          { from: "node_modules/fsa-pattern-library-assets/dist/main.js", to: "public/main.js" },
          { from: "node_modules/fsa-pattern-library-source/src/components/fhrs/badges", to: "public/embed/badges" },
        ], {debug: true}
      ),
    )
    config.output.publicPath = '/';
    config.resolve.alias['@components'] = path.join(__dirname, 'node_modules', 'fsa-pattern-library-assets', 'dist');
    config.module.generator.asset.publicPath = "/_next/";

    return config
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  assetPrefix: undefined
}

module.exports = nextConfig
