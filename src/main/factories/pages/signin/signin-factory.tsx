import React from 'react'
import { SignIn } from '@/presentation/pages'
import {
  makeRemoteAutheticationMicrosoft,
  makeRemoteAutheticationGoogle,
  makeRemoteAutheticationFacebook
} from '@/main/factories'

export const makeSignIn: React.FC = () => {
  const authenticationGoogle = makeRemoteAutheticationGoogle()
  const authenticationMicrosoft = makeRemoteAutheticationMicrosoft()
  const authenticationFacebook = makeRemoteAutheticationFacebook()

  return (
    <SignIn
      authenticationGoogle={authenticationGoogle}
      authenticationMicrosoft={authenticationMicrosoft}
      authenticationFacebook={authenticationFacebook}
    />
  )
}
