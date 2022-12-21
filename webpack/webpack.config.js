const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack');
const config  = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, './dist')
  },
  module: {
    rules: [
      {test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {test: /\.scss|.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
      },
      {
        test: /\.png/,
        type: 'asset/resources',
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.js/,
        loader: 'babel-loader', 
      }
    ]
  },
  // 压缩
  optimization:{
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(__dirname, 'assets'),
          to: 'assets'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }) // 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载。
  ],
  devServer: {
    hot: true,
  },
  mode: 'production',

}

module.exports = config