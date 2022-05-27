import swaggerConfig from '../docs'

import { serve, setup } from 'swagger-ui-express'
import { Express } from 'express'

export const setupSwagger = (app: Express): void => {
  app.use('/documentation', serve, setup(swaggerConfig))
}
