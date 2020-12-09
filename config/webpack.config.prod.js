const baseWebpackConfig = require('./webpack.config.base.js')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const { merge  } = require('webpack-merge')

const webpackconfig = merge(baseWebpackConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false
  },
  optimization: {
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            // 是否注释掉console
            drop_console: false,
            dead_code: true,
            drop_debugger: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true,
        },
        parallel: true
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
})

module.exports = webpackconfig