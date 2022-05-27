export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  params?: any
  body?: any
  headers?: any
  rootFolderId?: any
  file?: any
  query?: any
}
