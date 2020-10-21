import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2lbwM-Ui7ulb6NW_Kx5hr_nLbh824-dc",
  authDomain: "corona-info-a3f36.firebaseapp.com",
  databaseURL: "https://corona-info-a3f36.firebaseio.com",
  projectId: "corona-info-a3f36",
  storageBucket: "corona-info-a3f36.appspot.com",
  messagingSenderId: "423158346426",
  appId: "1:423158346426:web:10612aea69506b9d4d4883",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export { db, auth, provider };
