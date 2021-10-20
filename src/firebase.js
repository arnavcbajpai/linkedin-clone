import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCBeHy_WB9pwHyjP-8nzUYNIcJnUKbK974',
  authDomain: 'linkedin-clone-5eff8.firebaseapp.com',
  projectId: 'linkedin-clone-5eff8',
  storageBucket: 'linkedin-clone-5eff8.appspot.com',
  messagingSenderId: '145578418691',
  appId: '1:145578418691:web:db478eeb9f098d9db3a436',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
