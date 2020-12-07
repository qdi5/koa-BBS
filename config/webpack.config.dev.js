const path = require('path')
const WebpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const webpackconfig = WebpackMerge(baseWebpackConfig, {
  mode: 'development'
})

module.exports = webpackconfig