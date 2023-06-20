import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFv-WHJlMmg5BKijJQsPTv6MDDag0OgKc",
  authDomain: "instagram-clone-r-n.firebaseapp.com",
  projectId: "instagram-clone-r-n",
  storageBucket: "instagram-clone-r-n.appspot.com",
  messagingSenderId: "427774125685",
  appId: "1:427774125685:web:63ec4bdc23a77d468aba3c",
  measurementId: "G-L8QXFEKVB3",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebase.firestore();
const storage = firebase.storage();

export { firebase, db, storage };
