
import { atom } from 'recoil'
import { makeLocalStorageAdapter } from '@/main/factories/cache'

export const localStorageState = atom({
  key: 'localStorageState',
  default: makeLocalStorageAdapter()
})
