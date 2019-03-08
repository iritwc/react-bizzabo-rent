"use strict";
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
	entry: './src/app/index.jsx',
	output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
	},
  devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx', '.css'],
	},
	module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        include: [
          path.resolve(__dirname, './src')
        ],
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?importLoaders=1'],
        include: [
          path.resolve(__dirname, './src')
        ]
      },
    ],
	},
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
	plugins: [
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, 'dist/index.html'),
      template: 'src/index.html',
    })
	]
};
