import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC07YlcpyW2wkJ7sO84cTl0k8w1IIM8Mmw",
  authDomain: "instagram-clone-55efc.firebaseapp.com",
  databaseURL: "https://instagram-clone-55efc.firebaseio.com",
  projectId: "instagram-clone-55efc",
  storageBucket: "instagram-clone-55efc.appspot.com",
  messagingSenderId: "16860113972",
  appId: "1:16860113972:web:2acf14d9ea701f32522e61",
  measurementId: "G-GGDV8RE52F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, storage, auth };
