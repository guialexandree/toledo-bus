import { GoogleAuthProvider, OAuthCredential, UserCredential } from 'firebase/auth'

export class GoogleAuthProviderAdapter extends GoogleAuthProvider {
  getCredentials (userCredential: UserCredential): OAuthCredential {
    return GoogleAuthProvider.credentialFromResult(userCredential)
  }
}
