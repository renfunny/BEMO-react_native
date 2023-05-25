import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
firebase.initializeApp(firebaseConfig);
