const path = require('path')
const baseWebpackConfig = require('./webpack.base.js')
const TerserWebpackConfig = require('terser-webpack-plugin')
const webpackMerge = require('webpack-merge')

const webpackconfig = webpackMerge(baseWebpackConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false
  }
})

module.exports = webpackconfig