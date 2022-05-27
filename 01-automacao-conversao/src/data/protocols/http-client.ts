export interface HttpRequestClient {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpMethod = 'post' | 'get' | 'put' | 'delete' | 'patch'

export interface HttpResponseClient {
  statusCode: number
  body: any
}

export interface HttpClient {
  request: (data: HttpRequestClient) => Promise<HttpResponseClient>
}
