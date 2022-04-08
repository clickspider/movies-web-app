// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNT3gfDk54KPWeVyv_uetlG8pJ7OzMONs",
  authDomain: "movies-web-app-db76b.firebaseapp.com",
  projectId: "movies-web-app-db76b",
  storageBucket: "movies-web-app-db76b.appspot.com",
  messagingSenderId: "332459251963",
  appId: "1:332459251963:web:1ff15ea0c569bd4bc2385e",
  measurementId: "G-22WZKJBV2E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {
  onAuthStateChanged,
  signInWithPopup,
  provider,
  auth,
  signOut,
  db,
  addDoc,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
};
