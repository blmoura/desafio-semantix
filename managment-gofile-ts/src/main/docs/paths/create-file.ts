import { badRequest } from '../components/bad-request'
import { forbidden } from '../components/forbidden'
import { serverError } from '../components/server-error'

export const createFilePath = {
  post: {
    tags: ['Files'],
    summary: 'Upload de arquivo',
    description: 'Upload de arquivos para o GoFile',
    // parameters: [
    //   {
    //     in: 'header',
    //     name: 'Authorization',
    //     description: 'Token gerado pelo GoFile',
    //     schema: {
    //       type: 'string'
    //     }
    //   }
    // ],
    requestBody: {
      required: true,
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              filename: {
                type: 'string',
                format: 'binary'
              },
              folderId: {
                type: 'string'
              },
              token: {
                type: 'string'
              }
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
