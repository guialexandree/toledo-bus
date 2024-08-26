import { atom } from 'recoil'
import { LineBusModel, LineBusSearchModel } from '@/domain/models'

export const isLoadingGetLinesState = atom({
  key: 'isLoadingGetLinesState',
  default: true
})

export const isLoadingGetLinesSearchsState = atom({
  key: 'isLoadingGetLinesSearchsState',
  default: true
})

export const linesBusState = atom({
  key: 'linesBusState',
  default: [] as LineBusModel[]
})

export const linesBusSearchsState = atom({
  key: 'linesBusSearchsState',
  default: [] as LineBusSearchModel[]
})

export const selectedLineBusState = atom({
  key: 'selectedLineBusState',
  default: null as LineBusModel
})

export const dayFilterLineBusState = atom({
  key: 'dayFilterLineBusState',
  default: 'today' as 'today' | 'tomorrow' | 'period'
})
