const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: { filename: './src/public/bundle.js' },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        query: { presets: ['react', 'es2015'] }
      }
    ]
  }
};
