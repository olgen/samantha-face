/*eslint-disable*/
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

function absolutePathTo(relativePath) {
  return path.join(__dirname, relativePath);
}

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: './out',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
        },
      },
    ]
  },
  resolve: {
    root: [
      absolutePathTo('src'),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ]
};
