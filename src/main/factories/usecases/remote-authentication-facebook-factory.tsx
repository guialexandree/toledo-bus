import { Authentication } from '@/domain/usecases'
import { RemoteAuthentication } from '@/data/usecases'
import { firebaseAuthConfig } from '@/infra/services'
import { FacebookAuthProviderAdapter } from '@/main/adapters'

export const makeRemoteAutheticationFacebook = (): Authentication => {
  const provider = new FacebookAuthProviderAdapter()

  return new RemoteAuthentication(firebaseAuthConfig, provider)
}
