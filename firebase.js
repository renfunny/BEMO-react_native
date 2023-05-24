import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFv-WHJlMmg5BKijJQsPTv6MDDag0OgKc",
  authDomain: "instagram-clone-r-n.firebaseapp.com",
  projectId: "instagram-clone-r-n",
  storageBucket: "instagram-clone-r-n.appspot.com",
  messagingSenderId: "427774125685",
  appId: "1:427774125685:web:63ec4bdc23a77d468aba3c",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
