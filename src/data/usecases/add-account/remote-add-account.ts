import { AddAccount } from '@/domain/usecases'
import { EmailInUseError, UnexpectedError } from '@/domain/errors'
import { HttpClient, HttpStatusCode } from '@/data/protocols'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddAccount.Model>
  ) {}

  async add (params: AddAccount.Params): Promise<AddAccount.Model> {
    const httpReponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })

    switch (httpReponse.statusCode) {
      case HttpStatusCode.ok: return httpReponse.body
      case HttpStatusCode.forbidden: throw new EmailInUseError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteAddAccount {
  export type Model = AddAccount.Model
}
