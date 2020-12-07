const Router = require('koa-router')
const a = require('../api/a')

const router = new Router()
// 给所有路由追加统一的前缀

router.get('/a', a)

module.exports = router