import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {NODE_DIR, SRC_DIR, ASSETS_DIR, APP_DIR, APP_TITLE} from './constants.js'

export default {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    path.join(SRC_DIR, 'index.js'),
  ],
  resolve: {
    modules: [
      NODE_DIR,
      SRC_DIR,
      ASSETS_DIR,
    ],
  },
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          compact: true,
        },
      },
      // STYLES
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },

      // CSS / SASS
      {
        test: /\.scss/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }, {
          loader: 'import-glob-loader',
        }],
      },

      // EJS
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },

      // IMAGES
      {
        test: /\.(jpe*g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'${process.env.NODE_ENV}'`,
      },
    }),
    new webpack.ProvidePlugin({
      lodash: 'lodash',
      Promise: 'bluebird',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
      title: APP_TITLE,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    pathinfo: true,
    path: path.join(APP_DIR, 'build'),
    filename: '[name].js',
    publicPath: '/',
  },
}
