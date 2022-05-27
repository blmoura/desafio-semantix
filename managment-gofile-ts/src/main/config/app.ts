import { setupRoutes } from './routes'
import express from 'express'
import { setupMiddlewares } from './middlewares'
import { setupSwagger } from './swagger'

const app = express()
app.use(express.json())
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)

export { app }
