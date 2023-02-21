import { AccountModel } from '@/domain/models'

export interface Authentication {
  auth: () => Promise<Authentication.Model>
}

export namespace Authentication {
  export type Model = AccountModel
}
