export default async (ctx, next) => {
  console.log('统一处理错误啊')
  try {
    await next()
  } catch (err) {
     // will only respond with JSON
     ctx.status = err.statusCode || err.status || 500;
     ctx.body = {
       message: err.message
     }
  }

/*   return await next().catch(err => {
    console.log('报错啦：\r\n')
    console.log(err)
    if (401 === err.status) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        msg: '对不起，您没有权限访问！'
      }
    } else if (404 == err.status) {
      console.log('404 not found')
      ctx.status = 404
      ctx.body = {
        code: 404,
        msg: '对不起，您访问的地址不存在！'
      }
    } else {
      console.log('什么鬼')
      console.log(err.status)
      const code = err.status || 500
      ctx.status = code
      ctx.body = Object.assign({
        code,
        msg: err.message
      }, 
      process.env.NODE_ENV === 'development' ? {
        stack: err.stack
      } : {})
    }
  }) */
}
