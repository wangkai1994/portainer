const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 25000,
              outputPath: 'assets'
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader', options: {
              outputPath: 'assets'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {}
          }
        ]
      }
    ]
  }
});
