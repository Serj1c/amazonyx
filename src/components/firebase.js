import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBEJexTTm6v3j0ce0aIfjSBwXd-FwlAwE0",
    authDomain: "yx-a8e74.firebaseapp.com",
    databaseURL: "https://yx-a8e74.firebaseio.com",
    projectId: "yx-a8e74",
    storageBucket: "yx-a8e74.appspot.com",
    messagingSenderId: "133718235921",
    appId: "1:133718235921:web:8a55e5ff6a07117c4f0ab0",
    measurementId: "G-P3KK69QGQE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };