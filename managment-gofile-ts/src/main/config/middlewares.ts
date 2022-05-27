import { Express } from 'express'
import { authMiddleware } from '../middlewares/auth'

export const setupMiddlewares = (app: Express): void => {
  app.use(authMiddleware)
}
