import {
  AuthProvider as AuthProviderFirebase,
  OAuthCredential,
  UserCredential
} from 'firebase/auth'

export type AuthProvider = AuthProviderFirebase & {
  providerId: string
  getCredentials: (userCredential: UserCredential) => OAuthCredential
}
