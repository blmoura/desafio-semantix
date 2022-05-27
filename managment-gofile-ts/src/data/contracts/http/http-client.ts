export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export type HttpMethod = 'post' | 'get' | 'put' | 'patch' | 'delete'

export interface HttpClient {
  request: (data: HttpRequest) => Promise<HttpResponse>
}
