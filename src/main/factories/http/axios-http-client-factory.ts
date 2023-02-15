import { AxiosAdapter } from '@/infra/http'

export const makeAxiosHttpClient = (): AxiosAdapter => new AxiosAdapter()
