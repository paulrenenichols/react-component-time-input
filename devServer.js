var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

console.log('process.env.DEV_SERVER_PORT: ', process.env.DEV_SERVER_PORT);

var portNumber = process.env.DEV_SERVER_PORT || 3000;

app.listen(portNumber, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('react-component-time-input devServer');
  console.log('listening at http://localhost:' + portNumber);
});
