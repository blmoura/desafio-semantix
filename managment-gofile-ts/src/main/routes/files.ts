import { AddFilesController } from './../../presentation/controllers/add-files'
import { Router } from 'express'
import { AddFilesService } from '../../data/services/add-files'
import { MongoFilesRepository } from '../../infra/mongodb/repositories/mongo-files-repository'
import multer from 'multer'

const upload = multer()

export default (router: Router): void => {
  router.post('/files', upload.single('filename'), async (request, response) => {
    const repo = new MongoFilesRepository()
    const filesService = new AddFilesService(repo)
    const controller = new AddFilesController(filesService)

    const httpResponse = await controller.handle(request)

    return response.status(httpResponse.statusCode).json({
      body: httpResponse.body
    })
  })
}
