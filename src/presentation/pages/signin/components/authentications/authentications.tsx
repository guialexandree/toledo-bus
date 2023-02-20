import React from 'react'
import ButtonAuth from '../button-auth/button-auth'
import { GoogleLogo, FacebookLogo, AppleLogo } from 'phosphor-react'
import S from './authentications-styles.scss'

const Authentications: React.FC = () => {
  return (
    <section className={S.authWrap}>
      <h2 className={S.title1}>acessar sua conta</h2>
      <ButtonAuth label='entrar com facebook' icon={FacebookLogo} />
      <ButtonAuth label='entrar com google' icon={GoogleLogo} />
      <ButtonAuth label='entrar com apple' icon={AppleLogo} />
    </section>
  )
}

export default Authentications
