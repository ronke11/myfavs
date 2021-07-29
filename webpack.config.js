const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
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
  proxy: {
    '/api': 'http://localhost:3000',
  },
};
