var webpack = require('webpack');
var htmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var path = require('path');

module.exports = function(options) {

  var base = {
    name: 'app',
    entry: './src/client/Main.jsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },
    resolve: {
      root: path.resolve(__dirname, 'src', 'client'),
      extensions: ['', '.js', '.jsx', '.scss'],
      modulesDirectories: ['node_modules', 'client'],
    },
    module: {
      preLoaders: [
        {
          test: /\.js|jsx$/,
          include: path.resolve(__dirname, 'src', 'client'),
          loader: 'eslint-loader'
        }
      ],
      loaders: [
        {
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          loader: 'url-loader?limit=8192&name=[path][hash].[ext]'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader?module&localIdentName=[local]!autoprefixer-loader!sass-loader?outputStyle=compressed'
        }
      ],
    },
    plugins: [
      new htmlwebpackPlugin({
        title: 'ES6 Node React',
        template: path.resolve(__dirname, 'src', 'client', 'public', 'index.html'),
        inject: 'body'
      })
    ]
  };

  return merge(base, options);

};
