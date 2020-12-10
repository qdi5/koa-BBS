import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor () {}
  async getCaptcha (ctx) {
    const captcha = svgCaptcha.create({
      size: 4,
      width: 160,
      height: 60,
      fontSize: 50,
      ignoreChars: '0oO1ilI',
      noise: 4,
      color: true,
      background: '#eee'
    })
    console.log(captcha)
    const data = {
      data: captcha.data,
      text: captcha.text
    }
    ctx.body = captcha.data
  }
}

export default new PublicController()