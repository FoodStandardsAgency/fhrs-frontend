const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.twig$/,
      use: {
        loader: 'twigjs-loader',
          options: {
            /**
             * @param {object}  twigData        Data passed to the Twig.twig function
             * @param {string}  twigData.id     Template id (relative path)
             * @param {object}  twigData.tokens Parsed AST of a template
             * @param {string}  dependencies    Code which requires related templates
             * @param {boolean} isHot           Is Hot Module Replacement enabled
             * @return {string}
             */
            renderTemplate(twigData, dependencies, isHot) {
              return `
                ${dependencies}
                var twig = require("twig").twig;
                var tpl = twig(${JSON.stringify(twigData)});
                module.exports = function(context) { return tpl.render(context); };
              `;
            },
          },
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
