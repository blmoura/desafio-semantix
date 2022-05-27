import axios, { AxiosResponse } from 'axios'
import { HttpClient, HttpRequestClient, HttpResponseClient } from './../../data/protocols/http-client'

export class AxiosHttpClient implements HttpClient {
  async request (data: HttpRequestClient): Promise<HttpResponseClient> {
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
        statusCode: 500,
        body: error
      }
    }
  }
}
