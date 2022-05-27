import 'dotenv/config'
import mongoose from 'mongoose'

import { app } from './config/app'
import { env } from './config/env'

async function run (): Promise<void> {
  await mongoose.connect(env.mongodbUrl, {
    autoCreate: true,
    authSource: 'admin'
  })
}

run().then(() => {
  console.log('Connected to database')
  app.listen(env.port, () => console.log(`Server is running at: http://localhost:${env.port}`))
})
