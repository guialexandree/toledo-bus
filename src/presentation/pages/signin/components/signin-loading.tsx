import React from 'react'
import { Icon, IconName, Spinner } from '@/presentation/components'
import S from '../signin-styles.scss'
import { useRecoilValue } from 'recoil'
import { signInState } from './atoms'

const SignInLoading: React.FC = () => {
  const { provider } = useRecoilValue(signInState)

  return (
    <>
      <Icon iconName={IconName.busLoginWith} />
      <h1 className={S.title1}>aguardando login</h1>
      <p className={S.subtitle}>uma nova aba foi aberta para efetuar o login com {provider}</p>
      <Spinner />
    </>
  )
}

export default SignInLoading
