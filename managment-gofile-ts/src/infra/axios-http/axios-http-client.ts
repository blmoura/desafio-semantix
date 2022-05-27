import axios, { AxiosResponse } from 'axios'
import { HttpClient, HttpRequest, HttpResponse } from '../../data/contracts/http/http-client'

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })

      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      }
    } catch (error) {
      return {
        statusCode: 400,
        body: error
      }
    }
  }
}
