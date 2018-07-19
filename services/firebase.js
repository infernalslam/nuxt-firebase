import * as firebase from 'firebase'
import vuefire from 'vuefire'
import 'firebase/database'
import user from '../store/user';
let config = {
  apiKey: "AIzaSyCXQjw76GcHtKlmuoZD1HCAogBebNQdPgU",
  authDomain: "project-mint-89508.firebaseapp.com",
  databaseURL: "https://project-mint-89508.firebaseio.com",
  projectId: "project-mint-89508",
  storageBucket: "",
  messagingSenderId: "366768779688"
}
!firebase.apps.length ? firebase.initializeApp(config) : ''

// assign database!
const db = firebase.database()
export default {
  users: db.ref('users'),
  firebase,
  vuefire
}
