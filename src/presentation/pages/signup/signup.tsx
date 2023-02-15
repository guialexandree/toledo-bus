import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { signUpState, Input, SubmitButton, FormStatus } from './components'
import S from './signup-styles.scss'
import { AddAccount } from '@/domain/usecases'
import { LoginHeader as Header, Footer, currentAccountState } from '@/presentation/components'
import { Validation } from '@/presentation/protocols'
import { Link, useHistory } from 'react-router-dom'

type SignUpProps = {
  validation: Validation
  addAccount: AddAccount
}

const SignUp: React.FC<SignUpProps> = ({
  validation,
  addAccount
}: SignUpProps) => {
  const resetSignUpState = useResetRecoilState(signUpState)
  const { setCurrentAccount } = useRecoilValue(currentAccountState)
  const history = useHistory()
  const [state, setState] = useRecoilState(signUpState)

  useEffect(() => { resetSignUpState() }, [])
  useEffect(() => { validate('name') }, [state.name])
  useEffect(() => { validate('email') }, [state.email])
  useEffect(() => { validate('password') }, [state.password])
  useEffect(() => { validate('passwordConfirmation') }, [state.passwordConfirmation])

  const validate = (fielName: string): void => {
    const { name, email, password, passwordConfirmation } = state
    const formData = { name, email, password, passwordConfirmation }
    const error = validation.validate(fielName, formData)
    setState(old => ({ ...old, [`${fielName}Error`]: error }))
    setState(old => ({ ...old, isFormInvalid: !!old.nameError || !!old.emailError || !!old.passwordError || !!old.passwordConfirmationError }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) { return }
      setState(old => ({ ...old, isLoading: true }))
      const account = await addAccount.add({
        name: state.name,
        email: state.email,
        password: state.password,
        passwordConfirmation: state.passwordConfirmation
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
    <section className={S.signupWrap}>
      <Header />
      <form data-testid="form" className={S.form} onSubmit={handleSubmit} >
        <h2>Criar Conta</h2>
        <Input type="text" name="name" placeholder="Digite seu nome" />
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
        <SubmitButton text="Cadastrar" />
        <Link data-testid="login-link" replace to="/login" className={S.link}>Voltar para Login</Link>
        <FormStatus />
      </form>
      <Footer />
    </section>
  )
}

export default SignUp
