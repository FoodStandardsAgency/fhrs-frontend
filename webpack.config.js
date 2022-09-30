const path = require('path');

module.exports = {
  entry: './embed/index.js',
  output: {
    filename: 'embed-badge.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
    ],
  },
  mode: 'development',
};
