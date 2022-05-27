export const forbidden = {
  description: 'Acesso negado',
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
