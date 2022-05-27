import { HttpResponse } from '../contracts/http'

export const serverError = (error: Error): HttpResponse => {
  return {
    statusCode: 500,
    body: error.message
  }
}

export const forbidden = (error: Error): HttpResponse => {
  return {
    statusCode: 403,
    body: error.message
  }
}

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error.message
  }
}

export const created = (body: any): HttpResponse => {
  return {
    statusCode: 201,
    body
  }
}

export const ok = (body: any): HttpResponse => {
  return {
    statusCode: 200,
    body
  }
}
