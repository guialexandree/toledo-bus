import { AuthProvider } from '@/data/protocols'
import { Authentication } from '@/domain/usecases'
import { Auth, signInWithPopup } from 'firebase/auth'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly authConfig: Auth,
    private readonly provider: AuthProvider
  ) { }

  async auth (): Promise<Authentication.Model> {
    try {
      const result = await signInWithPopup(this.authConfig, this.provider)
      const { accessToken } = this.provider.getCredentials(result)
      const { user } = result

      if (user) {
        return {
          accessToken,
          providerId: this.provider.providerId,
          image: user.photoURL,
          name: user.displayName,
          email: user.email
        }
      }
    } catch (error) {
      return null
    }
  }
}
