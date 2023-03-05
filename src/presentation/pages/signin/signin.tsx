import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { GoogleLogo, WindowsLogo } from 'phosphor-react'
import { Authentication } from '@/domain/usecases'
import { Animations, signInState, FallbackAuthentication, ButtonAuth } from '@/presentation/pages/signin/components'
import { Animated, Icon, IconName } from '@/presentation/components'
import { useMediaQuery } from '@/presentation/hooks'
import S from './signin-styles.scss'

type SignInProps = {
  authenticationGoogle: Authentication
  authenticationMicrosoft: Authentication
  authenticationFacebook: Authentication
}

const SignIn: React.FC<SignInProps> = ({
  authenticationGoogle,
  authenticationMicrosoft
}) => {
  const [state] = useRecoilState(signInState)
  const { isMobile } = useMediaQuery()

  useEffect(() => {
    document.body.style.backgroundColor = '#FFF'
  },[])

  return (
    <Animated variants={Animations.backgroundAnimations} className={S.signInWrap}>
      <section className={S.content}>
        {state.isLoading
          ? <FallbackAuthentication />
          : <>
            <Animated variants={Animations.logoAnimations}>
              <Icon height={isMobile() ? 180 : 220} iconName={IconName.busPeople} />
            </Animated>
            <Animated className={S.textCenter} variants={Animations.textAnimations}>
              <h1 className={S.title}>bora lá!</h1>
              <p className={S.subtitle}>você está apenas um passo de chegar no seu destino</p>
            </Animated>
            <Animated className={S.authWrap} variants={Animations.authAnimations}>
              <h2 className={S.title}>acessar sua conta</h2>
              <ButtonAuth
                label='entrar com google'
                icon={GoogleLogo}
                authentication={authenticationGoogle}
                provider='google'
              />
              <ButtonAuth
                label='entrar com microsoft'
                icon={WindowsLogo}
                authentication={authenticationMicrosoft}
                provider='microsoft'
              />
            </Animated>
          </>
        }
      </section>
    </Animated>
  )
}

export default SignIn
