import { atom } from 'recoil'

export const homeState = atom({
  key: 'homeState',
  default: {
    isLoading: false,
    mainError: '',
    line: '',
    dayFilter: 'today'
  }
})
