const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: './embed/index.js',
  output: {
    filename: 'embed-badge.js',
    path: path.resolve(__dirname, 'public'),
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
        test: /\.twig$/,
        use: {
          loader: 'twigjs-loader',
        }
      },
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
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
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
  plugins: [
    new MiniCssExtractPlugin(),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              normalizeUrl: false,
            },
          ],
        },
      }),
    ],
    minimize: true,
  }
};
