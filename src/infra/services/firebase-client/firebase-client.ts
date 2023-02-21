import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider,
  FacebookAuthProvider
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDLa71VEW6QRfl4QX38f9zhw9fmw-E4G9E',
  authDomain: 'toledo-bus.firebaseapp.com',
  projectId: 'toledo-bus',
  storageBucket: 'toledo-bus.appspot.com',
  messagingSenderId: '676679266800',
  appId: '1:676679266800:web:331d54f24458d8a69a2d35'
}

const app = initializeApp(firebaseConfig)
const firebaseAuthConfig = getAuth(app)

export {
  firebaseAuthConfig,
  GoogleAuthProvider,
  FacebookAuthProvider,
  OAuthProvider,
  signInWithPopup
}
