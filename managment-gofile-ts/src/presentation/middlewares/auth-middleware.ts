import { forbidden, ok, serverError } from './../helpers/http-helper'
import { HttpClient, HttpResponse } from '../../data/contracts/http/http-client'
import { Middleware } from './../contracts/middleware'
import { AccessDeniedError } from '../errors/access-denied'
import { HttpRequest } from '../contracts/http'

export class AuthMiddleware implements Middleware {
  constructor (private readonly httpClient: HttpClient) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { authorization: authHeader } = httpRequest.headers
      if (!authHeader) {
        return forbidden(new AccessDeniedError())
      }

      const { body: { data: { token, rootFolder } } } = await this.httpClient.request({
        url: `${process.env.GOFILE_URL}/getAccountDetails?token=${httpRequest.body.token}`,
        method: 'get'
      })

      httpRequest.rootFolderId = rootFolder

      return ok({ authorization: token, rootFolder })
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
