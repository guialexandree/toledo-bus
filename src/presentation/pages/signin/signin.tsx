import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useAnimationControls } from 'framer-motion'
import { FacebookLogo, GoogleLogo, WindowsLogo } from 'phosphor-react'
import { Authentication } from '@/domain/usecases'
import { Animated, Button, Icon, IconName, Logo, currentAccountState } from '@/presentation/components'
import { SignInLoading } from '@/presentation/pages/signin/components'
import { Animations, signInState } from './components'
import S from './signin-styles.scss'

type SignInProps = {
  authenticationGoogle: Authentication
  authenticationMicrosoft: Authentication
  authenticationFacebook: Authentication
}

const SignIn: React.FC<SignInProps> = ({
  authenticationGoogle,
  authenticationMicrosoft,
  authenticationFacebook
}) => {
  const [state, setState] = useRecoilState(signInState)
  const [currentAccount, setCurrentAccount] = useRecoilState(currentAccountState)
  const backgroundControl = useAnimationControls()

  const handleAuthentication = async (authentication: Authentication, provider: string): Promise<void> => {
    try {
      setState(oldState => ({ ...oldState, isLoading: true, provider }))
      const user = await authentication.auth()
      if (user) {
        // busca usuario por email
        // adiciona usuario caso não retorne na busca
        // gravar usuario cadastrado/buscado no gerenciamento de estado
        currentAccount.setCurrentAccount(user)
      }
      console.log(user)
    } catch (error) {
      setState(oldState => ({ ...oldState, mainError: error.message, provider: '' }))
    } finally {
      setState(oldState => ({ ...oldState, isLoading: false }))
    }
  }

  useEffect(() => {
    backgroundControl.start('visible')
  },[])

  return (
    <section className={S.signInWrap}>
      <section className={S.content}>
        {state.isLoading
          ? <SignInLoading />
          : <>
            <Animated variants={Animations.logoAnimations}>
              <Icon iconName={IconName.busPeople} />
            </Animated>
            <Animated className={S.textCenter} variants={Animations.textAnimations}>
              <h1 className={S.title1}>bora lá!</h1>
              <p className={S.subtitle}>você está apenas um passo de chegar no seu destino</p>
            </Animated>
            <Animated variants={Animations.authAnimations}>
              <section className={S.authWrap}>
                <h2 className={S.title1}>acessar sua conta</h2>
                <Button
                  label='entrar com google'
                  icon={GoogleLogo}
                  onClick={async () => handleAuthentication(authenticationGoogle, 'google')}
                />
                <Button
                  label='entrar com microsoft'
                  icon={WindowsLogo}
                  onClick={async () => handleAuthentication(authenticationMicrosoft, 'microsoft')}
                />
                {false && <Button
                  label='entrar com facebook'
                  icon={FacebookLogo}
                  onClick={async () => handleAuthentication(authenticationFacebook, 'facebook')}
                />}
              </section>
            </Animated>
          </>
        }
      </section>
    </section>
  )
}

export default SignIn
