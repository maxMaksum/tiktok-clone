import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBXNDGNg5aweWJtEzO_3_mkjq3-gReNFXk",
  authDomain: "tiktok-clone-635ac.firebaseapp.com",
  projectId: "tiktok-clone-635ac",
  storageBucket: "tiktok-clone-635ac.appspot.com",
  messagingSenderId: "592701824329",
  appId: "1:592701824329:web:ef55db26a62a84cd950e98"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
