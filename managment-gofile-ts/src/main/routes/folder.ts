import { AxiosHttpClient } from './../../infra/axios-http/axios-http-client'
import { AddFolderController } from './../../presentation/controllers/add-folder'
import { Router } from 'express'
import { AddFolderService } from '../../data/services/add-folder'
import { MongoFolderRepository } from '../../infra/mongodb/repositories/mongo-folder-repository'
import { DeleteFolderController } from '../../presentation/controllers/delete-folder'
import { DeleteFolderService } from '../../data/services/delete-folder'

export default (router: Router): void => {
  router.post('/folders', async (request, response) => {
    const repo = new MongoFolderRepository()
    const folderService = new AddFolderService(repo)
    const axiosHttpClient = new AxiosHttpClient()
    const controller = new AddFolderController(folderService, axiosHttpClient)

    const httpResponse = await controller.handle(request)

    return response.status(httpResponse.statusCode).json({
      body: httpResponse.body
    })
  })

  router.delete('/folders/:id', async (request, response) => {
    const repo = new MongoFolderRepository()
    const deleteFolderService = new DeleteFolderService(repo)
    const axiosHttpClient = new AxiosHttpClient()
    const controller = new DeleteFolderController(deleteFolderService, axiosHttpClient)

    const httpResponse = await controller.handle(request)

    return response.status(httpResponse.statusCode).json({
      body: httpResponse.body
    })
  })
}
