import send from '../config/MailConfig'
import { getValue, setValue } from '../config/RedisConfig'
import moment from 'moment'
import jsonwebtoken from 'jsonwebtoken'
import { findUser } from '../model/loginModel'
import config from '../config'
class LoginController {
  constructor() {}
  // 忘记密码
  async forget(ctx) {
    const { body } = ctx.request
    console.log('sid:\r\n' + body.sid)
    try {
      let result = await send({
        code: '1234',
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'wuzhe'
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功'
      }
    } catch (e) {
      console.log(e)
    }
  }

  // 登录
  async login(ctx) {
    // 1、校验验证码有没有过期
    // 2、校验用户名和密码是否正确
    // 3、生成token
    const { username, password, sid, vercode } = ctx.request && ctx.request.body
    debugger
    // 从redis缓存中，获取验证码
    const code = await getValue(sid)
    // 缓存中的验证码存在 
    if (code) {
      if (code === vercode) {
        // 从数据库中查找对应的用户名、密码
        debugger
        const user = await findUser(username, password)
        if (username === user.username && password === user.password) {
          const token = jsonwebtoken.sign({
            _id: user.id
          }, config.JWT_SECRET, {
            expiresIn: '1d'
          })
          ctx.body = {
            code: 200,
            token: `Bearer ${token}`,
            msg: '登录成功'
          }
        } else {
          ctx.body = {
            code: 500,
            msg: '用户名或密码错误'
          }
        }
      } else {
        ctx.body = {
          code: 500,
          msg: '验证码错误'
        }
      }
    } else {
      ctx.body = {
        code: 500,
        msg: '验证码失效'
      }
    }
  }
}

export default new LoginController()
