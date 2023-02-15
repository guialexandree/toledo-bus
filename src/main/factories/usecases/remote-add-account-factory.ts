import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteAddAccount } from '@/data/usecases'
import { AddAccount } from '@/domain/usecases'

export const makeRemoteAddAccount = (): AddAccount =>
  new RemoteAddAccount(makeApiUrl('/signup'), makeAxiosHttpClient())
