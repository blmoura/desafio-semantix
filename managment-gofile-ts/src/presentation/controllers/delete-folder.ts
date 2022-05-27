import { badRequest, serverError } from './../helpers/http-helper'
import { DeleteFolder } from '../../domain/usecases/delete-folder'
import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http'
import { ok } from '../helpers/http-helper'
import { HttpClient } from '../../data/contracts/http/http-client'
import { NotFoundError } from '../errors/not-found'

export class DeleteFolderController implements Controller {
  constructor (private readonly deleteFolder: DeleteFolder, private readonly httpClient: HttpClient) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { body: { data: { id } } } = await this.httpClient.request({
        method: 'get',
        url: `${process.env.GOFILE_URL}/getContent?token=${httpRequest.query.token}&contentId=${httpRequest.params.id}&websiteToken=12345`
      })

      if (!id) {
        return badRequest(new NotFoundError())
      }

      const requestData = new URLSearchParams()
      requestData.append('contentsId', id)
      requestData.append('token', `${httpRequest.query.token}`)

      await this.httpClient.request({
        method: 'delete',
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        url: `${process.env.GOFILE_URL}/deleteContent`,
        body: requestData
      })

      const httpResponse = await this.deleteFolder.deleteFolder(httpRequest.params.id)

      if (!httpResponse.data) {
        return badRequest(new NotFoundError())
      }

      return ok(httpResponse)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
