import svgCaptcha from 'svg-captcha'

class PublicController {
  constructor () {}
  async getCaptcha (ctx) {
    const captcha = svgCaptcha.create({
      size: 4,
      width: 160,
      height: 38,
      fontSize: 50,
      ignoreChars: '0oO1ilI',
      noise: Math.floor(3 + Math.random() * 3),
      color: true,
      background: '#eee'
    })
    console.log(captcha)
    const data = {
      data: captcha.data,
      text: captcha.text.toLowerCase()
    }
    ctx.body = data
  }
}

export default new PublicController()