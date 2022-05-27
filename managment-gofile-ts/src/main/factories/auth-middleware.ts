import { AxiosHttpClient } from '../../infra/axios-http/axios-http-client'
import { Middleware } from '../../presentation/contracts/middleware'
import { AuthMiddleware } from '../../presentation/middlewares/auth-middleware'

export const makeAuthMiddleware = (): Middleware => {
  const axiosHttpClient = new AxiosHttpClient()
  const authMiddleware = new AuthMiddleware(axiosHttpClient)

  return authMiddleware
}
