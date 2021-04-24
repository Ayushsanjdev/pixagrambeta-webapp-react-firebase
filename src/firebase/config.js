import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDr1GNySzFosM1EU5ssi878SZ1tQRLAdZc",
  authDomain: "photogram-695ee.firebaseapp.com",
  projectId: "photogram-695ee",
  storageBucket: "photogram-695ee.appspot.com",
  messagingSenderId: "74682426855",
  appId: "1:74682426855:web:6562726f4a21c88774c942"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
