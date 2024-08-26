
import { GoogleAuthProviderAdapter } from '@/main/adapters'
import { RemoteAuthentication } from './remote-authentication'
import { firebaseAuthConfig } from '@/infra/services'

type SutTypes = {
  sut: RemoteAuthentication
}

const makeSut = (): SutTypes => {
  const provider = new GoogleAuthProviderAdapter()
  const sut = new RemoteAuthentication(firebaseAuthConfig, provider)

  return {
    sut
  }
}

describe('Autenticação Remota', () => {
  describe('Google', () => {
    test('Deve chamar GoogleProvider com os valores corretos', async () => {
      const { sut } = makeSut()
      await sut.auth()
    })

    test('Deve retornar null se login com Google não for realizado com sucesso', async () => {
      const { sut } = makeSut()
      const user = await sut.auth()
    })

    test('Deve retornar um usuário do Google com sucesso', async () => {
      const { sut } = makeSut()
      const user = await sut.auth()
    })

    test('Deve chamar getCredentials com o valor correto', async () => {
      const { sut } = makeSut()
      const user = await sut.auth()
    })
  })
})
