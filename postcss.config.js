/* eslint-disable eslint-comments/disable-enable-pair, @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const inlineSvg = require('postcss-inline-svg');
const postcssVariable = require('postcss-css-variables');
module.exports = {
  plugins: [
    autoprefixer({ grid: "no-autoplace" }),
    inlineSvg,
    postcssVariable({ preserve: true }),
  ],
};
