import React from 'react'
import S from './signin-styles.scss'
import { Icon, IconName, Logo } from '@/presentation/components'
import { Authentications } from './components'

const SignIn: React.FC = () => {
  return (
    <section className={S.signInWrap}>
      <header className={S.header}>
        <Logo />
        <Icon className={S.iconWrap} iconName={IconName.busLogin} />
      </header>
      <section className={S.content}>
        <Icon iconName={IconName.busPeople} />
        <h1 className={S.title1}>bora lá!</h1>
        <p className={S.subtitle}>você está apenas um passo de chegar no seu destino</p>
        <Authentications />
      </section>
    </section>
  )
}

export default SignIn
