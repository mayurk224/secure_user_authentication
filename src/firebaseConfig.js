// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt8HkAVHLspLWDHKuTh5Us3RMTxp8WH6U",
  authDomain: "user-authentication-5d02d.firebaseapp.com",
  projectId: "user-authentication-5d02d",
  storageBucket: "user-authentication-5d02d.appspot.com",
  messagingSenderId: "993742003103",
  appId: "1:993742003103:web:48525c1b19177b590d7baa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
