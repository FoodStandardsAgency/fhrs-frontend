const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './embed/index.js',
  output: {
    filename: 'embed-badge.js',
    path: path.resolve(__dirname, 'public/embed'),
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify")
    },
    alias : {
      '@components': path.join(__dirname, 'node_modules', 'fsa-pattern-library-assets', 'dist')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: [
          "@babel/env",
          "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'url-loader'
        }
      }
    ],
  },
  mode: 'development',
};
