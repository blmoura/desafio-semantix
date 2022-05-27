import { badRequest } from '../components/bad-request'
import { forbidden } from '../components/forbidden'
import { serverError } from '../components/server-error'

export const deleteFolderPath = {
  delete: {
    tags: ['Folders'],
    summary: 'API para deletar uma pasta no GoFile no MongoDb',
    parameters: [
      {
        in: 'path',
        name: 'folderId',
        description: 'ID da pasta a ser deletada',
        required: true,
        schema: {
          type: 'string'
        }
      },
      {
        in: 'query',
        name: 'token',
        description: 'Token gerado pelo GoFile',
        schema: {
          type: 'string'
        }
      }
      // {
      //   in: 'header',
      //   name: 'Authorization',
      //   description: 'Token gerado pelo GoFile',
      //   schema: {
      //     type: 'string'
      //   }
      // }
    ],
    responses: {
      200: {
        description: 'Sucesso'
      },
      400: { ...badRequest },
      403: { ...forbidden },
      500: { ...serverError }
    }
  }
}
