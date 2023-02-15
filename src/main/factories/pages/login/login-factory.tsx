import React from 'react'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from '@/main/factories/validation'
import { makeRemoteAuthentication } from '@/main/factories/usecases'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
