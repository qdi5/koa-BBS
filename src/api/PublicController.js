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
    const data = {
      data: captcha.data,
      text: captcha.text.toLowerCase()
    }
    setValue(body.sid, data.text)
    getValue(body.sid).then(res => {
      console.log('从redis中获取sid：\r\n', res)
    })
    ctx.body = data
  }
}

export default new PublicController()
