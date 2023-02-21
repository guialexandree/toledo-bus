import { FacebookAuthProvider, OAuthCredential, UserCredential } from 'firebase/auth'

export class FacebookAuthProviderAdapter extends FacebookAuthProvider {
  getCredentials (userCredential: UserCredential): OAuthCredential {
    return FacebookAuthProvider.credentialFromResult(userCredential)
  }
}
