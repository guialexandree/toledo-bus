import { Authentication } from '@/domain/usecases'
import { RemoteAuthentication } from '@/data/usecases'
import { firebaseAuthConfig } from '@/infra/services'
import { GoogleAuthProviderAdapter } from '@/main/adapters'

export const makeRemoteAutheticationGoogle = (): Authentication => {
  const provider = new GoogleAuthProviderAdapter()

  return new RemoteAuthentication(firebaseAuthConfig, provider)
}
