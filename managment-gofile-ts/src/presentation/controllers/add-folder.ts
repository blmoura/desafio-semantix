import { HttpClient } from './../../data/contracts/http/http-client'
import { AddFolder } from '../../domain/usecases/add-folders'
import { Controller } from '../contracts/controller'
import { HttpRequest, HttpResponse } from '../contracts/http'
import { MissingParamError } from '../errors/missing-param'
import { badRequest, created, serverError } from '../helpers/http-helper'
import { URLSearchParams } from 'url'

export class AddFolderController implements Controller {
  constructor (private readonly addFolder: AddFolder, private readonly httpClient: HttpClient) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const dataRequest = new URLSearchParams()
      dataRequest.append('token', `${httpRequest.body.token}`)
      dataRequest.append('folderName', httpRequest.body.name)
      dataRequest.append('parentFolderId', `${httpRequest.rootFolderId}`)

      // TODO: create folder in GoFile
      const { body: { data: { id } } } = await this.httpClient.request({
        method: 'put',
        url: `${process.env.GOFILE_URL}/createFolder`,
        headers: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        body: dataRequest
      })

      const folder = await this.addFolder.add(id, httpRequest.body.name)

      return created(folder)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
