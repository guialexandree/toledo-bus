export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export type HttpMethod = 'get' | 'post' | 'put' | 'delete'

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unauthorized = 401,
  forbidden = 403,
  badRequest = 400,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
