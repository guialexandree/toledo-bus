import { AuthorizeHttpClientDecorator } from '@/main/decorators'
import { makeLocalStorageAdapter } from '@/main/factories/cache'
import { makeAxiosHttpClient } from '@/main/factories/http'
import { HttpClient } from '@/data/protocols'

export const makeAuthorizeHttpClientDecorator = (): HttpClient => {
  return new AuthorizeHttpClientDecorator(makeLocalStorageAdapter(), makeAxiosHttpClient())
}
