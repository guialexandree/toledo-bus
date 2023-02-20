
import { atom } from 'recoil'

export const currentAccountState = atom({
  key: 'currentAccountState',
  default: {
    getCurrentAccount: null as () => any,
    setCurrentAccount: null as (account: any) => void
  }
})
