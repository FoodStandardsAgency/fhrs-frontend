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
  assetPrefix: undefined,
  async redirects() {
    return [
      {
        source: '/business/en-GB/:path*',
        destination: '/business/:path*',
        permanent: false,
      },
      {
        source: '/business/cy-GB/:path*',
        destination: '/cy/business/:path*',
        permanent: false,
      },
      {
        source: '/authority-search-landing/en-GB/:path*',
        destination: '/authority-search-landing/:path*',
        permanent: false,
      },
      {
        source: '/authority-search-landing/cy-GB/:path*',
        destination: '/cy/authority-search-landing/:path*',
        permanent: false,
      },
      {
        source: '/status/:path*',
        destination: 'https://api.ratings.food.gov.uk/Help/Status',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
