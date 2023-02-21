import { OAuthProvider, OAuthCredential, UserCredential } from 'firebase/auth'

export type OAuthProviderType = 'microsoft.com' | 'google.com'

export class OAuthProviderAdapter extends OAuthProvider {
  constructor (readonly providerType: OAuthProviderType) {
    super(providerType)
  }

  getCredentials (userCredential: UserCredential): OAuthCredential {
    return OAuthProvider.credentialFromResult(userCredential)
  }
}
