const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()

router.get('/', ctx => {
  console.log(ctx)
  console.log(ctx.request)
  ctx.body = 'Hello World!!'
})

router.get('/api', ctx => {
  ctx.body = 'hello Api!!'
})

router.get('/async', async (ctx) => {
  let result = await new Promise(resolve => {
    setTimeout(function () {
      resolve('hello world 2s later')
    }, 1000)
  })
  ctx.body = result
})

app.use(router.routes()).use(router.allowedMethods())
// 1. request, method, response是啥？
// 2. api url => function, router路由的原理
// 3. ctx, async
app.listen(3060)
