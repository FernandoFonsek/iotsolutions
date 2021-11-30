import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDXsfb6U4DSEZNQWfGtlDisX4-ulrPD5xg",
    authDomain: "iotsolutions-c804f.firebaseapp.com",
    projectId: "iotsolutions-c804f",
    storageBucket: "iotsolutions-c804f.appspot.com",
    messagingSenderId: "857402903996",
    appId: "1:857402903996:web:fc9cef160e39e3b8706fb9"
  };


  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  export {db, googleProvider, firebase}