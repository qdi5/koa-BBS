class PublicController {
  constructor () {}
  async getCaptcha (ctx) {
    ctx.body = {
      msg: '获取图形验证码'
    }
  }
}

export default new PublicController()