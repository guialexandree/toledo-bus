import React from 'react'
import { useRecoilValue } from 'recoil'
import { Icon, IconName, Spinner } from '@/presentation/components'
import { signInState } from './atoms'
import S from '../signin-styles.scss'

const FallbackAutentication: React.FC = () => {
  const { provider } = useRecoilValue(signInState)

  return (
    <>
      <Icon iconName={IconName.busLoginWith} />
      <h1 className={S.title}>aguardando login</h1>
      <p className={S.subtitle}>uma nova aba foi aberta para efetuar o login com {provider}</p>
      <Spinner />
    </>
  )
}

export default FallbackAutentication
