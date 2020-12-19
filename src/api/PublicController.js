import svgCaptcha from 'svg-captcha'
import { getValue, setValue } from '../config/RedisConfig'
class PublicController {
  constructor () {}
  async getCaptcha (ctx) {
    const body = ctx.request.query
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
    const text = captcha.text.toLowerCase()
    console.log(text)
    const data = {
      data: captcha.data,
      text
    }
    // 设置图形验证码的有效期为10分钟
    setValue(body.sid, text, 60 * 10)
    ctx.body = data
  }
}

export default new PublicController()
