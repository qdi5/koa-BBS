import combineRoutes from 'koa-combine-routers'
import publicRouter from './PublicRouter'
import loginRouter from './loginRouter'
export default combineRoutes(
  publicRouter,
  loginRouter
)