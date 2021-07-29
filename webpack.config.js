const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'web',
  module: {
    rules:[
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            "presets": ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
};
