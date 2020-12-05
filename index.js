const Koa = require('koa')
const Router = require('koa-router')
// 处理跨域的请求
const cors = require('@koa/cors')
// 解析post请求体的中间件
const koaBody = require('koa-body')
// 美化json返回数据
const json = require('koa-json')
const app = new Koa()
const router = new Router()
router.prefix('/api')


const combineRouter = require('./routes/routes')


app.use(koaBody())
app.use(cors())
app.use(json({
  pretty: true
}))
// 中间件的顺序很重要
app.use(router.routes()).use(router.allowedMethods())
app.use(combineRouter())
// 1. request, method, response是啥？
// 2. api url => function, router路由的原理
// 3. ctx, async
app.listen(3060)
