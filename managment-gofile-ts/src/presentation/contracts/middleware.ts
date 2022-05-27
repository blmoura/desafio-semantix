import { HttpResponse } from './../../data/contracts/http/http-client'
export interface Middleware {
  handle: (httpRequest: any) => Promise<HttpResponse>
}
