import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { Authentication } from '@/domain/usecases'
import { Button, ButtonProps, currentAccountState } from '@/presentation/components'
import { signInState } from './atoms'

type ButtonAuthProps = ButtonProps & {
  authentication: Authentication
  provider: string
}

const ButtonAuth: React.FC<ButtonAuthProps> = ({
  authentication,
  provider,
  ...props
}: ButtonAuthProps) => {
  const [, setState] = useRecoilState(signInState)
  const [currentAccount] = useRecoilState(currentAccountState)
  const history = useHistory()

  const handleAuthentication = async (authentication: Authentication, provider: string): Promise<void> => {
    try {
      setState(oldState => ({ ...oldState, isLoading: true, provider }))
      const user = await authentication.auth()
      if (user) {
        currentAccount.setCurrentAccount(user)
        history.push('/home')
      }
      console.log(user)
    } catch (error) {
      setState(oldState => ({ ...oldState, mainError: error.message, provider: '' }))
    } finally {
      setState(oldState => ({ ...oldState, isLoading: false }))
    }
  }

  return (
    <Button
      {...props}
      onClick={async () => handleAuthentication(authentication, provider)}
    />
  )
}

export default ButtonAuth
