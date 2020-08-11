import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALQyrRZIAnhOcmjml7wckxVApXlTaNtA8",
  authDomain: "clone-ayush.firebaseapp.com",
  databaseURL: "https://clone-ayush.firebaseio.com",
  projectId: "clone-ayush",
  storageBucket: "clone-ayush.appspot.com",
  messagingSenderId: "743686522166",
  appId: "1:743686522166:web:bac2ec9eecd795054f5f97",
  measurementId: "G-8MZVB3MJJF",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
