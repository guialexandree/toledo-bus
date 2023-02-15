import { atom } from 'recoil'

export const loginState = atom({
  key: 'loginState',
  default: {
    isLoading: false,
    isFormInvalid: false,
    mainError: '',
    emailError: '',
    passwordError: '',
    email: '',
    password: ''
  }
})
