import Router from 'koa-router'
import publicController from '../api/PublicController.js'

const router = new Router()
router.prefix('/login')
router.get('/getCaptcha', publicController.getCaptcha)

export default router