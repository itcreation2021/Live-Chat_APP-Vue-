import firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyADLXDzRjhXyVzMeLUmMZGvnq9_aLzAI28",
  authDomain: "vue-blog-system-4f66b.firebaseapp.com",
  projectId: "vue-blog-system-4f66b",
  storageBucket: "vue-blog-system-4f66b.appspot.com",
  messagingSenderId: "837785268142",
  appId: "1:837785268142:web:a0d9f4979dfbb22064623f",
};
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db, timestamp,auth}