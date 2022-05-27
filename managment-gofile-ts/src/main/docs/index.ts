import paths from './paths'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Desafio 2: Gerenciamento de arquivos GoFile',
    description: 'Construção de uma API RESTful que realize o gerenciamento de arquivos na API do GoFile',
    version: '1.0.0',
    contact: {
      name: 'Bruno Moura',
      email: 'brunomoura.blm@gmail.com',
      url: 'https://www.linkedin.com/in/bruno-moura-blm/'
    }
  },
  // components: {
  //   securitySchemes: {
  //     basicAuth: {
  //       type: 'http',
  //       scheme: 'basic'
  //     }
  //   }
  // },
  // security: [{
  //   basicAuth: []
  // }],
  paths
}
