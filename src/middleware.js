const Koa = require('koa')
const app = new Koa()
// 顺序执行中间件
// 倒序执行回调
const middleware1 = async function () {
  console.log('this is a middleware1')
  next()
  console.log('this is middleware1 ending')
}

const middleware2 = async function () {
  console.log('this is middleware2')
  next()
  console.log('this is middleware2 ending')
}

const middleware3 = async function () {
  console.log('this is middleware3')
  next()
  console.log('this is middleware3 ending')
}
app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(3080)