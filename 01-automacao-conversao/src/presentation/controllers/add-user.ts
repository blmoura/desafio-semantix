import { AddUser } from '../../domain/usecases/add-user'
import { HttpRequest, HttpResponse } from '../contracts/http'

export class AddUserController {
  constructor (private readonly addUser: AddUser) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = await this.addUser.add(httpRequest.body)

      if (!user) {
        return {
          statusCode: 400,
          body: `Usuário (a) ${httpRequest.body.fullName} ja cadastrado`
        }
      }

      return {
        statusCode: 200,
        body: user
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: error
      }
    }
  }
}
