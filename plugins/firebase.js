import firebase from 'firebase/app'
// import Vue from 'vue'
// import VueFire from 'vuefire'
let config = {
  apiKey: "AIzaSyCXQjw76GcHtKlmuoZD1HCAogBebNQdPgU",
  authDomain: "project-mint-89508.firebaseapp.com",
  databaseURL: "https://project-mint-89508.firebaseio.com",
  projectId: "project-mint-89508",
  storageBucket: "",
  messagingSenderId: "366768779688"
  }
firebase.initializeApp(config)

// Vue.use(VueFire)
export default firebase