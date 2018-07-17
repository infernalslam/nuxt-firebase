import * as firebase from 'firebase'
import 'firebase/database'
let config = {
  apiKey: "AIzaSyCXQjw76GcHtKlmuoZD1HCAogBebNQdPgU",
  authDomain: "project-mint-89508.firebaseapp.com",
  databaseURL: "https://project-mint-89508.firebaseio.com",
  projectId: "project-mint-89508",
  storageBucket: "",
  messagingSenderId: "366768779688"
}
!firebase.apps.length ? firebase.initializeApp(config) : ''

export const db = firebase.database()
export default firebase
