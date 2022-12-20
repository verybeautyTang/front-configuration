const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const config  = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, './dist')
  },
  module: {
    rules: [
      {test: /\.scss|.css$/,
      use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.png/,
        type: 'asset/resources',
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin() // 热更新
  ],
  devServer: {
    hot: true,
  },
  mode: 'development',

}

module.exports = config