var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

// node 0.10.xx does not support es6 promises.
// This is a problem because the webpack style loaders need them.
// This polyfill makes the webpack style loaders work in 0.10.xx versions of node.
require('es6-promise').polyfill();

module.exports = {
  devtool: 'eval',
  entry: [
    './datepicker/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ReactDatePicker.js',
    publicPath: '/static/',
    library: 'ReactDatePicker',
    libraryTarget: 'commonjs'
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("ReactDatePicker.css")
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [path.join(__dirname, 'datepicker')],
      exclude: [/node_modules/, path.join(__dirname, 'src')]
    },
    {
      test: /\.(css|less)$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }]
  }
};
