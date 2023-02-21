import { Authentication } from '@/domain/usecases'
import { RemoteAuthentication } from '@/data/usecases'
import { firebaseAuthConfig } from '@/infra/services'
import { OAuthProviderAdapter } from '@/main/adapters'

export const makeRemoteAutheticationMicrosoft = (): Authentication => {
  const provider = new OAuthProviderAdapter('microsoft.com')

  return new RemoteAuthentication(firebaseAuthConfig, provider)
}
