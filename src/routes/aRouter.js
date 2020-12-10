import Router from 'koa-router'
import a from '../api/a'

const router = new Router()
// 给所有路由追加统一的前缀

router.get('/a', a)

export default router