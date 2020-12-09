const combineRoutes = require('koa-combine-routers')

const aroutes = require('./aRouter')
const broutes = require('./bRouter')
const publicRouter = require('./PublicRouter')
module.exports = combineRoutes(
  aroutes,
  broutes,
  publicRouter
)