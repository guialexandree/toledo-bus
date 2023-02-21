import {
  OAuthCredential,
  UserCredential,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider
} from 'firebase/auth'

export const getCredentials = (providerId: string, userCredential: UserCredential): OAuthCredential => {
  switch (providerId) {
    case 'google.com':
      return GoogleAuthProvider.credentialFromResult(userCredential)
    case 'facebook.com':
      return FacebookAuthProvider.credentialFromResult(userCredential)
    default:
      return OAuthProvider.credentialFromResult(userCredential)
  }
}
