import Koa from 'koa'
import path from 'path'
// 处理跨域的请求
import cors from '@koa/cors'
// 解析post请求体的中间件
import koaBody from 'koa-body'
// 安全头部
import helmet from 'koa-helmet'
// 静态资源服务
import statics from 'koa-static'
import compose from 'koa-compose'
// 美化json返回数据
import json from 'koa-json'
const app = new Koa()
// router.prefix('/api')
import combineRouter from './routes/routes'

/* app.use(helmet())
app.use(statics(path.join(__dirname, 'public')))
app.use(koaBody())
app.use(cors())
app.use(json({
  pretty: true
})) */

// 中间件的顺序很重要
// app.use(router.routes()).use(router.allowedMethods())
// app.use(combineRouter())
const middleware = compose([
  helmet(),
  statics(path.join(__dirname, 'public')),
  koaBody(),
  cors(),
  json({
    pretty: true
  }),
  combineRouter()
])

app.use(middleware)
// 1. request, method, response是啥？
// 2. api url => function, router路由的原理
// 3. ctx, async
app.listen(3060)
