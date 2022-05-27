import { badRequest } from '../components/bad-request'
import { forbidden } from '../components/forbidden'
import { serverError } from '../components/server-error'

export const createFolderPath = {
  post: {
    tags: ['Folders'],
    summary: 'API para criacao de uma pasta no GoFile e armazenando dados no MongoDb',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string'
              },
              token: {
                type: 'string'
              }
            },
            example: {
              name: 'Folder sample',
              token: 'Token GoFile'
            }
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Criado com sucesso'
      },
      400: { ...badRequest },
      403: { ...forbidden },
      500: { ...serverError }
    }
  }
}
