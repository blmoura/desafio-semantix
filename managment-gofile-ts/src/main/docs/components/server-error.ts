export const serverError = {
  description: 'Erro interno no servidor',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          error: {
            type: 'string'
          }
        },
        required: ['error']
      }
    }
  }
}
