import { NextFunction, Request, Response } from 'express'
import { makeAuthMiddleware } from '../factories/auth-middleware'

export const authMiddleware = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  const { authorization } = request.headers

  const middleware = makeAuthMiddleware()
  const httpResponse = await middleware.handle(request)

  if (!authorization) {
    response.status(httpResponse.statusCode).json({ body: httpResponse.body })
  }

  next()
}
