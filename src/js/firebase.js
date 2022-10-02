import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDvbWe4NBNwRYWLI1Kc_dvy-RLylV9HFGI",
  authDomain: "noteballs-2d799.firebaseapp.com",
  projectId: "noteballs-2d799",
  storageBucket: "noteballs-2d799.appspot.com",
  messagingSenderId: "417911671835",
  appId: "1:417911671835:web:5b20d37a65fa12921c3cbe"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth
}