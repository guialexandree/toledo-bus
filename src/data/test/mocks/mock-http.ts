import { HttpRequest, HttpResponse, HttpStatusCode, HttpClient } from '@/data/protocols/http/http-client'
import faker from 'faker'

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request (data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.body = data.body
    this.method = data.method
    this.headers = data.headers
    return this.response
  }
}

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get' , 'post' , 'put' , 'delete']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement()
})
