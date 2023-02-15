import React, { memo } from 'react'
import { Logo } from '@/presentation/components'
import S from './login-header-styles.scss'

type LoginHeaderProps = { }

const LoginHeader: React.FC<LoginHeaderProps> = () => {
  return (
    <header className={S.headerWrap}>
      <Logo />
      <h1>4Dev - Enquete para Programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
