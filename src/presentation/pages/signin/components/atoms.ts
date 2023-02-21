import { atom } from 'recoil'

export const signInState = atom({
  key: 'signInState',
  default: {
    isLoading: false,
    isAuthenticate: false,
    mainError: '',
    provider: ''
  }
})
