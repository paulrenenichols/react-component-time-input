var path = require('path');
var webpack = require('webpack');

// node 0.10.xx does not support es6 promises.
// This is a problem because the webpack style loaders need them.
// This polyfill makes the webpack style loaders work in 0.10.xx versions of node.
require('es6-promise').polyfill();

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './devApp/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'devApp'), path.join(__dirname, 'timeinput')],
      exclude: /node_modules/
    },
    {
      test: /\.(css|less)$/,
      loader: 'style!css!less'
    }]
  }
};
