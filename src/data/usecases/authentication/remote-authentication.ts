import { Authentication } from '@/domain/usecases'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { HttpClient, HttpStatusCode } from '@/data/protocols'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAuthentication.Model>
  ) {}

  async auth (params: Authentication.Params): Promise<Authentication.Model> {
    const httpReponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch (httpReponse.statusCode) {
      case HttpStatusCode.ok: return httpReponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model
}
