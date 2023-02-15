import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { loginState, Input, SubmitButton, FormStatus } from './components'
import S from './login-styles.scss'
import { Authentication } from '@/domain/usecases'
import { LoginHeader as Header, Footer, currentAccountState } from '@/presentation/components'
import { Validation } from '@/presentation/protocols'
import { Link, useHistory } from 'react-router-dom'

type LoginProps = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<LoginProps> = ({
  validation,
  authentication
}: LoginProps) => {
  const resetLoginState = useResetRecoilState(loginState)
  const { setCurrentAccount } = useRecoilValue(currentAccountState)
  const history = useHistory()
  const [state, setState] = useRecoilState(loginState)

  useEffect(() => { resetLoginState() }, [])
  useEffect(() => { validate('email') }, [state.email])
  useEffect(() => { validate('password') }, [state.password])

  const validate = (fielName: string): void => {
    const { email, password } = state
    const formData = { email, password }
    const error = validation.validate(fielName, formData)
    setState(old => ({ ...old, [`${fielName}Error`]: error }))
    setState(old => ({ ...old, isFormInvalid: !!old.emailError || !!old.passwordError }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) { return }
      setState(old => ({ ...old, isLoading: true }))
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      setCurrentAccount(account)
      history.replace('/')
    } catch (error) {
      setState(old => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  return (
    <section className={S.loginWrap}>
      <Header />
      <form data-testid="form" className={S.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <SubmitButton text="Entrar" />
        <Link data-testid="signup-link" to="/signup" className={S.link}>Criar conta</Link>
        <FormStatus />
      </form>
      <Footer />
    </section>
  )
}

export default Login
