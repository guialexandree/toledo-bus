
import { atom } from 'recoil'
import { makeDayJsDateAdapter } from '@/main/factories/adapters'

export const dateAdapterState = atom({
  key: 'dateAdapterState',
  default: makeDayJsDateAdapter()
})
