var webpack = require('webpack');

module.exports = require('./webpack.config')({
  longTermCaching: true,
	minimize: true,
  plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.optimize.DedupePlugin()
  ]
});
