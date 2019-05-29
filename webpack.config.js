const path = require('path')
const webpack = require('webpack')
const express = require('express')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const srcRoot = path.resolve(__dirname, 'src')
const distRoor = path.resolve(__dirname, 'dist')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: {
    main: path.resolve(srcRoot, 'main.js'),
  },
  output: {
    path: distRoor,
    filename: 'js/[name].[hash].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
        },
        include: srcRoot,
      },
      {
        test: /\.(png|jpe?g|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [srcRoot, 'node_modules'],
  },
  optimization: {
    runtimeChunk: {
      name: entrypoint => `runtime~${entrypoint.name}`,
    },
    namedModules: true,
    namedChunks: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    overlay: true,
    contentBase: './dist',
    watchContentBase: true,
    port: 2200,
    compress: true,
    stats: 'minimal',
    progress: true,
    before: function(app, server) {
      app.use('/media', express.static('media'))
    },
    //hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      meta: {
        author: 'Zsolt Kiss',
        viewport:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      favicon: 'public/favicon.png',
      chunksSortMode: 'dependency',
      minify: {
        removeComments: true,
      },
    }),
    new webpack.NamedModulesPlugin(),
  ],
}
