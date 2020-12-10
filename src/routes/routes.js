import combineRoutes from 'koa-combine-routers'
import aroutes from './aRouter'
import broutes from './bRouter'
import publicRouter from './PublicRouter'
export default combineRoutes(
  aroutes,
  broutes,
  publicRouter
)