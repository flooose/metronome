var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react','es2015'],
        },
      }, {
        test: /\.css$/, // Only .css files
        loader: 'style!css', // Run both loaders
      },
    ],
  },
}
