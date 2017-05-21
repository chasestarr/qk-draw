const path = require('path');
require('babel-polyfill');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.js'],
  output: { filename: './src/public/bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ]
  }
};
