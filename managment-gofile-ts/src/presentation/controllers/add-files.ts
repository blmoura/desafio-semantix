import { badRequest, created } from './../helpers/http-helper'
import { AddFiles } from '../../domain/usecases/add-files'
import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http'
import { serverError } from '../helpers/http-helper'
import { MissingParamError } from '../errors/missing-param'

export class AddFilesController implements Controller {
  constructor (private readonly addFiles: AddFiles) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      if (!httpRequest.body.folderId) {
        return badRequest(new MissingParamError('folderId'))
      }

      if (!httpRequest.file) {
        return badRequest(new MissingParamError('file'))
      }

      const fileId = '123123123'

      const { folderId } = httpRequest.body
      const { originalname } = httpRequest.file
      const files = await this.addFiles.add(fileId, originalname, folderId)

      return created(files)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
